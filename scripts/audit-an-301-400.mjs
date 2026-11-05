import fs from 'fs';

const STORIES_PATH = 'data/ta/stories-ta.json';
const PARTITION_PATH = 'data/ta/collections/ta_arabian-nights.json';

const stories = JSON.parse(fs.readFileSync(STORIES_PATH, 'utf8'));
const anStories = stories.filter(s => s.id && s.id.startsWith('arabian-nights-'));

const partStories = JSON.parse(fs.readFileSync(PARTITION_PATH, 'utf8'));

console.log(`Total AN stories in stories-ta: ${anStories.length}`);
console.log(`Total AN stories in partition: ${partStories.length}`);

const requiredTiers = ["remembering", "understanding", "applying", "analyzing", "evaluating", "creating"];

function auditBatch(storyList, sourceName) {
  console.log(`\n=== Auditing Stories 301 to 400 (indices 300 to 399) in ${sourceName} ===`);
  let errors = 0;
  let auditedCount = 0;

  for (let i = 300; i < 400; i++) {
    auditedCount++;
    const s = storyList[i];
    const prefix = `[Story ${i + 1} | ${s ? s.id : 'MISSING'}]`;

    if (!s) {
      console.error(`${prefix} Story missing at index ${i}`);
      errors++;
      continue;
    }

    // Check title
    if (!s.title || !/[\u0B80-\u0BFF]/.test(s.title)) {
      console.error(`${prefix} Title missing or not Tamil: ${s.title}`);
      errors++;
    }

    // Check summary
    if (!s.summary || !/[\u0B80-\u0BFF]/.test(s.summary)) {
      console.error(`${prefix} Summary missing or not Tamil: ${s.summary}`);
      errors++;
    }

    // Check moral
    if (!s.moral || !/[\u0B80-\u0BFF]/.test(s.moral)) {
      console.error(`${prefix} Moral missing or not Tamil: ${s.moral}`);
      errors++;
    }

    // Check full_text
    if (!s.full_text || !/[\u0B80-\u0BFF]/.test(s.full_text) || s.full_text.length < 200) {
      console.error(`${prefix} Full text too short or not Tamil (length: ${s.full_text ? s.full_text.length : 0})`);
      errors++;
    }

    // Check vocabulary
    if (!Array.isArray(s.vocabulary) || s.vocabulary.length !== 4) {
      console.error(`${prefix} Vocabulary length is ${s.vocabulary ? s.vocabulary.length : 0}, expected 4`);
      errors++;
    } else {
      s.vocabulary.forEach((v, vIdx) => {
        if (!v.word || !v.meaning) {
          console.error(`${prefix} Vocab item ${vIdx + 1} has missing word or meaning`);
          errors++;
        } else if (!s.full_text.includes(v.word)) {
          console.error(`${prefix} Vocab word '${v.word}' not found verbatim in full_text!`);
          errors++;
        }
      });
    }

    // Check quiz
    if (!Array.isArray(s.quiz) || s.quiz.length !== 3) {
      console.error(`${prefix} Quiz length is ${s.quiz ? s.quiz.length : 0}, expected 3`);
      errors++;
    } else {
      s.quiz.forEach((q, qIdx) => {
        if (!q.question || !Array.isArray(q.options) || q.options.length !== 4) {
          console.error(`${prefix} Quiz item ${qIdx + 1} invalid question or options length`);
          errors++;
        } else if (q.answerIndex === undefined || q.answerIndex < 0 || q.answerIndex > 3) {
          console.error(`${prefix} Quiz item ${qIdx + 1} invalid answerIndex: ${q.answerIndex}`);
          errors++;
        } else if (q.options[q.answerIndex] !== q.answer) {
          console.error(`${prefix} Quiz item ${qIdx + 1} answer mismatch: options[${q.answerIndex}] '${q.options[q.answerIndex]}' !== '${q.answer}'`);
          errors++;
        }
      });
    }

    // Check discussion questions
    if (!Array.isArray(s.discussion_questions) || s.discussion_questions.length !== 6) {
      console.error(`${prefix} Discussion questions length is ${s.discussion_questions ? s.discussion_questions.length : 0}, expected 6`);
      errors++;
    } else {
      s.discussion_questions.forEach((dq, dqIdx) => {
        const expectedTier = requiredTiers[dqIdx];
        if (dq.tier !== expectedTier) {
          console.error(`${prefix} Discussion item ${dqIdx + 1} tier '${dq.tier}' !== expected '${expectedTier}'`);
          errors++;
        }
        if (dq.type !== expectedTier) {
          console.error(`${prefix} Discussion item ${dqIdx + 1} type '${dq.type}' !== expected '${expectedTier}'`);
          errors++;
        }
        if (!dq.prompt || dq.prompt !== dq.question) {
          console.error(`${prefix} Discussion item ${dqIdx + 1} prompt/question mismatch or empty`);
          errors++;
        }
      });
    }
  }

  console.log(`Audited ${auditedCount} stories in ${sourceName}. Total errors: ${errors}`);
  return errors;
}

const err1 = auditBatch(anStories, 'stories-ta.json');
const err2 = auditBatch(partStories, 'ta_arabian-nights.json');

if (err1 === 0 && err2 === 0) {
  console.log('\n=========================================');
  console.log('ALL 100 STORIES (301-400) AUDITED: 0 ERRORS!');
  console.log('=========================================\n');
} else {
  console.error(`\nFAILED AUDIT with ${err1 + err2} total errors.`);
  process.exit(1);
}
