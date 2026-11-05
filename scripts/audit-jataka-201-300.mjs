import fs from 'fs';

const storiesPath = 'data/ta/stories-ta.json';
const collectionPath = 'data/ta/collections/ta_jataka-tales.json';

const allStories = JSON.parse(fs.readFileSync(storiesPath, 'utf8'));
const collection = JSON.parse(fs.readFileSync(collectionPath, 'utf8'));

console.log('=== MASTER AUDIT FOR JATAKA TALES 201 TO 300 ===');

const bloomTiers = ['remembering', 'understanding', 'applying', 'analyzing', 'evaluating', 'creating'];
let totalErrors = 0;

function auditStory(s, sourceName, storyNum) {
  let errors = [];

  // Language
  if (s.language !== 'ta') {
    errors.push(`Invalid language: ${s.language}`);
  }

  // Tamil text check
  const tamilRegex = /[\u0B80-\u0BFF]/;
  if (!tamilRegex.test(s.title)) {
    errors.push(`Title not Tamil: ${s.title}`);
  }
  if (!tamilRegex.test(s.summary)) {
    errors.push(`Summary not Tamil: ${s.summary}`);
  }
  if (!tamilRegex.test(s.moral)) {
    errors.push(`Moral not Tamil: ${s.moral}`);
  }
  if (!tamilRegex.test(s.full_text)) {
    errors.push(`Full text not Tamil`);
  }

  // Length
  const wordCount = s.full_text.trim().split(/\s+/).length;
  if (wordCount < 160) {
    errors.push(`Full text too short: ${wordCount} words`);
  }

  // Vocabulary
  if (!Array.isArray(s.vocabulary) || s.vocabulary.length !== 4) {
    errors.push(`Vocabulary count must be 4, got: ${s.vocabulary?.length}`);
  } else {
    s.vocabulary.forEach((v, idx) => {
      if (!v.word || !s.full_text.includes(v.word)) {
        errors.push(`Vocab [${idx}] '${v.word}' not in full_text`);
      }
      if (!v.meaning || v.meaning.trim() === '') {
        errors.push(`Vocab [${idx}] '${v.word}' missing meaning`);
      }
      if (!v.gloss || v.gloss.trim() === '') {
        errors.push(`Vocab [${idx}] '${v.word}' missing gloss`);
      }
    });
  }

  // Quiz
  if (!Array.isArray(s.quiz) || s.quiz.length !== 3) {
    errors.push(`Quiz count must be 3, got: ${s.quiz?.length}`);
  } else {
    s.quiz.forEach((q, idx) => {
      if (!q.question || q.question.trim() === '') {
        errors.push(`Quiz [${idx}] question is empty`);
      }
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        errors.push(`Quiz [${idx}] options must be 4`);
      }
      if (q.answerIndex < 0 || q.answerIndex > 3) {
        errors.push(`Quiz [${idx}] invalid answerIndex: ${q.answerIndex}`);
      }
      if (!q.hint || q.hint.trim() === '') {
        errors.push(`Quiz [${idx}] missing hint`);
      }
      if (!q.explanation || q.explanation.trim() === '') {
        errors.push(`Quiz [${idx}] missing explanation`);
      }
    });
  }

  // Discussion Questions
  if (!Array.isArray(s.discussion_questions) || s.discussion_questions.length !== 6) {
    errors.push(`Discussion questions count must be 6, got: ${s.discussion_questions?.length}`);
  } else {
    s.discussion_questions.forEach((dq, idx) => {
      const expectedTier = bloomTiers[idx];
      if (dq.tier !== expectedTier) {
        errors.push(`DQ [${idx}] tier mismatch: expected ${expectedTier}, got ${dq.tier}`);
      }
      if (dq.type !== expectedTier) {
        errors.push(`DQ [${idx}] type mismatch: expected ${expectedTier}, got ${dq.type}`);
      }
      if (!dq.prompt || dq.prompt.trim() === '') {
        errors.push(`DQ [${idx}] prompt empty`);
      }
      if (!dq.question || dq.question.trim() === '') {
        errors.push(`DQ [${idx}] question empty`);
      }
      if (dq.prompt !== dq.question) {
        errors.push(`DQ [${idx}] prompt and question do not match`);
      }
    });
  }

  if (errors.length > 0) {
    console.error(`[${sourceName}] Story ${storyNum} (${s.slug}) ERRORS:`, errors);
    totalErrors += errors.length;
  }
}

// 1. Audit stories-ta.json (indices 1392 to 1491, 100 stories)
console.log('\n--- Auditing data/ta/stories-ta.json (indices 1392 to 1491, Stories 201 to 300) ---');
for (let i = 1392; i <= 1491; i++) {
  const storyNum = i - 1191; // 1392 - 1191 = 201
  const s = allStories[i];
  if (!s) {
    console.error(`Story at index ${i} missing in stories-ta.json`);
    totalErrors++;
    continue;
  }
  auditStory(s, 'stories-ta.json', storyNum);
}

// 2. Audit collections/ta_jataka-tales.json (indices 200 to 299, Stories 201 to 300)
console.log('\n--- Auditing data/ta/collections/ta_jataka-tales.json (indices 200 to 299, Stories 201 to 300) ---');
for (let i = 200; i < 300; i++) {
  const storyNum = i + 1; // 201 to 300
  const s = collection[i];
  if (!s) {
    console.error(`Story at index ${i} missing in ta_jataka-tales.json`);
    totalErrors++;
    continue;
  }
  auditStory(s, 'ta_jataka-tales.json', storyNum);
}

console.log('\n=======================================');
if (totalErrors === 0) {
  console.log(`AUDIT PASSED! All 100 stories (Jataka Tales 201 to 300) are 100% compliant with 0 errors in both master and collection files!`);
} else {
  console.error(`AUDIT FAILED with ${totalErrors} errors.`);
  process.exit(1);
}
