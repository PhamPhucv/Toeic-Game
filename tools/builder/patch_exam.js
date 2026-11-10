const fs = require('fs');
const path = require('path');

const targetFilePath = path.resolve(__dirname, 'generate_single_html.js');
const methodsFilePath = path.resolve(__dirname, 'exam_methods.txt');

let content = fs.readFileSync(targetFilePath, 'utf8');
const newExamCode = fs.readFileSync(methodsFilePath, 'utf8');

const targetStart = '/* =========================================================================\n       MOCK EXAM & FULL ETS SIMULATION CENTER (Mini 30, Standard 100, Full 200)';
const targetStartAlt = '/* =========================================================================\r\n       MOCK EXAM & FULL ETS SIMULATION CENTER (Mini 30, Standard 100, Full 200)';
const targetStartOld = '/* ================= MOCK EXAM (MINI TEST 30) ================= */';

let startIdx = content.indexOf(targetStart);
if (startIdx === -1) startIdx = content.indexOf(targetStartAlt);
if (startIdx === -1) startIdx = content.indexOf(targetStartOld);

if (startIdx === -1) {
  console.error('targetStart not found!');
  process.exit(1);
}

const targetEnd = '/* =========================================================================\r\n       8. NÂNG CẤP 3: CHẾ ĐỘ SINH TỒN VÔ TẬN';
const targetEndAlt = '/* =========================================================================\n       8. NÂNG CẤP 3: CHẾ ĐỘ SINH TỒN VÔ TẬN';

let endIdx = content.indexOf(targetEnd);
if (endIdx === -1) endIdx = content.indexOf(targetEndAlt);

if (endIdx === -1) {
  console.error('targetEnd not found!');
  process.exit(1);
}

const updatedContent = content.slice(0, startIdx) + newExamCode + '\n\n    ' + content.slice(endIdx);
fs.writeFileSync(targetFilePath, updatedContent, 'utf8');
console.log('Successfully patched generate_single_html.js from exam_methods.txt!');
