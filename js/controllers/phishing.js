/**
 * =====================================================================
 * PHISHING HUNTER CONTROLLER (Interactive Email Triage & Threat Hunting)
 * 5 Levels x 6 Emails = 30 Scenarios
 * Company Trust (5 points), Suspicious Clue Identification, Part 7 Reading
 * =====================================================================
 */
class PhishingHunterController {
  constructor(options = {}) {
    this.level = options.level || (app.state.progress.phishingStats ? app.state.progress.phishingStats.currentLevel : 1) || 1;
    this.emails = EMAILS.filter(e => e.level === this.level);
    this.currentIndex = 0;
    this.companyTrust = 5;
    this.maxTrust = 5;
    this.selectedClues = []; // array of strings clicked by user
    this.userVerdict = null; // true (phishing) or false (safe)
    this.readingChoiceIndex = null;
    this.isSubmitted = false;
    this.isDone = false;
    this.totalXP = 0;
    this.onComplete = options.onComplete || (() => {});
    this.container = null;
  }

  cleanup() {
    this.isDone = true;
    this.stopAudio();
  }

  stopAudio() {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }

  render(container) {
    this.container = container;
    this.renderCurrentEmail();
  }

  renderCurrentEmail() {
    this.stopAudio();
    if (this.isDone) return;

    if (this.companyTrust <= 0) {
      this.renderTrustFailure();
      return;
    }

    if (this.currentIndex >= this.emails.length) {
      this.renderLevelCompletion();
      return;
    }

    const email = this.emails[this.currentIndex];
    this.selectedClues = [];
    this.userVerdict = null;
    this.readingChoiceIndex = null;
    this.isSubmitted = false;

    const trustShields = "🛡️".repeat(this.companyTrust) + "⚪".repeat(this.maxTrust - this.companyTrust);

    this.container.innerHTML = `
      <div class="phishing-arena">
        <!-- TOP HUD -->
        <div class="card" style="margin-bottom: 1rem; border-color: var(--accent-cyan); background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(15, 23, 42, 0.95));">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div>
              <span class="badge-tag" style="background: rgba(6, 182, 212, 0.2); color: var(--accent-cyan); border-color: var(--accent-cyan);">
                🎣 PHISHING HUNTER • LEVEL ${this.level}/5
              </span>
              <h2 style="font-size: 1.3rem; font-weight: 800; color: #fff; margin-top: 0.25rem;">
                Email ${this.currentIndex + 1}/${this.emails.length}: Giám định An ninh Thư điện tử
              </h2>
            </div>
            <div style="text-align: right;">
              <span style="font-size: 0.8rem; color: var(--text-muted); display: block;">COMPANY TRUST (ĐỘ TIN CẬY):</span>
              <div style="font-size: 1.3rem; letter-spacing: 2px;">${trustShields} <strong style="font-size: 1rem; color: ${this.companyTrust <= 2 ? 'var(--accent-rose)' : 'var(--accent-green)'};">(${this.companyTrust}/${this.maxTrust})</strong></div>
            </div>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-sub); margin-top: 0.5rem;">
            💡 <strong>Hướng dẫn:</strong> Đọc kỹ email bên dưới. Bấm vào tối đa <strong>3 cụm từ khả nghi</strong> (nếu có), sau đó đưa ra phán quyết <em>Safe</em> hoặc <em>Phishing</em> và trả lời câu hỏi đọc hiểu.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr; gap: 1.25rem;">
          <!-- EMAIL CLIENT SIMULATOR -->
          <div class="card email-client-box" style="border: 2px solid var(--border-color); background: var(--bg-card); padding: 1.5rem; border-radius: 10px;">
            <!-- Header bar of email -->
            <div class="email-header-meta" style="border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; margin-bottom: 1.25rem; font-size: 0.9rem; line-height: 1.8;">
              <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
                <div><strong>From:</strong> <span class="email-meta-sender selectable-phrase" data-phrase="${app.escapeHTML(email.sender.email)}" onclick="app.activeQuiz.togglePhrase(this)">${app.escapeHTML(email.sender.name)} &lt;${app.escapeHTML(email.sender.email)}&gt;</span></div>
                <div style="color: var(--text-muted); font-size: 0.8rem;">${app.escapeHTML(email.date)}</div>
              </div>
              <div><strong>To:</strong> <span style="color: var(--text-sub);">${app.escapeHTML(email.recipient)}</span></div>
              <div><strong>Subject:</strong> <span style="color: var(--accent-cyan); font-weight: 700;">${app.escapeHTML(email.subject)}</span></div>
            </div>

            <!-- Email Body with interactable paragraphs -->
            <div class="email-body-content" id="emailBodyText" style="white-space: pre-wrap; line-height: 1.8; font-size: 0.95rem; color: var(--text-main); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
              ${this.renderClickableBody(email)}
            </div>

            <div style="margin-top: 1.25rem; padding-top: 0.75rem; border-top: 1px dashed var(--border-color); font-size: 0.85rem; color: var(--text-muted);">
              📌 Dấu hiệu bạn đã chọn: <span id="selectedCluesBadge" style="color: var(--accent-amber); font-weight: 700;">Chưa chọn cụm từ nào (Tối đa 3)</span>
            </div>
          </div>

          <!-- VERDICT AND READING COMPREHENSION CONTROLS -->
          <div class="card" style="padding: 1.5rem; border-color: var(--border-light);">
            <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--accent-amber);">
              Bước 1: Phán quyết An ninh (Security Verdict)
            </h3>
            <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
              <button class="btn btn-verdict" id="btnVerdictSafe" onclick="app.activeQuiz.setVerdict(false)" style="flex: 1; padding: 0.85rem; font-size: 1rem; background: rgba(16, 185, 129, 0.15); border: 2px solid var(--accent-green); color: var(--accent-green);">
                🛡️ SAFE (Email An toàn / Hợp lệ)
              </button>
              <button class="btn btn-verdict" id="btnVerdictPhish" onclick="app.activeQuiz.setVerdict(true)" style="flex: 1; padding: 0.85rem; font-size: 1rem; background: rgba(244, 63, 94, 0.15); border: 2px solid var(--accent-rose); color: var(--accent-rose);">
                🚨 PHISHING (Email Lừa đảo / Độc hại)
              </button>
            </div>

            <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--accent-cyan);">
              Bước 2: Câu hỏi đọc hiểu TOEIC (Reading Comprehension)
            </h3>
            <div style="font-weight: 600; font-size: 0.95rem; margin-bottom: 0.75rem;">
              ${app.escapeHTML(email.readingQuestion.stem)}
            </div>
            <div class="choices-grid" style="margin-bottom: 1.5rem;">
              ${email.readingQuestion.choices.map((c, i) => `
                <div class="choice-item reading-choice-opt" onclick="app.activeQuiz.setReadingChoice(${i}, this)" style="padding: 0.75rem 1rem;">
                  <span class="key">${["A", "B", "C", "D"][i]}</span>
                  <span class="choice-text">${app.escapeHTML(c)}</span>
                </div>
              `).join("")}
            </div>

            <div style="text-align: right;">
              <button class="btn" id="btnSubmitTriage" onclick="app.activeQuiz.submitTriage()" style="padding: 0.8rem 2.5rem; font-size: 1.05rem;" disabled>
                🔍 Nộp kết quả thẩm định
              </button>
            </div>
          </div>
        </div>

        <!-- POST-ANALYSIS RESULT SLOT -->
        <div id="phishingResultSlot" style="margin-top: 1.5rem;"></div>
      </div>
    `;
  }

  renderClickableBody(email) {
    // Break body into sentences / phrases that can be clicked
    const paragraphs = email.body.split("\n\n");
    return paragraphs.map(p => {
      const sentences = p.split(/([.?!]\s+)/);
      return `<p style="margin-bottom: 0.8rem;">` + sentences.map(s => {
        const trimmed = s.trim();
        if (trimmed.length < 3 || /^[.?!]$/.test(trimmed)) return app.escapeHTML(s);
        return `<span class="phish-phrase selectable-phrase" onclick="app.activeQuiz.togglePhrase(this)" data-phrase="${app.escapeHTML(trimmed)}">${app.escapeHTML(s)}</span>`;
      }).join("") + `</p>`;
    }).join("");
  }

  togglePhrase(el) {
    if (this.isSubmitted) return;
    const phrase = el.getAttribute("data-phrase") || el.textContent.trim();
    const idx = this.selectedClues.indexOf(phrase);

    if (idx !== -1) {
      this.selectedClues.splice(idx, 1);
      el.classList.remove("phrase-highlighted");
    } else {
      if (this.selectedClues.length >= 3) {
        app.showToast("Bạn chỉ có thể chọn tối đa 3 cụm từ nghi vấn.");
        return;
      }
      this.selectedClues.push(phrase);
      el.classList.add("phrase-highlighted");
    }

    const badge = document.getElementById("selectedCluesBadge");
    if (badge) {
      if (this.selectedClues.length === 0) {
        badge.textContent = "Chưa chọn cụm từ nào (Tối đa 3)";
      } else {
        badge.textContent = `Đã chọn ${this.selectedClues.length}/3 cụm từ nghi vấn`;
      }
    }
    this.checkCanSubmit();
  }

  setVerdict(isPhishing) {
    if (this.isSubmitted) return;
    this.userVerdict = isPhishing;

    const btnSafe = document.getElementById("btnVerdictSafe");
    const btnPhish = document.getElementById("btnVerdictPhish");
    if (btnSafe) btnSafe.style.background = !isPhishing ? "var(--accent-green)" : "rgba(16, 185, 129, 0.15)";
    if (btnSafe) btnSafe.style.color = !isPhishing ? "#000" : "var(--accent-green)";
    if (btnPhish) btnPhish.style.background = isPhishing ? "var(--accent-rose)" : "rgba(244, 63, 94, 0.15)";
    if (btnPhish) btnPhish.style.color = isPhishing ? "#fff" : "var(--accent-rose)";

    this.checkCanSubmit();
  }

  setReadingChoice(idx, elem) {
    if (this.isSubmitted) return;
    this.readingChoiceIndex = idx;
    document.querySelectorAll(".reading-choice-opt").forEach((item, i) => {
      item.classList.toggle("selected", i === idx);
    });
    this.checkCanSubmit();
  }

  checkCanSubmit() {
    const btn = document.getElementById("btnSubmitTriage");
    if (btn) {
      btn.disabled = !(this.userVerdict !== null && this.readingChoiceIndex !== null);
    }
  }

  submitTriage() {
    if (this.isSubmitted || this.userVerdict === null || this.readingChoiceIndex === null) return;
    this.isSubmitted = true;

    const email = this.emails[this.currentIndex];
    const isVerdictCorrect = this.userVerdict === email.isPhishing;
    const isReadingCorrect = this.readingChoiceIndex === email.readingQuestion.answer;

    // Check matched clues
    let matchedCluesCount = 0;
    if (email.isPhishing && email.suspiciousClues) {
      email.suspiciousClues.forEach(clue => {
        const found = this.selectedClues.some(sc => sc.toLowerCase().includes(clue.phrase.toLowerCase()) || clue.phrase.toLowerCase().includes(sc.toLowerCase()));
        if (found) matchedCluesCount++;
      });
    }

    let earnedXP = 0;
    if (isVerdictCorrect) earnedXP += 10;
    earnedXP += matchedCluesCount * 5;
    if (isReadingCorrect) earnedXP += 5;

    if (!isVerdictCorrect) {
      this.companyTrust = Math.max(0, this.companyTrust - 1);
      app.sound.playWrong();
    } else {
      app.sound.playCorrect();
    }

    if (earnedXP > 0) {
      this.totalXP += earnedXP;
      app.gainXP(earnedXP);
    }

    // Update progress state
    app.state.progress.phishingStats = app.state.progress.phishingStats || {
      currentLevel: 1,
      emailsCompleted: {},
      totalScore: 0,
      trustPoints: 5,
      perfectDetections: 0
    };
    app.state.progress.phishingStats.emailsCompleted[email.id] = {
      isVerdictCorrect,
      isReadingCorrect,
      earnedXP,
      timestamp: Date.now()
    };
    if (isVerdictCorrect && isReadingCorrect && (!email.isPhishing || matchedCluesCount > 0)) {
      app.state.progress.phishingStats.perfectDetections += 1;
    }
    app.saveState();

    this.renderTriageResult(email, isVerdictCorrect, matchedCluesCount, isReadingCorrect, earnedXP);
  }

  renderTriageResult(email, isVerdictCorrect, matchedCluesCount, isReadingCorrect, earnedXP) {
    const slot = document.getElementById("phishingResultSlot");
    if (!slot) return;

    // Disable buttons
    const btnSubmit = document.getElementById("btnSubmitTriage");
    if (btnSubmit) btnSubmit.style.display = "none";

    const readingChoices = document.querySelectorAll(".reading-choice-opt");
    readingChoices.forEach((opt, i) => {
      if (i === email.readingQuestion.answer) opt.classList.add("correct");
      else if (i === this.readingChoiceIndex && !isReadingCorrect) opt.classList.add("wrong");
    });

    slot.innerHTML = `
      <div class="card" style="border: 2px solid ${isVerdictCorrect ? 'var(--accent-green)' : 'var(--accent-rose)'}; background: var(--bg-card); padding: 1.5rem; animation: fadeIn 0.4s ease;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; margin-bottom: 1rem;">
          <div style="font-size: 1.3rem; font-weight: 800; color: ${isVerdictCorrect ? 'var(--accent-green)' : 'var(--accent-rose)'};">
            ${isVerdictCorrect ? '🎯 PHÁN QUYẾT CHÍNH XÁC!' : '❌ PHÁN QUYẾT SAI LẦM!'}
            <span style="font-size: 0.95rem; color: var(--text-muted); font-weight: 600;">(Thực tế: ${email.isPhishing ? '🚨 PHISHING EMAIL' : '🛡️ SAFE EMAIL'})</span>
          </div>
          <div style="font-size: 1.1rem; font-weight: 800; color: var(--accent-amber);">
            +${earnedXP} XP • ${!isVerdictCorrect ? '<span style="color: var(--accent-rose);">-1 Company Trust ⚠️</span>' : '<span style="color: var(--accent-green);">Trust giữ vững 🛡️</span>'}
          </div>
        </div>

        <div style="background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: 8px; margin-bottom: 1.25rem; font-size: 0.9rem; line-height: 1.6; border: 1px solid var(--border-light);">
          <strong style="color: var(--accent-cyan); display: block; margin-bottom: 0.35rem;">🔍 Phân tích chi tiết của Chuyên viên SOC:</strong>
          <div>${app.escapeHTML(email.detailedExplanation)}</div>

          ${email.isPhishing && email.suspiciousClues && email.suspiciousClues.length ? `
            <div style="margin-top: 0.75rem;">
              <strong style="color: var(--accent-rose);">🚩 Các dấu hiệu đỏ cần phát hiện:</strong>
              <ul style="margin-left: 1.25rem; margin-top: 0.35rem;">
                ${email.suspiciousClues.map(c => `
                  <li><strong>"${app.escapeHTML(c.phrase)}"</strong>: ${app.escapeHTML(c.explanation)}</li>
                `).join("")}
              </ul>
            </div>
          ` : ""}
        </div>

        <!-- VIETNAMESE TRANSLATION -->
        <div style="background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: 8px; margin-bottom: 1.25rem; font-size: 0.9rem; line-height: 1.6; border: 1px solid var(--border-light);">
          <strong style="color: var(--accent-amber); display: block; margin-bottom: 0.35rem;">🇻🇳 Bản dịch tiếng Việt đối chiếu:</strong>
          <div style="white-space: pre-wrap; color: var(--text-sub);">${app.escapeHTML(email.vietnameseTranslation)}</div>
        </div>

        <!-- VOCABULARY HIGHLIGHTS -->
        ${email.keyVocab && email.keyVocab.length ? `
          <div style="margin-bottom: 1.25rem;">
            <strong style="color: var(--accent-cyan); display: block; margin-bottom: 0.5rem;">📚 Từ vựng quan trọng trong email này (Tự động nạp vào Sổ tay):</strong>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 0.75rem;">
              ${email.keyVocab.map(v => `
                <div style="background: var(--bg-surface); padding: 0.75rem; border-radius: 6px; border: 1px solid var(--border-color); font-size: 0.85rem;">
                  <div style="font-weight: 700; color: var(--accent-cyan);">${app.escapeHTML(v.word)} <em style="font-weight: normal; color: var(--text-muted);">(${app.escapeHTML(v.pos)})</em></div>
                  <div style="color: var(--text-main); margin: 0.2rem 0;">${app.escapeHTML(v.meaning_vi)}</div>
                  <div style="color: var(--text-sub); font-size: 0.8rem;">"${app.escapeHTML(v.example)}"</div>
                </div>
              `).join("")}
            </div>
          </div>
        ` : ""}

        <div style="text-align: right; margin-top: 1rem;">
          <button class="btn" onclick="app.activeQuiz.nextEmail()" style="padding: 0.8rem 2.2rem; font-size: 1rem;">
            ${this.currentIndex + 1 < this.emails.length ? 'Tiếp tục Email tiếp theo ➔' : 'Xem Báo cáo Tổng kết Level 🏆'}
          </button>
        </div>
      </div>
    `;

    // Auto-save key vocab into Leitner Box 1 if user got verdict wrong or to boost vocab
    if (email.keyVocab && Array.isArray(email.keyVocab)) {
      email.keyVocab.forEach(kv => {
        // Add to Leitner Box 1 if not present in any box
        const boxes = app.state.progress.leitnerBoxes;
        const exists = [1, 2, 3, 4, 5].some(b => boxes[`b${b}`] && boxes[`b${b}`].includes(kv.word));
        if (!exists && boxes.b1) {
          boxes.b1.push(kv.word);
        }
      });
      app.saveState();
    }

    slot.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  nextEmail() {
    this.currentIndex += 1;
    this.renderCurrentEmail();
  }

  renderTrustFailure() {
    this.container.innerHTML = `
      <div class="card" style="text-align: center; padding: 3rem 1.5rem; max-width: 600px; margin: 0 auto; border: 2px solid var(--accent-rose); background: radial-gradient(circle, rgba(244, 63, 94, 0.15), var(--bg-card));">
        <div style="font-size: 4rem; margin-bottom: 0.5rem;">🚨</div>
        <h2 style="font-size: 1.8rem; font-weight: 900; color: var(--accent-rose); margin-bottom: 0.5rem;">
          COMPANY TRUST DEPLETED: SỰ CỐ AN NINH
        </h2>
        <p style="color: var(--text-sub); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem;">
          Độ tin cậy của bạn đã giảm về 0/5 do nhiều lần đánh giá sai email độc hại hoặc gắn cờ nhầm email công việc. Mã độc đã thâm nhập thành công vào mạng doanh nghiệp!
        </p>
        <div style="background: var(--bg-surface); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-color); text-align: left; font-size: 0.9rem; margin-bottom: 1.5rem; line-height: 1.6;">
          <strong>💡 Lời khuyên khắc phục:</strong>
          <ul style="margin-left: 1.25rem; margin-top: 0.35rem;">
            <li>Luôn kiểm tra kỹ đuôi tên miền người gửi (như .co, .org, hoặc ký tự dư thừa).</li>
            <li>Cảnh giác với các yêu cầu gấp gáp đòi mật khẩu hoặc số thẻ.</li>
            <li>Ôn lại các từ vựng bẫy trong Sổ tay lỗi sai trước khi thi lại.</li>
          </ul>
        </div>
        <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-outline-danger" onclick="app.navigate('errors')">📕 Xem Sổ tay lỗi sai</button>
          <button class="btn" onclick="app.startPhishingHunter(${this.level})">🔄 Thử sức lại Level ${this.level}</button>
        </div>
      </div>
    `;
  }

  renderLevelCompletion() {
    const nextLevel = this.level < 5 ? this.level + 1 : 1;
    this.container.innerHTML = `
      <div class="card" style="text-align: center; padding: 3rem 1.5rem; max-width: 650px; margin: 0 auto; border: 2px solid var(--accent-green); background: radial-gradient(circle, rgba(16, 185, 129, 0.15), var(--bg-card));">
        <div style="font-size: 4rem; margin-bottom: 0.5rem;">🎖️</div>
        <span class="badge-tag" style="background: rgba(16, 185, 129, 0.2); border-color: var(--accent-green); color: var(--accent-green); font-size: 0.9rem;">
          LEVEL ${this.level} COMPLETED
        </span>
        <h2 style="font-size: 2rem; font-weight: 900; color: #fff; margin: 0.75rem 0 0.5rem;">
          HOÀN THÀNH XUẤT SẮC PHISHING HUNTER!
        </h2>
        <p style="color: var(--text-sub); font-size: 1rem; margin-bottom: 1.5rem;">
          Bạn đã hoàn thành toàn bộ 6/6 kịch bản email an ninh ở Level ${this.level} với độ tin cậy giữ vững <strong>${this.companyTrust}/5 Trust Points</strong>!
        </p>

        <div style="background: var(--bg-surface); padding: 1.25rem; border-radius: 10px; border: 1px solid var(--border-color); display: inline-block; margin-bottom: 1.5rem; min-width: 280px;">
          <div style="font-size: 0.85rem; color: var(--text-muted);">TỔNG XP NHẬN ĐƯỢC</div>
          <div style="font-size: 2.2rem; font-weight: 900; color: var(--accent-amber);">+${this.totalXP} XP</div>
          <div style="font-size: 0.85rem; color: var(--accent-green); margin-top: 0.25rem;">Hồ sơ an ninh được cập nhật</div>
        </div>

        <div>
          ${this.level < 5 ? `
            <button class="btn" onclick="app.startPhishingHunter(${nextLevel})" style="padding: 0.85rem 2rem; font-size: 1.05rem;">
              🚀 Tiến lên Level ${nextLevel} Thử thách cao hơn ➔
            </button>
          ` : `
            <div style="color: var(--accent-cyan); font-weight: 700; margin-bottom: 1rem;">
              🌟 Chúc mừng bạn đã phá đảo toàn bộ 5 Cấp độ Phishing Hunter đỉnh cao!
            </div>
            <button class="btn" onclick="app.navigate('dashboard')" style="padding: 0.85rem 2rem; font-size: 1.05rem;">
              Về Dashboard Báo cáo
            </button>
          `}
        </div>
      </div>
    `;
  }
}
