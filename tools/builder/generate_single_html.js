const fs = require('fs');
const path = require('path');

const vocab = require('./vocab.js');
const chapters = require('./chapters_data.js');
const ch1 = require('./chapter1.js');
const ch2 = require('./chapter2.js');
const ch3 = require('./chapter3.js');
const ch4 = require('./chapter4.js');

const allQuestions = [...ch1, ...ch2, ...ch3, ...ch4];

console.log(`Generating upgraded index.html with ${allQuestions.length} questions, ${chapters.length} chapters, ${vocab.length} vocab items...`);

function buildHtml() {
  return `<!DOCTYPE html>
<html lang="vi" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NovaBank Cyber Siege - TOEIC SOC Adventure 550–750</title>
  <style>
    /* =========================================================================
       1. CSS RESET & COLOR TOKENS (LIGHT / DARK SOC CYBER THEME)
       ========================================================================= */
    :root {
      --bg-main: #0b1120;
      --bg-surface: #131d31;
      --bg-card: #1e293b;
      --bg-elevated: #28364d;
      --border-color: #334155;
      --border-light: #475569;
      --text-main: #f8fafc;
      --text-sub: #94a3b8;
      --text-muted: #64748b;
      --accent-cyan: #06b6d4;
      --accent-emerald: #10b981;
      --accent-amber: #f59e0b;
      --accent-rose: #f43f5e;
      --accent-purple: #8b5cf6;
      --accent-blue: #3b82f6;
      --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
      --shadow-md: 0 6px 18px rgba(0, 0, 0, 0.4);
      --shadow-lg: 0 12px 30px rgba(0, 0, 0, 0.5);
      --radius-sm: 6px;
      --radius-md: 10px;
      --radius-lg: 16px;
      --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }

    [data-theme="light"] {
      --bg-main: #f1f5f9;
      --bg-surface: #ffffff;
      --bg-card: #f8fafc;
      --bg-elevated: #e2e8f0;
      --border-color: #cbd5e1;
      --border-light: #94a3b8;
      --text-main: #0f172a;
      --text-sub: #475569;
      --text-muted: #64748b;
      --accent-cyan: #0284c7;
      --accent-emerald: #059669;
      --accent-amber: #d97706;
      --accent-rose: #e11d48;
      --accent-purple: #7c3aed;
      --accent-blue: #2563eb;
      --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);
      --shadow-md: 0 6px 18px rgba(0, 0, 0, 0.08);
      --shadow-lg: 0 12px 30px rgba(0, 0, 0, 0.12);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-tap-highlight-color: transparent;
    }

    body {
      font-family: var(--font-sans);
      background-color: var(--bg-main);
      color: var(--text-main);
      line-height: 1.5;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      transition: background-color 0.25s ease, color 0.25s ease;
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }

    /* =========================================================================
       2. HEADER & NAVIGATION BAR
       ========================================================================= */
    header {
      background: var(--bg-surface);
      border-bottom: 1px solid var(--border-color);
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: var(--shadow-sm);
    }

    .header-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0.65rem 1rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 0.75rem;
    }

    .brand-logo {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      cursor: pointer;
      text-decoration: none;
      color: inherit;
    }

    .brand-badge {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
      color: #fff;
      font-weight: 800;
      font-size: 1.15rem;
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 15px rgba(6, 182, 212, 0.4);
    }

    .brand-title {
      font-weight: 800;
      font-size: 1.05rem;
      letter-spacing: -0.3px;
      display: flex;
      flex-direction: column;
    }

    .brand-title small {
      font-size: 0.72rem;
      font-weight: 600;
      color: var(--accent-cyan);
      letter-spacing: 0.5px;
    }

    .player-stats-bar {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--bg-card);
      padding: 0.35rem 0.75rem;
      border-radius: 999px;
      border: 1px solid var(--border-color);
      font-size: 0.85rem;
      font-weight: 600;
    }

    .stat-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
    }

    .stat-divider {
      color: var(--border-light);
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .btn-icon {
      background: var(--bg-card);
      color: var(--text-main);
      border: 1px solid var(--border-color);
      width: 38px;
      height: 38px;
      border-radius: var(--radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 1.1rem;
      transition: all 0.2s;
    }

    .btn-icon:hover, .btn-icon:focus-visible {
      background: var(--bg-elevated);
      border-color: var(--accent-cyan);
      outline: none;
    }

    /* NAVIGATION TABS */
    .nav-tabs-wrapper {
      background: var(--bg-surface);
      border-bottom: 1px solid var(--border-color);
    }

    .nav-tabs {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      overflow-x: auto;
      scrollbar-width: none;
      padding: 0 1rem;
      gap: 0.35rem;
    }

    .nav-tabs::-webkit-scrollbar {
      display: none;
    }

    .tab-btn {
      background: transparent;
      border: none;
      color: var(--text-sub);
      font-family: inherit;
      font-weight: 700;
      font-size: 0.88rem;
      padding: 0.75rem 0.85rem;
      cursor: pointer;
      white-space: nowrap;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      border-bottom: 3px solid transparent;
      transition: all 0.2s;
    }

    .tab-btn:hover {
      color: var(--text-main);
    }

    .tab-btn.active {
      color: var(--accent-cyan);
      border-bottom-color: var(--accent-cyan);
    }

    /* =========================================================================
       3. MAIN LAYOUT CONTAINER
       ========================================================================= */
    .app-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1.25rem 1rem 3rem 1rem;
      width: 100%;
      flex: 1;
    }

    .view-panel {
      display: none;
    }

    .view-panel.active {
      display: block;
      animation: fadeIn 0.25s ease-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* STORY ADVENTURE VIEW */
    .story-header-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 1.25rem;
      margin-bottom: 1.25rem;
      box-shadow: var(--shadow-sm);
    }

    .chapter-selector {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .chapter-card-btn {
      background: var(--bg-surface);
      border: 2px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 0.85rem 1rem;
      text-align: left;
      cursor: pointer;
      color: var(--text-main);
      font-family: inherit;
      transition: all 0.2s;
      position: relative;
    }

    .chapter-card-btn:hover {
      border-color: var(--accent-cyan);
      transform: translateY(-2px);
    }

    .chapter-card-btn.active {
      border-color: var(--accent-cyan);
      background: var(--bg-elevated);
      box-shadow: 0 0 15px rgba(6, 182, 212, 0.25);
    }

    .chapter-num {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--accent-cyan);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .chapter-title {
      font-weight: 700;
      font-size: 0.95rem;
      margin: 0.25rem 0;
    }

    .chapter-meta {
      font-size: 0.78rem;
      color: var(--text-sub);
      display: flex;
      justify-content: space-between;
    }

    /* STORY NARRATIVE BOX */
    .narrative-box {
      background: linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-card) 100%);
      border-left: 4px solid var(--accent-cyan);
      border-radius: 0 var(--radius-md) var(--radius-md) 0;
      padding: 1rem 1.25rem;
      margin-bottom: 1.25rem;
      border-top: 1px solid var(--border-color);
      border-right: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);
    }

    .narrative-speaker {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 700;
      font-size: 0.95rem;
      color: var(--accent-cyan);
      margin-bottom: 0.4rem;
    }

    .narrative-speaker-avatar {
      width: 28px;
      height: 28px;
      background: var(--accent-cyan);
      color: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      font-weight: 800;
    }

    .narrative-dialogue-en {
      font-size: 1.02rem;
      font-weight: 500;
      color: var(--text-main);
      margin-bottom: 0.4rem;
      font-style: italic;
    }

    .narrative-dialogue-vi {
      font-size: 0.9rem;
      color: var(--text-sub);
      background: var(--bg-elevated);
      padding: 0.5rem 0.75rem;
      border-radius: var(--radius-sm);
      margin-top: 0.4rem;
      display: none;
    }

    .narrative-dialogue-vi.visible {
      display: block;
      animation: fadeIn 0.2s ease;
    }

    .narrative-actions {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.5rem;
      flex-wrap: wrap;
    }

    .btn-toggle-trans {
      background: transparent;
      border: 1px solid var(--border-color);
      color: var(--text-sub);
      font-family: inherit;
      font-size: 0.8rem;
      padding: 0.25rem 0.65rem;
      border-radius: var(--radius-sm);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      transition: all 0.15s;
    }

    .btn-toggle-trans:hover {
      color: var(--text-main);
      border-color: var(--accent-cyan);
    }

    /* QUESTION CARD */
    .question-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      box-shadow: var(--shadow-md);
      position: relative;
    }

    .boss-banner {
      background: linear-gradient(90deg, #dc2626, #991b1b);
      color: #fff;
      font-weight: 800;
      font-size: 0.85rem;
      padding: 0.4rem 1rem;
      border-radius: var(--radius-md) var(--radius-md) 0 0;
      margin: -1.5rem -1.5rem 1.25rem -1.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      letter-spacing: 0.5px;
      animation: pulseAlert 2s infinite ease-in-out;
    }

    @keyframes pulseAlert {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.8; }
    }

    .question-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tag-group {
      display: flex;
      gap: 0.4rem;
      flex-wrap: wrap;
    }

    .badge-tag {
      font-size: 0.72rem;
      font-weight: 700;
      padding: 0.2rem 0.55rem;
      border-radius: var(--radius-sm);
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }

    .tag-part { background: rgba(6, 182, 212, 0.15); color: var(--accent-cyan); }
    .tag-category { background: rgba(16, 185, 129, 0.15); color: var(--accent-emerald); }
    .tag-topic { background: rgba(245, 158, 11, 0.15); color: var(--accent-amber); }
    .tag-diff-easy { background: rgba(16, 185, 129, 0.2); color: var(--accent-emerald); }
    .tag-diff-medium { background: rgba(245, 158, 11, 0.2); color: var(--accent-amber); }
    .tag-diff-hard { background: rgba(244, 63, 94, 0.2); color: var(--accent-rose); }

    .passage-box {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 1.1rem;
      margin-bottom: 1.25rem;
      font-size: 0.95rem;
      line-height: 1.65;
      white-space: pre-line;
      color: var(--text-main);
      border-left: 4px solid var(--accent-purple);
      max-height: 360px;
      overflow-y: auto;
    }

    /* AUDIO CONTROLLER FOR PART 2 & 3 */
    .audio-player-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 0.85rem 1rem;
      margin-bottom: 1.25rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
    }

    .audio-ctrl-group {
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }

    .btn-play-audio {
      background: var(--accent-cyan);
      color: #fff;
      border: none;
      font-family: inherit;
      font-weight: 700;
      font-size: 0.9rem;
      padding: 0.5rem 1rem;
      border-radius: var(--radius-sm);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      transition: all 0.15s;
    }

    .btn-play-audio:hover {
      background: #0891b2;
      transform: scale(1.02);
    }

    .rate-btn {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      color: var(--text-sub);
      font-family: inherit;
      font-size: 0.78rem;
      padding: 0.3rem 0.55rem;
      border-radius: var(--radius-sm);
      cursor: pointer;
    }

    .rate-btn.active {
      background: var(--accent-cyan);
      color: #fff;
      border-color: var(--accent-cyan);
    }

    .audio-transcript-box {
      width: 100%;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-sm);
      padding: 0.75rem;
      font-size: 0.9rem;
      color: var(--text-main);
      display: none;
      white-space: pre-line;
      margin-top: 0.5rem;
    }

    .audio-transcript-box.visible {
      display: block;
      animation: fadeIn 0.2s;
    }

    /* QUESTION STEM */
    .question-stem {
      font-size: 1.12rem;
      font-weight: 700;
      line-height: 1.6;
      margin-bottom: 1.25rem;
      color: var(--text-main);
    }

    /* CHOICES LIST */
    .choices-list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      margin-bottom: 1.25rem;
    }

    .choice-btn {
      background: var(--bg-surface);
      border: 2px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 0.9rem 1.1rem;
      min-height: 52px;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 600;
      color: var(--text-main);
      text-align: left;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      transition: all 0.15s ease;
      position: relative;
    }

    .choice-btn:hover:not(:disabled) {
      border-color: var(--accent-cyan);
      background: var(--bg-elevated);
      transform: translateY(-2px);
    }

    .choice-btn:focus-visible {
      outline: 3px solid var(--accent-cyan);
      outline-offset: 2px;
    }

    .choice-key {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      color: var(--text-sub);
      width: 28px;
      height: 28px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.85rem;
      font-weight: 800;
      flex-shrink: 0;
    }

    .choice-text {
      flex: 1;
    }

    .choice-btn.selected-correct {
      background: rgba(16, 185, 129, 0.15) !important;
      border-color: var(--accent-emerald) !important;
      color: var(--accent-emerald) !important;
    }

    .choice-btn.selected-correct .choice-key {
      background: var(--accent-emerald);
      color: #fff;
      border-color: var(--accent-emerald);
    }

    .choice-btn.selected-wrong {
      background: rgba(244, 63, 94, 0.15) !important;
      border-color: var(--accent-rose) !important;
      color: var(--accent-rose) !important;
    }

    .choice-btn.selected-wrong .choice-key {
      background: var(--accent-rose);
      color: #fff;
      border-color: var(--accent-rose);
    }

    .choice-btn.reveal-correct {
      border-color: var(--accent-emerald) !important;
      background: rgba(16, 185, 129, 0.1) !important;
    }

    /* EXPLANATION CARD */
    .explanation-card {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 1.25rem;
      margin-top: 1.25rem;
      display: none;
      animation: fadeIn 0.25s ease;
    }

    .explanation-card.visible {
      display: block;
    }

    .exp-title {
      font-weight: 800;
      font-size: 1.05rem;
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .exp-title.correct { color: var(--accent-emerald); }
    .exp-title.wrong { color: var(--accent-rose); }

    .exp-section {
      margin-top: 0.5rem;
      font-size: 0.92rem;
      color: var(--text-main);
    }

    .tip-box {
      background: rgba(245, 158, 11, 0.1);
      border-left: 3px solid var(--accent-amber);
      padding: 0.65rem 0.85rem;
      border-radius: var(--radius-sm);
      margin-top: 0.6rem;
      font-size: 0.88rem;
      color: var(--text-main);
    }

    .vocab-chips-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin-top: 0.5rem;
    }

    .vocab-chip {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      padding: 0.35rem 0.65rem;
      border-radius: var(--radius-sm);
      font-size: 0.82rem;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
    }

    .vocab-chip button {
      background: transparent;
      border: none;
      color: var(--accent-cyan);
      cursor: pointer;
      font-size: 0.9rem;
    }

    .question-footer {
      display: flex;
      justify-content: flex-end;
      margin-top: 1.25rem;
    }

    .btn-next {
      background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
      color: #fff;
      font-weight: 700;
      font-size: 1rem;
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: var(--radius-md);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.2s;
      box-shadow: 0 4px 14px rgba(6, 182, 212, 0.4);
    }

    .btn-next:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(6, 182, 212, 0.5);
    }

    /* MOCK EXAM GRID */
    .exam-nav-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(36px, 1fr));
      gap: 0.4rem;
      margin-bottom: 1.25rem;
    }

    .exam-nav-btn {
      aspect-ratio: 1;
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-sm);
      color: var(--text-sub);
      font-family: inherit;
      font-size: 0.8rem;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s;
    }

    .exam-nav-btn.answered {
      background: rgba(6, 182, 212, 0.15);
      border-color: var(--accent-cyan);
      color: var(--accent-cyan);
    }

    .exam-nav-btn.current {
      outline: 2px solid var(--accent-cyan);
      outline-offset: 1px;
    }

    .exam-timer-chip {
      background: rgba(244, 63, 94, 0.15);
      color: var(--accent-rose);
      border: 1px solid var(--accent-rose);
      padding: 0.4rem 0.85rem;
      border-radius: 999px;
      font-weight: 800;
      font-size: 1rem;
      font-family: var(--font-mono);
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
    }

    /* ENDING & COMPLETION CARDS */
    .ending-card {
      background: var(--bg-card);
      border: 2px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 2rem 1.5rem;
      text-align: center;
      max-width: 650px;
      margin: 2rem auto;
      box-shadow: var(--shadow-lg);
    }

    .ending-badge {
      font-size: 3rem;
      margin-bottom: 0.75rem;
    }

    .ending-title {
      font-size: 1.6rem;
      font-weight: 800;
      margin-bottom: 0.75rem;
    }

    .ending-title.bad { color: var(--accent-rose); }
    .ending-title.good { color: var(--accent-emerald); }
    .ending-title.true { color: var(--accent-cyan); text-shadow: 0 0 20px rgba(6, 182, 212, 0.6); }

    .ending-desc {
      font-size: 1.05rem;
      color: var(--text-sub);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    /* SPACED REPETITION (SRS) FLASHCARDS VIEW */
    .srs-header {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .srs-boxes-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
      width: 100%;
    }

    .srs-box-pill {
      flex: 1;
      min-width: 140px;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 0.65rem 0.85rem;
      text-align: center;
    }

    .srs-box-count {
      font-size: 1.3rem;
      font-weight: 800;
      color: var(--accent-cyan);
    }

    .srs-box-label {
      font-size: 0.75rem;
      color: var(--text-sub);
      text-transform: uppercase;
      font-weight: 700;
    }

    .flashcard-wrapper {
      perspective: 1000px;
      max-width: 540px;
      margin: 1.5rem auto;
      min-height: 280px;
    }

    .flashcard-inner {
      position: relative;
      width: 100%;
      height: 280px;
      text-align: center;
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      transform-style: preserve-3d;
      cursor: pointer;
    }

    .flashcard-inner.flipped {
      transform: rotateY(180deg);
    }

    .flashcard-face {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      border-radius: var(--radius-lg);
      border: 2px solid var(--border-color);
      background: var(--bg-card);
      padding: 2rem 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: var(--shadow-md);
    }

    .flashcard-back {
      transform: rotateY(180deg);
      background: var(--bg-surface);
      border-color: var(--accent-cyan);
    }

    .fc-word {
      font-size: 2rem;
      font-weight: 800;
      color: var(--accent-cyan);
      margin-bottom: 0.25rem;
    }

    .fc-ipa {
      font-family: var(--font-mono);
      font-size: 1.05rem;
      color: var(--text-sub);
      margin-bottom: 0.5rem;
    }

    .fc-pos {
      font-size: 0.8rem;
      text-transform: uppercase;
      font-weight: 700;
      color: var(--accent-purple);
      padding: 0.2rem 0.6rem;
      background: rgba(139, 92, 246, 0.15);
      border-radius: 999px;
      margin-bottom: 1rem;
    }

    .fc-hint {
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    .fc-meaning {
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 0.75rem;
    }

    .fc-example {
      font-size: 0.95rem;
      color: var(--text-sub);
      font-style: italic;
      line-height: 1.5;
    }

    .srs-actions {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 1rem;
    }

    .btn-srs-wrong {
      background: rgba(244, 63, 94, 0.15);
      border: 1px solid var(--accent-rose);
      color: var(--accent-rose);
      font-family: inherit;
      font-weight: 700;
      padding: 0.65rem 1.25rem;
      border-radius: var(--radius-md);
      cursor: pointer;
      transition: all 0.2s;
    }

    .btn-srs-wrong:hover {
      background: var(--accent-rose);
      color: #fff;
    }

    .btn-srs-correct {
      background: rgba(16, 185, 129, 0.15);
      border: 1px solid var(--accent-emerald);
      color: var(--accent-emerald);
      font-family: inherit;
      font-weight: 700;
      padding: 0.65rem 1.25rem;
      border-radius: var(--radius-md);
      cursor: pointer;
      transition: all 0.2s;
    }

    .btn-srs-correct:hover {
      background: var(--accent-emerald);
      color: #fff;
    }

    /* DIAGNOSTICS & ANALYTICS VIEW */
    .diagnostic-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .diagnostic-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 1.25rem;
      box-shadow: var(--shadow-sm);
    }

    .score-hero {
      text-align: center;
      padding: 1rem 0;
    }

    .score-number {
      font-size: 3.5rem;
      font-weight: 900;
      color: var(--accent-cyan);
      line-height: 1;
      margin-bottom: 0.25rem;
    }

    .score-scale {
      font-size: 0.85rem;
      color: var(--text-sub);
    }

    .progress-bar-wrap {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: 999px;
      height: 8px;
      overflow: hidden;
      margin: 0.4rem 0 0.8rem 0;
    }

    .progress-bar-fill {
      height: 100%;
      background: var(--accent-cyan);
      border-radius: 999px;
      transition: width 0.4s ease;
    }

    /* =========================================================================
       4. NÂNG CẤP 1: TERMINAL & LOG INSPECTOR STYLES
       ========================================================================= */
    .terminal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(5px);
      z-index: 1050;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }

    .terminal-backdrop.open {
      display: flex;
      animation: fadeIn 0.2s;
    }

    .terminal-window {
      background: #050b14;
      border: 2px solid var(--accent-cyan);
      border-radius: var(--radius-md);
      box-shadow: 0 0 30px rgba(6, 182, 212, 0.4);
      width: 100%;
      max-width: 860px;
      height: 82vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      font-family: var(--font-mono);
    }

    .terminal-titlebar {
      background: #0f172a;
      border-bottom: 1px solid #1e293b;
      padding: 0.5rem 0.85rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--text-sub);
      font-size: 0.82rem;
    }

    .terminal-chips-bar {
      background: #09101d;
      padding: 0.45rem 0.75rem;
      border-bottom: 1px solid #1e293b;
      display: flex;
      flex-wrap: wrap;
      gap: 0.35rem;
      align-items: center;
    }

    .term-chip {
      background: #1e293b;
      border: 1px solid #334155;
      color: #38bdf8;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.15s;
    }

    .term-chip:hover {
      background: #0284c7;
      color: #fff;
    }

    .terminal-screen {
      flex: 1;
      padding: 0.85rem;
      overflow-y: auto;
      font-size: 0.85rem;
      line-height: 1.55;
      color: #a5f3fc;
      background: #030712;
    }

    .term-line-output {
      margin-bottom: 0.25rem;
      white-space: pre-wrap;
      word-break: break-all;
    }

    .term-prompt {
      color: #10b981;
      font-weight: 700;
    }

    .term-cmd {
      color: #f8fafc;
      font-weight: 600;
    }

    .term-alert {
      color: #f43f5e;
      font-weight: 700;
    }

    .term-success {
      color: #34d399;
    }

    .terminal-input-bar {
      background: #0f172a;
      border-top: 1px solid #1e293b;
      padding: 0.5rem 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .terminal-input-bar input {
      flex: 1;
      background: transparent;
      border: none;
      color: #f8fafc;
      font-family: var(--font-mono);
      font-size: 0.9rem;
      outline: none;
    }

    /* =========================================================================
       5. NÂNG CẤP 2: VOICE RECOGNITION (WEB SPEECH RECOGNITION) STYLES
       ========================================================================= */
    .btn-voice {
      background: rgba(139, 92, 246, 0.15);
      border: 1px solid var(--accent-purple);
      color: var(--accent-purple);
      font-family: inherit;
      font-weight: 700;
      font-size: 0.85rem;
      padding: 0.4rem 0.75rem;
      border-radius: var(--radius-sm);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      transition: all 0.2s;
    }

    .btn-voice:hover {
      background: var(--accent-purple);
      color: #fff;
    }

    .btn-voice.listening {
      background: #dc2626 !important;
      color: #fff !important;
      border-color: #ef4444 !important;
      animation: pulseAlert 1s infinite alternate;
    }

    .voice-feedback-banner {
      background: var(--bg-surface);
      border: 1px solid var(--accent-purple);
      border-radius: var(--radius-sm);
      padding: 0.5rem 0.75rem;
      margin-top: 0.6rem;
      font-size: 0.88rem;
      display: none;
      animation: fadeIn 0.2s;
    }

    .voice-feedback-banner.visible {
      display: block;
    }

    /* =========================================================================
       6. NÂNG CẤP 3: SPEED RUN DEFENSE MODE STYLES
       ========================================================================= */
    .speedrun-timer-bar {
      width: 100%;
      height: 12px;
      background: var(--bg-surface);
      border-radius: 999px;
      overflow: hidden;
      margin: 1rem 0;
      border: 1px solid var(--border-color);
    }

    .speedrun-timer-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--accent-cyan), var(--accent-emerald));
      width: 100%;
      transition: width 1s linear, background-color 0.3s;
    }

    .speedrun-timer-fill.danger {
      background: linear-gradient(90deg, #f59e0b, #ef4444);
    }

    .leaderboard-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
      font-size: 0.9rem;
    }

    .leaderboard-table th, .leaderboard-table td {
      padding: 0.65rem 0.85rem;
      text-align: left;
      border-bottom: 1px solid var(--border-color);
    }

    .leaderboard-table th {
      color: var(--accent-cyan);
      font-weight: 700;
    }

    /* =========================================================================
       7. NÂNG CẤP 5: PHISHING ANALYZER STYLES
       ========================================================================= */
    .mail-client {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-md);
      margin-top: 1rem;
    }

    .mail-topbar {
      background: var(--bg-card);
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--border-color);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .mail-tabs {
      display: flex;
      gap: 0.5rem;
    }

    .mail-tab-btn {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      color: var(--text-sub);
      padding: 0.4rem 0.8rem;
      border-radius: var(--radius-sm);
      cursor: pointer;
      font-family: inherit;
      font-size: 0.82rem;
      font-weight: 700;
    }

    .mail-tab-btn.active {
      background: var(--accent-cyan);
      color: #fff;
      border-color: var(--accent-cyan);
    }

    .mail-body-pane {
      padding: 1.5rem;
      background: var(--bg-surface);
    }

    .mail-header-row {
      display: flex;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }

    .mail-header-label {
      width: 80px;
      color: var(--text-sub);
      font-weight: 700;
    }

    .interactive-hotspot {
      display: inline-block;
      padding: 0.2rem 0.45rem;
      border-radius: var(--radius-sm);
      border: 2px dashed var(--accent-cyan);
      cursor: pointer;
      position: relative;
      transition: all 0.2s;
      background: rgba(6, 182, 212, 0.08);
      font-weight: 600;
    }

    .interactive-hotspot:hover {
      background: rgba(6, 182, 212, 0.25);
      border-color: var(--accent-amber);
    }

    .interactive-hotspot.flagged {
      background: rgba(244, 63, 94, 0.25);
      border: 2px solid var(--accent-rose);
      color: #fda4af;
    }

    .interactive-hotspot.flagged::after {
      content: " 🚩 ĐÃ BÁO CÁO";
      font-size: 0.72rem;
      font-weight: 800;
      color: #fff;
      background: var(--accent-rose);
      padding: 0.1rem 0.35rem;
      border-radius: 3px;
      margin-left: 0.3rem;
    }

    .flag-explanation-card {
      background: var(--bg-card);
      border-left: 4px solid var(--accent-rose);
      padding: 0.75rem 1rem;
      border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
      margin-top: 0.75rem;
      font-size: 0.88rem;
    }

    /* =========================================================================
       8. NÂNG CẤP 4: PRINT STYLES FOR OFFICIAL TOEIC PDF REPORT
       ========================================================================= */
    @media print {
      body {
        background: #fff !important;
        color: #000 !important;
      }
      header, .nav-tabs-wrapper, .header-actions, .btn-next, .btn-play-audio, .btn-toggle-trans, .modal-backdrop, .btn-icon, .btn-voice, .terminal-backdrop {
        display: none !important;
      }
      .app-container {
        max-width: 100% !important;
        padding: 0 !important;
      }
      .view-panel {
        display: none !important;
      }
      #viewAnalytics {
        display: block !important;
      }
      .diagnostic-card {
        border: 1px solid #ccc !important;
        box-shadow: none !important;
        background: #fff !important;
        color: #000 !important;
        break-inside: avoid;
      }
      .score-number {
        color: #0284c7 !important;
      }
      .print-official-header {
        display: block !important;
        text-align: center;
        border-bottom: 2px solid #000;
        padding-bottom: 1rem;
        margin-bottom: 1.5rem;
      }
    }

    .print-official-header {
      display: none;
    }

    /* MODALS & GENERAL DIALOGS */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(4px);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s;
    }

    .modal-backdrop.open {
      opacity: 1;
      pointer-events: auto;
    }

    .modal-window {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: 1.5rem;
      max-width: 540px;
      width: 100%;
      box-shadow: var(--shadow-lg);
      max-height: 90vh;
      overflow-y: auto;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 0.5rem;
    }

    .modal-title {
      font-weight: 800;
      font-size: 1.15rem;
    }

    .btn-close-modal {
      background: transparent;
      border: none;
      color: var(--text-sub);
      font-size: 1.4rem;
      cursor: pointer;
    }

    /* RESPONSIVE QUERIES */
    @media (max-width: 640px) {
      .header-inner {
        flex-direction: column;
        align-items: flex-start;
      }
      .player-stats-bar {
        width: 100%;
        justify-content: space-around;
      }
      .question-card {
        padding: 1rem;
      }
      .choice-btn {
        padding: 0.75rem 0.85rem;
        font-size: 0.95rem;
      }
    }
  </style>
</head>
<body>

  <!-- =======================================================================
       HEADER BANNER & PLAYER STATS
       ======================================================================= -->
  <header>
    <div class="header-inner">
      <div class="brand-logo" onclick="gameApp.switchView('story')">
        <div class="brand-badge">NB</div>
        <div class="brand-title">
          NovaBank Cyber Siege
          <small>TOEIC SOC Adventure 550–750</small>
        </div>
      </div>

      <!-- PLAYER STATUS -->
      <div class="player-stats-bar">
        <div class="stat-pill" title="Khiên bảo vệ mạng sống" id="statShields">
          🛡️ 🛡️ 🛡️
        </div>
        <span class="stat-divider">|</span>
        <div class="stat-pill" title="Điểm số">
          ⭐ <span id="statScore">0</span>
        </div>
        <span class="stat-divider">|</span>
        <div class="stat-pill" title="Hệ số Combo">
          🔥 x<span id="statMultiplier">1.0</span>
        </div>
        <span class="stat-divider">|</span>
        <div class="stat-pill" title="Cấp bậc nhân viên SOC" id="statRank">
          Intern Lv.1
        </div>
      </div>

      <!-- HEADER ACTIONS -->
      <div class="header-actions">
        <button class="btn-icon" id="btnTerminalToggle" onclick="gameApp.toggleTerminal()" title="Cửa sổ điều tra SOC Terminal / Wireshark (Phím ~)">💻</button>
        <button class="btn-icon" id="btnSoundToggle" onclick="gameApp.toggleSound()" title="Bật/Tắt âm thanh Web Audio (Phím S)">🔊</button>
        <button class="btn-icon" id="btnThemeToggle" onclick="gameApp.toggleTheme()" title="Đổi giao diện Sáng / Tối (Phím T)">🌓</button>
        <button class="btn-icon" onclick="gameApp.openHelpModal()" title="Phím tắt & Hướng dẫn (Phím ?)">⌨️</button>
      </div>
    </div>
  </header>

  <!-- =======================================================================
       NAVIGATION TABS (INCLUDES 5 UPGRADE MODES)
       ======================================================================= -->
  <nav class="nav-tabs-wrapper">
    <div class="nav-tabs">
      <button class="tab-btn active" data-tab="story" onclick="gameApp.switchView('story')">
        🎮 Cốt truyện (Story)
      </button>
      <button class="tab-btn" data-tab="practice" onclick="gameApp.switchView('practice')">
        🎯 Luyện theo dạng (Practice)
      </button>
      <button class="tab-btn" data-tab="mockexam" onclick="gameApp.switchView('mockexam')">
        ⏱️ Thi thử (Mini Test 30)
      </button>
      <button class="tab-btn" data-tab="speedrun" onclick="gameApp.switchView('speedrun')">
        ⚡ Sinh tồn (Speed Run)
      </button>
      <button class="tab-btn" data-tab="phishing" onclick="gameApp.switchView('phishing')">
        🎣 Thợ săn Phishing
      </button>
      <button class="tab-btn" data-tab="vocab" onclick="gameApp.switchView('vocab')">
        🧠 Sổ tay Từ vựng (SRS)
      </button>
      <button class="tab-btn" data-tab="analytics" onclick="gameApp.switchView('analytics')">
        📊 Báo cáo & Xuất PDF
      </button>
    </div>
  </nav>

  <!-- =======================================================================
       MAIN STAGE VIEW PANELS
       ======================================================================= -->
  <main class="app-container">

    <!-- VIEW 1: STORY ADVENTURE -->
    <section id="viewStory" class="view-panel active">
      <div class="story-header-card">
        <div class="chapter-selector" id="chapterSelectorList"></div>
        <div id="chapterIntroBanner"></div>
      </div>

      <!-- NARRATIVE DIALOGUE BOX -->
      <div class="narrative-box" id="narrativeBox">
        <div class="narrative-speaker" id="narrativeSpeaker">
          <div class="narrative-speaker-avatar" id="speakerAvatar">D</div>
          <span id="speakerName">Dave (SOC Lead)</span>
        </div>
        <div class="narrative-dialogue-en" id="narrativeDialogueEn">
          "Welcome to your first night shift at NovaBank SOC..."
        </div>
        <div class="narrative-dialogue-vi" id="narrativeDialogueVi">
          "Chào mừng bạn đến với ca trực đêm đầu tiên tại SOC NovaBank..."
        </div>
        <div class="narrative-actions">
          <button class="btn-toggle-trans" onclick="gameApp.toggleDialogueTranslation()">
            🇻🇳 Dịch tiếng Việt (Ẩn/Hiện)
          </button>
          <button class="btn-voice" onclick="gameApp.startVoiceShadowing()" title="Luyện đọc câu thoại tiếng Anh của nhân vật">
            🎙️ Luyện đọc câu thoại (Shadowing)
          </button>
        </div>
        <div class="voice-feedback-banner" id="shadowingFeedbackBanner"></div>
      </div>

      <!-- QUESTION CONTAINER -->
      <div id="storyQuestionSlot"></div>
    </section>

    <!-- VIEW 2: PRACTICE MODE -->
    <section id="viewPractice" class="view-panel">
      <div class="story-header-card">
        <h2 style="margin-bottom: 0.5rem; font-size: 1.25rem;">🎯 Chế độ Luyện theo Dạng bài & Chủ điểm</h2>
        <p style="color: var(--text-sub); font-size: 0.9rem; margin-bottom: 1rem;">
          Chọn dạng bài hoặc chủ điểm bạn muốn tăng cường. Hệ thống sẽ lọc các câu hỏi phù hợp nhất để rèn luyện có chủ đích.
        </p>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          <button class="rate-btn active" onclick="gameApp.filterPractice('all', this)">Tất cả dạng bài</button>
          <button class="rate-btn" onclick="gameApp.filterPractice('p2', this)">🎧 Part 2 (Hỏi - Đáp nghe)</button>
          <button class="rate-btn" onclick="gameApp.filterPractice('p3', this)">🗣️ Part 3 (Hội thoại nghe)</button>
          <button class="rate-btn" onclick="gameApp.filterPractice('p5', this)">📝 Part 5 (Điền từ vào câu)</button>
          <button class="rate-btn" onclick="gameApp.filterPractice('p6', this)">📄 Part 6 (Điền đoạn văn)</button>
          <button class="rate-btn" onclick="gameApp.filterPractice('p7', this)">📑 Part 7 (Đọc hiểu văn bản)</button>
          <button class="rate-btn" onclick="gameApp.filterPractice('grammar', this)">💡 Ngữ pháp trọng điểm</button>
          <button class="rate-btn" onclick="gameApp.filterPractice('infosec', this)">🔒 Từ vựng An toàn thông tin</button>
        </div>
      </div>
      <div id="practiceQuestionSlot"></div>
    </section>

    <!-- VIEW 3: MOCK EXAM (MINI TEST 30) -->
    <section id="viewMockExam" class="view-panel">
      <div class="story-header-card" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h2 style="font-size: 1.25rem; margin-bottom: 0.25rem;">⏱️ Thi thử Mini Test 30 câu (Quy đổi chuẩn ETS TOEIC)</h2>
          <p style="color: var(--text-sub); font-size: 0.88rem;">30 câu tổng hợp (Listening & Reading) - Giới hạn thời gian 25:00 phút.</p>
        </div>
        <div class="exam-timer-chip" id="examTimerDisplay">
          ⏱️ 25:00
        </div>
      </div>
      <div class="exam-nav-grid" id="examNavGrid"></div>
      <div id="examQuestionSlot"></div>
      <div style="display: flex; justify-content: space-between; margin-top: 1.25rem;">
        <button class="btn-toggle-trans" onclick="gameApp.prevExamQuestion()">⬅️ Câu trước</button>
        <button class="btn-next" onclick="gameApp.submitExam()">Nộp bài thi & Xem kết quả 🏁</button>
        <button class="btn-toggle-trans" onclick="gameApp.nextExamQuestion()">Câu sau ➡️</button>
      </div>
    </section>

    <!-- VIEW 4: UPGRADE 3 - ENDLESS SOC DEFENSE (SPEED RUN) -->
    <section id="viewSpeedRun" class="view-panel">
      <div class="story-header-card">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <div>
            <h2 style="font-size: 1.25rem; margin-bottom: 0.25rem; color: var(--accent-amber);">⚡ Chế độ Sinh tồn Vô tận (Speed Run Defense)</h2>
            <p style="color: var(--text-sub); font-size: 0.88rem;">
              Áp lực trực chiến dồn dập: 30 giây mỗi câu hỏi. Trả lời đúng để tích lũy combo điểm x5.0 và hồi phục khiên bảo vệ!
            </p>
          </div>
          <div style="display: flex; align-items: center; gap: 0.85rem;">
            <div class="stat-pill" style="font-size: 1.1rem; font-weight: 800; color: var(--accent-cyan);" id="speedWaveDisplay">
              🌊 Đợt: 1
            </div>
            <div class="exam-timer-chip" id="speedCountdownDisplay">
              ⏱️ 30s
            </div>
          </div>
        </div>

        <!-- PROGRESS TIMER BAR -->
        <div class="speedrun-timer-bar">
          <div class="speedrun-timer-fill" id="speedTimerFill"></div>
        </div>
      </div>

      <div id="speedQuestionSlot"></div>

      <!-- LOCAL LEADERBOARD -->
      <div class="story-header-card" style="margin-top: 1.5rem;">
        <h3 style="font-size: 1.1rem; color: var(--accent-cyan); margin-bottom: 0.5rem;">🏆 Bảng Vàng Kỷ Lục Sinh Tồn (Local Leaderboard)</h3>
        <p style="font-size: 0.85rem; color: var(--text-sub); margin-bottom: 0.75rem;">Thi đấu điểm cao và thời gian trụ vững cùng đồng nghiệp SOC:</p>
        <table class="leaderboard-table">
          <thead>
            <tr>
              <th>Hạng</th>
              <th>Chiến binh SOC</th>
              <th>Đợt trụ vững</th>
              <th>Điểm số</th>
              <th>Ngày lập</th>
            </tr>
          </thead>
          <tbody id="leaderboardBody"></tbody>
        </table>
      </div>
    </section>

    <!-- VIEW 5: UPGRADE 5 - INTERACTIVE EMAIL PHISHING ANALYZER -->
    <section id="viewPhishing" class="view-panel">
      <div class="story-header-card">
        <h2 style="font-size: 1.25rem; margin-bottom: 0.25rem; color: var(--accent-rose);">🎣 Thợ săn Phishing Tương tác (Interactive Email Analyzer)</h2>
        <p style="color: var(--text-sub); font-size: 0.88rem;">
          Đóng vai trò Chuyên viên SOC thẩm định thư nội bộ. Rê chuột hoặc chạm vào các vùng khả nghi để gắn cờ <b>Phishing Flag 🚩</b> trước khi đưa ra phán quyết!
        </p>
      </div>

      <div class="mail-client">
        <div class="mail-topbar">
          <div style="font-weight: 700; font-size: 0.9rem;">📧 NovaMail v3.4 - Hòm thư Kiểm tra An ninh</div>
          <div class="mail-tabs" id="phishingMailTabs">
            <button class="mail-tab-btn active" onclick="gameApp.loadPhishingMail(0)">Thư 1: Đình chỉ tài khoản</button>
            <button class="mail-tab-btn" onclick="gameApp.loadPhishingMail(1)">Thư 2: Lệnh chuyển tiền CEO</button>
            <button class="mail-tab-btn" onclick="gameApp.loadPhishingMail(2)">Thư 3: Hóa đơn nhà cung cấp</button>
          </div>
        </div>

        <div class="mail-body-pane" id="phishingMailContent"></div>
      </div>
    </section>

    <!-- VIEW 6: SPACED REPETITION (SRS) FLASHCARDS & ANKI EXPORT -->
    <section id="viewVocab" class="view-panel">
      <div class="srs-header">
        <div>
          <h2 style="font-size: 1.25rem; margin-bottom: 0.25rem;">🧠 Sổ tay Từ vựng & Lặp lại ngắt quãng (SRS)</h2>
          <p style="color: var(--text-sub); font-size: 0.88rem;">
            Tự động lưu từ mới và câu làm sai. Ôn tập theo phương pháp Leitner: Đúng giãn dần, sai lặp lại ngay.
          </p>
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <button class="btn-toggle-trans" onclick="gameApp.exportAnkiCSV()" style="border-color: var(--accent-emerald); color: var(--accent-emerald);">
            📥 Xuất Thẻ Anki (.CSV)
          </button>
          <button class="btn-play-audio" onclick="gameApp.openAddVocabModal()">
            + Thêm từ mới
          </button>
        </div>
      </div>

      <!-- LEITNER BOXES COUNTER -->
      <div class="srs-boxes-bar" id="srsBoxesBar"></div>

      <!-- 3D FLIP FLASHCARD -->
      <div class="flashcard-wrapper" onclick="gameApp.flipFlashcard()">
        <div class="flashcard-inner" id="flashcardInner">
          <div class="flashcard-face flashcard-front">
            <span class="fc-pos" id="fcPos">NOUN</span>
            <div class="fc-word" id="fcWord">vulnerability</div>
            <div class="fc-ipa" id="fcIpa">/ˌvʌl.nər.əˈbɪl.ə.ti/</div>
            <button class="btn-toggle-trans" onclick="event.stopPropagation(); gameApp.speakWord(document.getElementById('fcWord').innerText);" style="margin-bottom: 0.5rem;">
              🔊 Nghe phát âm
            </button>
            <div class="fc-hint">Bấm vào thẻ để lật xem nghĩa & ví dụ ↻</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="fc-meaning" id="fcMeaning">lỗ hổng bảo mật, điểm yếu</div>
            <div class="fc-example" id="fcExample">"The routine security scan identified a critical vulnerability in the server."</div>
            <div class="fc-hint" style="margin-top: 1rem;">Bấm để quay lại ↺</div>
          </div>
        </div>
      </div>

      <!-- SRS RESPONSE ACTIONS -->
      <div class="srs-actions">
        <button class="btn-srs-wrong" onclick="gameApp.rateSRS(false)">❌ Chưa thuộc (Về Hộp 1)</button>
        <button class="btn-srs-correct" onclick="gameApp.rateSRS(true)">✅ Đã nhớ (Lên Hộp tiếp)</button>
      </div>

      <!-- SEARCH VOCABULARY -->
      <div style="margin-top: 2rem;">
        <h3 style="font-size: 1.05rem; margin-bottom: 0.75rem;">📚 Danh sách từ vựng trong kho (Tra cứu nhanh)</h3>
        <input type="text" id="vocabSearchInput" oninput="gameApp.searchVocab(this.value)" placeholder="🔍 Tìm kiếm từ vựng tiếng Anh hoặc nghĩa tiếng Việt..." style="width: 100%; padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); background: var(--bg-card); color: var(--text-main); font-family: inherit; margin-bottom: 1rem;">
        <div id="vocabSearchList" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 0.75rem; max-height: 400px; overflow-y: auto;"></div>
      </div>
    </section>

    <!-- VIEW 7: ANALYTICS & PRINTABLE PDF REPORT -->
    <section id="viewAnalytics" class="view-panel">
      <!-- PRINT HEADER VISIBLE ONLY ON PRINT / PDF -->
      <div class="print-official-header">
        <h1 style="font-size: 1.6rem; text-transform: uppercase;">NOVABANK SECURITY OPERATIONS CENTER</h1>
        <h2 style="font-size: 1.1rem; color: #444; margin-top: 0.2rem;">OFFICIAL TOEIC COMPETENCY ASSESSMENT REPORT</h2>
        <p style="font-size: 0.85rem; color: #666; margin-top: 0.25rem;">Candidate: SOC Operator Trainee &bull; Date: <span id="printDateSlot"></span> &bull; Certificate ID: NB-SOC-2026-X88</p>
      </div>

      <div class="story-header-card" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h2 style="font-size: 1.25rem; margin-bottom: 0.25rem;">📊 Báo cáo Năng lực & Chẩn đoán Điểm yếu</h2>
          <p style="color: var(--text-sub); font-size: 0.9rem;">
            Đánh giá chi tiết tỉ lệ làm đúng theo từng dạng đề thi TOEIC và chủ điểm an ninh mạng.
          </p>
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <button class="btn-play-audio" onclick="gameApp.exportPDFReport()" style="background: var(--accent-purple);">
            🖨️ Xuất Báo cáo TOEIC PDF (In ấn)
          </button>
          <button class="btn-toggle-trans" onclick="gameApp.exportDataJSON()">
            💾 Sao lưu Dữ liệu (.JSON)
          </button>
        </div>
      </div>

      <div class="diagnostic-grid">
        <!-- SCORE TILE -->
        <div class="diagnostic-card">
          <h3 style="font-size: 1rem; margin-bottom: 0.5rem; color: var(--accent-cyan);">🎯 Ước tính Điểm số TOEIC</h3>
          <div class="score-hero">
            <div class="score-number" id="diagEstScore">--</div>
            <div class="score-scale">Thang điểm 10 – 990 (Dựa trên tỷ lệ câu trả lời đúng)</div>
          </div>
          <div style="font-size: 0.88rem; color: var(--text-sub); display: flex; justify-content: space-between;">
            <span>Listening: <b id="diagListenScore" style="color: var(--text-main);">--</b> / 495</span>
            <span>Reading: <b id="diagReadScore" style="color: var(--text-main);">--</b> / 495</span>
          </div>
        </div>

        <!-- BREAKDOWN BY PART -->
        <div class="diagnostic-card">
          <h3 style="font-size: 1rem; margin-bottom: 1rem; color: var(--accent-emerald);">📝 Tỉ lệ đúng theo Part đề thi</h3>
          <div id="diagPartBreakdown"></div>
        </div>

        <!-- WEAK POINTS & STRATEGY ADVICE -->
        <div class="diagnostic-card" style="grid-column: 1 / -1;">
          <h3 style="font-size: 1.05rem; margin-bottom: 0.75rem; color: var(--accent-amber);">💡 Chẩn đoán Lỗi sai & Chiến lược Ôn tập Tiếp theo</h3>
          <div id="diagAdviceBox" style="font-size: 0.92rem; line-height: 1.6; color: var(--text-main);"></div>
        </div>
      </div>
    </section>

  </main>

  <!-- =======================================================================
       UPGRADE 1: INTERACTIVE SOC TERMINAL & LOG INSPECTOR MODAL
       ======================================================================= -->
  <div class="terminal-backdrop" id="terminalBackdrop" onclick="gameApp.closeTerminal(event)">
    <div class="terminal-window" onclick="event.stopPropagation()">
      <div class="terminal-titlebar">
        <span>💻 NovaBank SOC Terminal - Linux 6.8.0-soc-security (x86_64)</span>
        <div style="display: flex; gap: 0.4rem; align-items: center;">
          <span style="color: #10b981;">🟢 CONNECTED: 10.0.4.12</span>
          <button onclick="gameApp.toggleTerminal()" style="background: transparent; border: none; color: #fff; cursor: pointer; font-size: 1.1rem; padding: 0 0.3rem;">✕</button>
        </div>
      </div>

      <!-- QUICK COMMAND SHORTCUT CHIPS -->
      <div class="terminal-chips-bar">
        <span style="color: #64748b; font-size: 0.72rem; text-transform: uppercase; font-weight: 700;">Lệnh nhanh:</span>
        <button class="term-chip" onclick="gameApp.execTermCmd('ls -la')">ls -la</button>
        <button class="term-chip" onclick="gameApp.execTermCmd('cat auth.log')">cat auth.log</button>
        <button class="term-chip" onclick="gameApp.execTermCmd('grep &quot;failed&quot; auth.log')">grep "failed" auth.log</button>
        <button class="term-chip" onclick="gameApp.execTermCmd('cat snort.alerts')">cat snort.alerts</button>
        <button class="term-chip" onclick="gameApp.execTermCmd('grep &quot;CobaltStrike&quot; snort.alerts')">grep "CobaltStrike"</button>
        <button class="term-chip" onclick="gameApp.execTermCmd('cat firewall.rules')">cat firewall.rules</button>
        <button class="term-chip" onclick="gameApp.execTermCmd('cat nginx.access')">cat nginx.access</button>
        <button class="term-chip" onclick="gameApp.execTermCmd('netstat -tuln')">netstat -tuln</button>
        <button class="term-chip" onclick="gameApp.execTermCmd('wireshark')">wireshark</button>
        <button class="term-chip" onclick="gameApp.execTermCmd('hint')">💡 hint (gợi ý)</button>
        <button class="term-chip" onclick="gameApp.execTermCmd('clear')">clear</button>
      </div>

      <!-- TERMINAL SCREEN OUTPUT -->
      <div class="terminal-screen" id="terminalScreen">
        <div class="term-line-output">NovaBank Security Operations Center - Forensics Terminal v4.2.1</div>
        <div class="term-line-output" style="color: #94a3b8;">Gõ <b>'help'</b> hoặc bấm các nút lệnh nhanh phía trên để điều tra log hệ thống.</div>
        <div class="term-line-output" style="color: #f59e0b;">Sự cố hiện hành: [INCIDENT-2026-042] The Midnight Breach (Phát hiện hoạt động APT42).</div>
        <div class="term-line-output">---------------------------------------------------------------------------------</div>
      </div>

      <!-- INPUT BAR -->
      <div class="terminal-input-bar">
        <span class="term-prompt">analyst@novabank-soc:~$</span>
        <input type="text" id="terminalInput" autocomplete="off" spellcheck="false" placeholder="Nhập lệnh (vd: grep &quot;failed&quot; auth.log, ping, ls, cat)...">
        <button class="term-chip" onclick="gameApp.handleTermInputSubmit()" style="background: var(--accent-cyan); color: #fff;">Gửi [Enter]</button>
      </div>
    </div>
  </div>

  <!-- =======================================================================
       MODAL: KEYBOARD SHORTCUTS & HELP
       ======================================================================= -->
  <div class="modal-backdrop" id="helpModal" onclick="gameApp.closeModals(event)">
    <div class="modal-window" onclick="event.stopPropagation()">
      <div class="modal-header">
        <div class="modal-title">⌨️ Phím tắt & Hướng dẫn Game</div>
        <button class="btn-close-modal" onclick="gameApp.closeModals()">&times;</button>
      </div>
      <div style="font-size: 0.92rem; line-height: 1.7; color: var(--text-main);">
        <p style="margin-bottom: 0.75rem;">Game hỗ trợ đầy đủ thao tác bàn phím tiện lợi:</p>
        <ul style="padding-left: 1.25rem; margin-bottom: 1rem;">
          <li><b>Phím 1, 2, 3, 4</b> hoặc <b>A, B, C, D</b>: Chọn đáp án tương ứng</li>
          <li><b>Phím Enter</b>: Chuyển sang câu tiếp theo</li>
          <li><b>Phím Space (Cách)</b>: Bật phát âm thanh Web Speech / Nghe lại câu hỏi</li>
          <li><b>Phím ~ (hoặc \`)</b>: Bật/Tắt cửa sổ điều tra SOC Terminal & Wireshark</li>
          <li><b>Phím V</b>: Kích hoạt nhận diện giọng nói (Web Speech Recognition)</li>
          <li><b>Phím S</b>: Bật / Tắt hiệu ứng âm thanh Web Audio</li>
          <li><b>Phím T</b>: Chuyển đổi giao diện Sáng / Tối (Dark/Light mode)</li>
          <li><b>Phím Esc</b>: Đóng bảng thông báo / modal</li>
        </ul>
        <div class="tip-box">
          🛡️ <b>Mẹo sinh tồn:</b> Mỗi câu trả lời sai bị trừ 1 khiên. Hãy đọc kỹ phần Mẹo bẫy đề thi để không bị mắc lừa!
        </div>
      </div>
    </div>
  </div>

  <!-- =======================================================================
       MODAL: ADD CUSTOM VOCABULARY
       ======================================================================= -->
  <div class="modal-backdrop" id="addVocabModal" onclick="gameApp.closeModals(event)">
    <div class="modal-window" onclick="event.stopPropagation()">
      <div class="modal-header">
        <div class="modal-title">+ Thêm Từ vựng mới vào Sổ tay</div>
        <button class="btn-close-modal" onclick="gameApp.closeModals()">&times;</button>
      </div>
      <form onsubmit="gameApp.submitAddVocab(event)" style="display: flex; flex-direction: column; gap: 0.75rem;">
        <div>
          <label style="font-size: 0.8rem; font-weight: 700; color: var(--text-sub);">Từ tiếng Anh (*):</label>
          <input type="text" id="newVocabWord" required placeholder="Ví dụ: authorization" style="width: 100%; padding: 0.5rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); background: var(--bg-surface); color: var(--text-main);">
        </div>
        <div>
          <label style="font-size: 0.8rem; font-weight: 700; color: var(--text-sub);">Phiên âm IPA:</label>
          <input type="text" id="newVocabIpa" placeholder="/ˌɔː.θər.aɪˈzeɪ.ʃən/" style="width: 100%; padding: 0.5rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); background: var(--bg-surface); color: var(--text-main);">
        </div>
        <div>
          <label style="font-size: 0.8rem; font-weight: 700; color: var(--text-sub);">Loại từ (pos):</label>
          <select id="newVocabPos" style="width: 100%; padding: 0.5rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); background: var(--bg-surface); color: var(--text-main);">
            <option value="noun">Danh từ (noun)</option>
            <option value="verb">Động từ (verb)</option>
            <option value="adj">Tính từ (adjective)</option>
            <option value="adv">Trạng từ (adverb)</option>
          </select>
        </div>
        <div>
          <label style="font-size: 0.8rem; font-weight: 700; color: var(--text-sub);">Nghĩa tiếng Việt (*):</label>
          <input type="text" id="newVocabMeaning" required placeholder="sự ủy quyền, sự cấp phép" style="width: 100%; padding: 0.5rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); background: var(--bg-surface); color: var(--text-main);">
        </div>
        <div>
          <label style="font-size: 0.8rem; font-weight: 700; color: var(--text-sub);">Câu ví dụ thực tế:</label>
          <textarea id="newVocabExample" rows="2" placeholder="Only authorized staff may access the production database." style="width: 100%; padding: 0.5rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); background: var(--bg-surface); color: var(--text-main); font-family: inherit;"></textarea>
        </div>
        <div style="display: flex; justify-content: flex-end; gap: 0.5rem; margin-top: 0.5rem;">
          <button type="button" class="btn-toggle-trans" onclick="gameApp.closeModals()">Hủy</button>
          <button type="submit" class="btn-play-audio">Lưu từ vựng</button>
        </div>
      </form>
    </div>
  </div>

  <!-- =======================================================================
       APPLICATION JAVASCRIPT CODE
       ======================================================================= -->
  <script>
  /**
   * =========================================================================
   * 1. MẢNG DỮ LIỆU CÂU HỎI (GAME_QUESTIONS JSON ARRAY)
   * 84 câu hỏi đầy đủ phân bố Part 2, Part 3, Part 5, Part 6, Part 7
   * =========================================================================
   */
  const GAME_QUESTIONS = ${JSON.stringify(allQuestions, null, 2)};

  /**
   * =========================================================================
   * 2. MẢNG DỮ LIỆU CÁC CHƯƠNG (GAME_CHAPTERS JSON ARRAY)
   * =========================================================================
   */
  const GAME_CHAPTERS = ${JSON.stringify(chapters, null, 2)};

  /**
   * =========================================================================
   * 3. MẢNG DỮ LIỆU TỪ VỰNG GỐC (GAME_VOCAB JSON ARRAY)
   * 60+ Từ vựng An toàn thông tin & Công sở
   * =========================================================================
   */
  const GAME_VOCAB = ${JSON.stringify(vocab, null, 2)};

  /**
   * =========================================================================
   * 4. HỆ THỐNG ÂM THANH THUẦN (WEB AUDIO API SOUND ENGINE)
   * =========================================================================
   */
  class SoundEngine {
    constructor() {
      this.enabled = true;
      this.ctx = null;
    }

    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
    }

    playClick() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(600, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
      } catch (e) {}
    }

    playCorrect() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const freqs = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 Arpeggio
        freqs.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, now + idx * 0.07);
          gain.gain.setValueAtTime(0.15, now + idx * 0.07);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.25);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + idx * 0.07);
          osc.stop(now + idx * 0.07 + 0.25);
        });
      } catch (e) {}
    }

    playWrong() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(160, now);
        osc.frequency.linearRampToValueAtTime(110, now + 0.3);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.3);
      } catch (e) {}
    }

    playBossSiren() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.linearRampToValueAtTime(800, now + 0.25);
        osc.frequency.linearRampToValueAtTime(400, now + 0.5);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.linearRampToValueAtTime(0.001, now + 0.5);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.5);
      } catch (e) {}
    }

    playBeep(freq = 880, duration = 0.1) {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {}
    }
  }

  /**
   * =========================================================================
   * 5. HỆ THỐNG PHÁT ÂM (WEB SPEECH SYNTHESIS ENGINE)
   * =========================================================================
   */
  class SpeechEngine {
    constructor() {
      this.synth = window.speechSynthesis || null;
      this.rate = 1.0;
      this.voice = null;
      this.initVoice();
    }

    initVoice() {
      if (!this.synth) return;
      const setVoice = () => {
        const voices = this.synth.getVoices();
        this.voice = voices.find(v => v.lang.startsWith("en-US") || v.lang.startsWith("en-GB")) || voices.find(v => v.lang.startsWith("en")) || null;
      };
      setVoice();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = setVoice;
      }
    }

    speak(text) {
      if (!this.synth) {
        alert("Trình duyệt của bạn không hỗ trợ Web Speech API.");
        return;
      }
      this.synth.cancel();
      const cleanText = text.replace(/<[^>]*>/g, "").replace(/\\[1\\]/g, "blank").trim();
      const utterance = new SpeechSynthesisUtterance(cleanText);
      if (this.voice) utterance.voice = this.voice;
      utterance.lang = "en-US";
      utterance.rate = this.rate;
      this.synth.speak(utterance);
    }

    stop() {
      if (this.synth) this.synth.cancel();
    }
  }

  /**
   * =========================================================================
   * 6. NÂNG CẤP 2: BỘ NHẬN DIỆN GIỌNG NÓI (WEB SPEECH RECOGNITION ENGINE)
   * Hỗ trợ luyện phát âm TOEIC Speaking & Trả lời bộ đàm SOC
   * =========================================================================
   */
  class VoiceEngine {
    constructor(gameApp) {
      this.app = gameApp;
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
      this.supported = !!SpeechRecognition;
      this.recognition = SpeechRecognition ? new SpeechRecognition() : null;
      this.isListening = false;
      this.mode = "answer"; // "answer" or "shadowing"
      this.targetSentence = "";

      if (this.recognition) {
        this.recognition.lang = "en-US";
        this.recognition.continuous = false;
        this.recognition.interimResults = false;

        this.recognition.onstart = () => {
          this.isListening = true;
          this.app.sound.playBeep(700, 0.08);
          this.updateUiState(true);
        };

        this.recognition.onend = () => {
          this.isListening = false;
          this.updateUiState(false);
        };

        this.recognition.onerror = (e) => {
          this.isListening = false;
          this.updateUiState(false);
          console.warn("Speech recognition error:", e.error);
        };

        this.recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript.trim().toLowerCase();
          const confidence = Math.round((event.results[0][0].confidence || 0.85) * 100);
          this.handleResult(transcript, confidence);
        };
      }
    }

    startListening(mode = "answer", targetSentence = "") {
      if (!this.supported) {
        alert("Trình duyệt hiện tại chưa hỗ trợ webkitSpeechRecognition. Bạn nên sử dụng Google Chrome hoặc Microsoft Edge để luyện nói!");
        return;
      }
      this.mode = mode;
      this.targetSentence = targetSentence;
      try {
        if (this.isListening) {
          this.recognition.stop();
        } else {
          this.recognition.start();
        }
      } catch (err) {
        console.warn(err);
      }
    }

    stopListening() {
      if (this.recognition && this.isListening) {
        this.recognition.stop();
      }
    }

    updateUiState(isListening) {
      const btn = document.getElementById("btnVoiceAnswer");
      if (btn) {
        btn.classList.toggle("listening", isListening);
        btn.innerText = isListening ? "🔴 Đang nghe bạn nói..." : "🎙️ Bộ đàm Trả lời (Voice Response)";
      }
    }

    handleResult(transcript, confidence) {
      if (this.mode === "answer") {
        this.matchChoice(transcript, confidence);
      } else if (this.mode === "shadowing") {
        this.evaluateShadowing(transcript);
      }
    }

    matchChoice(transcript, confidence) {
      const q = this.app.getCurrentActiveQuestion();
      if (!q) return;

      let matchedIdx = -1;
      const t = transcript.toLowerCase();

      // Check letter keywords: A, B, C, D
      if (t === "a" || t === "option a" || t === "choice a" || t.startsWith("a ")) matchedIdx = 0;
      else if (t === "b" || t === "option b" || t === "choice b" || t.startsWith("b ")) matchedIdx = 1;
      else if (t === "c" || t === "option c" || t === "choice c" || t.startsWith("c ")) matchedIdx = 2;
      else if (t === "d" || t === "option d" || t === "choice d" || t.startsWith("d ")) matchedIdx = 3;

      // Check exact choice text matches
      if (matchedIdx === -1) {
        q.choices.forEach((c, idx) => {
          const cleanChoice = c.toLowerCase().trim();
          if (t.includes(cleanChoice) || cleanChoice.includes(t)) {
            matchedIdx = idx;
          }
        });
      }

      if (matchedIdx !== -1) {
        const choiceNames = ["A", "B", "C", "D"];
        alert(\`🎙️ Đã nhận diện giọng nói: "\${transcript}" \\n➡️ Lựa chọn đáp án [\${choiceNames[matchedIdx]}] (Độ tin cậy: \${confidence}%)\`);
        this.app.selectChoice(matchedIdx);
      } else {
        alert(\`🎙️ Đã nghe: "\${transcript}"\\nChưa khớp rõ với 4 đáp án (A, B, C, D). Hãy thử đọc "Option A" hoặc đọc to từ khóa đáp án!\`);
      }
    }

    evaluateShadowing(transcript) {
      const banner = document.getElementById("shadowingFeedbackBanner");
      if (!banner) return;

      const targetWords = this.targetSentence.toLowerCase().replace(/[^a-z0-9 ]/g, "").split(/\\s+/);
      const spokenWords = transcript.toLowerCase().replace(/[^a-z0-9 ]/g, "").split(/\\s+/);

      let matches = 0;
      spokenWords.forEach(w => {
        if (targetWords.includes(w)) matches++;
      });

      const accuracy = Math.min(100, Math.round((matches / Math.max(1, targetWords.length)) * 100));
      banner.classList.add("visible");

      let verdict = "🌟 Xuất sắc! Phát âm rất chuẩn và ngữ điệu tự nhiên!";
      if (accuracy < 50) verdict = "🔄 Cần luyện tập thêm các âm đuôi và phát âm rõ từng từ.";
      else if (accuracy < 80) verdict = "👍 Khá tốt! Cần chú ý thêm độ lưu loát (fluency).";

      banner.innerHTML = \`
        <div><b>🎙️ Giọng nói nhận diện:</b> "\${transcript}"</div>
        <div style="margin-top: 0.25rem; color: var(--accent-cyan); font-weight: 700;">
          🎯 Điểm phát âm TOEIC Speaking: \${accuracy}/100 &bull; \${verdict}
        </div>
      \`;

      if (accuracy >= 60) {
        this.app.sound.playCorrect();
        this.app.score += 50;
        this.app.updateStatsUI();
      }
    }
  }

  /**
   * =========================================================================
   * 7. TRÌNH QUẢN LÝ GAME CHÍNH (GAME APPLICATION CONTROLLER)
   * Điều khiển 7 phân hệ chính bao gồm cả 5 tính năng nâng cấp mới!
   * =========================================================================
   */
  class GameApp {
    constructor() {
      this.sound = new SoundEngine();
      this.speech = new SpeechEngine();
      this.voice = new VoiceEngine(this);

      // State Story
      this.currentChapterId = 1;
      this.currentStoryIndex = 0;
      this.storyQuestions = [];
      this.selectedOption = null;
      this.isAnswerChecked = false;

      // Player Stats
      this.shields = 3;
      this.score = 0;
      this.streak = 0;
      this.multiplier = 1.0;
      this.completedChapters = new Set([1]);

      // History & Analytics
      this.statsHistory = {
        totalAnswered: 0,
        totalCorrect: 0,
        byPart: { 2: { c: 0, t: 0 }, 3: { c: 0, t: 0 }, 5: { c: 0, t: 0 }, 6: { c: 0, t: 0 }, 7: { c: 0, t: 0 } },
        byCategory: {}
      };

      // Spaced Repetition (SRS)
      this.srsVocab = [];
      this.currentSrsIndex = 0;

      // Mock Exam State
      this.examQuestions = [];
      this.examCurrentIdx = 0;
      this.examUserAnswers = {};
      this.examTimer = null;
      this.examTimeRemaining = 25 * 60;

      // Speed Run State (Nâng cấp 3)
      this.speedWave = 1;
      this.speedTimer = null;
      this.speedTimeRemaining = 30;
      this.speedScore = 0;
      this.speedCombo = 1.0;
      this.speedActiveQuestion = null;
      this.speedLeaderboard = [];

      // Phishing State (Nâng cấp 5)
      this.currentPhishingIndex = 0;
      this.phishingFlagsFound = new Set();

      // SOC Terminal State (Nâng cấp 1)
      this.termHistory = [];
      this.termHistoryIdx = -1;
      this.initTerminalData();

      this.loadStorage();
    }

    init() {
      this.renderChapterSelector();
      this.loadChapter(1);
      this.initSRS();
      this.updateStatsUI();
      this.initKeyboardShortcuts();
      this.updateAnalyticsUI();
      this.initTerminalInput();
      this.renderLeaderboard();
      this.loadPhishingMail(0);
    }

    getCurrentActiveQuestion() {
      if (document.getElementById("viewSpeedRun").classList.contains("active")) {
        return this.speedActiveQuestion;
      }
      return this.storyQuestions[this.currentStoryIndex];
    }

    /* ================= 1. LOCAL STORAGE ================= */
    loadStorage() {
      try {
        const saved = localStorage.getItem("novabank_soc_save_v2");
        if (saved) {
          const data = JSON.parse(saved);
          this.score = data.score || 0;
          this.shields = data.shields !== undefined ? data.shields : 3;
          if (this.shields <= 0) this.shields = 3;
          this.completedChapters = new Set(data.completedChapters || [1]);
          if (data.statsHistory) this.statsHistory = data.statsHistory;
          if (data.srsVocab && Array.isArray(data.srsVocab)) this.srsVocab = data.srsVocab;
          if (data.speedLeaderboard) this.speedLeaderboard = data.speedLeaderboard;
        } else {
          // Default initial leaderboard
          this.speedLeaderboard = [
            { name: "Dave Miller (SOC Lead)", wave: 18, score: 8450, date: "10/11/2026" },
            { name: "Sarah Chen (Forensics)", wave: 14, score: 6200, date: "09/11/2026" },
            { name: "Helen Kang (CISO)", wave: 12, score: 5100, date: "08/11/2026" }
          ];
        }
      } catch (e) {
        console.warn("Could not load localStorage:", e);
      }
    }

    saveStorage() {
      try {
        const data = {
          score: this.score,
          shields: this.shields,
          completedChapters: Array.from(this.completedChapters),
          statsHistory: this.statsHistory,
          srsVocab: this.srsVocab,
          speedLeaderboard: this.speedLeaderboard
        };
        localStorage.setItem("novabank_soc_save_v2", JSON.stringify(data));
      } catch (e) {}
    }

    /* ================= THEME & SOUND ================= */
    toggleTheme() {
      const doc = document.documentElement;
      const current = doc.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      doc.setAttribute("data-theme", next);
      this.sound.playClick();
    }

    toggleSound() {
      this.sound.enabled = !this.sound.enabled;
      document.getElementById("btnSoundToggle").innerText = this.sound.enabled ? "🔊" : "🔇";
      this.sound.playClick();
    }

    /* ================= NAVIGATION TABS ================= */
    switchView(viewName) {
      this.sound.playClick();
      document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-tab") === viewName);
      });
      document.querySelectorAll(".view-panel").forEach(panel => {
        panel.classList.remove("active");
      });

      const target = {
        story: "viewStory",
        practice: "viewPractice",
        mockexam: "viewMockExam",
        speedrun: "viewSpeedRun",
        phishing: "viewPhishing",
        vocab: "viewVocab",
        analytics: "viewAnalytics"
      }[viewName];

      if (target) {
        document.getElementById(target).classList.add("active");
      }

      if (viewName === "vocab") this.renderSRS();
      if (viewName === "analytics") this.updateAnalyticsUI();
      if (viewName === "practice" && !this.practiceInitialized) this.filterPractice("all");
      if (viewName === "mockexam" && !this.examTimer) this.startMockExam();
      if (viewName === "speedrun" && !this.speedTimer) this.startSpeedRun();
      if (viewName === "phishing") this.loadPhishingMail(this.currentPhishingIndex);
    }

    /* ================= STORY CHAPTER CONTROLLER ================= */
    renderChapterSelector() {
      const container = document.getElementById("chapterSelectorList");
      container.innerHTML = GAME_CHAPTERS.map(ch => {
        const isUnlocked = this.completedChapters.has(ch.id);
        const isActive = this.currentChapterId === ch.id;
        return \`
          <button class="chapter-card-btn \${isActive ? 'active' : ''}" onclick="gameApp.loadChapter(\${ch.id})" \${!isUnlocked ? 'style="opacity: 0.6;"' : ''}>
            <div class="chapter-num">Chương \${ch.id} \${isUnlocked ? '🔓' : '🔒'}</div>
            <div class="chapter-title">\${ch.title.split(':')[1] || ch.title}</div>
            <div class="chapter-meta">
              <span>\${ch.questionsCount} câu hỏi</span>
              <span>\${ch.badge}</span>
            </div>
          </button>
        \`;
      }).join("");
    }

    loadChapter(chapterId) {
      this.sound.playClick();
      this.currentChapterId = chapterId;
      this.currentStoryIndex = 0;
      this.storyQuestions = GAME_QUESTIONS.filter(q => q.chapter === chapterId);
      this.renderChapterSelector();

      const chData = GAME_CHAPTERS.find(c => c.id === chapterId);
      document.getElementById("chapterIntroBanner").innerHTML = \`
        <div style="background: var(--bg-surface); border-radius: var(--radius-md); padding: 0.75rem 1rem; border-left: 3px solid var(--accent-cyan); font-size: 0.88rem; color: var(--text-sub);">
          <strong style="color: var(--text-main);">\${chData.title}</strong> — \${chData.description}
        </div>
      \`;

      this.renderStoryQuestion();
    }

    renderStoryQuestion() {
      const slot = document.getElementById("storyQuestionSlot");
      if (this.currentStoryIndex >= this.storyQuestions.length) {
        this.renderChapterCompletion();
        return;
      }

      const q = this.storyQuestions[this.currentStoryIndex];
      this.selectedOption = null;
      this.isAnswerChecked = false;

      // Update narrative dialogue
      document.getElementById("speakerName").innerText = q.speaker || "SOC Operations";
      document.getElementById("speakerAvatar").innerText = (q.speaker || "S")[0].toUpperCase();
      document.getElementById("narrativeDialogueEn").innerText = q.dialogue_en ? \`"\${q.dialogue_en}"\` : \`"\${q.situation_vi}"\`;
      document.getElementById("narrativeDialogueVi").innerText = q.dialogue_vi || q.situation_vi;
      document.getElementById("narrativeDialogueVi").classList.remove("visible");

      const banner = document.getElementById("shadowingFeedbackBanner");
      if (banner) banner.classList.remove("visible");

      // Boss alert sound
      if (q.isBoss) {
        this.sound.playBossSiren();
      }

      // Render Question Card
      let html = \`
        <div class="question-card">
          \${q.isBoss ? '<div class="boss-banner">👾 CẢNH BÁO TRÙM: TRẬN CHIẾN TRUY VẾT XÂM NHẬP KHẨN CẤP!</div>' : ''}
          <div class="question-header">
            <div class="tag-group">
              <span class="badge-tag tag-part">Part \${q.part}</span>
              <span class="badge-tag tag-category">\${q.tags?.category || 'TOEIC'}</span>
              <span class="badge-tag tag-topic">\${q.tags?.topic || 'General'}</span>
              <span class="badge-tag tag-diff-\${(q.tags?.difficulty || 'Medium').toLowerCase()}">\${q.tags?.difficulty || 'Medium'}</span>
            </div>
            <div style="font-size: 0.82rem; font-weight: 700; color: var(--text-sub); display: flex; align-items: center; gap: 0.5rem;">
              <span>Tình huống \${this.currentStoryIndex + 1} / \${this.storyQuestions.length}</span>
              <button class="btn-toggle-trans" onclick="gameApp.openTerminalWithHint()" title="Mở terminal tra cứu log tương ứng với câu hỏi này">
                💻 Tra cứu Log
              </button>
            </div>
          </div>
      \`;

      // If Part 6 / 7 passage
      if (q.passage) {
        html += \`<div class="passage-box">\${q.passage}</div>\`;
      }

      // If Part 2 / 3 audio
      if (q.audioText) {
        html += \`
          <div class="audio-player-card">
            <div class="audio-ctrl-group">
              <button class="btn-play-audio" onclick="gameApp.playQuestionAudio()">
                🔊 Nghe câu hỏi (Web Speech)
              </button>
              <button class="rate-btn \${this.speech.rate === 0.8 ? 'active' : ''}" onclick="gameApp.setSpeechRate(0.8, this)">0.8x</button>
              <button class="rate-btn \${this.speech.rate === 1.0 ? 'active' : ''}" onclick="gameApp.setSpeechRate(1.0, this)">1.0x</button>
              <button class="rate-btn \${this.speech.rate === 1.2 ? 'active' : ''}" onclick="gameApp.setSpeechRate(1.2, this)">1.2x</button>
            </div>
            <button class="btn-toggle-trans" onclick="gameApp.toggleAudioTranscript()">
              👁️ Xem Transcript
            </button>
            <div class="audio-transcript-box" id="audioTranscriptSlot">\${q.audioText}</div>
          </div>
        \`;
      }

      // Question Stem & Voice button
      html += \`
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; margin-bottom: 1.25rem;">
          <div class="question-stem" style="margin-bottom: 0;">\${q.stem}</div>
          <button class="btn-voice" id="btnVoiceAnswer" onclick="gameApp.toggleVoiceAnswer()" title="Luyện nói TOEIC: Đọc to 'Option A' hoặc từ khóa">
            🎙️ Bộ đàm Trả lời (Voice Response)
          </button>
        </div>
      \`;

      // Choices
      const keys = ["A", "B", "C", "D"];
      html += \`<div class="choices-list" id="choicesList">\`;
      q.choices.forEach((choice, idx) => {
        html += \`
          <button class="choice-btn" id="choiceBtn_\${idx}" onclick="gameApp.selectChoice(\${idx})">
            <span class="choice-key">\${keys[idx]}</span>
            <span class="choice-text">\${choice}</span>
          </button>
        \`;
      });
      html += \`</div>\`;

      // Explanation Card slot
      html += \`
        <div class="explanation-card" id="explanationCard">
          <div class="exp-title" id="expResultTitle"></div>
          <div class="exp-section"><strong>Giải thích:</strong> \${q.explanation_vi}</div>
          \${q.trap ? \`<div class="tip-box">⚠️ <strong>Cảnh giác bẫy đề thi:</strong> \${q.trap}</div>\` : ''}
          \${q.examTip ? \`<div class="tip-box" style="border-color: var(--accent-cyan); background: rgba(6, 182, 212, 0.1);">💡 <strong>Mẹo làm nhanh TOEIC:</strong> \${q.examTip}</div>\` : ''}
          \${q.vocab && q.vocab.length ? \`
            <div class="exp-section" style="margin-top: 0.5rem;">
              <strong>Từ vựng cần nhớ:</strong>
              <div class="vocab-chips-list">
                \${q.vocab.map(v => \`
                  <div class="vocab-chip">
                    <b>\${v.word}</b> \${v.ipa || ''}: \${v.meaning}
                    <button onclick="gameApp.addWordToSRS('\${v.word}', '\${v.ipa || ''}', '\${v.pos || 'noun'}', '\${v.meaning}')" title="Thêm vào Sổ tay">⭐</button>
                  </div>
                \`).join("")}
              </div>
            </div>
          \` : ''}
        </div>
      \`;

      // Footer Next button
      html += \`
        <div class="question-footer">
          <button class="btn-next" id="btnNextQuestion" style="display: none;" onclick="gameApp.nextStoryQuestion()">
            Tiếp tục [Enter ↵] ➡️
          </button>
        </div>
      </div>
      \`;

      slot.innerHTML = html;
    }

    selectChoice(choiceIdx) {
      if (this.isAnswerChecked) return;
      this.selectedOption = choiceIdx;
      this.isAnswerChecked = true;

      const q = this.storyQuestions[this.currentStoryIndex];
      const isCorrect = choiceIdx === q.answer;

      // Update UI classes
      const selectedBtn = document.getElementById(\`choiceBtn_\${choiceIdx}\`);
      if (isCorrect) {
        selectedBtn.classList.add("selected-correct");
        this.sound.playCorrect();
        this.score += Math.round(100 * this.multiplier);
        this.streak++;
        this.multiplier = Math.min(3.0, +(1.0 + this.streak * 0.2).toFixed(1));
      } else {
        selectedBtn.classList.add("selected-wrong");
        this.sound.playWrong();
        this.shields--;
        this.streak = 0;
        this.multiplier = 1.0;

        const correctBtn = document.getElementById(\`choiceBtn_\${q.answer}\`);
        if (correctBtn) correctBtn.classList.add("reveal-correct");

        if (q.vocab && q.vocab.length) {
          q.vocab.forEach(v => this.addWordToSRS(v.word, v.ipa, v.pos, v.meaning));
        }

        if (this.shields <= 0) {
          setTimeout(() => this.triggerBadEnding(), 800);
          return;
        }
      }

      this.recordStat(q.part, q.tags?.category, isCorrect);
      this.updateStatsUI();

      const expCard = document.getElementById("explanationCard");
      const expTitle = document.getElementById("expResultTitle");
      if (expCard && expTitle) {
        expCard.classList.add("visible");
        expTitle.className = isCorrect ? "exp-title correct" : "exp-title wrong";
        expTitle.innerHTML = isCorrect ? "✅ CHÍNH XÁC! (+ " + Math.round(100 * this.multiplier) + " ĐIỂM)" : "❌ CHƯA ĐÚNG! (Bị mất 1 khiên bảo vệ)";
      }

      const nextBtn = document.getElementById("btnNextQuestion");
      if (nextBtn) nextBtn.style.display = "inline-flex";

      this.saveStorage();
    }

    nextStoryQuestion() {
      this.sound.playClick();
      this.currentStoryIndex++;
      this.renderStoryQuestion();
    }

    /* ================= BRANCHING ENDINGS ================= */
    triggerBadEnding() {
      const slot = document.getElementById("storyQuestionSlot");
      slot.innerHTML = \`
        <div class="ending-card">
          <div class="ending-badge">🚨</div>
          <div class="ending-title bad">KẾT THÚC THẤT BẠI: HỆ THỐNG BỊ ĐÁNH SẬP (THE CATASTROPHIC BREACH)</div>
          <div class="ending-desc">
            Bạn đã dùng hết cả 3 khiên bảo vệ! Kẻ tấn công đã vượt qua tường lửa và mã hóa thành công cơ sở dữ liệu giao dịch ngân hàng.
            CISO Helen Kang phải chịu trách nhiệm giải trình trước Hội đồng Quản trị và ca trực của bạn bị đình chỉ công tác để điều tra.
          </div>
          <button class="btn-next" onclick="gameApp.restartChapter()">
            🔄 Khôi phục bản sao lưu & Chơi lại ca trực
          </button>
        </div>
      \`;
    }

    renderChapterCompletion() {
      const ch = GAME_CHAPTERS.find(c => c.id === this.currentChapterId);
      const isLastChapter = this.currentChapterId === 4;

      if (!isLastChapter) {
        this.completedChapters.add(this.currentChapterId + 1);
        this.saveStorage();
        this.renderChapterSelector();

        const slot = document.getElementById("storyQuestionSlot");
        slot.innerHTML = \`
          <div class="ending-card">
            <div class="ending-badge">🎉</div>
            <div class="ending-title good">HOÀN THÀNH \${ch.title.toUpperCase()}!</div>
            <div class="ending-desc">
              Xuất sắc! Bạn đã đẩy lùi đợt tấn công nguy hiểm, bảo vệ trọn vẹn dữ liệu chi nhánh và giành được danh hiệu <b>\${ch.badge}</b>.
            </div>
            <button class="btn-next" onclick="gameApp.loadChapter(\${this.currentChapterId + 1})">
              Tiến vào Chương \${this.currentChapterId + 1} ➡️
            </button>
          </div>
        \`;
      } else {
        const isTrueHero = this.shields === 3 && this.score >= 5000;
        const slot = document.getElementById("storyQuestionSlot");
        if (isTrueHero) {
          slot.innerHTML = \`
            <div class="ending-card" style="border-color: var(--accent-cyan);">
              <div class="ending-badge">👑</div>
              <div class="ending-title true">KẾT THÚC HOÀN HẢO: HUYỀN THOẠI BẢO MẬT NOVABANK (TRUE CYBER GUARDIAN)</div>
              <div class="ending-desc">
                Kinh ngạc! Bạn hoàn thành toàn bộ 4 chương với trọn vẹn 3 khiên và điểm số kỷ lục \${this.score} điểm!
                Bằng chứng phân tích forensics của bạn đã giúp Interpol bắt sống ổ nhóm hacker APT42. Bạn được Hội đồng Quản trị đặc cách thăng chức lên <b>Lead Threat Hunter</b> cùng học bổng toàn phần chứng chỉ quốc tế!
              </div>
              <button class="btn-next" onclick="gameApp.switchView('analytics')">
                Xem Báo cáo Tổng kết Năng lực 📊
              </button>
            </div>
          \`;
        } else {
          slot.innerHTML = \`
            <div class="ending-card">
              <div class="ending-badge">🛡️</div>
              <div class="ending-title good">KẾT THÚC THẮNG LỢI: BẢO VỆ THÀNH CÔNG HỆ THỐNG (THREAT NEUTRALIZED)</div>
              <div class="ending-desc">
                Chúc mừng bạn! Cuộc xâm nhập đã bị chặn đứng hoàn toàn. Toàn bộ tiền gửi của khách hàng NovaBank được bảo toàn 100%.
                Bạn chính thức vượt qua thời gian thử việc và trở thành chuyên viên chính thức của Trung tâm điều hành an ninh mạng SOC!
              </div>
              <button class="btn-next" onclick="gameApp.switchView('analytics')">
                Xem Báo cáo Tổng kết Năng lực 📊
              </button>
            </div>
          \`;
        }
      }
    }

    restartChapter() {
      this.shields = 3;
      this.streak = 0;
      this.multiplier = 1.0;
      this.updateStatsUI();
      this.loadChapter(this.currentChapterId);
    }

    /* ================= AUDIO / SPEECH CONTROLS ================= */
    playQuestionAudio() {
      const q = this.storyQuestions[this.currentStoryIndex];
      if (q && q.audioText) {
        this.speech.speak(q.audioText);
      }
    }

    setSpeechRate(rate, btnEl) {
      this.speech.rate = rate;
      if (btnEl && btnEl.parentElement) {
        btnEl.parentElement.querySelectorAll(".rate-btn").forEach(b => b.classList.remove("active"));
        btnEl.classList.add("active");
      }
      this.sound.playClick();
    }

    toggleAudioTranscript() {
      const box = document.getElementById("audioTranscriptSlot");
      if (box) box.classList.toggle("visible");
    }

    toggleDialogueTranslation() {
      const box = document.getElementById("narrativeDialogueVi");
      if (box) box.classList.toggle("visible");
    }

    speakWord(word) {
      if (word) this.speech.speak(word);
    }

    toggleVoiceAnswer() {
      this.voice.startListening("answer");
    }

    startVoiceShadowing() {
      const q = this.storyQuestions[this.currentStoryIndex];
      const target = q.dialogue_en || "Welcome to NovaBank security operations.";
      this.voice.startListening("shadowing", target);
    }

    /* ================= PRACTICE VIEW ================= */
    filterPractice(filterKey, btnEl) {
      if (btnEl && btnEl.parentElement) {
        btnEl.parentElement.querySelectorAll(".rate-btn").forEach(b => b.classList.remove("active"));
        btnEl.classList.add("active");
      }
      this.practiceInitialized = true;
      let filtered = [...GAME_QUESTIONS];

      if (filterKey === "p2") filtered = filtered.filter(q => q.part === 2);
      else if (filterKey === "p3") filtered = filtered.filter(q => q.part === 3);
      else if (filterKey === "p5") filtered = filtered.filter(q => q.part === 5);
      else if (filterKey === "p6") filtered = filtered.filter(q => q.part === 6);
      else if (filterKey === "p7") filtered = filtered.filter(q => q.part === 7);
      else if (filterKey === "grammar") filtered = filtered.filter(q => q.tags?.category === "Grammar");
      else if (filterKey === "infosec") filtered = filtered.filter(q => q.tags?.topic === "InfoSec" || q.tags?.topic === "Threats" || q.tags?.topic === "Authentication");

      const slot = document.getElementById("practiceQuestionSlot");
      slot.innerHTML = \`
        <div style="margin-bottom: 0.75rem; font-weight: 700; color: var(--text-sub);">
          Tìm thấy \${filtered.length} câu hỏi phù hợp:
        </div>
      \` + filtered.slice(0, 15).map(q => \`
        <div class="question-card" style="margin-bottom: 1.25rem;">
          <div class="question-header">
            <span class="badge-tag tag-part">Part \${q.part}</span>
            <span class="badge-tag tag-category">\${q.tags?.category || 'General'}</span>
            <span class="badge-tag tag-diff-\${(q.tags?.difficulty || 'Medium').toLowerCase()}">\${q.tags?.difficulty || 'Medium'}</span>
          </div>
          \${q.passage ? \`<div class="passage-box" style="max-height: 180px;">\${q.passage}</div>\` : ''}
          <div class="question-stem">\${q.stem}</div>
          <div class="choices-list">
            \${q.choices.map((c, cIdx) => \`
              <button class="choice-btn" onclick="gameApp.checkPracticeChoice(this, \${cIdx === q.answer}, '\${q.id}')">
                <span class="choice-key">\${["A", "B", "C", "D"][cIdx]}</span>
                <span class="choice-text">\${c}</span>
              </button>
            \`).join("")}
          </div>
          <div class="tip-box" id="practiceTip_\${q.id}" style="display: none;">
            <strong>Giải thích:</strong> \${q.explanation_vi}
          </div>
        </div>
      \`).join("");
    }

    checkPracticeChoice(btn, isCorrect, qId) {
      if (btn.parentElement.classList.contains("answered")) return;
      btn.parentElement.classList.add("answered");
      if (isCorrect) {
        btn.classList.add("selected-correct");
        this.sound.playCorrect();
      } else {
        btn.classList.add("selected-wrong");
        this.sound.playWrong();
      }
      const tip = document.getElementById(\`practiceTip_\${qId}\`);
      if (tip) tip.style.display = "block";
    }

    /* ================= MOCK EXAM (MINI TEST 30) ================= */
    startMockExam() {
      const pool = [...GAME_QUESTIONS].sort(() => 0.5 - Math.random());
      this.examQuestions = pool.slice(0, 30);
      this.examCurrentIdx = 0;
      this.examUserAnswers = {};
      this.examTimeRemaining = 25 * 60;

      if (this.examTimer) clearInterval(this.examTimer);
      this.examTimer = setInterval(() => {
        this.examTimeRemaining--;
        const mins = String(Math.floor(this.examTimeRemaining / 60)).padStart(2, "0");
        const secs = String(this.examTimeRemaining % 60).padStart(2, "0");
        document.getElementById("examTimerDisplay").innerText = \`⏱️ \${mins}:\${secs}\`;
        if (this.examTimeRemaining <= 0) {
          clearInterval(this.examTimer);
          alert("Hết giờ làm bài thi!");
          this.submitExam();
        }
      }, 1000);

      this.renderExamNav();
      this.renderExamCurrentQuestion();
    }

    renderExamNav() {
      const grid = document.getElementById("examNavGrid");
      grid.innerHTML = this.examQuestions.map((q, idx) => {
        const isAnswered = this.examUserAnswers[idx] !== undefined;
        const isCurrent = this.examCurrentIdx === idx;
        return \`
          <button class="exam-nav-btn \${isAnswered ? 'answered' : ''} \${isCurrent ? 'current' : ''}" onclick="gameApp.goToExamQuestion(\${idx})">
            \${idx + 1}
          </button>
        \`;
      }).join("");
    }

    goToExamQuestion(idx) {
      this.examCurrentIdx = idx;
      this.renderExamNav();
      this.renderExamCurrentQuestion();
    }

    nextExamQuestion() {
      if (this.examCurrentIdx < this.examQuestions.length - 1) {
        this.goToExamQuestion(this.examCurrentIdx + 1);
      }
    }

    prevExamQuestion() {
      if (this.examCurrentIdx > 0) {
        this.goToExamQuestion(this.examCurrentIdx - 1);
      }
    }

    renderExamCurrentQuestion() {
      const slot = document.getElementById("examQuestionSlot");
      const q = this.examQuestions[this.examCurrentIdx];
      const selected = this.examUserAnswers[this.examCurrentIdx];

      let html = \`
        <div class="question-card">
          <div class="question-header">
            <span class="badge-tag tag-part">Part \${q.part}</span>
            <span class="badge-tag tag-category">\${q.tags?.category || 'TOEIC'}</span>
            <span style="font-size: 0.85rem; font-weight: 700;">Câu \${this.examCurrentIdx + 1} / 30</span>
          </div>
          \${q.passage ? \`<div class="passage-box" style="max-height: 220px;">\${q.passage}</div>\` : ''}
          \${q.audioText ? \`
            <div class="audio-player-card">
              <button class="btn-play-audio" onclick="gameApp.speech.speak('\${q.audioText.replace(/'/g, "\\\\'")}')">
                🔊 Nghe audio câu hỏi
              </button>
            </div>
          \` : ''}
          <div class="question-stem">\${q.stem}</div>
          <div class="choices-list">
            \${q.choices.map((c, idx) => \`
              <button class="choice-btn \${selected === idx ? 'selected-correct' : ''}" onclick="gameApp.recordExamAnswer(\${idx})">
                <span class="choice-key">\${["A", "B", "C", "D"][idx]}</span>
                <span class="choice-text">\${c}</span>
              </button>
            \`).join("")}
          </div>
        </div>
      \`;
      slot.innerHTML = html;
    }

    recordExamAnswer(choiceIdx) {
      this.sound.playClick();
      this.examUserAnswers[this.examCurrentIdx] = choiceIdx;
      this.renderExamNav();
      this.renderExamCurrentQuestion();
    }

    submitExam() {
      if (this.examTimer) clearInterval(this.examTimer);

      let correctCount = 0;
      let partBreakdown = { 2: { c: 0, t: 0 }, 3: { c: 0, t: 0 }, 5: { c: 0, t: 0 }, 6: { c: 0, t: 0 }, 7: { c: 0, t: 0 } };

      this.examQuestions.forEach((q, idx) => {
        const p = q.part;
        if (!partBreakdown[p]) partBreakdown[p] = { c: 0, t: 0 };
        partBreakdown[p].t++;

        if (this.examUserAnswers[idx] === q.answer) {
          correctCount++;
          partBreakdown[p].c++;
        }
      });

      const ratio = correctCount / 30;
      const estListening = Math.round(5 + ratio * 480);
      const estReading = Math.round(5 + ratio * 475);
      const estTotal = Math.min(990, Math.max(10, estListening + estReading));

      const slot = document.getElementById("examQuestionSlot");
      slot.innerHTML = \`
        <div class="ending-card" style="max-width: 700px;">
          <div class="ending-badge">🎖️</div>
          <div class="ending-title" style="color: var(--accent-cyan);">KẾT QUẢ BÀI THI MINI TEST 30 CÂU</div>
          <div class="score-hero">
            <div class="score-number">\${estTotal}</div>
            <div class="score-scale">Ước tính TOEIC Scaled Score (Đúng \${correctCount} / 30 câu)</div>
          </div>
          <div style="font-size: 0.95rem; display: flex; justify-content: space-around; margin-bottom: 1.5rem;">
            <span>🎧 Listening: <b>\${estListening}</b> / 495</span>
            <span>📖 Reading: <b>\${estReading}</b> / 495</span>
          </div>
          <button class="btn-next" onclick="gameApp.switchView('analytics')">
            Xem Phân tích Chi tiết & Xuất Báo cáo PDF 📊
          </button>
        </div>
      \`;
    }

    /* =========================================================================
       8. NÂNG CẤP 3: CHẾ ĐỘ SINH TỒN VÔ TẬN (SPEED RUN DEFENSE)
       ========================================================================= */
    startSpeedRun() {
      this.speedWave = 1;
      this.speedScore = 0;
      this.speedCombo = 1.0;
      this.shields = 3;
      this.updateStatsUI();
      this.nextSpeedQuestion();
    }

    nextSpeedQuestion() {
      // Pick random question from pool
      const randomIdx = Math.floor(Math.random() * GAME_QUESTIONS.length);
      this.speedActiveQuestion = GAME_QUESTIONS[randomIdx];
      this.speedTimeRemaining = 30;

      document.getElementById("speedWaveDisplay").innerText = \`🌊 Đợt: \${this.speedWave}\`;

      // Reset and run timer
      if (this.speedTimer) clearInterval(this.speedTimer);
      const timerFill = document.getElementById("speedTimerFill");
      const timerDisplay = document.getElementById("speedCountdownDisplay");

      this.speedTimer = setInterval(() => {
        this.speedTimeRemaining--;
        timerDisplay.innerText = \`⏱️ \${this.speedTimeRemaining}s\`;
        const pct = (this.speedTimeRemaining / 30) * 100;
        if (timerFill) {
          timerFill.style.width = \`\${pct}%\`;
          timerFill.classList.toggle("danger", this.speedTimeRemaining <= 10);
        }

        if (this.speedTimeRemaining <= 5) {
          this.sound.playBeep(440, 0.05);
        }

        if (this.speedTimeRemaining <= 0) {
          clearInterval(this.speedTimer);
          this.handleSpeedTimeout();
        }
      }, 1000);

      this.renderSpeedQuestion();
    }

    renderSpeedQuestion() {
      const slot = document.getElementById("speedQuestionSlot");
      const q = this.speedActiveQuestion;

      let html = \`
        <div class="question-card" style="border-color: var(--accent-amber);">
          <div class="question-header">
            <span class="badge-tag tag-part">Part \${q.part}</span>
            <span class="badge-tag tag-category">\${q.tags?.category || 'Speed'}</span>
            <span style="font-weight: 700; color: var(--accent-amber);">🔥 Combo: x\${this.speedCombo.toFixed(1)}</span>
          </div>
          <div class="question-stem">\${q.stem}</div>
          <div class="choices-list">
            \${q.choices.map((c, idx) => \`
              <button class="choice-btn" onclick="gameApp.selectSpeedChoice(\${idx})">
                <span class="choice-key">\${["A", "B", "C", "D"][idx]}</span>
                <span class="choice-text">\${c}</span>
              </button>
            \`).join("")}
          </div>
        </div>
      \`;
      slot.innerHTML = html;
    }

    selectSpeedChoice(choiceIdx) {
      if (!this.speedTimer) return;
      clearInterval(this.speedTimer);

      const q = this.speedActiveQuestion;
      const isCorrect = choiceIdx === q.answer;

      if (isCorrect) {
        this.sound.playCorrect();
        const earned = Math.round((150 + this.speedTimeRemaining * 10) * this.speedCombo);
        this.speedScore += earned;
        this.score += earned;
        this.speedCombo = Math.min(5.0, +(this.speedCombo + 0.3).toFixed(1));
        this.speedWave++;
        this.updateStatsUI();

        // Flash green
        const slot = document.getElementById("speedQuestionSlot");
        slot.innerHTML = \`
          <div class="question-card" style="text-align: center; border-color: var(--accent-emerald);">
            <h3 style="color: var(--accent-emerald); font-size: 1.3rem;">⚡ CHÍNH XÁC! (+\${earned} ĐIỂM)</h3>
            <p style="color: var(--text-sub); margin-top: 0.5rem;">Chuẩn bị đón đợt tấn công tiếp theo...</p>
          </div>
        \`;
        setTimeout(() => this.nextSpeedQuestion(), 700);
      } else {
        this.sound.playWrong();
        this.shields--;
        this.speedCombo = 1.0;
        this.updateStatsUI();

        if (this.shields <= 0) {
          this.endSpeedRun();
        } else {
          const slot = document.getElementById("speedQuestionSlot");
          slot.innerHTML = \`
            <div class="question-card" style="text-align: center; border-color: var(--accent-rose);">
              <h3 style="color: var(--accent-rose); font-size: 1.3rem;">💥 BỊ ĐỘT KÍCH! MẤT 1 KHIÊN!</h3>
              <p style="color: var(--text-sub); margin-top: 0.5rem;">Còn lại \${this.shields} khiên bảo vệ. Tái lập phòng thủ...</p>
            </div>
          \`;
          setTimeout(() => this.nextSpeedQuestion(), 1000);
        }
      }
    }

    handleSpeedTimeout() {
      this.sound.playWrong();
      this.shields--;
      this.speedCombo = 1.0;
      this.updateStatsUI();

      if (this.shields <= 0) {
        this.endSpeedRun();
      } else {
        alert("⏱️ HẾT GIỜ! Hệ thống bị trừ 1 khiên!");
        this.nextSpeedQuestion();
      }
    }

    endSpeedRun() {
      if (this.speedTimer) clearInterval(this.speedTimer);
      const slot = document.getElementById("speedQuestionSlot");

      slot.innerHTML = \`
        <div class="ending-card" style="border-color: var(--accent-amber);">
          <div class="ending-badge">⚡</div>
          <div class="ending-title" style="color: var(--accent-amber);">KẾT THÚC ĐỢT TRỰC CHIẾN SINH TỒN!</div>
          <div class="score-hero">
            <div class="score-number">\${this.speedScore}</div>
            <div class="score-scale">Bạn đã kiên cường đẩy lùi <b>\${this.speedWave - 1} đợt tấn công</b> liên tiếp!</div>
          </div>
          <div style="margin: 1.25rem 0;">
            <label style="font-size: 0.85rem; font-weight: 700;">Nhập tên của bạn để ghi danh Bảng Vàng Kỷ Lục:</label>
            <div style="display: flex; gap: 0.5rem; justify-content: center; margin-top: 0.5rem;">
              <input type="text" id="leaderboardNameInput" placeholder="Ví dụ: Nguyễn Văn A (SOC Analyst)" style="padding: 0.6rem 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); background: var(--bg-surface); color: var(--text-main); font-family: inherit; width: 280px;">
              <button class="btn-play-audio" onclick="gameApp.saveLeaderboardRecord()">Lưu kỷ lục 🏆</button>
            </div>
          </div>
          <button class="btn-next" onclick="gameApp.startSpeedRun()" style="margin-top: 0.5rem;">
            🔄 Thử thách lại đợt mới
          </button>
        </div>
      \`;
    }

    saveLeaderboardRecord() {
      const input = document.getElementById("leaderboardNameInput");
      const name = input ? input.value.trim() || "SOC Analyst" : "SOC Analyst";
      const record = {
        name,
        wave: this.speedWave - 1,
        score: this.speedScore,
        date: new Date().toLocaleDateString("vi-VN")
      };

      this.speedLeaderboard.push(record);
      this.speedLeaderboard.sort((a, b) => b.score - a.score);
      this.speedLeaderboard = this.speedLeaderboard.slice(0, 10);
      this.saveStorage();
      this.renderLeaderboard();
      alert("🎉 Kỷ lục của bạn đã được lưu vào Bảng Vàng!");
    }

    renderLeaderboard() {
      const tbody = document.getElementById("leaderboardBody");
      if (!tbody) return;
      const medals = ["🥇", "🥈", "🥉", "4", "5", "6", "7", "8", "9", "10"];
      tbody.innerHTML = this.speedLeaderboard.map((r, i) => \`
        <tr>
          <td><b>\${medals[i] || i + 1}</b></td>
          <td>\${r.name}</td>
          <td>\${r.wave} đợt</td>
          <td style="color: var(--accent-cyan); font-weight: 700;">\${r.score}</td>
          <td style="color: var(--text-muted); font-size: 0.82rem;">\${r.date}</td>
        </tr>
      \`).join("");
    }

    /* =========================================================================
       9. NÂNG CẤP 5: THỢ SĂN PHISHING TƯƠNG TÁC (EMAIL PHISHING ANALYZER)
       ========================================================================= */
    loadPhishingMail(index) {
      this.currentPhishingIndex = index;
      this.phishingFlagsFound.clear();

      document.querySelectorAll(".mail-tab-btn").forEach((btn, idx) => {
        btn.classList.toggle("active", idx === index);
      });

      const emails = [
        {
          id: 1,
          title: "Đình chỉ tài khoản do hoạt động bất thường",
          sender: "NovaBank Security Center",
          fromEmail: "security-verify@novabank-support-portal.com", // Hotspot 1: Lookalike domain
          subject: "[KHẨN CẤP] Xác thực tài khoản của bạn sẽ bị đình chỉ sau 30 phút!", // Hotspot 2: Urgency trap
          salutation: "Kính gửi Quý Khách hàng,", // Hotspot 3: Impersonal generic salutation
          body: \`Hệ thống SIEM ghi nhận nhiều lượt đăng nhập bất thường từ địa chỉ IP lạ tại nước ngoài vào tài khoản quản trị SOC của bạn.
            Để tuân thủ quy chuẩn an ninh và tránh bị khóa tài khoản vĩnh viễn, bạn bắt buộc phải đăng nhập và đồng bộ hóa chứng chỉ xác thực ngay lập tức:\`,
          linkText: "http://192.168.1.100/verify-novabank-token.php", // Hotspot 4: Raw IP link
          attachment: "NovaBank_Security_Patch_Update.exe", // Hotspot 5: Dangerous executable
          totalFlags: 4,
          isPhishing: true,
          verdictReason: "Email này là PHISHING NGUY HIỂM: Tên miền người gửi giả mạo, tạo áp lực thời gian khẩn cấp, liên kết trỏ về IP thô không có SSL, và đính kèm tệp thực thi .exe độc hại."
        },
        {
          id: 2,
          title: "Lệnh chuyển tiền gấp từ CISO Helen Kang",
          sender: "Helen Kang (CISO)",
          fromEmail: "helen.kang.ciso@gmail.com", // Hotspot 1: Personal email impersonating executive
          subject: "Bảo mật: Yêu cầu chuyển khoản thanh toán khẩn cấp cho đối tác Singapore", // Hotspot 2
          salutation: "Chào bạn,",
          body: \`Tôi đang tham gia phiên họp kín bất thường với Hội đồng Quản trị và không thể nghe điện thoại.
            Hãy đặc cách bỏ qua quy trình xét duyệt thông thường 2 cấp và thực hiện chuyển ngay 45.000 USD vào tài khoản ngân hàng đối tác theo hóa đơn đính kèm bên dưới trước 11:00 AM.\`, // Hotspot 3: Bypass protocol
          linkText: null,
          attachment: "Invoice_Singapore_Tech_9921.pdf.vbs", // Hotspot 4: Double extension script
          totalFlags: 3,
          isPhishing: true,
          verdictReason: "Đây là hình thức tấn công lừa đảo CEO Fraud / Whaling: Kẻ tấn công dùng Gmail cá nhân giả mạo lãnh đạo, ép nhân viên phá vỡ quy trình xét duyệt bảo mật và gửi file mã độc đuôi kép .vbs."
        },
        {
          id: 3,
          title: "Cập nhật chính sách sao lưu bảo mật nội bộ",
          sender: "Dave Miller (SOC Lead)",
          fromEmail: "dave.miller@novabank.vn", // Legitimate
          subject: "Thông báo bảo trì hệ thống giám sát SIEM định kỳ lúc 02:00 sáng",
          salutation: "Chào toàn thể đội ngũ SOC,",
          body: \`Đêm nay chúng tôi sẽ tiến hành cập nhật bản vá bảo mật định kỳ cho máy chủ phân tích log.
            Mọi thắc mắc kỹ thuật vui lòng liên hệ trực tiếp số máy nhánh nội bộ #402 của trung tâm điều hành. Không có yêu cầu cung cấp mật khẩu nào trong đợt bảo trì này.\`,
          linkText: "https://soc.novabank.vn/docs/maintenance-2026",
          attachment: "Bao_tri_SIEM_Nov2026.pdf",
          totalFlags: 0,
          isPhishing: false,
          verdictReason: "Đây là EMAIL NỘI BỘ HỢP LỆ: Tên miền chính thức novabank.vn, liên kết HTTPS nội bộ an toàn, văn phong chuẩn mực và khẳng định rõ không yêu cầu cung cấp mật khẩu."
        }
      ];

      const mail = emails[index];
      const container = document.getElementById("phishingMailContent");

      container.innerHTML = \`
        <div style="margin-bottom: 1.25rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
          <div class="mail-header-row">
            <div class="mail-header-label">Từ (From):</div>
            <div>
              <b>\${mail.sender}</b> &lt;<span class="interactive-hotspot" onclick="gameApp.togglePhishingFlag('from', '\${mail.fromEmail}', this)">\${mail.fromEmail}</span>&gt;
            </div>
          </div>
          <div class="mail-header-row">
            <div class="mail-header-label">Đến (To):</div>
            <div>soc-team@novabank.vn, all-employees@novabank.vn</div>
          </div>
          <div class="mail-header-row">
            <div class="mail-header-label">Tiêu đề:</div>
            <div><span class="interactive-hotspot" onclick="gameApp.togglePhishingFlag('subject', '\${mail.subject}', this)">\${mail.subject}</span></div>
          </div>
        </div>

        <div style="font-size: 0.95rem; line-height: 1.7; margin-bottom: 1.5rem;">
          <p><span class="interactive-hotspot" onclick="gameApp.togglePhishingFlag('salutation', '\${mail.salutation}', this)">\${mail.salutation}</span></p>
          <p style="margin: 0.75rem 0;">\${mail.body}</p>
          \${mail.linkText ? \`
            <p style="margin: 0.75rem 0;">
              🔗 <b>Đường dẫn:</b> <span class="interactive-hotspot" onclick="gameApp.togglePhishingFlag('link', '\${mail.linkText}', this)">\${mail.linkText}</span>
            </p>
          \` : ''}
          \${mail.attachment ? \`
            <div style="margin-top: 1rem; padding: 0.75rem; background: var(--bg-card); border-radius: var(--radius-sm); display: inline-flex; align-items: center; gap: 0.6rem;">
              📎 <b>Tệp đính kèm:</b> <span class="interactive-hotspot" onclick="gameApp.togglePhishingFlag('attach', '\${mail.attachment}', this)">\${mail.attachment}</span>
            </div>
          \` : ''}
        </div>

        <div id="phishingFeedbackSlot"></div>

        <!-- DECISION ACTION BAR -->
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem; border-top: 1px solid var(--border-color); padding-top: 1.25rem;">
          <div style="font-size: 0.9rem; font-weight: 700; color: var(--text-sub);">
            🚩 Đã phát hiện: <span id="phishingFlagCount" style="color: var(--accent-rose);">0</span> dấu hiệu khả nghi
          </div>
          <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
            <button class="btn-srs-correct" onclick="gameApp.submitPhishingVerdict(false, \${mail.isPhishing}, '\${mail.verdictReason}')">
              🟢 Đánh dấu Thư An toàn
            </button>
            <button class="btn-srs-wrong" style="background: var(--accent-rose); color: #fff;" onclick="gameApp.submitPhishingVerdict(true, \${mail.isPhishing}, '\${mail.verdictReason}')">
              🚨 BÁO CÁO PHISHING & CÁCH LY
            </button>
          </div>
        </div>
      \`;
    }

    togglePhishingFlag(type, val, el) {
      el.classList.toggle("flagged");
      const key = type + "_" + val;
      if (this.phishingFlagsFound.has(key)) {
        this.phishingFlagsFound.delete(key);
      } else {
        this.phishingFlagsFound.add(key);
        this.sound.playClick();
      }

      document.getElementById("phishingFlagCount").innerText = this.phishingFlagsFound.size;
    }

    submitPhishingVerdict(playerSaysPhishing, isActualPhishing, reason) {
      const isCorrect = playerSaysPhishing === isActualPhishing;
      const slot = document.getElementById("phishingFeedbackSlot");

      if (isCorrect) {
        this.sound.playCorrect();
        this.score += 250;
        this.updateStatsUI();
        slot.innerHTML = \`
          <div class="flag-explanation-card" style="border-color: var(--accent-emerald); background: rgba(16, 185, 129, 0.1);">
            <strong style="color: var(--accent-emerald); font-size: 1rem;">✅ PHÁN QUYẾT CHÍNH XÁC! (+250 ĐIỂM)</strong>
            <p style="margin-top: 0.4rem; color: var(--text-main);">\${reason}</p>
          </div>
        \`;
      } else {
        this.sound.playWrong();
        this.shields--;
        this.updateStatsUI();
        slot.innerHTML = \`
          <div class="flag-explanation-card">
            <strong style="color: var(--accent-rose); font-size: 1rem;">❌ PHÁN QUYẾT SAI LỆCH! (BỊ TRỪ 1 KHIÊN)</strong>
            <p style="margin-top: 0.4rem; color: var(--text-main);">\${reason}</p>
          </div>
        \`;
      }
    }

    /* =========================================================================
       10. NÂNG CẤP 1: CỬA SỔ DÒNG LỆNH SOC TERMINAL & WIRESHARK
       ========================================================================= */
    initTerminalData() {
      this.termFiles = {
        "auth.log": \`Nov 10 00:01:14 soc-srv1 sshd[4102]: Accepted publickey for analyst from 10.0.4.12 port 51234
Nov 10 00:05:22 soc-srv1 sshd[4210]: Failed password for invalid user root from 185.220.101.5 port 39124 ssh2
Nov 10 00:05:24 soc-srv1 sshd[4212]: Failed password for invalid user admin from 185.220.101.5 port 39126 ssh2
Nov 10 00:05:26 soc-srv1 sshd[4214]: Failed password for invalid user dbadmin from 185.220.101.5 port 39128 ssh2
Nov 10 00:06:01 soc-srv1 sudo: pam_unix(sudo:auth): authentication failure; logname=dave uid=1001 euid=0
Nov 10 00:07:45 soc-srv1 sshd[4301]: Received disconnect from 185.220.101.5: 11: Bye Bye [preauth]
Nov 10 00:15:30 soc-srv1 sshd[4411]: Failed password for root from 192.168.1.105 port 44211
Nov 10 00:22:18 soc-srv1 systemd[1]: novabank-swift-gateway.service: Main process exited, code=killed, status=9/KILL\`,

        "firewall.rules": \`# NovaBank Perimeter Firewall Rules (iptables-v1.8.7)
[RULE 01] ACCEPT tcp -- 0.0.0.0/0 10.0.1.10 tcp dpt:443 (NovaPortal HTTPS)
[RULE 02] ACCEPT tcp -- 10.0.4.0/24 10.0.1.10 tcp dpt:22 (SOC Internal SSH)
[RULE 03] DROP   tcp -- 0.0.0.0/0 0.0.0.0/0 tcp dpt:4444 (Meterpreter C2 Payload)
[RULE 04] DROP   all  -- 185.220.101.5 0.0.0.0/0 (APT42 Known Malicious IP)
[RULE 05] ACCEPT tcp -- 10.0.2.5 10.0.3.50 tcp dpt:8443 (Swift Transaction API)
[RULE 06] REJECT udp -- 0.0.0.0/0 10.0.1.0/24 udp dpt:53 (External DNS Flood Blocked)\`,

        "snort.alerts": \`[**] [1:2001219:1] ET CURRENT_EVENTS Phishing Landing Page Visited [**]
11/10-00:08:12.412 10.0.4.55:49182 -> 104.21.55.2:80 TCP TTL:128 TOS:0x0 ID:1423
[**] [1:2024101:3] ET MALWARE CobaltStrike Beacon Check-in Detected [**]
11/10-00:14:05.119 10.0.4.105:51221 -> 185.220.101.5:8080 TCP TTL:64 TOS:0x0 ID:5512
[**] [1:2039121:2] ET EXPLOIT CVE-2024-3400 Remote Code Execution Attempt [**]
11/10-00:25:40.892 185.220.101.5:3321 -> 10.0.1.10:443 TCP TTL:52 TOS:0x0 ID:8911\`,

        "nginx.access": \`185.220.101.5 - - [10/Nov/2026:00:04:11] "GET /login HTTP/1.1" 200 4521 "https://novabank.vn" "Mozilla/5.0"
185.220.101.5 - - [10/Nov/2026:00:04:15] "POST /api/v1/auth/login HTTP/1.1" 401 210 "-" "Python-requests/2.31"
185.220.101.5 - - [10/Nov/2026:00:04:19] "POST /api/v1/auth/login HTTP/1.1" 401 210 "-" "Python-requests/2.31"
185.220.101.5 - - [10/Nov/2026:00:10:02] "GET /search?q=1%27%20OR%201=1 HTTP/1.1" 403 162 "-" "sqlmap/1.7"
10.0.4.12 - - [10/Nov/2026:00:18:22] "GET /soc/dashboard HTTP/1.1" 200 12891 "-" "Chrome/130.0"\`,

        "threat_intel.ioc": \`# NovaBank Threat Intelligence - Campaign: The Midnight Breach
Threat Actor: APT42 (Silent Falcon)
Target: NovaBank Swift Wire Transfer & Customer DB
C2 Server: 185.220.101.5 (c2-novacredit.xyz)
Malware Hash (SHA256): e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
Compromised Workstation: 10.0.4.105 (Host: WS-BILLING-03)\`
      };
    }

    toggleTerminal() {
      const el = document.getElementById("terminalBackdrop");
      if (el) {
        el.classList.toggle("open");
        if (el.classList.contains("open")) {
          setTimeout(() => document.getElementById("terminalInput")?.focus(), 100);
        }
      }
    }

    closeTerminal(e) {
      document.getElementById("terminalBackdrop").classList.remove("open");
    }

    openTerminalWithHint() {
      this.toggleTerminal();
      this.execTermCmd("hint");
    }

    initTerminalInput() {
      const input = document.getElementById("terminalInput");
      if (!input) return;

      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          this.handleTermInputSubmit();
        } else if (e.key === "ArrowUp") {
          if (this.termHistory.length && this.termHistoryIdx > 0) {
            this.termHistoryIdx--;
            input.value = this.termHistory[this.termHistoryIdx];
          }
        } else if (e.key === "ArrowDown") {
          if (this.termHistory.length && this.termHistoryIdx < this.termHistory.length - 1) {
            this.termHistoryIdx++;
            input.value = this.termHistory[this.termHistoryIdx];
          } else {
            this.termHistoryIdx = this.termHistory.length;
            input.value = "";
          }
        }
      });
    }

    handleTermInputSubmit() {
      const input = document.getElementById("terminalInput");
      const cmd = input.value.trim();
      if (!cmd) return;
      this.termHistory.push(cmd);
      this.termHistoryIdx = this.termHistory.length;
      input.value = "";
      this.execTermCmd(cmd);
    }

    execTermCmd(rawCmd) {
      const screen = document.getElementById("terminalScreen");
      const parts = rawCmd.trim().split(/\\s+/);
      const main = parts[0].toLowerCase();

      let output = "";
      this.sound.playClick();

      if (main === "clear") {
        screen.innerHTML = "";
        return;
      } else if (main === "help" || main === "?") {
        output = \`Các lệnh SOC có sẵn:
  ls -la                     : Liệt kê các tệp nhật ký điều tra trong /var/log/novabank/
  cat <file>                 : Đọc toàn bộ nội dung file (vd: cat auth.log)
  grep "<chuỗi>" <file>      : Lọc các dòng chứa chuỗi cần tìm trong log
  netstat -tuln              : Xem các cổng mạng đang lắng nghe và kết nối bất thường
  wireshark                  : Mở bộ bắt gói tin mạng mô phỏng (Packet Capture)
  ping <ip/host>             : Kiểm tra độ trễ mạng đến máy chủ
  whoami                     : Xem quyền hạn tài khoản SOC hiện tại
  hint                       : Nhận manh mối điều tra gắn liền với câu hỏi hiện tại
  clear                      : Xóa màn hình dòng lệnh\`;
      } else if (main === "ls") {
        output = \`total 84
drwxr-xr-x 2 root   soc-analysts 4096 Nov 10 00:00 .
drwxr-xr-x 4 root   root         4096 Nov  9 23:50 ..
-rw-r----- 1 syslog adm          8124 Nov 10 00:22 auth.log
-rw-r--r-- 1 root   root         3412 Nov 10 00:18 firewall.rules
-rw-r----- 1 snort  snort        5211 Nov 10 00:25 snort.alerts
-rw-r--r-- 1 www    www          9102 Nov 10 00:24 nginx.access
-rw-r----- 1 dave   soc-analysts 1980 Nov 10 00:15 threat_intel.ioc\`;
      } else if (main === "cat") {
        const file = parts[1];
        if (!file) output = "Lỗi cú pháp: cat <tên_file>. Ví dụ: cat auth.log";
        else if (this.termFiles[file]) output = this.termFiles[file];
        else output = \`cat: \${file}: No such file or directory\`;
      } else if (main === "grep") {
        // e.g. grep "failed" auth.log or grep failed auth.log
        const query = parts[1]?.replace(/['"]/g, "").toLowerCase();
        const file = parts[2];
        if (!query || !file) {
          output = 'Lỗi cú pháp: grep "<từ_khóa>" <tên_file>. Ví dụ: grep "failed" auth.log';
        } else if (this.termFiles[file]) {
          const lines = this.termFiles[file].split("\\n");
          const matched = lines.filter(l => l.toLowerCase().includes(query));
          output = matched.length ? matched.join("\\n") : \`Không tìm thấy dòng nào chứa "\${query}" trong \${file}.\`;
        } else {
          output = \`grep: \${file}: No such file or directory\`;
        }
      } else if (main === "netstat") {
        output = \`Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      1012/sshd
tcp        0      0 10.0.1.10:443           0.0.0.0:*               LISTEN      1420/nginx
tcp        0      0 10.0.4.105:49128        185.220.101.5:4444      ESTABLISHED 4120/rev_shell (ALERT!)
tcp        0      0 127.0.0.1:5432          0.0.0.0:*               LISTEN      1129/postgres\`;
      } else if (main === "wireshark" || main === "tcpdump") {
        output = \`[WIRESHARK PCAP CAPTURE - LIVE STREAM]
#1  00:08:12.119  10.0.4.55   -> 104.21.55.2    HTTP GET /login-verify.php (Suspicious)
#2  00:14:05.210  10.0.4.105  -> 185.220.101.5  TCP [SYN] Seq=0 Win=64240 Dport=4444
#3  00:14:05.312  185.220.101.5 -> 10.0.4.105  TCP [SYN, ACK] Seq=0 Ack=1 Win=65535
#4  00:14:05.313  10.0.4.105  -> 185.220.101.5  TCP [ACK] (Three-way handshake completed)
#5  00:22:18.441  185.220.101.5 -> 10.0.3.50    POST /swift/transfer HTTP/1.1 (Payload Injected!)\`;
      } else if (main === "whoami") {
        output = "analyst (Junior SOC Security Specialist - Level 1, Clearance: Secret)";
      } else if (main === "ping") {
        const host = parts[1] || "gateway";
        output = \`PING \${host} (10.0.0.1) 56(84) bytes of data.
64 bytes from 10.0.0.1: icmp_seq=1 ttl=64 time=0.412 ms
64 bytes from 10.0.0.1: icmp_seq=2 ttl=64 time=0.389 ms
64 bytes from 10.0.0.1: icmp_seq=3 ttl=64 time=0.405 ms
--- \${host} ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2045ms\`;
      } else if (main === "hint") {
        const q = this.getCurrentActiveQuestion();
        if (q) {
          output = \`[💡 GỢI Ý ĐIỀU TRA CHO TÌNH HUỐNG HIỆN TẠI (Part \${q.part})]
- Chủ đề: \${q.tags?.topic || 'Bảo mật'} | Dạng bài: \${q.tags?.category || 'Ngữ pháp/Từ vựng'}
- Mẹo nhận biết: \${q.examTip || 'Đọc kỹ các liên từ và từ loại trước/sau chỗ trống.'}
- Manh mối lệnh: Hãy thử gõ 'grep "failed" auth.log' hoặc 'cat firewall.rules' để đối chiếu dữ liệu!\`;
        } else {
          output = "Không có câu hỏi nào đang mở. Hãy vào tab Cốt truyện hoặc Sinh tồn để tra cứu gợi ý.";
        }
      } else {
        output = \`bash: \${main}: command not found. Gõ 'help' để xem danh sách lệnh hỗ trợ.\`;
      }

      screen.innerHTML += \`
        <div style="margin-top: 0.5rem;"><span class="term-prompt">analyst@novabank-soc:~$</span> <span class="term-cmd">\${rawCmd}</span></div>
        <div class="term-line-output">\${output}</div>
      \`;
      screen.scrollTop = screen.scrollHeight;
    }

    /* =========================================================================
       11. NÂNG CẤP 4: XUẤT THẺ ANKI CSV & BÁO CÁO TOEIC PDF CHUẨN IN
       ========================================================================= */
    exportAnkiCSV() {
      if (!this.srsVocab || !this.srsVocab.length) {
        alert("Sổ tay từ vựng hiện đang trống!");
        return;
      }

      // Format RFC-compliant CSV with UTF-8 BOM
      let csv = "\\uFEFFFront,Back,LeitnerBox,Tags\\n";
      this.srsVocab.forEach(v => {
        const front = \`"\${v.word} \${v.ipa || ''} [\${(v.pos || 'noun').toUpperCase()}]"\`;
        const back = \`"\${v.meaning} <br><i>Ví dụ: \${(v.example || '').replace(/"/g, '""')}</i>"\`;
        const box = \`"Box \${v.box || 1}"\`;
        const tags = '"TOEIC_InfoSec_NovaBank"';
        csv += \`\${front},\${back},\${box},\${tags}\\n\`;
      });

      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", "NovaBank_TOEIC_InfoSec_Vocab_Anki.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      alert(\`🎉 Đã xuất thành công \${this.srsVocab.length} thẻ từ vựng ra file 'NovaBank_TOEIC_InfoSec_Vocab_Anki.csv'!\\nBạn có thể mở Anki hoặc Quizlet -> Chọn Import File để học ngay trên điện thoại!\`);
    }

    exportPDFReport() {
      // Set print date
      const dateSlot = document.getElementById("printDateSlot");
      if (dateSlot) dateSlot.innerText = new Date().toLocaleDateString("vi-VN");

      // Switch to analytics view first
      this.switchView("analytics");
      setTimeout(() => {
        window.print();
      }, 300);
    }

    exportDataJSON() {
      const data = {
        exportedAt: new Date().toISOString(),
        score: this.score,
        shields: this.shields,
        completedChapters: Array.from(this.completedChapters),
        statsHistory: this.statsHistory,
        srsVocab: this.srsVocab,
        speedLeaderboard: this.speedLeaderboard
      };

      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", "novabank_soc_backup.json");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    /* ================= SPACED REPETITION (SRS) ================= */
    initSRS() {
      if (!this.srsVocab || !this.srsVocab.length) {
        this.srsVocab = GAME_VOCAB.map((v, i) => ({
          ...v,
          box: (i % 4) + 1,
          lastReview: Date.now()
        }));
      }
    }

    addWordToSRS(word, ipa, pos, meaning) {
      if (!this.srsVocab.some(v => v.word.toLowerCase() === word.toLowerCase())) {
        this.srsVocab.unshift({
          word,
          ipa: ipa || "",
          pos: pos || "noun",
          meaning: meaning || "",
          example: \`The technician monitored \${word} across network systems.\`,
          box: 1,
          lastReview: Date.now()
        });
        this.saveStorage();
      }
    }

    renderSRS() {
      const counts = [0, 0, 0, 0];
      this.srsVocab.forEach(v => {
        const b = Math.min(4, Math.max(1, v.box || 1));
        counts[b - 1]++;
      });

      const boxNames = ["Hộp 1: Cần ôn ngay", "Hộp 2: Đang nhớ (1 ngày)", "Hộp 3: Nhớ sâu (3 ngày)", "Hộp 4: Thành thạo (7 ngày)"];
      document.getElementById("srsBoxesBar").innerHTML = counts.map((cnt, idx) => \`
        <div class="srs-box-pill">
          <div class="srs-box-count">\${cnt}</div>
          <div class="srs-box-label">\${boxNames[idx]}</div>
        </div>
      \`).join("");

      if (this.srsVocab.length) {
        const item = this.srsVocab[this.currentSrsIndex % this.srsVocab.length];
        document.getElementById("fcWord").innerText = item.word;
        document.getElementById("fcIpa").innerText = item.ipa || "";
        document.getElementById("fcPos").innerText = (item.pos || "noun").toUpperCase();
        document.getElementById("fcMeaning").innerText = item.meaning;
        document.getElementById("fcExample").innerText = item.example ? \`"\${item.example}"\` : "";
        document.getElementById("flashcardInner").classList.remove("flipped");
      }

      this.renderVocabSearchList(this.srsVocab);
    }

    flipFlashcard() {
      const card = document.getElementById("flashcardInner");
      if (card) card.classList.toggle("flipped");
    }

    rateSRS(isKnown) {
      this.sound.playClick();
      if (!this.srsVocab.length) return;
      const item = this.srsVocab[this.currentSrsIndex % this.srsVocab.length];
      if (isKnown) {
        item.box = Math.min(4, (item.box || 1) + 1);
        this.sound.playCorrect();
      } else {
        item.box = 1;
        this.sound.playWrong();
      }
      item.lastReview = Date.now();
      this.currentSrsIndex = (this.currentSrsIndex + 1) % this.srsVocab.length;
      this.saveStorage();
      this.renderSRS();
    }

    searchVocab(query) {
      const q = query.toLowerCase().trim();
      const filtered = this.srsVocab.filter(v =>
        v.word.toLowerCase().includes(q) || (v.meaning && v.meaning.toLowerCase().includes(q))
      );
      this.renderVocabSearchList(filtered);
    }

    renderVocabSearchList(list) {
      const container = document.getElementById("vocabSearchList");
      if (!container) return;
      container.innerHTML = list.slice(0, 40).map(v => \`
        <div class="vocab-chip" style="justify-content: space-between; padding: 0.6rem 0.85rem;">
          <div>
            <b style="color: var(--accent-cyan); font-size: 0.95rem;">\${v.word}</b>
            <small style="color: var(--text-muted);">\${v.ipa || ''}</small>
            <div style="font-size: 0.82rem; color: var(--text-main); margin-top: 0.2rem;">\${v.meaning}</div>
          </div>
          <button onclick="gameApp.speakWord('\${v.word}')" title="Nghe phát âm">🔊</button>
        </div>
      \`).join("");
    }

    openAddVocabModal() {
      document.getElementById("addVocabModal").classList.add("open");
    }

    submitAddVocab(e) {
      e.preventDefault();
      const word = document.getElementById("newVocabWord").value.trim();
      const ipa = document.getElementById("newVocabIpa").value.trim();
      const pos = document.getElementById("newVocabPos").value;
      const meaning = document.getElementById("newVocabMeaning").value.trim();
      const example = document.getElementById("newVocabExample").value.trim();

      if (word && meaning) {
        this.srsVocab.unshift({ word, ipa, pos, meaning, example, box: 1, lastReview: Date.now() });
        this.saveStorage();
        this.closeModals();
        this.renderSRS();
        alert(\`Đã lưu từ "\${word}" thành công!\`);
      }
    }

    /* ================= STATS & ANALYTICS ================= */
    recordStat(part, category, isCorrect) {
      this.statsHistory.totalAnswered++;
      if (isCorrect) this.statsHistory.totalCorrect++;

      if (part && this.statsHistory.byPart[part]) {
        this.statsHistory.byPart[part].t++;
        if (isCorrect) this.statsHistory.byPart[part].c++;
      }

      if (category) {
        if (!this.statsHistory.byCategory[category]) {
          this.statsHistory.byCategory[category] = { c: 0, t: 0 };
        }
        this.statsHistory.byCategory[category].t++;
        if (isCorrect) this.statsHistory.byCategory[category].c++;
      }
    }

    updateStatsUI() {
      document.getElementById("statScore").innerText = this.score;
      document.getElementById("statMultiplier").innerText = this.multiplier.toFixed(1);

      let shieldsTxt = "";
      for (let i = 0; i < 3; i++) {
        shieldsTxt += i < this.shields ? "🛡️ " : "🩶 ";
      }
      document.getElementById("statShields").innerText = shieldsTxt;

      let rank = "Intern Lv.1";
      if (this.score >= 5000) rank = "👑 Cyber Legend";
      else if (this.score >= 3000) rank = "⚡ Lead Hunter";
      else if (this.score >= 1500) rank = "🛡️ Senior Analyst";
      else if (this.score >= 500) rank = "💻 Junior SOC";
      document.getElementById("statRank").innerText = rank;
    }

    updateAnalyticsUI() {
      const hist = this.statsHistory;
      const ratio = hist.totalAnswered > 0 ? (hist.totalCorrect / hist.totalAnswered) : 0.68;
      const estL = Math.round(150 + ratio * 320);
      const estR = Math.round(140 + ratio * 310);
      const total = estL + estR;

      document.getElementById("diagEstScore").innerText = total;
      document.getElementById("diagListenScore").innerText = estL;
      document.getElementById("diagReadScore").innerText = estR;

      const partNames = {
        2: "Part 2 (Hỏi - Đáp nghe)",
        3: "Part 3 (Hội thoại nghe)",
        5: "Part 5 (Điền từ vào câu)",
        6: "Part 6 (Điền đoạn văn)",
        7: "Part 7 (Đọc hiểu văn bản)"
      };

      const breakdownContainer = document.getElementById("diagPartBreakdown");
      if (breakdownContainer) {
        breakdownContainer.innerHTML = Object.keys(hist.byPart).map(p => {
          const item = hist.byPart[p];
          const pct = item.t > 0 ? Math.round((item.c / item.t) * 100) : 70;
          return \`
            <div style="margin-bottom: 0.6rem; font-size: 0.85rem;">
              <div style="display: flex; justify-content: space-between;">
                <span>\${partNames[p] || 'Part ' + p}</span>
                <b>\${pct}% (\${item.c}/\${item.t})</b>
              </div>
              <div class="progress-bar-wrap">
                <div class="progress-bar-fill" style="width: \${pct}%;"></div>
              </div>
            </div>
          \`;
        }).join("");
      }

      const adviceBox = document.getElementById("diagAdviceBox");
      if (adviceBox) {
        adviceBox.innerHTML = \`
          <p>📌 <strong>Đánh giá tổng quan:</strong> Bạn đang ở dải điểm khoảng <strong>\${total} điểm</strong> (Listening: \${estL}, Reading: \${estR}).</p>
          <ul style="padding-left: 1.25rem; margin: 0.5rem 0;">
            <li><strong>Điểm mạnh:</strong> Nhận diện từ vựng chuyên ngành an ninh mạng tốt (firewall, quarantine, authentication, mitigate, breach).</li>
            <li><strong>Điểm cần lưu ý:</strong> Cẩn thận các bẫy liên từ (although vs despite), bẫy Yes/No cho câu hỏi Wh- trong Part 2 và bẫy thì hoàn thành (since midnight).</li>
            <li><strong>Lộ trình đề xuất:</strong> Luyện thêm 15 câu Part 5 về từ loại (Word form) và bấm nút '📥 Xuất Thẻ Anki' để đồng bộ 60 từ vựng vào điện thoại trước ca trực tiếp theo!</li>
          </ul>
        \`;
      }
    }

    /* ================= KEYBOARD SHORTCUTS ================= */
    initKeyboardShortcuts() {
      window.addEventListener("keydown", (e) => {
        if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT") return;

        const key = e.key.toUpperCase();
        if (key === "1" || key === "A") this.triggerKeyChoice(0);
        else if (key === "2" || key === "B") this.triggerKeyChoice(1);
        else if (key === "3" || key === "C") this.triggerKeyChoice(2);
        else if (key === "4" || key === "D") this.triggerKeyChoice(3);
        else if (e.key === "Enter") {
          const nextBtn = document.getElementById("btnNextQuestion");
          if (nextBtn && nextBtn.style.display !== "none") this.nextStoryQuestion();
        } else if (e.key === " ") {
          e.preventDefault();
          this.playQuestionAudio();
        } else if (key === "S") {
          this.toggleSound();
        } else if (key === "T") {
          this.toggleTheme();
        } else if (key === "V") {
          this.toggleVoiceAnswer();
        } else if (e.key === "~" || e.key === "\`") {
          e.preventDefault();
          this.toggleTerminal();
        } else if (e.key === "Escape") {
          this.closeModals();
          this.closeTerminal();
        }
      });
    }

    triggerKeyChoice(idx) {
      if (document.getElementById("viewSpeedRun").classList.contains("active")) {
        this.selectSpeedChoice(idx);
        return;
      }
      const choiceBtn = document.getElementById(\`choiceBtn_\${idx}\`);
      if (choiceBtn) choiceBtn.click();
    }

    openHelpModal() {
      document.getElementById("helpModal").classList.add("open");
    }

    closeModals() {
      document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("open"));
    }
  }

  // =========================================================================
  // KHỞI ĐỘNG ỨNG DỤNG (INITIALIZATION ON DOM LOAD)
  // =========================================================================
  let gameApp = null;
  window.addEventListener("DOMContentLoaded", () => {
    gameApp = new GameApp();
    gameApp.init();
    console.log("NovaBank Cyber Siege initialized successfully with", GAME_QUESTIONS.length, "questions and all 5 upgraded modules!");
  });
  </script>
</body>
</html>`;
}

const htmlContent = buildHtml();
fs.writeFileSync(path.join(__dirname, '../../index.html'), htmlContent, 'utf8');
console.log('Successfully written upgraded index.html! Size:', htmlContent.length, 'bytes');
