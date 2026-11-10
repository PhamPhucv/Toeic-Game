class QuizController {
  constructor(questions, options = {}) {
    this.questions = questions;
    this.title = options.title || "Luyện thi TOEIC";
    this.isExamMode = !!options.isExamMode;
    this.timeLimitSeconds = (options.timeLimitMinutes || 10) * 60;
    this.onComplete = options.onComplete || (() => {});

    this.currentIndex = 0;
    this.selectedIndex = null;
    this.isAnswered = false;
    this.score = 0;
    this.listeningCorrect = 0;
    this.readingCorrect = 0;
    this.isDone = false;
    this.timerInterval = null;
    this.secondsRemaining = this.timeLimitSeconds;
    this.isPlayingAudio = false;
  }

  cleanup() {
    this.stopAudio();
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.isDone = true;
  }

  render(container) {
    this.container = container;
    if (this.isExamMode) this.startTimer();
    this.renderCurrentQuestion();
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      if (this.isDone) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
        return;
      }
      this.secondsRemaining -= 1;
      const el = document.getElementById("quizTimer");
      if (el) {
        const m = Math.floor(this.secondsRemaining / 60);
        const s = this.secondsRemaining % 60;
        el.textContent = `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
      }
      if (this.secondsRemaining <= 0) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
        if (!this.isDone) this.finishQuiz();
      }
    }, 1000);
  }

  stopAudio() {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    this.isPlayingAudio = false;
    this.updateAudioIndicator(false);
  }

  updateAudioIndicator(isPlaying) {
    this.isPlayingAudio = isPlaying;
    const ind = document.getElementById("audioPlayingInd");
    const btn = document.getElementById("playAudioBtn");
    if (ind) ind.hidden = !isPlaying;
    if (btn) btn.innerHTML = isPlaying ? "⏸️ Dừng âm thanh" : "🔊 Nghe lại (Phím Space)";
  }

  playCurrentAudio() {
    const q = this.questions[this.currentIndex];
    if (!q || (q.part !== 1 && q.part !== 2)) return;

    if (!("speechSynthesis" in window)) {
      app.showToast("Trình duyệt không hỗ trợ Web Speech API.");
      return;
    }

    if (this.isPlayingAudio) {
      this.stopAudio();
      return;
    }

    window.speechSynthesis.cancel();

    // Prepare speech script
    let fullScript = "";
    if (q.part === 1) {
      fullScript = `Statement A. ${q.choices[0]}. Statement B. ${q.choices[1]}. Statement C. ${q.choices[2]}. Statement D. ${q.choices[3]}.`;
    } else if (q.part === 2) {
      fullScript = `${q.stem}. Number A. ${q.choices[0]}. Number B. ${q.choices[1]}. Number C. ${q.choices[2]}.`;
    }

    const utterance = new SpeechSynthesisUtterance(fullScript);
    utterance.rate = app.state.user.speechRate || 1.0;
    utterance.lang = app.state.user.speechVoice || "en-US";

    // Try finding matching voice
    const voices = window.speechSynthesis.getVoices();
    const matchedVoice = voices.find(v => v.lang.startsWith(utterance.lang.substring(0, 2)));
    if (matchedVoice) utterance.voice = matchedVoice;

    utterance.onstart = () => {
      this.updateAudioIndicator(true);
    };
    utterance.onend = () => {
      this.updateAudioIndicator(false);
    };
    utterance.onerror = () => {
      this.updateAudioIndicator(false);
    };

    window.speechSynthesis.speak(utterance);
  }

  setSpeechRate(rate) {
    app.state.user.speechRate = parseFloat(rate);
    app.saveState();
    if (this.isPlayingAudio) {
      this.stopAudio();
      this.playCurrentAudio();
    }
  }

  setSpeechVoice(voice) {
    app.state.user.speechVoice = voice;
    app.saveState();
    if (this.isPlayingAudio) {
      this.stopAudio();
      this.playCurrentAudio();
    }
  }

  renderCurrentQuestion() {
    this.stopAudio();

    if (this.currentIndex >= this.questions.length) {
      this.finishQuiz();
      return;
    }

    const q = this.questions[this.currentIndex];
    this.selectedIndex = null;
    this.isAnswered = false;
    const isListening = q.part === 1 || q.part === 2;

    this.container.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-meta-bar">
          <div>
            <strong>${this.title}</strong>
            <span style="color: var(--text-muted); font-size: 0.85rem; margin-left: 0.5rem;">
              Câu ${this.currentIndex + 1} / ${this.questions.length}
            </span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            ${this.isExamMode ? `<span class="timer-badge" id="quizTimer">--:--</span>` : ""}
            <span class="badge-tag">Part ${q.part}</span>
            <span class="badge-tag">Độ khó: ${q.level || 3}/5</span>
            <button class="icon-btn" onclick="app.flagQuestion('${q.id}')" title="Báo lỗi câu này" style="width: 30px; height: 30px; font-size: 0.75rem;">🚩</button>
          </div>
        </div>

        ${q.svgArt ? `
          <div class="svg-illustration-box">
            ${q.svgArt}
            <span style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">
              📸 Hình minh họa Part 1 (SVG Vector). Trong đề thi ETS thật, quan sát tranh để dự đoán hành động & vật thể.
            </span>
          </div>
        ` : ""}

        ${isListening ? `
          <div class="audio-control-bar">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <button class="btn" id="playAudioBtn" onclick="app.activeQuiz.playCurrentAudio()">
                🔊 Nghe câu hỏi & đáp án (Space)
              </button>
              <div id="audioPlayingInd" class="audio-playing-indicator" hidden>
                <div class="sound-wave-bar"></div>
                <div class="sound-wave-bar"></div>
                <div class="sound-wave-bar"></div>
                <span>Đang phát loa...</span>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem;">
              <label style="color: var(--text-sub);">Tốc độ:</label>
              <select onchange="app.activeQuiz.setSpeechRate(this.value)" style="background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--text-main); padding: 0.25rem 0.5rem; border-radius: 6px;">
                <option value="0.8" ${app.state.user.speechRate === 0.8 ? 'selected' : ''}>0.8x (Chậm)</option>
                <option value="1.0" ${app.state.user.speechRate === 1.0 ? 'selected' : ''}>1.0x (Chuẩn ETS)</option>
                <option value="1.2" ${app.state.user.speechRate === 1.2 ? 'selected' : ''}>1.2x (Nhanh)</option>
              </select>

              <label style="color: var(--text-sub); margin-left: 0.4rem;">Giọng:</label>
              <select onchange="app.activeQuiz.setSpeechVoice(this.value)" style="background: var(--bg-surface); border: 1px solid var(--border-color); color: var(--text-main); padding: 0.25rem 0.5rem; border-radius: 6px;">
                <option value="en-US" ${app.state.user.speechVoice === 'en-US' ? 'selected' : ''}>Mỹ (en-US)</option>
                <option value="en-GB" ${app.state.user.speechVoice === 'en-GB' ? 'selected' : ''}>Anh (en-GB)</option>
                <option value="en-AU" ${app.state.user.speechVoice === 'en-AU' ? 'selected' : ''}>Úc (en-AU)</option>
              </select>
            </div>
          </div>
        ` : ""}

        ${q.passage ? `
          <div class="passage-box">${q.passage}</div>
        ` : ""}

        <div class="card">
          <div class="question-stem" id="stemElem">
            ${isListening && q.part === 2 ? '<em>"Nghe câu hỏi trong đoạn băng và chọn phương án phản hồi thích hợp nhất"</em>' : q.stem}
          </div>
          <div class="choices-grid" style="margin-top: 1.25rem;">
            ${q.choices.map((c, i) => `
              <div class="choice-item" data-idx="${i}" onclick="app.activeQuiz.handleSelectChoice(${i})">
                <span class="key">${["A", "B", "C", "D"][i]}</span>
                <span class="choice-text">
                  ${isListening ? `<span style="color: var(--text-muted); font-style: italic;">(${["A", "B", "C", "D"][i]}) [Nghe qua âm thanh]</span>` : c}
                </span>
              </div>
            `).join("")}
          </div>
        </div>

        <div id="feedbackSlot"></div>

        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.8rem; color: var(--text-muted);">
            Phím tắt: 1-${q.choices.length} (chọn đáp án), Space (nghe lại), Enter (tiếp tục)
          </span>
          <button class="btn" id="nextBtn" onclick="app.activeQuiz.handleNext()" ${this.isExamMode ? "" : "disabled"}>
            ${this.currentIndex === this.questions.length - 1 ? "Hoàn thành" : "Câu tiếp theo →"}
          </button>
        </div>
      </div>
    `;

    // Auto-play audio on question load for listening parts if sound enabled
    if (isListening && app.state.user.soundEnabled) {
      setTimeout(() => {
        this.playCurrentAudio();
      }, 400);
    }
  }

  handleSelectChoice(idx) {
    if (this.isAnswered && !this.isExamMode) return;
    this.selectedIndex = idx;
    const items = this.container.querySelectorAll(".choice-item");
    items.forEach((item, i) => {
      item.classList.toggle("selected", i === idx);
    });

    if (!this.isExamMode) {
      this.evaluateAnswer(idx);
    }
  }

  evaluateAnswer(userChoiceIdx) {
    this.stopAudio();
    this.isAnswered = true;
    const q = this.questions[this.currentIndex];
    const isCorrect = userChoiceIdx === q.answer;
    const items = this.container.querySelectorAll(".choice-item");

    // Reveal choices text for Listening parts
    items.forEach((item, i) => {
      const textElem = item.querySelector(".choice-text");
      if (textElem) textElem.textContent = q.choices[i];

      if (i === q.answer) item.classList.add("correct");
      else if (i === userChoiceIdx) item.classList.add("wrong");
    });

    // Record Stats & Adaptive State
    const comp = app.state.progress.completedQuestions[q.id] || { timesWrong: 0, timesCorrect: 0 };
    if (isCorrect) {
      comp.timesCorrect += 1;
      this.score += 1;
      app.sound.playCorrect();
      app.gainXP(15);
      app.state.adaptive.consecutiveCorrect += 1;
      app.state.adaptive.consecutiveWrong = 0;
      if (app.state.adaptive.consecutiveCorrect >= 3) {
        app.state.adaptive.currentDifficulty = Math.min(5, app.state.adaptive.currentDifficulty + 1);
        app.state.adaptive.consecutiveCorrect = 0;
      }
    } else {
      comp.timesWrong += 1;
      app.sound.playWrong();
      app.state.adaptive.consecutiveWrong += 1;
      app.state.adaptive.consecutiveCorrect = 0;
      if (app.state.adaptive.consecutiveWrong >= 2) {
        app.state.adaptive.currentDifficulty = Math.max(1, app.state.adaptive.currentDifficulty - 1);
        app.state.adaptive.consecutiveWrong = 0;
      }
    }
    app.state.progress.completedQuestions[q.id] = comp;

    // Track Part stats
    const partKey = `p${q.part}`;
    if (app.state.progress.partStats[partKey]) {
      app.state.progress.partStats[partKey].total += 1;
      if (isCorrect) app.state.progress.partStats[partKey].correct += 1;
    }
    app.saveState();

    // Show Explanation & Transcript
    const feedback = document.getElementById("feedbackSlot");
    if (feedback) {
      feedback.innerHTML = `
        <div class="explanation-panel" style="${isCorrect ? '' : 'border-top-color: var(--accent-rose);'}">
          <div style="font-weight: 700; color: ${isCorrect ? 'var(--accent-green)' : 'var(--accent-rose)'}; font-size: 1.05rem;">
            ${isCorrect ? '🎉 Chính xác!' : '❌ Chưa chính xác!'} (Đáp án đúng: ${['A','B','C','D'][q.answer]})
          </div>

          ${q.transcript ? `
            <div class="transcript-box">
              <strong style="color: var(--accent-amber); display: block; margin-bottom: 0.35rem;">📜 Audio Transcript:</strong>
              <div style="white-space: pre-line;">${this.formatTranscript(q.transcript, q.answer)}</div>
            </div>
          ` : ''}

          <div style="font-size: 0.95rem; line-height: 1.6; margin-top: 0.5rem;">
            <strong>Giải thích:</strong> ${q.explanation_vi || 'Đáp án chính xác theo ngữ cảnh câu.'}
          </div>

          ${q.trap ? `
            <div class="trap-box">
              <strong>⚠️ Phân tích bẫy TOEIC:</strong> ${q.trap}
            </div>
          ` : ''}
        </div>
      `;
    }

    const nextBtn = document.getElementById("nextBtn");
    if (nextBtn) nextBtn.disabled = false;
  }

  formatTranscript(rawTranscript, answerIdx) {
    const lines = rawTranscript.split("\n");
    const optKeys = ["(A)", "(B)", "(C)", "(D)"];
    return lines.map(line => {
      if (optKeys[answerIdx] && line.includes(optKeys[answerIdx])) {
        return `<mark>${line}</mark>`;
      }
      return line;
    }).join("\n");
  }

  handleNext() {
    this.stopAudio();
    if (this.isDone) return;
    if (this.isExamMode) {
      const q = this.questions[this.currentIndex];
      const isCorrect = this.selectedIndex === q.answer;
      if (isCorrect) {
        this.score += 1;
        if (q.part === 1 || q.part === 2) {
          this.listeningCorrect += 1;
        } else {
          this.readingCorrect += 1;
        }
      }

      const partKey = `p${q.part}`;
      if (app.state.progress.partStats[partKey]) {
        app.state.progress.partStats[partKey].total += 1;
        if (isCorrect) app.state.progress.partStats[partKey].correct += 1;
      }
    }

    this.currentIndex += 1;
    this.renderCurrentQuestion();
  }

  finishQuiz() {
    if (this.isDone) return;
    this.isDone = true;
    this.stopAudio();
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    const listeningTotal = this.questions.filter(q => q.part === 1 || q.part === 2).length;
    const readingTotal = this.questions.filter(q => q.part >= 3).length;
    this.onComplete({
      score: this.score,
      total: this.questions.length,
      listeningCorrect: this.listeningCorrect,
      listeningTotal: listeningTotal,
      readingCorrect: this.readingCorrect,
      readingTotal: readingTotal
    });
  }
}

/**
 * =====================================================================
 * BOSS BATTLE CONTROLLER (Cyber Incident Combat Engine)
 * =====================================================================
 */
