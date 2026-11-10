const fs = require('fs');
const path = require('path');

const newVocab = require('./new_vocab.js');
const ch1 = require('./new_questions_ch1.js');
const ch2 = require('./new_questions_ch2.js');
const ch3 = require('./new_questions_ch3.js');
const ch4 = require('./new_questions_ch4.js');

const allNew = [...ch1, ...ch2, ...ch3, ...ch4];

const jsonOutput = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "metadata": {
    "title": "NovaBank Cyber Siege - Supplemental TOEIC & InfoSec Question Bank",
    "version": "2.1.0",
    "curatedDate": "2026-11-10",
    "totalNewQuestions": allNew.length,
    "totalNewVocab": newVocab.length,
    "breakdownByPart": {
      "part2": 20,
      "part3": 12,
      "part5": 40,
      "part6": 18,
      "part7": 24
    },
    "sourcesReference": "SOURCES.md"
  },
  "schema": {
    "questionItem": {
      "type": "object",
      "required": ["id", "chapter", "part", "speaker", "dialogue_en", "dialogue_vi", "situation_vi", "stem", "choices", "answer", "explanation_vi", "trap", "examTip", "tags"],
      "properties": {
        "id": { "type": "string", "description": "Unique question identifier" },
        "chapter": { "type": "integer", "minimum": 1, "maximum": 4 },
        "part": { "type": "integer", "enum": [2, 3, 5, 6, 7] },
        "speaker": { "type": "string" },
        "dialogue_en": { "type": "string" },
        "dialogue_vi": { "type": "string" },
        "situation_vi": { "type": "string" },
        "stem": { "type": "string" },
        "audioText": { "type": "string" },
        "passage": { "type": "string" },
        "choices": { "type": "array", "items": { "type": "string" } },
        "answer": { "type": "integer", "minimum": 0, "maximum": 3 },
        "explanation_vi": { "type": "string" },
        "trap": { "type": "string" },
        "examTip": { "type": "string" },
        "tags": {
          "type": "object",
          "properties": {
            "part": { "type": "string" },
            "category": { "type": "string" },
            "topic": { "type": "string" },
            "difficulty": { "type": "string", "enum": ["Easy", "Medium", "Hard"] }
          }
        },
        "vocab": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "word": { "type": "string" },
              "ipa": { "type": "string" },
              "pos": { "type": "string" },
              "meaning": { "type": "string" }
            }
          }
        }
      }
    },
    "vocabItem": {
      "type": "object",
      "required": ["word", "ipa", "pos", "meaning", "example"],
      "properties": {
        "word": { "type": "string" },
        "ipa": { "type": "string" },
        "pos": { "type": "string" },
        "meaning": { "type": "string" },
        "example": { "type": "string" }
      }
    }
  },
  "newVocab": newVocab,
  "newQuestions": allNew
};

const outputPath = path.resolve(__dirname, '../../new_toeic_content.json');
fs.writeFileSync(outputPath, JSON.stringify(jsonOutput, null, 2), 'utf8');
console.log('Successfully written new_toeic_content.json! Size:', fs.statSync(outputPath).size, 'bytes');
