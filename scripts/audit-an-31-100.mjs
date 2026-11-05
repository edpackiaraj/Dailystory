// scripts/audit-an-31-100.mjs
import fs from 'fs';

const ta = JSON.parse(fs.readFileSync('data/ta/stories-ta.json', 'utf8'));
const coll = JSON.parse(fs.readFileSync('data/ta/collections/ta_arabian-nights.json', 'utf8'));

console.log('Auditing Arabian Nights stories 31 to 100 in stories-ta.json...');
let errors = 0;
let auditedCount = 0;

for (let i = 31; i <= 100; i++) {
  const prefix = `arabian-nights-${i}-`;
  const story = ta.find(s => s.id.startsWith(prefix) || s.id === `arabian-nights-${i}`);
  if (!story) {
    console.error(`ERROR: Story not found in stories-ta.json for index ${i}`);
    errors++;
    continue;
  }
  auditedCount++;

  // Check language
  if (story.language !== 'ta') {
    console.error(`ERROR in ${story.id}: language is ${story.language}`);
    errors++;
  }

  // Check fields
  if (!story.title || !story.summary || !story.moral || !story.full_text) {
    console.error(`ERROR in ${story.id}: missing primary narrative fields`);
    errors++;
  }

  // Check vocabulary
  if (!Array.isArray(story.vocabulary) || story.vocabulary.length !== 4) {
    console.error(`ERROR in ${story.id}: vocabulary length is ${story.vocabulary ? story.vocabulary.length : 'null'}`);
    errors++;
  } else {
    for (const v of story.vocabulary) {
      if (!v.word || !v.meaning || !v.gloss) {
        console.error(`ERROR in ${story.id}: incomplete vocab item`, v);
        errors++;
      }
      if (!story.full_text.includes(v.word)) {
        console.error(`ERROR in ${story.id}: vocab word "${v.word}" not found verbatim in full_text`);
        errors++;
      }
    }
  }

  // Check quiz
  if (!Array.isArray(story.quiz) || story.quiz.length !== 3) {
    console.error(`ERROR in ${story.id}: quiz length is ${story.quiz ? story.quiz.length : 'null'}`);
    errors++;
  } else {
    for (const q of story.quiz) {
      if (!q.question || !Array.isArray(q.options) || q.options.length !== 4 || !q.answer || q.answerIndex === undefined) {
        console.error(`ERROR in ${story.id}: invalid quiz structure`);
        errors++;
      }
      if (q.options[q.answerIndex] !== q.answer) {
        console.error(`ERROR in ${story.id}: quiz answer mismatch: ${q.options[q.answerIndex]} vs ${q.answer}`);
        errors++;
      }
    }
  }

  // Check discussion questions
  const bloomTiers = ['Remembering', 'Understanding', 'Applying', 'Analyzing', 'Evaluating', 'Creating'];
  if (!Array.isArray(story.discussion_questions) || story.discussion_questions.length !== 6) {
    console.error(`ERROR in ${story.id}: discussion_questions length is ${story.discussion_questions ? story.discussion_questions.length : 'null'}`);
    errors++;
  } else {
    story.discussion_questions.forEach((dq, idx) => {
      const expectedTier = bloomTiers[idx];
      if (dq.tier !== expectedTier || dq.type !== expectedTier) {
        console.error(`ERROR in ${story.id}: discussion question tier mismatch at ${idx}`);
        errors++;
      }
      if (!dq.prompt || !dq.question) {
        console.error(`ERROR in ${story.id}: discussion question missing prompt or question at ${idx}`);
        errors++;
      }
    });
  }
}

console.log(`Audited ${auditedCount} stories in stories-ta.json. Total errors: ${errors}`);

console.log('Checking partition file collection ta_arabian-nights.json...');
let collErrors = 0;
for (let i = 31; i <= 100; i++) {
  const prefix = `arabian-nights-${i}-`;
  const story = coll.find(s => s.id.startsWith(prefix) || s.id === `arabian-nights-${i}`);
  if (!story) {
    console.error(`ERROR in collection file: missing story index ${i}`);
    collErrors++;
    continue;
  }
  if (!story.vocabulary || story.vocabulary.length !== 4) {
    collErrors++;
  }
}
console.log(`Collection file check complete. Errors: ${collErrors}`);

if (errors === 0 && collErrors === 0 && auditedCount === 70) {
  console.log('PERFECT SCORE: ALL 70 ARABIAN NIGHTS STORIES (31 TO 100) FULLY AUDITED WITH 0 ERRORS!');
} else {
  process.exit(1);
}
