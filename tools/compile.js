const fs = require('fs');
const path = require('path');

// 1. Read base questions
const baseQuestions = require('./data_parts/base_questions.js');
console.log('Base questions loaded:', baseQuestions.length);

// 2. Load additions
const { part1New, part2New } = require('./data_parts/part1_2.js');
const { part3_4New } = require('./data_parts/part3_4.js');
const { part5New } = require('./data_parts/part5.js');
const { part6New } = require('./data_parts/part6.js');
const { part7New } = require('./data_parts/part7.js');

// Merge questions
const allQuestions = [
  ...baseQuestions,
  ...part1New,
  ...part2New,
  ...part3_4New,
  ...part5New,
  ...part6New,
  ...part7New
];

// Verify IDs
const seenIds = new Set();
let subQuestionCount = 0;
const partCounts = {};

allQuestions.forEach(q => {
  if (seenIds.has(q.id)) {
    console.error('DUPLICATE TOP-LEVEL ID DETECTED:', q.id);
  }
  seenIds.add(q.id);

  if (q.questions && Array.isArray(q.questions)) {
    q.questions.forEach(sub => {
      if (seenIds.has(sub.id)) {
        console.error('DUPLICATE SUB-QUESTION ID DETECTED:', sub.id);
      }
      seenIds.add(sub.id);
      subQuestionCount++;
      const pKey = 'Part ' + q.part;
      partCounts[pKey] = (partCounts[pKey] || 0) + 1;
    });
  } else {
    subQuestionCount++;
    const pKey = 'Part ' + q.part;
    partCounts[pKey] = (partCounts[pKey] || 0) + 1;
  }
});

console.log('Total playable sub-questions:', subQuestionCount);
console.log('Questions breakdown by Part:', partCounts);

// Write updated js/data/questions.js
const questionsOutput = `/**
 * =====================================================================
 * DATA SCHEMA: QUESTIONS
 * TOEIC Standard Business (60%) & Cybersecurity / InfoSec Context (40%)
 * Parts 1 - 7 (Total ${subQuestionCount} questions)
 * =====================================================================
 */
const QUESTIONS = ${JSON.stringify(allQuestions, null, 2)};
`;
fs.writeFileSync(path.join(__dirname, '../js/data/questions.js'), questionsOutput, 'utf8');
console.log('Successfully wrote js/data/questions.js');

// 3. Read base vocab
const baseVocab = require('./data_parts/base_vocab.js');
console.log('Base vocab loaded:', baseVocab.length);

const vocabBusiness = require('./data_parts/vocab_business.js');
const vocabInfosec = require('./data_parts/vocab_infosec.js');
const vocabMore = require('./data_parts/vocab_more.js');

// Merge and deduplicate by word (case-insensitive)
const vocabMap = new Map();
// Add base first
baseVocab.forEach(v => {
  vocabMap.set(v.word.toLowerCase(), v);
});
// Add business additions
vocabBusiness.forEach(v => {
  if (!vocabMap.has(v.word.toLowerCase())) {
    vocabMap.set(v.word.toLowerCase(), v);
  }
});
// Add infosec additions
vocabInfosec.forEach(v => {
  if (!vocabMap.has(v.word.toLowerCase())) {
    vocabMap.set(v.word.toLowerCase(), v);
  }
});
// Add more additions
vocabMore.forEach(v => {
  if (!vocabMap.has(v.word.toLowerCase())) {
    vocabMap.set(v.word.toLowerCase(), v);
  }
});

const allVocab = Array.from(vocabMap.values());
console.log('Total unique VOCAB count:', allVocab.length);

// Write updated js/data/vocab.js
const vocabOutput = `/**
 * =====================================================================
 * DATA SCHEMA: VOCABULARY
 * 150+ High-Frequency General TOEIC & 150+ InfoSec/Cybersecurity
 * Total ${allVocab.length} Vocabulary Items
 * =====================================================================
 */
const VOCAB = ${JSON.stringify(allVocab, null, 2)};
`;
fs.writeFileSync(path.join(__dirname, '../js/data/vocab.js'), vocabOutput, 'utf8');
console.log('Successfully wrote js/data/vocab.js');
