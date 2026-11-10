const STORAGE_KEY = "TOEIC_QUEST_CYBER_DATA_V1";

function escapeHTML(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const DEFAULT_STATE = {
  user: {
    name: "Agent Student",
    role: "Intern",
    level: 1,
    xp: 0,
    streak: 1,
    lastActiveDate: new Date().toISOString().split("T")[0],
    soundEnabled: true,
    theme: "dark",
    targetScore: 750,
    estimatedScore: 450,
    speechRate: 1.0,
    speechVoice: "en-US"
  },
  adaptive: {
    currentDifficulty: 2, // 1 to 5
    consecutiveCorrect: 0,
    consecutiveWrong: 0
  },
  progress: {
    completedQuestions: {}, // questionId: { timesWrong: 0, timesCorrect: 1, lastAttempt: timestamp, nextReviewDate: timestamp }
    flaggedQuestions: [],
    leitnerBoxes: {
      b1: [], // New/Difficult (Review daily)
      b2: [], // Review 3 days
      b3: [], // Review 7 days
      b4: [], // Review 14 days
      b5: []  // Mastered
    },
    partStats: {
      p1: { total: 0, correct: 0 },
      p2: { total: 0, correct: 0 },
      p5: { total: 0, correct: 0 },
      p6: { total: 0, correct: 0 },
      p7: { total: 0, correct: 0 }
    },
    dailyMission: {
      date: "",
      questionIds: [],
      completedIds: []
    },
    bossStats: {
      bossDefeated: 0,
      lastDefeatedDate: "",
      highestTitleEarned: "Intern"
    },
    phishingStats: {
      currentLevel: 1,
      emailsCompleted: {},
      totalScore: 0,
      trustPoints: 5,
      perfectDetections: 0
    }
  }
};

class ToeicQuestApp {
  constructor() {
    this.escapeHTML = escapeHTML;
    this.state = this.loadState();
    this.sound = new SoundSynth();
    this.currentView = "dashboard";
    this.activeQuiz = null;
    this.vocabIndex = 0;
    this.vocabStudyMode = "card"; // card, quiz, type
  }

  escapeHTML(str) {
    return escapeHTML(str);
  }

  validateAndMergeState(imported) {
    if (!imported || typeof imported !== "object") return null;
    const base = JSON.parse(JSON.stringify(DEFAULT_STATE));

    // Merge and validate user
    if (imported.user && typeof imported.user === "object") {
      if (typeof imported.user.name === "string" && imported.user.name.trim()) {
        base.user.name = imported.user.name.trim().slice(0, 50);
      }
      if (typeof imported.user.role === "string" && imported.user.role.trim()) {
        base.user.role = imported.user.role.trim().slice(0, 40);
      }
      if (typeof imported.user.level === "number" && !isNaN(imported.user.level)) {
        base.user.level = Math.max(1, Math.floor(imported.user.level));
      }
      if (typeof imported.user.xp === "number" && !isNaN(imported.user.xp)) {
        base.user.xp = Math.max(0, Math.floor(imported.user.xp));
      }
      if (typeof imported.user.streak === "number" && !isNaN(imported.user.streak)) {
        base.user.streak = Math.max(0, Math.floor(imported.user.streak));
      }
      if (typeof imported.user.targetScore === "number" && !isNaN(imported.user.targetScore)) {
        base.user.targetScore = Math.min(990, Math.max(10, Math.floor(imported.user.targetScore)));
      }
      if (typeof imported.user.estimatedScore === "number" && !isNaN(imported.user.estimatedScore)) {
        base.user.estimatedScore = Math.min(990, Math.max(10, Math.floor(imported.user.estimatedScore)));
      }
      if (typeof imported.user.soundEnabled === "boolean") {
        base.user.soundEnabled = imported.user.soundEnabled;
      }
      if (typeof imported.user.theme === "string" && ["dark", "light"].includes(imported.user.theme)) {
        base.user.theme = imported.user.theme;
      }
      if (typeof imported.user.speechRate === "number" && !isNaN(imported.user.speechRate)) {
        base.user.speechRate = Math.min(2.0, Math.max(0.5, imported.user.speechRate));
      }
      if (typeof imported.user.speechVoice === "string") {
        base.user.speechVoice = imported.user.speechVoice;
      }
      if (typeof imported.user.lastActiveDate === "string") {
        base.user.lastActiveDate = imported.user.lastActiveDate;
      }
    }

    // Merge and validate adaptive
    if (imported.adaptive && typeof imported.adaptive === "object") {
      if (typeof imported.adaptive.currentDifficulty === "number" && !isNaN(imported.adaptive.currentDifficulty)) {
        base.adaptive.currentDifficulty = Math.min(5, Math.max(1, Math.floor(imported.adaptive.currentDifficulty)));
      }
      if (typeof imported.adaptive.consecutiveCorrect === "number" && !isNaN(imported.adaptive.consecutiveCorrect)) {
        base.adaptive.consecutiveCorrect = Math.max(0, Math.floor(imported.adaptive.consecutiveCorrect));
      }
      if (typeof imported.adaptive.consecutiveWrong === "number" && !isNaN(imported.adaptive.consecutiveWrong)) {
        base.adaptive.consecutiveWrong = Math.max(0, Math.floor(imported.adaptive.consecutiveWrong));
      }
    }

    // Merge and validate progress
    if (imported.progress && typeof imported.progress === "object") {
      if (imported.progress.partStats && typeof imported.progress.partStats === "object") {
        ['p1', 'p2', 'p5', 'p6', 'p7'].forEach(p => {
          if (imported.progress.partStats[p] && typeof imported.progress.partStats[p] === "object") {
            base.progress.partStats[p] = {
              total: Math.max(0, Number(imported.progress.partStats[p].total) || 0),
              correct: Math.max(0, Number(imported.progress.partStats[p].correct) || 0)
            };
          }
        });
      }

      if (imported.progress.leitnerBoxes && typeof imported.progress.leitnerBoxes === "object") {
        for (let i = 1; i <= 5; i++) {
          const bKey = `b${i}`;
          if (Array.isArray(imported.progress.leitnerBoxes[bKey])) {
            base.progress.leitnerBoxes[bKey] = imported.progress.leitnerBoxes[bKey].filter(w => typeof w === "string");
          }
        }
      }

      // Check if all leitner boxes are empty; if so, populate b1 with VOCAB
      const totalWords = Object.values(base.progress.leitnerBoxes).reduce((acc, arr) => acc + arr.length, 0);
      if (totalWords === 0 && typeof VOCAB !== "undefined" && Array.isArray(VOCAB)) {
        base.progress.leitnerBoxes.b1 = VOCAB.map(v => v.word);
      }

      if (imported.progress.completedQuestions && typeof imported.progress.completedQuestions === "object") {
        base.progress.completedQuestions = imported.progress.completedQuestions;
      }
      if (Array.isArray(imported.progress.flaggedQuestions)) {
        base.progress.flaggedQuestions = imported.progress.flaggedQuestions.filter(q => typeof q === "string");
      }
      if (imported.progress.dailyMission && typeof imported.progress.dailyMission === "object") {
        base.progress.dailyMission = {
          date: String(imported.progress.dailyMission.date || ""),
          questionIds: Array.isArray(imported.progress.dailyMission.questionIds) ? imported.progress.dailyMission.questionIds : [],
          completedIds: Array.isArray(imported.progress.dailyMission.completedIds) ? imported.progress.dailyMission.completedIds : []
        };
      }
      if (imported.progress.bossStats && typeof imported.progress.bossStats === "object") {
        base.progress.bossStats = {
          bossDefeated: Math.max(0, Number(imported.progress.bossStats.bossDefeated) || 0),
          lastDefeatedDate: String(imported.progress.bossStats.lastDefeatedDate || ""),
          highestTitleEarned: String(imported.progress.bossStats.highestTitleEarned || "Intern")
        };
      }
      if (imported.progress.phishingStats && typeof imported.progress.phishingStats === "object") {
        base.progress.phishingStats = {
          currentLevel: Math.min(5, Math.max(1, Number(imported.progress.phishingStats.currentLevel) || 1)),
          emailsCompleted: typeof imported.progress.phishingStats.emailsCompleted === "object" ? imported.progress.phishingStats.emailsCompleted : {},
          totalScore: Math.max(0, Number(imported.progress.phishingStats.totalScore) || 0),
          trustPoints: Math.min(5, Math.max(0, Number(imported.progress.phishingStats.trustPoints) || 5)),
          perfectDetections: Math.max(0, Number(imported.progress.phishingStats.perfectDetections) || 0)
        };
      }
    }

    return base;
  }

  getAllQuestionsFlat() {
    const list = [];
    QUESTIONS.forEach(item => {
      if (item.questions && Array.isArray(item.questions)) {
        item.questions.forEach(sub => {
          list.push({
            ...sub,
            part: item.part,
            passage: item.passage,
            level: item.level || sub.level || 3,
            topic: item.topic || sub.topic || 'General'
          });
        });
      } else {
        list.push(item);
      }
    });
    return list;
  }

  findQuestionById(qid) {
    const direct = QUESTIONS.find(q => q.id === qid);
    if (direct && (!direct.questions || direct.choices)) return direct;
    for (const item of QUESTIONS) {
      if (item.questions && Array.isArray(item.questions)) {
        const sub = item.questions.find(sq => sq.id === qid);
        if (sub) {
          return {
            ...sub,
            part: item.part,
            passage: item.passage,
            level: item.level || sub.level || 3,
            topic: item.topic || sub.topic || 'General'
          };
        }
      }
    }
    return direct || null;
  }

  loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const merged = this.validateAndMergeState(parsed);
        if (merged) return merged;
      }
    } catch (e) {
      console.warn("Error loading stored state, starting fresh.", e);
    }
    // Initialize Leitner Box 1 with all words if empty
    const fresh = JSON.parse(JSON.stringify(DEFAULT_STATE));
    fresh.progress.leitnerBoxes.b1 = VOCAB.map(v => v.word);
    return fresh;
  }

  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error("Failed to save state to localStorage", e);
    }
    this.updateHeaderUI();
  }

  init() {
    this.applyTheme(this.state.user.theme);
    this.checkStreak();
    this.initKeyboardNav();
    this.navigate("dashboard");
    this.updateHeaderUI();
  }

  checkStreak() {
    const today = new Date().toISOString().split("T")[0];
    const last = this.state.user.lastActiveDate;
    if (last) {
      const diffDays = Math.floor((new Date(today) - new Date(last)) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        this.state.user.streak += 1;
      } else if (diffDays > 1) {
        this.state.user.streak = 1;
      }
    }
    this.state.user.lastActiveDate = today;
    this.saveState();
  }

  applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const btn = document.getElementById("themeBtn");
    if (btn) btn.textContent = theme === "dark" ? "🌙" : "☀️";
    this.state.user.theme = theme;
  }

  toggleTheme() {
    const next = this.state.user.theme === "dark" ? "light" : "dark";
    this.applyTheme(next);
    this.saveState();
  }

  toggleSound() {
    this.state.user.soundEnabled = !this.state.user.soundEnabled;
    const btn = document.getElementById("soundBtn");
    if (btn) btn.textContent = this.state.user.soundEnabled ? "🔊" : "🔇";
    this.saveState();
  }

  updateHeaderUI() {
    const roleTitle = document.getElementById("roleTitle");
    const userLevel = document.getElementById("userLevel");
    const soundBtn = document.getElementById("soundBtn");
    if (roleTitle) roleTitle.textContent = this.state.user.role;
    if (userLevel) userLevel.textContent = this.state.user.level;
    if (soundBtn) soundBtn.textContent = this.state.user.soundEnabled ? "🔊" : "🔇";
  }

  gainXP(pts) {
    this.state.user.xp += pts;
    const needed = this.state.user.level * 100;
    if (this.state.user.xp >= needed) {
      this.state.user.level += 1;
      this.state.user.xp -= needed;
      this.updateCyberRole();
      this.sound.playLevelUp();
      this.showToast(`🎉 CHÚC MỪNG THĂNG CẤP! Bạn đã đạt Cấp ${this.state.user.level} (${this.state.user.role})!`);
    }
    this.saveState();
  }

  updateCyberRole() {
    const roles = ["Intern", "Junior Analyst", "Senior Specialist", "Team Lead", "CISO"];
    const lv = this.state.user.level;
    let calculatedRole = "Intern";
    if (lv < 3) calculatedRole = "Intern";
    else if (lv < 6) calculatedRole = "Junior Analyst";
    else if (lv < 10) calculatedRole = "Senior Specialist";
    else if (lv < 15) calculatedRole = "Team Lead";
    else calculatedRole = "CISO";

    const getRoleRank = (r) => {
      const base = (r || "").replace(/\s*\(.*?\)/, "").trim();
      const baseIdx = roles.indexOf(base);
      const isMaster = (r || "").includes("Master") ? 1 : 0;
      return (baseIdx !== -1 ? baseIdx : 0) * 10 + isMaster;
    };

    if (getRoleRank(calculatedRole) > getRoleRank(this.state.user.role)) {
      this.state.user.role = calculatedRole;
    }
  }

  showToast(msg) {
    const toast = document.createElement("div");
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = "var(--accent-cyan)";
    toast.style.color = "#000";
    toast.style.fontWeight = "bold";
    toast.style.padding = "0.75rem 1.25rem";
    toast.style.borderRadius = "8px";
    toast.style.boxShadow = "0 4px 14px rgba(0,0,0,0.3)";
    toast.style.zIndex = "999";
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
  }

  navigate(viewName) {
    this.currentView = viewName;
    document.querySelectorAll(".nav-btn").forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-view") === viewName);
    });
    const stage = document.getElementById("stageContent");
    if (!stage) return;

    if (this.activeQuiz) {
      if (typeof this.activeQuiz.cleanup === "function") {
        this.activeQuiz.cleanup();
      } else {
        if (typeof this.activeQuiz.stopAudio === "function") {
          this.activeQuiz.stopAudio();
        }
        if (this.activeQuiz.timerInterval) {
          clearInterval(this.activeQuiz.timerInterval);
          this.activeQuiz.timerInterval = null;
        }
        this.activeQuiz.isDone = true;
      }
      this.activeQuiz = null;
    }

    switch (viewName) {
      case "dashboard":
        this.renderDashboard(stage);
        break;
      case "placement":
        this.startPlacementTest();
        break;
      case "daily":
        this.renderDailyMission(stage);
        break;
      case "part1":
        this.startPartPractice(1);
        break;
      case "part2":
        this.startPartPractice(2);
        break;
      case "part5":
        this.startPartPractice(5);
        break;
      case "part7":
        this.startPartPractice(7);
        break;
      case "traphunter":
        this.renderTrapHunter(stage);
        break;
      case "part6":
        this.startPartPractice(6);
        break;
      case "minitest":
        this.startMiniTest();
        break;
      case "phishing":
        this.startPhishingHunter();
        break;
      case "boss":
        this.renderBossArena(stage);
        break;
      case "vocab":
        this.renderVocabArena(stage);
        break;
      case "errors":
        this.renderErrorNotebook(stage);
        break;
      default:
        this.renderDashboard(stage);
    }
  }

  initKeyboardNav() {
    window.addEventListener("keydown", (e) => {
      // Don't intercept if user is typing in an input
      if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;

      if (this.activeQuiz && !this.activeQuiz.isDone) {
        if (["1", "2", "3", "4"].includes(e.key)) {
          const idx = parseInt(e.key, 10) - 1;
          this.activeQuiz.handleSelectChoice(idx);
        } else if (e.key === "Enter") {
          this.activeQuiz.handleNext();
        } else if (e.code === "Space" || e.key === " ") {
          e.preventDefault();
          this.activeQuiz.playCurrentAudio();
        }
      }
    });
  }

  // --- VIEWS ---
  renderDashboard(stage) {
    const p1Total = this.state.progress.partStats.p1.total;
    const p1Correct = this.state.progress.partStats.p1.correct;
    const p1Acc = p1Total > 0 ? Math.round((p1Correct / p1Total) * 100) : 0;

    const p2Total = this.state.progress.partStats.p2.total;
    const p2Correct = this.state.progress.partStats.p2.correct;
    const p2Acc = p2Total > 0 ? Math.round((p2Correct / p2Total) * 100) : 0;

    const p5Total = this.state.progress.partStats.p5.total;
    const p5Correct = this.state.progress.partStats.p5.correct;
    const p5Acc = p5Total > 0 ? Math.round((p5Correct / p5Total) * 100) : 0;

    const p6Total = this.state.progress.partStats.p6 ? this.state.progress.partStats.p6.total : 0;
    const p6Correct = this.state.progress.partStats.p6 ? this.state.progress.partStats.p6.correct : 0;
    const p6Acc = p6Total > 0 ? Math.round((p6Correct / p6Total) * 100) : 0;

    const p7Total = this.state.progress.partStats.p7.total;
    const p7Correct = this.state.progress.partStats.p7.correct;
    const p7Acc = p7Total > 0 ? Math.round((p7Correct / p7Total) * 100) : 0;

    const errorCount = Object.keys(this.state.progress.completedQuestions).filter(
      id => this.state.progress.completedQuestions[id].timesWrong > 0
    ).length;

    stage.innerHTML = `
      <div class="card" style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1)); border-color: var(--accent-cyan);">
        <h2 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 0.35rem;">
          Chào mừng trở lại, ${this.escapeHTML(this.state.user.name)} (${this.escapeHTML(this.state.user.role)})! 🛡️
        </h2>
        <p style="color: var(--text-sub); font-size: 0.95rem;">
          Trạng thái an ninh: <strong style="color: var(--accent-cyan);">Sẵn sàng tác chiến</strong>. Hoàn thành nhiệm vụ hàng ngày để duy trì chuỗi học tập (streak) và thăng cấp CISO!
        </p>
      </div>

      <div class="grid-stats">
        <div class="stat-tile">
          <span class="label">Điểm ước lượng</span>
          <span class="value">${this.state.user.estimatedScore}<span style="font-size: 0.9rem; font-weight: 500;">/990</span></span>
          <span class="sub">🎯 Mục tiêu: ${this.state.user.targetScore || 750}</span>
        </div>
        <div class="stat-tile">
          <span class="label">Chuỗi ngày (Streak)</span>
          <span class="value">🔥 ${this.state.user.streak} <span style="font-size: 0.9rem; font-weight: 500;">ngày</span></span>
          <span class="sub">Kỷ luật học tập</span>
        </div>
        <div class="stat-tile">
          <span class="label">Part 1 (Tranh)</span>
          <span class="value">${p1Acc}%</span>
          <span class="sub">${p1Correct}/${p1Total} câu đúng</span>
        </div>
        <div class="stat-tile">
          <span class="label">Part 2 (Hỏi-Đáp)</span>
          <span class="value">${p2Acc}%</span>
          <span class="sub">${p2Correct}/${p2Total} câu đúng</span>
        </div>
        <div class="stat-tile">
          <span class="label">Part 5 (Câu ngắn)</span>
          <span class="value">${p5Acc}%</span>
          <span class="sub">${p5Correct}/${p5Total} câu đúng</span>
        </div>
        <div class="stat-tile">
          <span class="label">Part 6 (Đoạn văn)</span>
          <span class="value">${p6Acc}%</span>
          <span class="sub">${p6Correct}/${p6Total} câu đúng</span>
        </div>
        <div class="stat-tile">
          <span class="label">Part 7 (Bài đọc)</span>
          <span class="value">${p7Acc}%</span>
          <span class="sub">${p7Correct}/${p7Total} câu đúng</span>
        </div>
        <div class="stat-tile" style="border-color: rgba(244, 63, 94, 0.4);">
          <span class="label">Sự cố Boss Diệt</span>
          <span class="value" style="color: var(--accent-rose);">👾 ${this.state.progress.bossStats ? this.state.progress.bossStats.bossDefeated : 0}</span>
          <span class="sub">Chiến dịch hoàn thành</span>
        </div>
        <div class="stat-tile" style="border-color: rgba(6, 182, 212, 0.4);">
          <span class="label">Phishing Đã Soát</span>
          <span class="value" style="color: var(--accent-cyan);">🎣 ${Object.keys(this.state.progress.phishingStats ? this.state.progress.phishingStats.emailsCompleted : {}).length}/30</span>
          <span class="sub">Level ${(this.state.progress.phishingStats ? this.state.progress.phishingStats.currentLevel : 1)}/5</span>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
        <div class="card">
          <h3 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.75rem;">📈 Biểu đồ Độ chính xác các Phần</h3>
          <div class="canvas-container">
            <canvas id="accuracyChart"></canvas>
          </div>
          <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem; text-align: center;">
            Biểu đồ phân bố độ chính xác Listening & Reading (Rendered with HTML5 Canvas)
          </p>
        </div>

        <div class="card">
          <h3 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.75rem;">⚡ Hành động nhanh</h3>
          <div style="display: flex; flex-direction: column; gap: 0.6rem;">
            <button class="btn" style="background: linear-gradient(135deg, #06b6d4, #0284c7); color: #000; font-weight: 800;" onclick="app.navigate('phishing')">🎣 Thợ săn Phishing (30 kịch bản email)</button>
            <button class="btn" onclick="app.navigate('daily')">🔥 Làm Nhiệm vụ ngày (10 câu)</button>
            <button class="btn" style="background: linear-gradient(135deg, #f59e0b, #d97706); color: #000; font-weight: 800;" onclick="app.navigate('minitest')">⏱️ Thi Mini Test 30 câu (Ước lượng 10–990)</button>
            <button class="btn" style="background: linear-gradient(135deg, #e11d48, #be123c); color: #fff;" onclick="app.navigate('boss')">👾 Chiến Boss Level (Sự cố Cyber 25 câu)</button>
            <button class="btn btn-secondary" onclick="app.navigate('part1')">🎧 Luyện Part 1 (Mô tả tranh)</button>
            <button class="btn btn-secondary" onclick="app.navigate('part2')">🗣️ Luyện Part 2 (Hỏi - Đáp)</button>
            <button class="btn btn-secondary" onclick="app.navigate('part5')">📝 Luyện Part 5 (Câu ngắn)</button>
            <button class="btn btn-secondary" onclick="app.navigate('part6')">📄 Luyện Part 6 (Điền đoạn văn)</button>
            <button class="btn btn-secondary" onclick="app.navigate('part7')">📑 Luyện Part 7 (Bài đọc hiểu)</button>
            <button class="btn btn-secondary" onclick="app.navigate('traphunter')">🏹 Săn bẫy ETS (Trap Hunter)</button>
            <button class="btn btn-secondary" onclick="app.navigate('vocab')">🧠 Ôn từ vựng Leitner (${this.state.progress.leitnerBoxes.b1.length} từ đến hạn)</button>
            <button class="btn btn-outline-danger" onclick="app.navigate('errors')">📕 Xem sổ tay lỗi sai (${errorCount} câu)</button>
          </div>
        </div>
      </div>
    `;

    this.drawChart("accuracyChart", [
      { label: "P1", value: p1Acc, color: "#10b981" },
      { label: "P2", value: p2Acc, color: "#06b6d4" },
      { label: "P5", value: p5Acc, color: "#3b82f6" },
      { label: "P6", value: p6Acc, color: "#6366f1" },
      { label: "P7", value: p7Acc, color: "#8b5cf6" },
      { label: "Level", value: (this.state.adaptive.currentDifficulty / 5) * 100, color: "#f59e0b" }
    ]);
  }

  drawChart(canvasId, items) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    ctx.clearRect(0, 0, w, h);

    const barWidth = 44;
    const gap = 30;
    const totalBarsWidth = items.length * barWidth + (items.length - 1) * gap;
    let startX = (w - totalBarsWidth) / 2;
    const bottomY = h - 35;
    const maxBarH = h - 60;

    items.forEach((item) => {
      const barH = (Math.max(item.value, 4) / 100) * maxBarH;
      const barY = bottomY - barH;

      // Draw background slot
      ctx.fillStyle = "rgba(148, 163, 184, 0.1)";
      ctx.fillRect(startX, bottomY - maxBarH, barWidth, maxBarH);

      // Draw active bar
      ctx.fillStyle = item.color;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(startX, barY, barWidth, barH, [6, 6, 0, 0]) : ctx.fillRect(startX, barY, barWidth, barH);
      ctx.fill();

      // Draw Value
      ctx.fillStyle = "#f8fafc";
      ctx.font = "bold 11px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`${Math.round(item.value)}%`, startX + barWidth / 2, barY - 6);

      // Draw Label
      ctx.fillStyle = "#94a3b8";
      ctx.font = "12px sans-serif";
      ctx.fillText(item.label, startX + barWidth / 2, bottomY + 18);

      startX += barWidth + gap;
    });
  }

  // --- QUIZ ORCHESTRATION ---
  startPhishingHunter(level) {
    const stage = document.getElementById("stageContent");
    const targetLevel = level || (this.state.progress.phishingStats ? this.state.progress.phishingStats.currentLevel : 1) || 1;
    this.activeQuiz = new PhishingHunterController({
      level: targetLevel,
      onComplete: () => {
        app.navigate("dashboard");
      }
    });
    this.activeQuiz.render(stage);
  }

  startPlacementTest() {
    const stage = document.getElementById("stageContent");
    // Pick 20 questions (all available Part 5 + Part 7 questions)
    const flatList = this.getAllQuestionsFlat().filter(q => q.part === 5 || q.part === 6 || q.part === 7);
    const selected = flatList.slice(0, 20);
    this.activeQuiz = new QuizController(selected, {
      title: "🎯 Placement Check (Đánh giá năng lực đầu vào)",
      isExamMode: true,
      timeLimitMinutes: 15,
      onComplete: (results) => {
        // Calculate estimated TOEIC score (Scale: 10 - 990)
        // 20 questions -> base score formula
        const ratio = results.score / results.total;
        let estimated = Math.round(200 + ratio * 750);
        // Round to nearest 5 (TOEIC standard)
        estimated = Math.min(990, Math.max(100, Math.round(estimated / 5) * 5));
        app.state.user.estimatedScore = estimated;
        app.saveState();

        stage.innerHTML = `
          <div class="card" style="text-align: center; padding: 2rem;">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">🎖️</div>
            <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 0.5rem;">Hoàn thành Placement Check!</h2>
            <p style="color: var(--text-sub); margin-bottom: 1.5rem;">
              Bạn làm đúng <strong>${results.score}/${results.total}</strong> câu.
            </p>
            <div style="background: var(--bg-card); display: inline-block; padding: 1.25rem 2.5rem; border-radius: 12px; border: 1px solid var(--accent-cyan); margin-bottom: 1.5rem;">
              <span style="font-size: 0.85rem; color: var(--text-muted); display: block;">ĐIỂM DỰ ĐOÁN ƯỚC TÍNH</span>
              <span style="font-size: 2.8rem; font-weight: 900; color: var(--accent-cyan);">${estimated}</span>
              <span style="font-size: 0.8rem; color: var(--accent-amber); display: block;">(Điểm ước tính chỉ mang tính tham khảo)</span>
            </div>
            <div style="max-width: 500px; margin: 0 auto; text-align: left; background: var(--bg-card); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-light); font-size: 0.9rem;">
              <strong>💡 Đề xuất lộ trình học tập:</strong>
              <ul style="margin-left: 1.25rem; margin-top: 0.5rem; line-height: 1.6;">
                <li>Độ khó khởi điểm được thiết lập ở <strong>Level ${estimated >= 650 ? 4 : 2}</strong>.</li>
                <li>Luyện tập 15-20 phút hàng ngày với <em>Daily Mission</em>.</li>
                <li>Tập trung rèn phản xạ nhận diện bẫy từ loại và liên từ trong Part 5.</li>
              </ul>
            </div>
            <div style="margin-top: 1.5rem;">
              <button class="btn" onclick="app.navigate('dashboard')">Về Dashboard</button>
            </div>
          </div>
        `;
      }
    });
    this.activeQuiz.render(stage);
  }

  renderDailyMission(stage) {
    const today = new Date().toISOString().split("T")[0];
    let missionQids = this.state.progress.dailyMission.questionIds;

    // Generate new mission if date changed or empty
    if (this.state.progress.dailyMission.date !== today || !missionQids || missionQids.length === 0) {
      // Pick 6 Part 5 + 4 Part 7 items
      const p5s = QUESTIONS.filter(q => q.part === 5).sort(() => 0.5 - Math.random()).slice(0, 6);
      const p7Passage = QUESTIONS.find(q => q.part === 7) || QUESTIONS[QUESTIONS.length - 1];
      const p7s = p7Passage.questions.map(sub => ({
        ...sub, part: 7, passage: p7Passage.passage, topic: p7Passage.topic, level: p7Passage.level
      }));
      const combined = [...p5s, ...p7s];
      missionQids = combined.map(q => q.id);
      this.state.progress.dailyMission = {
        date: today,
        questionIds: missionQids,
        completedIds: []
      };
      this.saveState();
    }

    // Collect questions
    const missionQuestions = [];
    missionQids.forEach(qid => {
      const q = this.findQuestionById(qid);
      if (q) missionQuestions.push(q);
    });

    const isCompleted = (this.state.progress.dailyMission.completedIds || []).length >= missionQuestions.length && missionQuestions.length > 0;

    stage.innerHTML = `
      <div class="card">
        <h2 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 0.5rem;">⚡ Nhiệm vụ Hằng ngày (${today})</h2>
        <p style="color: var(--text-sub); font-size: 0.95rem; margin-bottom: 1.25rem;">
          Bộ 10 câu hỏi tổng hợp tối ưu dựa trên thuật toán Spaced Repetition và các lỗi sai cần khắc phục.
        </p>
        <div class="stat-tile" style="margin-bottom: 1.25rem;">
          <span class="label">Tiến độ hôm nay</span>
          <span class="value">${this.state.progress.dailyMission.completedIds.length} / ${missionQuestions.length}</span>
          <span class="sub">${isCompleted ? "✅ Đã nhận thưởng +50 XP hôm nay" : "+50 XP khi hoàn thành tất cả câu hỏi"}</span>
        </div>
        ${isCompleted ? `
          <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid var(--accent-green); padding: 1rem; border-radius: 8px; margin-bottom: 1.25rem; font-size: 0.95rem;">
            🎉 <strong>Tuyệt vời!</strong> Bạn đã hoàn thành nhiệm vụ ngày hôm nay (+50 XP). Nhiệm vụ mới sẽ sẵn sàng vào ngày mai.
          </div>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            <button class="btn btn-secondary" onclick="app.launchDailyQuiz()">🔄 Ôn tập lại (Không tính thêm XP)</button>
            <button class="btn" onclick="app.navigate('minitest')">⏱️ Thi Mini Test 30 câu</button>
          </div>
        ` : `
          <button class="btn" onclick="app.launchDailyQuiz()">🚀 Bắt đầu làm ngay</button>
        `}
      </div>
    `;
  }

  launchDailyQuiz() {
    const stage = document.getElementById("stageContent");
    const today = new Date().toISOString().split("T")[0];
    const mission = this.state.progress.dailyMission;
    const missionQids = mission.questionIds || [];
    const isAlreadyCompleted = (mission.completedIds || []).length >= missionQids.length && mission.date === today && missionQids.length > 0;

    const missionQuestions = [];
    missionQids.forEach(qid => {
      const q = this.findQuestionById(qid);
      if (q) missionQuestions.push(q);
    });

    this.activeQuiz = new QuizController(missionQuestions, {
      title: isAlreadyCompleted ? "⚡ Ôn lại Nhiệm vụ ngày (Review Mode)" : "⚡ Nhiệm vụ ngày (Practice Mode)",
      isExamMode: false,
      onComplete: (res) => {
        if (!isAlreadyCompleted) {
          app.state.progress.dailyMission.completedIds = [...missionQids];
          app.gainXP(50);
          app.showToast("🎉 Hoàn thành xuất sắc Daily Mission! +50 XP");
        } else {
          app.showToast("Đã hoàn thành lượt ôn tập!");
        }
        app.saveState();
        app.navigate("dashboard");
      }
    });
    this.activeQuiz.render(stage);
  }

  startMiniTest() {
    const stage = document.getElementById("stageContent");
    // Draw 30 questions: 4 Part 1, 6 Part 2, 12 Part 5, 4 Part 6, 4 Part 7
    const p1s = QUESTIONS.filter(q => q.part === 1).sort(() => 0.5 - Math.random()).slice(0, 4);
    const p2s = QUESTIONS.filter(q => q.part === 2).sort(() => 0.5 - Math.random()).slice(0, 6);
    const p5s = QUESTIONS.filter(q => q.part === 5).sort(() => 0.5 - Math.random()).slice(0, 12);

    const p6Pool = [];
    QUESTIONS.filter(q => q.part === 6).forEach(p => {
      p.questions.forEach(sub => {
        p6Pool.push({ ...sub, part: 6, passage: p.passage, level: p.level, topic: p.topic });
      });
    });
    const p6s = p6Pool.slice(0, 4);

    const p7Pool = [];
    QUESTIONS.filter(q => q.part === 7).forEach(p => {
      p.questions.forEach(sub => {
        p7Pool.push({ ...sub, part: 7, passage: p.passage, level: p.level, topic: p.topic });
      });
    });
    const p7s = p7Pool.slice(0, 4);

    const miniTestPool = [...p1s, ...p2s, ...p5s, ...p6s, ...p7s];

    this.activeQuiz = new QuizController(miniTestPool, {
      title: "⏱️ Mini Test 30 câu (Quy đổi điểm ETS 10–990)",
      isExamMode: true,
      timeLimitMinutes: 20,
      onComplete: (results) => {
        const lTotal = results.listeningTotal || 10;
        const rTotal = results.readingTotal || 20;
        const lCorrect = results.listeningCorrect !== undefined ? results.listeningCorrect : Math.round((results.score / results.total) * 10);
        const rCorrect = results.readingCorrect !== undefined ? results.readingCorrect : (results.score - lCorrect);

        const lRatio = lTotal > 0 ? (lCorrect / lTotal) : 0;
        const rRatio = rTotal > 0 ? (rCorrect / rTotal) : 0;

        let lScore = Math.min(495, Math.max(5, Math.round((lRatio * 490 + 5) / 5) * 5));
        let rScore = Math.min(495, Math.max(5, Math.round((rRatio * 490 + 5) / 5) * 5));
        let totalEstimated = lScore + rScore;

        app.state.user.estimatedScore = totalEstimated;
        app.gainXP(60);
        app.saveState();

        stage.innerHTML = `
          <div class="card" style="text-align: center; padding: 2.5rem; max-width: 650px; margin: 0 auto; border: 2px solid var(--accent-amber);">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">📊</div>
            <h2 style="font-size: 1.8rem; font-weight: 900; color: #fff; margin-bottom: 0.35rem;">
              BẢNG BÁO CÁO ĐIỂM MINI TEST ETS
            </h2>
            <span style="font-size: 0.85rem; color: var(--accent-amber); font-weight: 600;">
              Thang điểm quy đổi chuẩn ETS xấp xỉ (10 - 990)
            </span>

            <div style="background: var(--bg-card); border: 2px solid var(--accent-cyan); border-radius: 14px; padding: 1.5rem; margin: 1.5rem 0;">
              <span style="font-size: 0.8rem; color: var(--text-muted); display: block; text-transform: uppercase; letter-spacing: 1px;">
                TỔNG ĐIỂM ƯỚC TÍNH (ESTIMATED TOTAL SCORE)
              </span>
              <div style="font-size: 3.5rem; font-weight: 900; color: var(--accent-cyan); line-height: 1.1; margin: 0.3rem 0;">
                ${totalEstimated} <span style="font-size: 1.2rem; color: var(--text-muted); font-weight: 600;">/ 990</span>
              </div>
              <div style="display: flex; justify-content: center; gap: 2rem; margin-top: 1rem; border-top: 1px solid var(--border-color); padding-top: 0.8rem;">
                <div>
                  <span style="font-size: 0.75rem; color: var(--text-sub); display: block;">🎧 LISTENING (${lCorrect}/${lTotal})</span>
                  <strong style="font-size: 1.4rem; color: var(--accent-green);">${lScore}</strong>
                </div>
                <div>
                  <span style="font-size: 0.75rem; color: var(--text-sub); display: block;">📖 READING (${rCorrect}/${rTotal})</span>
                  <strong style="font-size: 1.4rem; color: var(--accent-blue);">${rScore}</strong>
                </div>
                <div>
                  <span style="font-size: 0.75rem; color: var(--text-sub); display: block;">🎯 ĐỘ CHÍNH XÁC</span>
                  <strong style="font-size: 1.4rem; color: var(--accent-amber);">${results.score}/${results.total}</strong>
                </div>
              </div>
            </div>

            <div style="text-align: left; background: var(--bg-card); padding: 1rem 1.25rem; border-radius: 8px; border: 1px solid var(--border-light); font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.5rem;">
              <strong style="color: var(--accent-cyan);">💡 Nhận định từ Giảng viên TOEIC:</strong>
              <ul style="margin-left: 1.25rem; margin-top: 0.4rem;">
                <li>Điểm ước tính: <strong>${totalEstimated}/990</strong>. ${totalEstimated >= 750 ? "Trình độ cao, bạn đã nắm rất vững cấu trúc bẫy của đề thi ETS!" : totalEstimated >= 550 ? "Nền tảng khá tốt, cần tăng tốc độ xử lý Part 5 & 6 để dành thêm thời gian cho Part 7." : "Nên tập trung luyện thêm từ vựng cốt lõi và làm lại các câu trong Sổ tay lỗi sai."}</li>
                <li>Đã cộng thưởng <strong>+60 XP</strong> vào hồ sơ cấp bậc.</li>
                <li>Điểm số trên Dashboard đã được đồng bộ tự động.</li>
              </ul>
            </div>

            <button class="btn" style="padding: 0.8rem 2.2rem; font-size: 1rem;" onclick="app.navigate('dashboard')">
              Về Dashboard
            </button>
          </div>
        `;
      }
    });
    this.activeQuiz.render(stage);
  }

  startPartPractice(partNum) {
    const stage = document.getElementById("stageContent");
    let pool = [];
    let title = `📝 Luyện chuyên sâu Part ${partNum}`;
    if (partNum === 1) {
      pool = QUESTIONS.filter(q => q.part === 1);
      title = "🎧 Luyện Part 1: Mô tả tranh (Photographs)";
    } else if (partNum === 2) {
      pool = QUESTIONS.filter(q => q.part === 2);
      title = "🗣️ Luyện Part 2: Hỏi & Đáp (Question - Response)";
    } else if (partNum === 5) {
      pool = QUESTIONS.filter(q => q.part === 5);
      title = "📝 Luyện Part 5: Hoàn thành câu (Incomplete Sentences)";
    } else if (partNum === 6) {
      QUESTIONS.filter(q => q.part === 6).forEach(p => {
        p.questions.forEach(sub => {
          pool.push({
            ...sub,
            part: 6,
            passage: p.passage,
            level: p.level,
            topic: p.topic
          });
        });
      });
      title = "📄 Luyện Part 6: Điền đoạn văn (Text Completion)";
    } else if (partNum === 7) {
      QUESTIONS.filter(q => q.part === 7).forEach(p => {
        p.questions.forEach(sub => {
          pool.push({
            ...sub,
            part: 7,
            passage: p.passage,
            level: p.level,
            topic: p.topic
          });
        });
      });
      title = "📑 Luyện Part 7: Đọc hiểu đoạn văn (Reading Comprehension)";
    }

    this.activeQuiz = new QuizController(pool, {
      title: title,
      isExamMode: false,
      onComplete: () => {
        app.navigate("dashboard");
      }
    });
    this.activeQuiz.render(stage);
  }

  // --- TRAP HUNTER MODULE ---
  renderTrapHunter(stage) {
    const categories = [
      {
        key: "sound",
        title: "🎧 Bẫy từ gần âm & đồng âm (Similar Sound)",
        part: "Part 2",
        count: QUESTIONS.filter(q => q.trapCategory === "sound").length,
        desc: "Đề thi dùng các từ phát âm tương tự để gây nhiễu thính giác (ví dụ: copy / coffee, plan / plane, right / write).",
        tip: "Mẹo Giảng viên: Trong câu hỏi có từ nào nổi bật, nếu đáp án xuất hiện từ phát âm na ná tới 80% là bẫy!"
      },
      {
        key: "repeated-word",
        title: "🔄 Bẫy lặp từ & đổi nghĩa (Repeated Word)",
        part: "Part 2",
        count: QUESTIONS.filter(q => q.trapCategory === "repeated-word").length,
        desc: "Lặp lại chính xác từ trong câu hỏi nhưng đổi sang thì khác hoặc dùng một nghĩa hoàn toàn khác (ví dụ: firewall -> wall, park -> parking).",
        tip: "Mẹo Giảng viên: Thấy đáp án lặp nguyên xi từ của câu hỏi? Hãy cảnh giác cao độ!"
      },
      {
        key: "indirect",
        title: "🎭 Bẫy câu trả lời gián tiếp (Indirect Response)",
        part: "Part 2",
        count: QUESTIONS.filter(q => q.trapCategory === "indirect").length,
        desc: "Người trả lời không trả lời thẳng Yes/No hay danh từ mà nói vòng vo ('Họ chưa công bố', 'Tôi đang đợi hóa đơn').",
        tip: "Mẹo Giảng viên: Đây là dạng câu ăn điểm 700+! Câu nào nghe có vẻ không liên quan nhưng hợp logic thực tế thường là đáp án đúng."
      },
      {
        key: "word-form",
        title: "📐 Bẫy từ loại & ngữ pháp (Word-Form Trap)",
        part: "Part 5",
        count: QUESTIONS.filter(q => q.skillTags && q.skillTags.includes("word-form")).length,
        desc: "Bẫy nhận diện vị trí danh từ, tính từ, trạng từ sau động từ to-be, linking verb hay trước danh từ ghép.",
        tip: "Mẹo Giảng viên: Luôn nhìn 1-2 từ ngay phía trước và ngay phía sau chỗ trống trước khi dịch nghĩa."
      },
      {
        key: "paraphrase",
        title: "🔍 Bẫy Paraphrase & Suy luận (Paraphrase Trap)",
        part: "Part 7",
        count: QUESTIONS.filter(q => q.part === 7).length,
        desc: "Đề thi dùng các từ đồng nghĩa cấp tiến thay vì dùng lại từ gốc trong bài đọc (invoice = bill, remedial training = educational course).",
        tip: "Mẹo Giảng viên: Đáp án đúng trong Part 7 gần như luôn luôn là một dạng paraphrase của thông tin trong bài đọc."
      }
    ];

    stage.innerHTML = `
      <div class="card" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(6, 182, 212, 0.1)); border-color: var(--accent-amber);">
        <h2 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 0.35rem; color: var(--accent-amber);">
          🏹 Thợ săn bẫy TOEIC (Trap Hunter)
        </h2>
        <p style="color: var(--text-sub); font-size: 0.95rem;">
          Đề thi ETS luôn cài cắm các bẫy tâm lý quen thuộc. Hãy luyện tập nhận diện bẫy để biến điểm yếu thành phản xạ tự nhiên!
        </p>
      </div>

      <div class="trap-hunter-grid">
        ${categories.map(c => `
          <div class="trap-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span class="badge-tag">${c.part}</span>
              <span style="font-size: 0.8rem; color: var(--accent-cyan); font-weight: 700;">${c.count} câu chuyên đề</span>
            </div>
            <h3 style="font-size: 1.1rem; font-weight: 700;">${c.title}</h3>
            <p style="font-size: 0.85rem; color: var(--text-sub); line-height: 1.5;">${c.desc}</p>
            <div class="trap-box" style="margin-top: auto;">
              <strong style="color: var(--accent-amber);">💡 ${c.tip}</strong>
            </div>
            <button class="btn" style="margin-top: 0.5rem;" onclick="app.startTrapDrill('${c.key}')">🎯 Săn bẫy nhóm này</button>
          </div>
        `).join("")}
      </div>
    `;
  }

  startTrapDrill(trapKey) {
    let pool = [];
    if (["sound", "repeated-word", "indirect"].includes(trapKey)) {
      pool = QUESTIONS.filter(q => q.trapCategory === trapKey);
    } else if (trapKey === "word-form") {
      pool = QUESTIONS.filter(q => q.skillTags && q.skillTags.includes("word-form"));
    } else if (trapKey === "paraphrase") {
      QUESTIONS.filter(q => q.part === 7).forEach(p => {
        p.questions.forEach(sub => {
          pool.push({ ...sub, part: 7, passage: p.passage });
        });
      });
    }

    if (pool.length === 0) {
      this.showToast("Đang cập nhật thêm câu hỏi cho nhóm bẫy này!");
      return;
    }

    const stage = document.getElementById("stageContent");
    this.activeQuiz = new QuizController(pool, {
      title: `🏹 Chuyên đề Bẫy: ${trapKey.toUpperCase()}`,
      isExamMode: false,
      onComplete: () => {
        app.navigate("traphunter");
      }
    });
    this.activeQuiz.render(stage);
  }

  // --- VOCABULARY ARENA ---
  renderVocabArena(stage) {
    if (this.vocabIndex >= VOCAB.length) this.vocabIndex = 0;
    const v = VOCAB[this.vocabIndex];
    const b1Count = this.state.progress.leitnerBoxes.b1.length;
    const b2Count = this.state.progress.leitnerBoxes.b2.length;
    const b3Count = this.state.progress.leitnerBoxes.b3.length;
    const b4Count = this.state.progress.leitnerBoxes.b4.length;
    const b5Count = this.state.progress.leitnerBoxes.b5.length;

    stage.innerHTML = `
      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
          <div>
            <h2 style="font-size: 1.3rem; font-weight: 800;">🧠 Đấu trường Từ vựng Leitner</h2>
            <span style="font-size: 0.8rem; color: var(--text-sub);">Từ ${this.vocabIndex + 1} / ${VOCAB.length}</span>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-secondary" onclick="app.setVocabMode('card')" style="${this.vocabStudyMode === 'card' ? 'border-color: var(--accent-cyan);' : ''}">🃏 Flashcard</button>
            <button class="btn btn-secondary" onclick="app.setVocabMode('quiz')" style="${this.vocabStudyMode === 'quiz' ? 'border-color: var(--accent-cyan);' : ''}">🎯 Quiz</button>
            <button class="btn btn-secondary" onclick="app.setVocabMode('type')" style="${this.vocabStudyMode === 'type' ? 'border-color: var(--accent-cyan);' : ''}">⌨️ Gõ từ</button>
          </div>
        </div>

        <div class="leitner-boxes">
          <div class="l-box">Hộp 1 (Hàng ngày)<br><strong>${b1Count}</strong></div>
          <div class="l-box">Hộp 2 (3 ngày)<br><strong>${b2Count}</strong></div>
          <div class="l-box">Hộp 3 (7 ngày)<br><strong>${b3Count}</strong></div>
          <div class="l-box">Hộp 4 (14 ngày)<br><strong>${b4Count}</strong></div>
          <div class="l-box">Hộp 5 (Thành thạo)<br><strong>${b5Count}</strong></div>
        </div>
      </div>

      <div id="vocabArenaContent">
        ${this.getVocabModeHTML(v)}
      </div>
    `;
  }

  setVocabMode(mode) {
    this.vocabStudyMode = mode;
    this.renderVocabArena(document.getElementById("stageContent"));
  }

  getVocabModeHTML(v) {
    if (this.vocabStudyMode === "card") {
      return `
        <div class="flashcard" onclick="this.classList.toggle('flipped')" title="Bấm vào thẻ để lật">
          <div class="flashcard-inner">
            <div class="card-face card-front">
              <span class="badge-tag" style="margin-bottom: 0.5rem;">${v.topic}</span>
              <div class="word-title">${v.word}</div>
              <div class="word-ipa">${v.ipa} • <em>${v.pos}</em></div>
              <button class="icon-btn" onclick="event.stopPropagation(); app.speakWord('${v.word}')" title="Nghe phát âm">🔊</button>
              <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 1.5rem;">(Bấm vào thẻ để xem nghĩa & ví dụ)</span>
            </div>
            <div class="card-face card-back">
              <div class="word-meaning">${v.meaning_vi}</div>
              <div class="word-example">"${v.example}"</div>

              <div style="font-size: 0.85rem; margin-top: 0.5rem;">
                <strong>Collocations:</strong> ${v.collocations.join(", ")}
              </div>
              <div style="font-size: 0.85rem; margin-top: 0.35rem;">
                <strong>Word Family:</strong> ${v.wordFamily.join(", ")}
              </div>
              ${v.confusableWith && v.confusableWith.length ? `
                <div style="font-size: 0.85rem; margin-top: 0.35rem; color: var(--accent-amber);">
                  <strong>Dễ nhầm với:</strong> ${v.confusableWith.join(", ")}
                </div>
              ` : ""}
            </div>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-top: 1rem; gap: 0.75rem;">
          <button class="btn btn-outline-danger" style="flex: 1;" onclick="app.gradeVocab('${v.word}', false)">❌ Chưa nhớ (Hộp 1)</button>
          <button class="btn" style="flex: 1; background: var(--accent-green);" onclick="app.gradeVocab('${v.word}', true)">✅ Đã nhớ (Lên hộp)</button>
        </div>
      `;
    } else if (this.vocabStudyMode === "quiz") {
      // Multiple choice 4 options
      const distractors = VOCAB.filter(item => item.word !== v.word).sort(() => 0.5 - Math.random()).slice(0, 3);
      const choices = [v, ...distractors].sort(() => 0.5 - Math.random());
      return `
        <div class="card" style="padding: 2rem;">
          <span class="badge-tag">${v.pos}</span>
          <div style="font-size: 1.8rem; font-weight: 800; color: var(--accent-cyan); margin: 0.5rem 0;">${v.word}</div>
          <p style="color: var(--text-sub); margin-bottom: 1.25rem;">Chọn nghĩa tiếng Việt chính xác nhất của từ trên:</p>
          <div class="choices-grid">
            ${choices.map((c, i) => `
              <div class="choice-item" onclick="app.handleVocabQuizChoice(this, ${c.word === v.word}, '${v.word}')">
                <span class="key">${i + 1}</span>
                <span>${c.meaning_vi}</span>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    } else if (this.vocabStudyMode === "type") {
      return `
        <div class="card" style="padding: 2rem; text-align: center;">
          <span class="badge-tag">${v.pos}</span>
          <div style="font-size: 1.3rem; font-weight: 700; margin: 0.75rem 0;">"${v.meaning_vi}"</div>
          <p style="color: var(--text-sub); font-size: 0.9rem; margin-bottom: 1.5rem;">Gợi ý: từ có <strong>${v.word.length}</strong> ký tự, bắt đầu bằng '<strong>${v.word[0]}</strong>'</p>
          <div style="max-width: 320px; margin: 0 auto;">
            <input type="text" id="typeInput" placeholder="Gõ từ tiếng Anh..." style="width: 100%; padding: 0.75rem 1rem; border-radius: 8px; border: 2px solid var(--border-color); background: var(--bg-card); color: var(--text-main); font-size: 1.1rem; text-align: center; margin-bottom: 1rem;" onkeydown="if(event.key==='Enter') app.checkVocabType('${v.word}')" autofocus>
            <button class="btn" style="width: 100%;" onclick="app.checkVocabType('${v.word}')">Kiểm tra</button>
          </div>
          <div id="typeFeedback" style="margin-top: 1rem; font-weight: 600;"></div>
        </div>
      `;
    }
  }

  speakWord(text) {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "en-US";
      u.rate = 0.9;
      window.speechSynthesis.speak(u);
    } else {
      this.showToast("Trình duyệt không hỗ trợ Web Speech API.");
    }
  }

  gradeVocab(word, remembered) {
    const boxes = this.state.progress.leitnerBoxes;
    // Ensure all 5 boxes exist
    for (let i = 1; i <= 5; i++) {
      if (!Array.isArray(boxes[`b${i}`])) boxes[`b${i}`] = [];
    }

    let currentBox = 1;
    for (let i = 1; i <= 5; i++) {
      if (boxes[`b${i}`].includes(word)) {
        currentBox = i;
        break;
      }
    }

    // Remove word from all boxes
    for (let i = 1; i <= 5; i++) {
      boxes[`b${i}`] = boxes[`b${i}`].filter(w => w !== word);
    }

    if (remembered) {
      const nextBox = Math.min(5, currentBox + 1);
      boxes[`b${nextBox}`].push(word);
      this.gainXP(nextBox === 5 ? 10 : 5);
      this.sound.playCorrect();
      if (nextBox === 5) {
        this.showToast(`🌟 Từ "${word}" đã đạt cấp Thành thạo (Hộp 5)!`);
      }
    } else {
      boxes.b1.push(word);
      this.sound.playWrong();
    }
    this.saveState();
    this.vocabIndex = (this.vocabIndex + 1) % VOCAB.length;
    this.renderVocabArena(document.getElementById("stageContent"));
  }

  handleVocabQuizChoice(elem, isCorrect, word) {
    if (isCorrect) {
      elem.classList.add("correct");
      this.sound.playCorrect();
      this.gainXP(8);
      setTimeout(() => {
        this.gradeVocab(word, true);
      }, 700);
    } else {
      elem.classList.add("wrong");
      this.sound.playWrong();
      setTimeout(() => {
        this.gradeVocab(word, false);
      }, 900);
    }
  }

  checkVocabType(word) {
    const inp = document.getElementById("typeInput");
    const fb = document.getElementById("typeFeedback");
    if (!inp) return;
    const val = inp.value.trim().toLowerCase();
    if (val === word.toLowerCase()) {
      fb.innerHTML = `<span style="color: var(--accent-green);">Chính xác! (${word})</span>`;
      this.sound.playCorrect();
      this.gainXP(10);
      setTimeout(() => {
        this.gradeVocab(word, true);
      }, 800);
    } else {
      fb.innerHTML = `<span style="color: var(--accent-rose);">Sai rồi! Đáp án đúng là: <strong>${word}</strong></span>`;
      this.sound.playWrong();
      setTimeout(() => {
        this.gradeVocab(word, false);
      }, 1500);
    }
  }

  // --- ERROR NOTEBOOK ---
  renderErrorNotebook(stage) {
    const completed = this.state.progress.completedQuestions;
    const wrongQids = Object.keys(completed).filter(id => completed[id].timesWrong > 0);

    const wrongList = [];
    wrongQids.forEach(qid => {
      const found = this.findQuestionById(qid);
      if (found) {
        wrongList.push({ ...found, stat: completed[qid] });
      }
    });

    stage.innerHTML = `
      <div class="card">
        <h2 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 0.5rem;">📕 Sổ tay lỗi sai (Error Notebook)</h2>
        <p style="color: var(--text-sub); font-size: 0.95rem; margin-bottom: 1.25rem;">
          Hệ thống tự động ghi nhận các câu bạn từng làm sai để ôn tập lại định kỳ theo chu kỳ Spaced Repetition (1 - 3 - 7 - 14 ngày).
        </p>
        ${wrongList.length > 0 ? `
          <button class="btn" style="margin-bottom: 1.25rem;" onclick="app.practiceErrors()">🔄 Luyện tập lại toàn bộ nhóm lỗi này (${wrongList.length} câu)</button>
        ` : ""}
      </div>

      <div>
        ${wrongList.length === 0 ? `
          <div class="card" style="text-align: center; padding: 2.5rem; color: var(--text-muted);">
            ✨ Thật tuyệt vời! Bạn chưa có câu hỏi nào bị ghi vào sổ tay lỗi sai. Hãy tiếp tục giữ vững phong độ!
          </div>
        ` : wrongList.map(item => `
          <div class="error-item">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span class="badge-tag">Part ${item.part} • ${item.topic || 'General'}</span>
              <span style="font-size: 0.75rem; color: var(--accent-rose); font-weight: 700;">Sai ${item.stat.timesWrong} lần</span>
            </div>
            <div style="font-weight: 600; font-size: 1rem;">${item.stem}</div>
            <div style="font-size: 0.85rem; color: var(--text-sub);">
              <strong>Giải thích:</strong> ${item.explanation_vi || 'Xem chi tiết trong mục luyện tập'}
            </div>
            ${item.trap ? `
              <div style="font-size: 0.8rem; color: var(--accent-amber);">
                <strong>Cảnh báo bẫy:</strong> ${item.trap}
              </div>
            ` : ""}
          </div>
        `).join("")}
      </div>
    `;
  }

  practiceErrors() {
    const completed = this.state.progress.completedQuestions;
    const wrongQids = Object.keys(completed).filter(id => completed[id].timesWrong > 0);
    const pool = [];
    wrongQids.forEach(qid => {
      const found = this.findQuestionById(qid);
      if (found) pool.push(found);
    });

    if (pool.length === 0) return;
    const stage = document.getElementById("stageContent");
    this.activeQuiz = new QuizController(pool, {
      title: "🔄 Ôn tập Sổ tay lỗi sai",
      isExamMode: false,
      onComplete: () => {
        app.navigate("errors");
      }
    });
    this.activeQuiz.render(stage);
  }

  // --- SETTINGS & BACKUP MODAL ---
  openSettings() {
    const slot = document.getElementById("modalSlot");
    slot.hidden = false;
    slot.innerHTML = `
      <div class="modal-overlay" onclick="if(event.target===this) app.closeModal()">
        <div class="modal-card">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <h3 style="font-size: 1.15rem; font-weight: 700;">⚙️ Cài đặt & Sao lưu dữ liệu</h3>
            <button class="icon-btn" onclick="app.closeModal()">✕</button>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.8rem; font-size: 0.9rem;">
            <div>
              <label style="display: block; font-weight: 600; margin-bottom: 0.3rem;">Tên học viên:</label>
              <input type="text" id="settingName" value="${this.escapeHTML(this.state.user.name)}" style="width: 100%; padding: 0.5rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-card); color: var(--text-main);">
            </div>
            <div>
              <label style="display: block; font-weight: 600; margin-bottom: 0.3rem;">Mục tiêu TOEIC (10–990):</label>
              <input type="number" id="settingTarget" value="${this.state.user.targetScore || 750}" min="10" max="990" step="5" style="width: 100%; padding: 0.5rem; border-radius: 6px; border: 1px solid var(--border-color); background: var(--bg-card); color: var(--text-main);">
            </div>
            <button class="btn" style="background: var(--accent-green); margin-top: 0.2rem;" onclick="app.saveSettings()">💾 Lưu thay đổi cài đặt</button>
            <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
              <button class="btn btn-secondary" style="flex: 1;" onclick="app.exportData()">📤 Xuất file Backup JSON</button>
              <button class="btn btn-secondary" style="flex: 1;" onclick="document.getElementById('importFileInp').click()">📥 Nhập Backup JSON</button>
              <input type="file" id="importFileInp" accept=".json" style="display: none;" onchange="app.importData(event)">
            </div>
            <hr style="border: none; border-top: 1px solid var(--border-color); margin: 0.5rem 0;">
            <button class="btn btn-outline-danger" onclick="app.resetAllData()">⚠️ Xóa dữ liệu và làm lại từ đầu</button>
          </div>
        </div>
      </div>
    `;
  }

  saveSettings() {
    const nameInp = document.getElementById("settingName");
    const targetInp = document.getElementById("settingTarget");
    if (nameInp) {
      const val = nameInp.value.trim();
      if (val) this.state.user.name = val;
    }
    if (targetInp) {
      const val = parseInt(targetInp.value, 10);
      if (!isNaN(val) && val >= 10 && val <= 990) {
        this.state.user.targetScore = val;
      }
    }
    this.saveState();
    this.updateHeaderUI();
    this.closeModal();
    this.showToast("Đã lưu thông tin cài đặt thành công!");
    if (this.currentView === "dashboard") {
      this.renderDashboard(document.getElementById("stageContent"));
    }
  }

  closeModal() {
    const slot = document.getElementById("modalSlot");
    slot.hidden = true;
    slot.innerHTML = "";
  }

  exportData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state, null, 2));
    const dlAnchor = document.createElement("a");
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `TOEIC_Quest_Backup_${new Date().toISOString().split("T")[0]}.json`);
    dlAnchor.click();
    dlAnchor.remove();
    this.showToast("Đã xuất bản sao lưu thành công!");
  }

  importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        const validState = this.validateAndMergeState(imported);
        if (validState) {
          this.state = validState;
          this.saveState();
          this.closeModal();
          this.init();
          this.showToast("Đã nhập và xác thực dữ liệu thành công!");
        } else {
          alert("File JSON không hợp lệ hoặc cấu trúc dữ liệu không tương thích.");
        }
      } catch (err) {
        alert("Lỗi khi đọc file JSON: " + err.message);
      }
    };
    reader.readAsText(file);
  }

  resetAllData() {
    if (confirm("Bạn có chắc chắn muốn xóa toàn bộ lịch sử điểm và từ vựng không? Hành động này không thể hoàn tác.")) {
      localStorage.removeItem(STORAGE_KEY);
      this.state = this.loadState();
      this.saveState();
      this.closeModal();
      this.init();
      this.showToast("Đã khôi phục dữ liệu ban đầu.");
    }
  }

  flagQuestion(qid) {
    if (!this.state.progress.flaggedQuestions.includes(qid)) {
      this.state.progress.flaggedQuestions.push(qid);
      this.saveState();
      this.showToast(`Đã đánh dấu câu ${qid} để kiểm tra.`);
    }
  }

  // --- BOSS LEVEL ENGINE & PROMOTION ---
  promoteCyberRole() {
    const roles = ["Intern", "Junior Analyst", "Senior Specialist", "Team Lead", "CISO"];
    const currentBase = (this.state.user.role || "Intern").replace(/\s*\(.*?\)/, "").trim();
    const currentIdx = roles.indexOf(currentBase);
    let nextRole = "CISO (Master)";
    if (currentIdx !== -1 && currentIdx < roles.length - 1) {
      nextRole = roles[currentIdx + 1];
    } else if (this.state.user.role === "CISO") {
      nextRole = "CISO (Master)";
    } else if (this.state.user.role && this.state.user.role.includes("Master")) {
      nextRole = "CISO (Honorary Master)";
    }
    this.state.user.role = nextRole;
    this.state.user.level += 2;
    this.state.progress.bossStats = this.state.progress.bossStats || { bossDefeated: 0, lastDefeatedDate: "", highestTitleEarned: "Intern" };
    this.state.progress.bossStats.bossDefeated += 1;
    this.state.progress.bossStats.lastDefeatedDate = new Date().toISOString().split("T")[0];
    this.state.progress.bossStats.highestTitleEarned = nextRole;
    this.saveState();
    this.updateHeaderUI();
    return nextRole;
  }

  renderBossArena(stage) {
    const roles = ["Intern", "Junior Analyst", "Senior Specialist", "Team Lead", "CISO"];
    const currentBase = this.state.user.role.replace(" (Master)", "");
    const currentIdx = roles.indexOf(currentBase);
    const nextRole = (currentIdx !== -1 && currentIdx < roles.length - 1) ? roles[currentIdx + 1] : "CISO (Honorary Master)";
    const bossCount = this.state.progress.bossStats ? this.state.progress.bossStats.bossDefeated : 0;

    stage.innerHTML = `
      <div class="boss-arena">
        <div class="boss-header-bar">
          <div class="boss-profile">
            <!-- Boss Avatar SVG: Zero-Day Shadow Titan -->
            <svg class="boss-avatar-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="titanGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.8"/>
                  <stop offset="100%" stop-color="#881337" stop-opacity="0.2"/>
                </radialGradient>
              </defs>
              <polygon points="50,5 92,28 92,72 50,95 8,72 8,28" fill="url(#titanGlow)" stroke="#f43f5e" stroke-width="3"/>
              <!-- Cyber Skull Face -->
              <path d="M28,35 C28,25 72,25 72,35 C72,55 65,65 58,68 L58,78 L42,78 L42,68 C35,65 28,55 28,35 Z" fill="#0f172a" stroke="#f43f5e" stroke-width="2"/>
              <!-- Glowing Red Eyes -->
              <circle cx="40" cy="42" r="5" fill="#f43f5e"/>
              <circle cx="40" cy="42" r="2" fill="#fff"/>
              <circle cx="60" cy="42" r="5" fill="#f43f5e"/>
              <circle cx="60" cy="42" r="2" fill="#fff"/>
              <!-- Cyber Circuit lines -->
              <line x1="20" y1="50" x2="30" y2="50" stroke="#f43f5e" stroke-width="2"/>
              <line x1="70" y1="50" x2="80" y2="50" stroke="#f43f5e" stroke-width="2"/>
              <line x1="50" y1="78" x2="50" y2="90" stroke="#f43f5e" stroke-width="2"/>
              <!-- Teeth / Grid -->
              <line x1="45" y1="72" x2="55" y2="72" stroke="#f43f5e" stroke-width="2"/>
              <line x1="47" y1="68" x2="47" y2="76" stroke="#f43f5e" stroke-width="1.5"/>
              <line x1="53" y1="68" x2="53" y2="76" stroke="#f43f5e" stroke-width="1.5"/>
            </svg>
            <div>
              <span class="badge-tag" style="background: rgba(244, 63, 94, 0.2); border-color: var(--accent-rose); color: var(--accent-rose);">
                🚨 MÃ NGUY HIỂM: APT-404 ZERO-DAY
              </span>
              <h2 style="font-size: 1.5rem; font-weight: 800; color: #fff; margin: 0.2rem 0;">
                SHADOW TITAN: ZERO-DAY RANSOMWARE
              </h2>
              <span style="font-size: 0.85rem; color: var(--text-sub);">
                Mục tiêu đe dọa: Xuyên thủng mạng lõi tập đoàn HexaTech & mã hóa máy chủ SQL
              </span>
            </div>
          </div>

          <div style="text-align: right;">
            <span style="font-size: 0.8rem; color: var(--text-muted); display: block;">CHIẾN TÍCH BOSS</span>
            <span style="font-size: 1.6rem; font-weight: 900; color: var(--accent-amber);">${bossCount}</span>
            <span style="font-size: 0.8rem; color: var(--text-sub); display: block;">lần tiêu diệt</span>
          </div>
        </div>

        <div class="card" style="line-height: 1.6; font-size: 0.95rem;">
          <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--accent-cyan); margin-bottom: 0.5rem;">
            📜 BẢN ĐẶC TẢ TÌNH BÁO SỰ CỐ (INCIDENT RESPONSE BRIEFING)
          </h3>
          <p style="margin-bottom: 0.8rem;">
            Một cuộc tấn công có chủ đích quy mô lớn (APT) đang phát tán mã độc tống tiền thông qua lỗ hổng bảo mật zero-day. Đội ngũ SOC cần bạn trực tiếp chỉ huy phản kích bằng kiến thức tiếng Anh chuyên sâu và phản xạ nhận diện bẫy!
          </p>

          <div style="background: var(--bg-card); border-left: 4px solid var(--accent-amber); padding: 1rem; border-radius: 0 8px 8px 0; margin-bottom: 1rem;">
            <strong style="color: var(--accent-amber);">⚔️ QUY TẮC CHIẾN ĐẤU (COMBAT RULES):</strong>
            <ul style="margin-left: 1.25rem; margin-top: 0.35rem; font-size: 0.9rem;">
              <li><strong>Thời gian giới hạn:</strong> 20 phút để hoàn thành 25 câu hỏi tổng hợp khó (Level 4–5).</li>
              <li><strong>Sát thương lên Boss:</strong> Mỗi câu đúng trừ <strong>100 HP</strong> (Combo đúng liên tiếp x2, x3 trừ <strong>150 HP</strong>!).</li>
              <li><strong>Tường lửa bị xuyên thủng:</strong> Mỗi câu sai khiến <em>System Integrity</em> giảm <strong>10%</strong>. Về 0% là thất bại!</li>
              <li><strong>Điều kiện Thắng & Thăng chức:</strong> Tiêu diệt Boss (hạ HP về 0) hoặc kết thúc 25 câu với độ chính xác &ge; 72%.</li>
            </ul>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; background: var(--bg-card); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-light);">
            <div>
              <span style="font-size: 0.8rem; color: var(--text-muted);">CẤP BẬC HIỆN TẠI:</span>
              <div style="font-weight: 800; color: var(--accent-cyan); font-size: 1.1rem;">${this.state.user.role}</div>
            </div>
            <div style="font-size: 1.5rem; color: var(--accent-amber);">➔</div>
            <div>
              <span style="font-size: 0.8rem; color: var(--text-muted);">CẤP BẬC SẼ ĐƯỢC THĂNG CHỨC:</span>
              <div style="font-weight: 800; color: var(--accent-green); font-size: 1.1rem;">${nextRole} 🎖️</div>
            </div>
          </div>
        </div>

        <div style="text-align: center; margin-top: 0.5rem;">
          <button class="btn" style="background: linear-gradient(135deg, #e11d48, #be123c); padding: 0.9rem 2.5rem; font-size: 1.1rem; box-shadow: 0 0 20px rgba(225, 29, 72, 0.4);" onclick="app.launchBossBattle()">
            ⚔️ KÍCH HOẠT QUY TRÌNH ỨNG CỨU (BẮT ĐẦU CHIẾN BOSS)
          </button>
        </div>
      </div>
    `;
  }

  launchBossBattle() {
    const stage = document.getElementById("stageContent");
    const flatList = this.getAllQuestionsFlat();

    const hardPool = flatList.filter(q => (q.level || 3) >= 4);
    const midPool = flatList.filter(q => (q.level || 3) === 3);
    const combined = [...hardPool.sort(() => 0.5 - Math.random()), ...midPool.sort(() => 0.5 - Math.random())];
    const bossQuestions = combined.slice(0, 25);

    this.activeQuiz = new BossBattleController(bossQuestions, {
      onComplete: () => {}
    });
    this.activeQuiz.render(stage);
  }
}

/**
 * =====================================================================
 * QUIZ CONTROLLER (Adaptive Engine, Timer, Explanation, Feedback)
 * =====================================================================
 */

const app = new ToeicQuestApp();
window.addEventListener("DOMContentLoaded", () => {
  app.init();
});
