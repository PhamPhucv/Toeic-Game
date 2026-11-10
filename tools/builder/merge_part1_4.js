const fs = require('fs');
const path = require('path');

const part1 = require('./new_part1.js');
const part4 = require('./new_part4.js');

function updateChapter(chNum, part1Ids, part4Ids) {
  const filePath = path.resolve(__dirname, `./chapter${chNum}.js`);
  const currentQ = require(filePath);

  // Filter out any existing matching ids to avoid duplicates if re-run
  const existingIds = new Set(currentQ.map(q => q.id));

  const toAddPart1 = part1.filter(q => part1Ids.includes(q.id) && !existingIds.has(q.id));
  const toAddPart4 = part4.filter(q => part4Ids.includes(q.id) && !existingIds.has(q.id));

  const updated = [...currentQ, ...toAddPart1, ...toAddPart4];

  const fileContent = `/**
 * CHAPTER ${chNum} QUESTIONS (${updated.length} câu hỏi hoàn chỉnh)
 * Bao gồm các Part 1, 2, 3, 4, 5, 6, 7 chuẩn ETS TOEIC & InfoSec SOC
 */
module.exports = ${JSON.stringify(updated, null, 2)};
`;
  fs.writeFileSync(filePath, fileContent, 'utf8');
  console.log(`Chapter ${chNum} updated: ${currentQ.length} -> ${updated.length} questions (+${toAddPart1.length + toAddPart4.length})`);
  return updated.length;
}

const c1Total = updateChapter(1, ['c1-p1-01', 'c1-p1-02'], ['c1-p4-01', 'c1-p4-02', 'c1-p4-03']);
const c2Total = updateChapter(2, ['c2-p1-01', 'c2-p1-02'], ['c2-p4-01', 'c2-p4-02', 'c2-p4-03']);
const c3Total = updateChapter(3, ['c3-p1-01', 'c3-p1-02'], ['c3-p4-01', 'c3-p4-02', 'c3-p4-03']);
const c4Total = updateChapter(4, ['c4-p1-01', 'c4-p1-02'], ['c4-p4-01', 'c4-p4-02', 'c4-p4-03']);

console.log('Total questions across all 4 chapters:', c1Total + c2Total + c3Total + c4Total);

// Update chapters_data.js
const chaptersDataPath = path.resolve(__dirname, './chapters_data.js');
const chaptersData = require(chaptersDataPath);
chaptersData[0].questionsCount = c1Total;
chaptersData[1].questionsCount = c2Total;
chaptersData[2].questionsCount = c3Total;
chaptersData[3].questionsCount = c4Total;

const newChaptersDataContent = `/**
 * CHAPTERS & NARRATIVE DEFINITIONS
 * Bối cảnh: Ngân hàng NovaBank - Trung tâm SOC (Security Operations Center)
 */
module.exports = ${JSON.stringify(chaptersData, null, 2)};
`;
fs.writeFileSync(chaptersDataPath, newChaptersDataContent, 'utf8');
console.log('Updated chapters_data.js with new questionsCount!');
