class BossBattleController {
  constructor(questions, options = {}) {
    this.questions = questions;
    this.bossMaxHP = 2500;
    this.bossHP = 2500;
    this.playerIntegrity = 100;
    this.currentIndex = 0;
    this.selectedIndex = null;
    this.isAnswered = false;
    this.score = 0;
    this.consecutiveCombo = 0;
    this.isDone = false;
    this.timerInterval = null;
    this.secondsRemaining = 20 * 60; // 20 minutes
    this.isPlayingAudio = false;
    this.onComplete = options.onComplete || (() => {});
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
    this.startTimer();
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
      const el = document.getElementById("bossTimer");
      if (el) {
        const m = Math.floor(this.secondsRemaining / 60);
        const s = this.secondsRemaining % 60;
        el.textContent = `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
        if (this.secondsRemaining < 180) {
          el.style.color = "var(--accent-rose)";
          el.style.animation = "pulse 1s infinite";
        }
      }
      if (this.secondsRemaining <= 0) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
        if (!this.isDone) {
          this.renderDefeat("Hết thời gian ứng cứu! Mã độc đã mã hóa toàn bộ cơ sở dữ liệu.");
        }
      }
    }, 1000);
  }

  stopAudio() {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    this.isPlayingAudio = false;
  }

  renderCurrentQuestion() {
    this.stopAudio();
    if (this.isDone) return;

    if (this.bossHP <= 0) {
      this.renderVictory();
      return;
    }
    if (this.playerIntegrity <= 0) {
      this.renderDefeat("Tường lửa bị xuyên thủng! Tính toàn vẹn hệ thống giảm về 0%.");
      return;
    }
    if (this.currentIndex >= this.questions.length) {
      if (this.score >= 18 || this.bossHP <= 400) {
        this.renderVictory();
      } else {
        this.renderDefeat(`Bạn chỉ trả lời đúng ${this.score}/25 câu (Cần tối thiểu 18 câu để dập tắt sự cố).`);
      }
      return;
    }

    const q = this.questions[this.currentIndex];
    this.selectedIndex = null;
    this.isAnswered = false;
    const isListening = q.part === 1 || q.part === 2;

    const bossPercent = Math.max(0, Math.round((this.bossHP / this.bossMaxHP) * 100));

    this.container.innerHTML = `
      <div class="boss-arena">
        <!-- Boss Battle HUD Header -->
        <div class="boss-header-bar">
          <div style="display: flex; align-items: center; gap: 0.8rem;">
            <div style="font-size: 2rem;">👾</div>
            <div>
              <div style="font-size: 0.75rem; color: var(--accent-rose); font-weight: 800; letter-spacing: 1px;">
                MỤC TIÊU: SHADOW TITAN (ZERO-DAY APT)
              </div>
              <div style="font-size: 1.15rem; font-weight: 800;">
                Câu ${this.currentIndex + 1} / ${this.questions.length} • Level ${q.level || 4}
              </div>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 1rem;">
            ${this.consecutiveCombo >= 2 ? `
              <span class="badge-tag" style="background: rgba(245, 158, 11, 0.2); border-color: var(--accent-amber); color: var(--accent-amber); font-weight: 800; animation: pulse 1s infinite;">
                🔥 COMBO x${this.consecutiveCombo} (+50 DMG)
              </span>
            ` : ""}
            <div style="font-family: monospace; font-size: 1.3rem; font-weight: 800; color: var(--accent-amber);" id="bossTimer">
              20:00
            </div>
          </div>
        </div>

        <!-- Meters: Boss HP & Player System Integrity -->
        <div class="boss-meters-grid" style="background: var(--bg-card); padding: 1rem; border-radius: 10px; border: 1px solid var(--border-light);">
          <div class="meter-box">
            <div class="meter-label-row">
              <span style="color: var(--accent-rose);">👾 Boss HP: ${this.bossHP} / ${this.bossMaxHP}</span>
              <span>${bossPercent}%</span>
            </div>
            <div class="meter-track">
              <div class="meter-fill boss-hp-bar" style="width: ${bossPercent}%;"></div>
            </div>
          </div>

          <div class="meter-box">
            <div class="meter-label-row">
              <span style="color: var(--accent-green);">🛡️ System Integrity: ${this.playerIntegrity}%</span>
              <span>${this.playerIntegrity}%</span>
            </div>
            <div class="meter-track">
              <div class="meter-fill player-integrity-bar" style="width: ${this.playerIntegrity}%;"></div>
            </div>
          </div>
        </div>

        <div id="combatLogSlot"></div>

        ${q.svgArt ? `
          <div class="svg-illustration-box">
            ${q.svgArt}
          </div>
        ` : ""}

        ${isListening ? `
          <div class="audio-control-bar">
            <button class="btn" onclick="app.activeQuiz.playCurrentAudio()">🔊 Nghe âm thanh (Phím Space)</button>
            <span style="font-size: 0.85rem; color: var(--text-sub);">Nghe và phản xạ chọn đáp án để phòng thủ!</span>
          </div>
        ` : ""}

        ${q.passage ? `
          <div class="passage-box">${q.passage}</div>
        ` : ""}

        <div class="card">
          <div class="question-stem" id="stemElem">
            ${isListening && q.part === 2 ? '<em>"Nghe câu hỏi và chọn phản hồi đúng nhất"</em>' : q.stem}
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
            Phím tắt: 1-${q.choices.length} (chọn đáp án), Enter (tiếp tục)
          </span>
          <button class="btn" id="nextBtn" onclick="app.activeQuiz.handleNext()" disabled>
            ${this.currentIndex === this.questions.length - 1 ? "Tổng kết chiến dịch ➔" : "Khai hỏa câu tiếp theo →"}
          </button>
        </div>
      </div>
    `;

    if (isListening && app.state.user.soundEnabled) {
      setTimeout(() => this.playCurrentAudio(), 400);
    }
  }

  playCurrentAudio() {
    const q = this.questions[this.currentIndex];
    if (!q || (q.part !== 1 && q.part !== 2)) return;

    if (!("speechSynthesis" in window)) {
      app.showToast("Trình duyệt không hỗ trợ Web Speech API.");
      return;
    }

    window.speechSynthesis.cancel();
    let fullScript = "";
    if (q.part === 1) {
      fullScript = `Statement A. ${q.choices[0]}. Statement B. ${q.choices[1]}. Statement C. ${q.choices[2]}. Statement D. ${q.choices[3]}.`;
    } else if (q.part === 2) {
      fullScript = `${q.stem}. Number A. ${q.choices[0]}. Number B. ${q.choices[1]}. Number C. ${q.choices[2]}.`;
    }

    const utterance = new SpeechSynthesisUtterance(fullScript);
    utterance.rate = app.state.user.speechRate || 1.0;
    utterance.lang = app.state.user.speechVoice || "en-US";
    window.speechSynthesis.speak(utterance);
  }

  handleSelectChoice(idx) {
    if (this.isAnswered) return;
    this.selectedIndex = idx;
    const items = this.container.querySelectorAll(".choice-item");
    items.forEach((item, i) => {
      item.classList.toggle("selected", i === idx);
    });
    this.evaluateAnswer(idx);
  }

  evaluateAnswer(userChoiceIdx) {
    this.stopAudio();
    this.isAnswered = true;
    const q = this.questions[this.currentIndex];
    const isCorrect = userChoiceIdx === q.answer;
    const items = this.container.querySelectorAll(".choice-item");

    items.forEach((item, i) => {
      const textElem = item.querySelector(".choice-text");
      if (textElem) textElem.textContent = q.choices[i];

      if (i === q.answer) item.classList.add("correct");
      else if (i === userChoiceIdx) item.classList.add("wrong");
    });

    const combatLog = document.getElementById("combatLogSlot");

    if (isCorrect) {
      this.score += 1;
      this.consecutiveCombo += 1;
      const damage = this.consecutiveCombo >= 2 ? 150 : 100;
      this.bossHP = Math.max(0, this.bossHP - damage);

      app.sound.playCorrect();
      app.gainXP(20);

      if (combatLog) {
        combatLog.innerHTML = `
          <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid var(--accent-green); color: var(--accent-green); padding: 0.75rem 1rem; border-radius: 8px; font-weight: 700; font-size: 0.95rem;">
            💥 CRITICAL HIT! Vá lỗ hổng thành công! Gây <strong>${damage} sát thương</strong> lên Shadow Titan!
          </div>
        `;
      }
    } else {
      this.consecutiveCombo = 0;
      this.playerIntegrity = Math.max(0, this.playerIntegrity - 10);

      app.sound.playWrong();

      const comp = app.state.progress.completedQuestions[q.id] || { timesWrong: 0, timesCorrect: 0 };
      comp.timesWrong += 1;
      app.state.progress.completedQuestions[q.id] = comp;

      if (combatLog) {
        combatLog.innerHTML = `
          <div style="background: rgba(244, 63, 94, 0.15); border: 1px solid var(--accent-rose); color: var(--accent-rose); padding: 0.75rem 1rem; border-radius: 8px; font-weight: 700; font-size: 0.95rem;">
            ⚠️ TƯỜNG LỬA BỊ XUYÊN THỦNG! Mã độc xâm nhập sâu hơn! <em>System Integrity giảm 10%</em>!
          </div>
        `;
      }
    }

    app.saveState();

    // Show Explanation & Trap Analysis
    const feedback = document.getElementById("feedbackSlot");
    if (feedback) {
      feedback.innerHTML = `
        <div class="explanation-panel" style="${isCorrect ? '' : 'border-top-color: var(--accent-rose);'}">
          <div style="font-weight: 700; color: ${isCorrect ? 'var(--accent-green)' : 'var(--accent-rose)'}; font-size: 1.05rem;">
            ${isCorrect ? '🎯 Phản kích chính xác!' : '❌ Bẫy đã kích hoạt!'} (Đáp án đúng: ${['A','B','C','D'][q.answer]})
          </div>

          <div style="font-size: 0.95rem; line-height: 1.6; margin-top: 0.5rem;">
            <strong>Giải thích:</strong> ${q.explanation_vi || 'Đáp án chính xác theo ngữ cảnh.'}
          </div>

          ${q.trap ? `
            <div class="trap-box" style="margin-top: 0.5rem;">
              <strong>⚠️ Phân tích bẫy Boss-Tier:</strong> ${q.trap}
            </div>
          ` : ''}
        </div>
      `;
    }

    const nextBtn = document.getElementById("nextBtn");

    // Check instant win/loss conditions
    if (this.bossHP <= 0) {
      if (nextBtn) nextBtn.disabled = true;
      setTimeout(() => {
        if (!this.isDone) this.renderVictory();
      }, 1200);
    } else if (this.playerIntegrity <= 0) {
      if (nextBtn) nextBtn.disabled = true;
      setTimeout(() => {
        if (!this.isDone) this.renderDefeat("System Integrity giảm về 0%! Mạng lõi sập.");
      }, 1200);
    } else {
      if (nextBtn) nextBtn.disabled = false;
    }
  }

  handleNext() {
    if (this.isDone || this.bossHP <= 0 || this.playerIntegrity <= 0) return;
    this.currentIndex += 1;
    this.renderCurrentQuestion();
  }

  renderVictory() {
    if (this.isDone) return;
    this.isDone = true;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }

    const newRole = app.promoteCyberRole();
    app.gainXP(200);
    app.sound.playLevelUp();

    this.container.innerHTML = `
      <div class="promotion-card">
        <div class="rank-insignia">🎖️</div>
        <span class="badge-tag" style="background: rgba(16, 185, 129, 0.2); border-color: var(--accent-green); color: var(--accent-green); font-size: 0.9rem; padding: 0.3rem 0.8rem;">
          VICTORY: THREAT NEUTRALIZED
        </span>
        <h2 style="font-size: 2rem; font-weight: 900; color: #fff; margin: 1rem 0 0.5rem;">
          CHỨNG NHẬN SẮC PHONG & THĂNG CHỨC
        </h2>
        <p style="color: var(--text-sub); font-size: 1rem; max-width: 600px; margin: 0 auto 1.5rem;">
          Hội đồng An ninh Thông tin Tập đoàn HexaTech trân trọng sắc phong học viên <strong>${app.escapeHTML(app.state.user.name)}</strong> lên chức vụ chỉ huy an ninh mạng:
        </p>

        <div style="background: var(--bg-card); border: 2px solid var(--accent-amber); display: inline-block; padding: 1.5rem 3rem; border-radius: 12px; margin-bottom: 1.5rem; box-shadow: 0 0 25px rgba(245, 158, 11, 0.3);">
          <span style="font-size: 0.85rem; color: var(--text-muted); display: block;">CẤP BẬC MỚI ĐÃ ĐƯỢC PHÊ CHUẨN</span>
          <span style="font-size: 2.2rem; font-weight: 900; color: var(--accent-amber);">${newRole}</span>
          <span style="font-size: 0.9rem; color: var(--accent-green); display: block; margin-top: 0.3rem;">+200 XP • Quyền hạn SOC Cấp Cao</span>
        </div>

        <div style="max-width: 500px; margin: 0 auto; text-align: left; background: var(--bg-card); padding: 1rem 1.25rem; border-radius: 8px; border: 1px solid var(--border-light); font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.5rem;">
          <strong>📊 Báo cáo kết quả chiến dịch:</strong>
          <ul style="margin-left: 1.25rem; margin-top: 0.4rem;">
            <li>Số câu chính xác: <strong>${this.score} / ${this.questions.length}</strong></li>
            <li>Sát thương gây cho Shadow Titan: <strong>${this.bossMaxHP - this.bossHP} HP</strong> (Đã tiêu diệt)</li>
            <li>Độ toàn vẹn hệ thống giữ vững: <strong>${this.playerIntegrity}%</strong></li>
          </ul>
        </div>

        <div>
          <button class="btn" style="padding: 0.8rem 2rem; font-size: 1rem;" onclick="app.navigate('dashboard')">
            Về Dashboard Báo cáo
          </button>
        </div>
      </div>
    `;
  }

  renderDefeat(reason = "") {
    if (this.isDone) return;
    this.isDone = true;
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    app.sound.playWrong();

    this.container.innerHTML = `
      <div class="card" style="text-align: center; padding: 2.5rem; border: 2px solid var(--accent-rose); background: radial-gradient(circle, rgba(244, 63, 94, 0.1), var(--bg-surface));">
        <div style="font-size: 3.5rem; margin-bottom: 0.5rem;">🚨</div>
        <h2 style="font-size: 1.8rem; font-weight: 900; color: var(--accent-rose); margin-bottom: 0.5rem;">
          INCIDENT ESCALATED: CHIẾN DỊCH THẤT BẠI
        </h2>
        <p style="color: var(--text-sub); max-width: 550px; margin: 0 auto 1.5rem;">
          ${reason || "Sự cố an ninh vượt quá ngưỡng khống chế. Mã độc đã lây lan sang các máy chủ khác."}
        </p>

        <div style="background: var(--bg-card); padding: 1rem; border-radius: 8px; max-width: 480px; margin: 0 auto 1.5rem; border: 1px solid var(--border-light); font-size: 0.9rem; text-align: left; line-height: 1.6;">
          <strong>💡 Lời khuyên từ CISO:</strong>
          <ul style="margin-left: 1.25rem; margin-top: 0.35rem;">
            <li>Số câu đúng đạt được: <strong>${this.score}/${this.questions.length}</strong>.</li>
            <li>Các câu bạn vừa làm sai đã được tự động lưu vào <strong>Sổ tay lỗi sai</strong>.</li>
            <li>Hãy ôn lại các bẫy đảo ngữ, thể giả định và từ vựng chuyên sâu trước khi tái đấu!</li>
          </ul>
        </div>

        <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-outline-danger" onclick="app.navigate('errors')">📕 Xem Sổ tay lỗi sai</button>
          <button class="btn" onclick="app.launchBossBattle()">⚔️ Tái đấu Boss ngay</button>
        </div>
      </div>
    `;
  }
}

// Global App Instance
