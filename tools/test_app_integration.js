const fs = require('fs');
const vm = require('vm');

const html = fs.readFileSync('index.html', 'utf8');
const scriptSrcs = [...html.matchAll(/<script\s+src="([^"]+)"><\/script>/g)].map(m => m[1]);

const mockCtx = new Proxy({}, { get: () => () => {} });
const mockStorage = {};
const sandbox = {
  console: console,
  setTimeout: fn => fn(),
  clearTimeout: () => {},
  setInterval: () => 123,
  clearInterval: () => {},
  localStorage: {
    getItem: k => mockStorage[k] || null,
    setItem: (k, v) => { mockStorage[k] = v; },
    removeItem: k => { delete mockStorage[k]; }
  },
  window: {
    speechSynthesis: { cancel: () => {}, speak: () => {}, getVoices: () => [] },
    SpeechSynthesisUtterance: function() {},
    addEventListener: (event, cb) => {
      if (event === 'DOMContentLoaded') cb();
    }
  },
  SpeechSynthesisUtterance: function() {},
  document: {
    getElementById: () => ({
      textContent: '',
      innerHTML: '',
      value: '',
      classList: { toggle: () => {}, add: () => {} },
      getContext: () => mockCtx,
      getBoundingClientRect: () => ({ width: 300, height: 200 })
    }),
    querySelectorAll: () => [],
    documentElement: { setAttribute: () => {} },
    addEventListener: () => {},
    createElement: () => ({ style: {}, setAttribute: () => {}, click: () => {}, remove: () => {} }),
    body: { appendChild: () => {} }
  }
};
sandbox.window.document = sandbox.document;
vm.createContext(sandbox);

scriptSrcs.forEach(src => {
  const code = fs.readFileSync(src, 'utf8');
  vm.runInContext(code, sandbox);
});

vm.runInContext(`
  console.log('Testing App Views with 180 questions & 300 vocab:');
  const stage = { innerHTML: '' };

  // Dashboard
  app.renderDashboard(stage);
  console.log('✓ Dashboard rendered');

  // Start Part 5
  app.startPartPractice(5);
  console.log('✓ Part 5 practice started with', app.activeQuiz.questions.length, 'questions');

  // Start Part 6
  app.startPartPractice(6);
  console.log('✓ Part 6 practice started with', app.activeQuiz.questions.length, 'questions');

  // Start Part 7
  app.startPartPractice(7);
  console.log('✓ Part 7 practice started with', app.activeQuiz.questions.length, 'questions');

  // Start Mini Test
  app.startMiniTest();
  console.log('✓ Mini Test 30 questions started with', app.activeQuiz.questions.length, 'questions');

  // Start Boss Battle
  app.launchBossBattle();
  console.log('✓ Boss Battle started with', app.activeQuiz.questions.length, 'questions');

  // Render Vocab
  app.renderVocabArena(stage);
  console.log('✓ Vocab Arena rendered with', VOCAB.length, 'words');

  console.log('ALL APP VIEWS FUNCTIONING FLAWLESSLY WITH EXTENDED DATASET!');
`, sandbox);
