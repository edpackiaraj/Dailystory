import fs from 'fs';

const stories = JSON.parse(fs.readFileSync('data/ta/stories-ta.json', 'utf8'));
const partitioned = JSON.parse(fs.readFileSync('data/ta/collections/ta_hans-christian-andersen.json', 'utf8'));

console.log(`Auditing ENTIRE Hans Christian Andersen Collection (all 156 stories, global indices 1036 to 1191)...`);

const expectedTiers = ['remembering', 'understanding', 'applying', 'analyzing', 'evaluating', 'creating'];
let errors = 0;

function auditStory(s, sourceName, storyNum) {
  const prefix = `[${sourceName} Story ${storyNum} (${s.id})]`;

  if (!s.title || !s.summary || !s.moral || !s.full_text) {
    console.error(`${prefix} Missing base fields.`);
    errors++;
  }

  // Vocab checks
  if (!Array.isArray(s.vocabulary) || s.vocabulary.length !== 4) {
    console.error(`${prefix} Vocabulary count is ${s.vocabulary?.length}, expected 4.`);
    errors++;
  } else {
    s.vocabulary.forEach((v, idx) => {
      if (!v.word || !v.meaning || !v.gloss) {
        console.error(`${prefix} Vocabulary item ${idx} incomplete: ${JSON.stringify(v)}`);
        errors++;
      }
      if (!s.full_text.includes(v.word)) {
        console.error(`${prefix} Vocabulary word '${v.word}' not found in full_text.`);
        errors++;
      }
    });
  }

  // Quiz checks
  if (!Array.isArray(s.quiz) || s.quiz.length !== 3) {
    console.error(`${prefix} Quiz count is ${s.quiz?.length}, expected 3.`);
    errors++;
  } else {
    s.quiz.forEach((q, idx) => {
      if (!q.question || !Array.isArray(q.options) || q.options.length !== 4 || q.answerIndex === undefined || !q.answer || !q.hint || !q.explanation) {
        console.error(`${prefix} Quiz item ${idx} incomplete.`);
        errors++;
      }
      if (q.options[q.answerIndex] !== q.answer) {
        console.error(`${prefix} Quiz item ${idx} answer mismatch: options[${q.answerIndex}] !== answer ('${q.answer}')`);
        errors++;
      }
    });
  }

  // Discussion Questions checks
  if (!Array.isArray(s.discussion_questions) || s.discussion_questions.length !== 6) {
    console.error(`${prefix} DQ count is ${s.discussion_questions?.length}, expected 6.`);
    errors++;
  } else {
    s.discussion_questions.forEach((dq, idx) => {
      if (dq.tier !== expectedTiers[idx] || dq.type !== expectedTiers[idx]) {
        console.error(`${prefix} DQ item ${idx} tier/type mismatch: tier='${dq.tier}', type='${dq.type}', expected='${expectedTiers[idx]}'`);
        errors++;
      }
      if (!dq.prompt || !dq.question) {
        console.error(`${prefix} DQ item ${idx} missing prompt or question.`);
        errors++;
      } else if (dq.prompt !== dq.question) {
        console.error(`${prefix} DQ item ${idx} prompt !== question.`);
        errors++;
      }
    });
  }
}

for (let i = 1036; i <= 1191; i++) {
  const storyNum = i - 1036 + 1;
  const s = stories[i];
  auditStory(s, 'Main File', storyNum);
}

for (let i = 0; i < partitioned.length; i++) {
  const storyNum = i + 1;
  const s = partitioned[i];
  auditStory(s, 'Partitioned File', storyNum);
}

if (errors === 0) {
  console.log(`\n🎉 ENTIRE HANS CHRISTIAN ANDERSEN COLLECTION AUDIT PASSED: All 156 stories in both main and partitioned collections passed with ZERO errors!`);
} else {
  console.error(`\n❌ AUDIT FAILED with ${errors} total errors.`);
  process.exit(1);
}
