const fs = require('fs');
const path = require('path');

// 1. Merge Vocab
const baseVocab = require('./vocab.js');
const newVocab = require('./new_vocab.js');
const mergedVocab = [...baseVocab, ...newVocab];

const vocabCode = `/**
 * VOCABULARY DATA (95 Core InfoSec & Business English Items)
 * Bao gồm 65 từ nền tảng + 30 từ vựng nâng cao chuẩn NIST/Purdue/ETS
 * Dùng cho Sổ tay từ vựng Spaced Repetition (SRS)
 */
module.exports = ${JSON.stringify(mergedVocab, null, 2)};
`;
fs.writeFileSync(path.resolve(__dirname, './vocab.js'), vocabCode, 'utf8');
console.log('Updated vocab.js! Total items:', mergedVocab.length);

// 2. Merge Chapters
function mergeChapter(baseFile, newFile, chapterNum) {
  const baseQ = require(baseFile);
  const newQ = require(newFile);
  const merged = [...baseQ, ...newQ];
  const code = `/**
 * CHAPTER ${chapterNum} QUESTIONS (${merged.length} câu hỏi hoàn chỉnh)
 * Bao gồm ${baseQ.length} câu nền tảng + ${newQ.length} câu mới bổ sung
 */
module.exports = ${JSON.stringify(merged, null, 2)};
`;
  fs.writeFileSync(path.resolve(__dirname, baseFile), code, 'utf8');
  console.log(`Updated ${baseFile}! Total questions:`, merged.length);
  return merged.length;
}

const c1Count = mergeChapter('./chapter1.js', './new_questions_ch1.js', 1);
const c2Count = mergeChapter('./chapter2.js', './new_questions_ch2.js', 2);
const c3Count = mergeChapter('./chapter3.js', './new_questions_ch3.js', 3);
const c4Count = mergeChapter('./chapter4.js', './new_questions_ch4.js', 4);

console.log('Total merged questions across all chapters:', c1Count + c2Count + c3Count + c4Count);
