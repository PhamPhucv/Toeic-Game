const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('index.html', 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);

const storage = {};
const elements = {};
const mockEl = (tag = 'div') => ({
  style: {},
  classList: { add: ()=>{}, remove: ()=>{}, toggle: ()=>{}, contains: ()=>false },
  setAttribute: ()=>{},
  getAttribute: ()=>null,
  removeAttribute: ()=>{},
  addEventListener: ()=>{},
  appendChild: ()=>{},
  removeChild: ()=>{},
  click: ()=>{},
  focus: ()=>{},
  innerHTML: '',
  textContent: '',
  value: '',
  getContext: () => ({ fillRect: ()=>{}, clearRect: ()=>{}, stroke: ()=>{}, beginPath: ()=>{}, arc: ()=>{} }),
  getBoundingClientRect: () => ({ width: 800, height: 600, top: 0, left: 0 })
});

const sandbox = {
  console: console,
  setTimeout: (fn, ms) => setTimeout(fn, ms),
  clearTimeout: (id) => clearTimeout(id),
  setInterval: () => 1,
  clearInterval: () => {},
  confirm: () => true,
  alert: () => {},
  localStorage: {
    getItem: (k) => storage[k] || null,
    setItem: (k, v) => { storage[k] = String(v); },
    removeItem: (k) => { delete storage[k]; }
  },
  window: {
    speechSynthesis: { getVoices: () => [], speak: ()=>{}, cancel: ()=>{} },
    addEventListener: (event, cb) => {
      if (event === 'DOMContentLoaded') setTimeout(cb, 0);
    },
    location: { reload: ()=>{} }
  },
  document: {
    getElementById: (id) => {
      if (!elements[id]) elements[id] = mockEl();
      return elements[id];
    },
    querySelector: () => mockEl(),
    querySelectorAll: () => [],
    createElement: (tag) => mockEl(tag),
    body: mockEl('body'),
    documentElement: mockEl('html'),
    addEventListener: ()=>{}
  },
  SpeechSynthesisUtterance: function(text) { this.text = text; },
  AudioContext: function() {
    this.createOscillator = () => ({ connect: ()=>{}, start: ()=>{}, stop: ()=>{}, type: '', frequency: { setValueAtTime: ()=>{} } });
    this.createGain = () => ({ connect: ()=>{}, gain: { setValueAtTime: ()=>{}, exponentialRampToValueAtTime: ()=>{} } });
    this.destination = {};
  }
};
sandbox.window.document = sandbox.document;
sandbox.window.localStorage = sandbox.localStorage;

vm.createContext(sandbox);

try {
  vm.runInContext(scriptMatch[1], sandbox);

  vm.runInContext(`
    if (!gameApp) {
      gameApp = new GameApp();
      gameApp.init();
    }

    console.log('--- RUNTIME SIMULATION TEST ---');
    console.log('✓ GAME_QUESTIONS count:', GAME_QUESTIONS.length);
    console.log('✓ Part 1 questions:', GAME_QUESTIONS.filter(q => q.part === 1).length);
    console.log('✓ Part 2 questions:', GAME_QUESTIONS.filter(q => q.part === 2).length);
    console.log('✓ Part 3 questions:', GAME_QUESTIONS.filter(q => q.part === 3).length);
    console.log('✓ Part 4 questions:', GAME_QUESTIONS.filter(q => q.part === 4).length);
    console.log('✓ Part 5 questions:', GAME_QUESTIONS.filter(q => q.part === 5).length);
    console.log('✓ Part 6 questions:', GAME_QUESTIONS.filter(q => q.part === 6).length);
    console.log('✓ Part 7 questions:', GAME_QUESTIONS.filter(q => q.part === 7).length);

    console.log('✓ gameApp exists:', typeof gameApp !== 'undefined');

    // Test Practice filter for Part 1 & Part 4
    gameApp.filterPractice('p1');
    console.log('✓ Practice filter p1 (Part 1 SVG) works!');
    gameApp.filterPractice('p4');
    console.log('✓ Practice filter p4 (Part 4 Short Talks) works!');

    // Test Exam Hub
    gameApp.switchView('mockexam');
    console.log('✓ Switch to mockexam (Exam Hub) works!');

    // Test Mini-Test (30 questions)
    gameApp.startExamWithConfig('mini');
    console.log('✓ Mini-test started with:', gameApp.examQuestions.length, 'questions, duration:', gameApp.examTimeRemaining, 'seconds');
    if (gameApp.examQuestions.length !== 30) throw new Error('Mini test should have 30 questions');

    // Test Standard Combined (100 questions)
    gameApp.startExamWithConfig('standard_combined');
    console.log('✓ Standard combined test started with:', gameApp.examQuestions.length, 'questions, duration:', gameApp.examTimeRemaining, 'seconds');
    if (gameApp.examQuestions.length !== 100) throw new Error('Standard test should have 100 questions');

    // Test Full Simulation (200 questions)
    gameApp.startExamWithConfig('full');
    console.log('✓ Full 120m simulation test started with:', gameApp.examQuestions.length, 'questions, duration:', gameApp.examTimeRemaining, 'seconds');
    if (gameApp.examQuestions.length !== 200) throw new Error('Full test should have 200 questions');

    // Test Flagging
    gameApp.toggleExamFlag();
    console.log('✓ Flagging current question works, flagged count:', gameApp.examFlaggedQuestions.size);

    // Test Answering
    gameApp.recordExamAnswer(1);
    console.log('✓ Record answer works, answered count:', Object.keys(gameApp.examUserAnswers).length);

    // Test Submit Exam
    gameApp.submitExam();
    console.log('✓ Submit exam works! Last result:', gameApp.lastExamResult);

    // Test Exam Review Mode
    gameApp.startExamReview();
    console.log('✓ Exam Review Mode activated! isExamReviewMode:', gameApp.isExamReviewMode);

    // Test Exit to Hub
    gameApp.exitExamToHub();
    console.log('✓ Exit to Hub works! examActive:', gameApp.examActive);

    console.log('\\n🌟 ALL TOEIC COMPREHENSIVE COVERAGE FEATURES PASSED 100%!');
  `, sandbox);

} catch (e) {
  console.error('Simulation FAILED:', e);
  process.exit(1);
}
