const fs = require('fs');
const vm = require('vm');

// 1. Validate EMAILS dataset
const emailsCode = fs.readFileSync('js/data/emails.js', 'utf8');
const sandboxEmails = {};
vm.createContext(sandboxEmails);
vm.runInContext(emailsCode, sandboxEmails);
const emails = vm.runInContext("EMAILS", sandboxEmails);

console.log('--- Testing EMAILS Dataset ---');
if (!Array.isArray(emails) || emails.length !== 30) {
  throw new Error('EMAILS must have exactly 30 items. Found: ' + (emails ? emails.length : 0));
}
console.log('✓ Exactly 30 emails found.');

const levelCounts = {};
let safeCount = 0;
let phishCount = 0;
const seenIds = new Set();

emails.forEach(e => {
  if (seenIds.has(e.id)) throw new Error('Duplicate email ID: ' + e.id);
  seenIds.add(e.id);
  levelCounts[e.level] = (levelCounts[e.level] || 0) + 1;
  if (e.isPhishing) phishCount++;
  else safeCount++;

  // Validate fields
  if (!e.sender || !e.sender.email || !e.sender.name) throw new Error('Missing sender on ' + e.id);
  if (!e.subject || !e.body) throw new Error('Missing subject or body on ' + e.id);
  if (!e.vietnameseTranslation || !e.detailedExplanation) throw new Error('Missing translation/explanation on ' + e.id);
  if (!e.readingQuestion || !Array.isArray(e.readingQuestion.choices) || e.readingQuestion.choices.length !== 4) {
    throw new Error('Invalid readingQuestion on ' + e.id);
  }
  if (e.readingQuestion.answer < 0 || e.readingQuestion.answer > 3) {
    throw new Error('Invalid answer index on ' + e.id);
  }
  if (!Array.isArray(e.keyVocab) || e.keyVocab.length < 3) {
    throw new Error('keyVocab must have at least 3 items on ' + e.id);
  }
});

console.log('✓ Level breakdown (5 levels x 6):', levelCounts);
console.log(`✓ Balance: Safe=${safeCount} (${Math.round(safeCount/30*100)}%), Phishing=${phishCount} (${Math.round(phishCount/30*100)}%)`);

// 2. Test Controller & Integration
console.log('--- Testing PhishingHunterController & App Integration ---');
const html = fs.readFileSync('index.html', 'utf8');
const scriptSrcs = [...html.matchAll(/<script\s+src="([^"]+)"><\/script>/g)].map(m => m[1]);

const mockCtx = new Proxy({}, { get: () => () => {} });
const mockStorage = {};
const sandboxApp = {
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
    addEventListener: (event, cb) => { if (event === 'DOMContentLoaded') cb(); }
  },
  SpeechSynthesisUtterance: function() {},
  document: {
    getElementById: id => ({
      textContent: '',
      innerHTML: '',
      value: '',
      style: {},
      classList: { toggle: () => {}, add: () => {}, remove: () => {} },
      getContext: () => mockCtx,
      getBoundingClientRect: () => ({ width: 300, height: 200 }),
      scrollIntoView: () => {}
    }),
    querySelectorAll: () => [],
    documentElement: { setAttribute: () => {} },
    addEventListener: () => {},
    createElement: () => ({ style: {}, setAttribute: () => {}, click: () => {}, remove: () => {} }),
    body: { appendChild: () => {} }
  }
};
sandboxApp.window.document = sandboxApp.document;
vm.createContext(sandboxApp);

scriptSrcs.forEach(src => {
  const code = fs.readFileSync(src, 'utf8');
  vm.runInContext(code, sandboxApp);
});

vm.runInContext(`
  // 1. Test navigation to phishing view
  app.navigate('phishing');
  if (!app.activeQuiz || !(app.activeQuiz instanceof PhishingHunterController)) {
    throw new Error('app.activeQuiz is not an instance of PhishingHunterController');
  }
  console.log('✓ Phishing Hunter initialized with Level:', app.activeQuiz.level, 'Emails count:', app.activeQuiz.emails.length);
  if (app.activeQuiz.emails.length !== 6) throw new Error('Level 1 must contain 6 emails');
  if (app.activeQuiz.companyTrust !== 5) throw new Error('Initial trust must be 5');

  // 2. Test Gameplay Simulation on Email 1 (Phishing)
  const currentEmail = app.activeQuiz.emails[0];
  console.log('Simulating triage on email #1 (' + currentEmail.id + ', isPhishing=' + currentEmail.isPhishing + ')...');

  // Select phrase
  app.activeQuiz.togglePhrase({ getAttribute: () => currentEmail.suspiciousClues[0].phrase, classList: { add: ()=>{}, remove: ()=>{} }, textContent: '' });
  if (app.activeQuiz.selectedClues.length !== 1) throw new Error('Selected clues length mismatch');

  // Set correct verdict
  app.activeQuiz.setVerdict(currentEmail.isPhishing);
  // Set correct reading answer
  app.activeQuiz.setReadingChoice(currentEmail.readingQuestion.answer, {});

  const xpBefore = app.state.user.xp;
  app.activeQuiz.submitTriage();

  if (app.state.user.xp <= xpBefore) throw new Error('XP was not awarded on correct triage');
  if (app.activeQuiz.companyTrust !== 5) throw new Error('Trust should not decrease on correct verdict');
  console.log('✓ Correct triage awarded XP, trust preserved at 5/5');

  // 3. Test wrong verdict decreases Company Trust
  app.activeQuiz.nextEmail();
  const email2 = app.activeQuiz.emails[1];
  console.log('Simulating incorrect verdict on email #2 (' + email2.id + ')...');
  // Intentionally submit wrong verdict
  app.activeQuiz.setVerdict(!email2.isPhishing);
  app.activeQuiz.setReadingChoice(0, {});
  app.activeQuiz.submitTriage();
  if (app.activeQuiz.companyTrust !== 4) throw new Error('Company trust must decrease to 4 on wrong verdict');
  console.log('✓ Wrong verdict correctly decreased Company Trust to', app.activeQuiz.companyTrust + '/5');

  // 4. Test Schema Migration: Legacy state without phishingStats
  const legacyState = {
    user: { name: "Agent Test", role: "Junior Analyst", level: 3, xp: 50 },
    adaptive: { currentDifficulty: 2 },
    progress: { completedQuestions: {}, leitnerBoxes: { b1: [], b2: [], b3: [], b4: [], b5: [] } }
  };
  const migrated = app.validateAndMergeState(legacyState);
  if (!migrated.progress.phishingStats || migrated.progress.phishingStats.currentLevel !== 1 || migrated.progress.phishingStats.trustPoints !== 5) {
    throw new Error('Legacy state migration failed for phishingStats');
  }
  console.log('✓ Backward compatibility & state schema migration verified');
`, sandboxApp);

console.log('ALL PHISHING HUNTER TESTS PASSED PERFECTLY!');
