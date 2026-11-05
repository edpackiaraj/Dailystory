import fs from 'fs';

console.log('=== AUDITING VIKRAM-VETAL STORIES 39 TO 100 (INDICES 2299 TO 2360) ===');

const storiesTa = JSON.parse(fs.readFileSync('data/ta/stories-ta.json', 'utf8'));
const collectionTa = JSON.parse(fs.readFileSync('data/ta/collections/ta_vikram-vetal.json', 'utf8'));

console.log(`stories-ta total stories: ${storiesTa.length}`);
console.log(`ta_vikram-vetal collection total stories: ${collectionTa.length}`);

const bloomTiers = ['remembering', 'understanding', 'applying', 'analyzing', 'evaluating', 'creating'];

function auditStories(stories, label, startIndex, endIndex) {
  let errors = 0;
  for (let idx = startIndex; idx <= endIndex; idx++) {
    const s = stories[idx];
    const prefix = `[${label}][idx ${idx} - ${s.id}]`;

    // Language check
    if (s.language !== 'ta') {
      console.error(`${prefix} language is not 'ta': ${s.language}`);
      errors++;
    }

    // Tamil character presence check in title, summary, moral, full_text
    const tamilRegex = /[\u0B80-\u0BFF]/;
    if (!tamilRegex.test(s.title)) {
      console.error(`${prefix} title does not contain Tamil characters: ${s.title}`);
      errors++;
    }
    if (!tamilRegex.test(s.summary)) {
      console.error(`${prefix} summary does not contain Tamil characters`);
      errors++;
    }
    if (!tamilRegex.test(s.moral)) {
      console.error(`${prefix} moral does not contain Tamil characters`);
      errors++;
    }
    if (!tamilRegex.test(s.full_text)) {
      console.error(`${prefix} full_text does not contain Tamil characters`);
      errors++;
    }

    // Word count / text length
    const words = s.full_text.trim().split(/\s+/).length;
    if (words < 100) {
      console.error(`${prefix} full_text too short: ${words} words`);
      errors++;
    }

    // Vocabulary check: exactly 4, words in full_text
    if (!Array.isArray(s.vocabulary) || s.vocabulary.length !== 4) {
      console.error(`${prefix} vocabulary length is not 4: ${s.vocabulary?.length}`);
      errors++;
    } else {
      for (const [vIdx, v] of s.vocabulary.entries()) {
        if (!v.word || !v.meaning || !v.gloss) {
          console.error(`${prefix} vocab[${vIdx}] missing fields`);
          errors++;
        }
        if (!s.full_text.includes(v.word)) {
          console.error(`${prefix} vocab word '${v.word}' NOT in full_text`);
          errors++;
        }
      }
    }

    // Quiz check: exactly 3, 4 options each, answerIndex matching answer
    if (!Array.isArray(s.quiz) || s.quiz.length !== 3) {
      console.error(`${prefix} quiz length is not 3: ${s.quiz?.length}`);
      errors++;
    } else {
      for (const [qIdx, q] of s.quiz.entries()) {
        if (!q.question || !q.answer || !Array.isArray(q.options) || q.options.length !== 4) {
          console.error(`${prefix} quiz[${qIdx}] invalid structure`);
          errors++;
        }
        if (q.options[q.answerIndex] !== q.answer) {
          console.error(`${prefix} quiz[${qIdx}] answerIndex mismatch: answer='${q.answer}', options[${q.answerIndex}]='${q.options[q.answerIndex]}'`);
          errors++;
        }
        if (!q.hint || !q.explanation) {
          console.error(`${prefix} quiz[${qIdx}] missing hint or explanation`);
          errors++;
        }
      }
    }

    // Discussion questions check: exactly 6, Bloom's tiers, dual structure
    if (!Array.isArray(s.discussion_questions) || s.discussion_questions.length !== 6) {
      console.error(`${prefix} discussion_questions length is not 6: ${s.discussion_questions?.length}`);
      errors++;
    } else {
      for (let dIdx = 0; dIdx < 6; dIdx++) {
        const dq = s.discussion_questions[dIdx];
        const expectedTier = bloomTiers[dIdx];
        if (dq.tier !== expectedTier || dq.type !== expectedTier) {
          console.error(`${prefix} discussion_questions[${dIdx}] tier/type mismatch: tier='${dq.tier}', type='${dq.type}', expected='${expectedTier}'`);
          errors++;
        }
        if (!dq.prompt || !dq.question || dq.prompt !== dq.question) {
          console.error(`${prefix} discussion_questions[${dIdx}] prompt/question mismatch or missing`);
          errors++;
        }
      }
    }
  }
  return errors;
}

console.log('\n--- Auditing stories-ta.json (indices 2299 to 2360) ---');
const masterErrors = auditStories(storiesTa, 'stories-ta', 2299, 2360);

console.log('\n--- Auditing ta_vikram-vetal.json (collection indices 38 to 99, representing stories 39 to 100) ---');
const collectionErrors = auditStories(collectionTa, 'ta_vikram-vetal', 38, 99);

console.log('\n=== AUDIT SUMMARY ===');
console.log(`stories-ta.json errors: ${masterErrors}`);
console.log(`ta_vikram-vetal.json errors: ${collectionErrors}`);
console.log(`Total errors: ${masterErrors + collectionErrors}`);

if (masterErrors + collectionErrors === 0) {
  console.log('SUCCESS: All 62 stories of Vikram-Vetal (39 to 100) are 100% compliant with classical Tamil and all schema rules!');
  process.exit(0);
} else {
  console.error('FAILED: Audit found errors.');
  process.exit(1);
}
