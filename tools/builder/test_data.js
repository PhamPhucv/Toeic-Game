const fs = require('fs');
const path = require('path');

const vocab = require('./vocab.js');
const chapters = require('./chapters_data.js');
const ch1 = require('./chapter1.js');
const ch2 = require('./chapter2.js');
const ch3 = require('./chapter3.js');
const ch4 = require('./chapter4.js');

const allQuestions = [...ch1, ...ch2, ...ch3, ...ch4];

console.log('--- DATA VERIFICATION ---');
console.log('Chapters:', chapters.length);
console.log('Chapter 1 questions:', ch1.length);
console.log('Chapter 2 questions:', ch2.length);
console.log('Chapter 3 questions:', ch3.length);
console.log('Chapter 4 questions:', ch4.length);
console.log('Total questions:', allQuestions.length);
console.log('Vocabulary items:', vocab.length);

// Verify unique IDs
const seenIds = new Set();
allQuestions.forEach(q => {
  if (seenIds.has(q.id)) {
    console.error('ERROR: Duplicate Question ID detected:', q.id);
  }
  seenIds.add(q.id);
});

console.log('All IDs are unique:', seenIds.size === allQuestions.length);
