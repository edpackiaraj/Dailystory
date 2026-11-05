import fs from 'fs';

const bloomOrder = ['remembering', 'understanding', 'applying', 'analyzing', 'evaluating', 'creating'];

console.log('=== MASTER AUDIT FOR AESOP 201 TO 245 (INDICES 770 TO 814) ===\n');

const taStories = JSON.parse(fs.readFileSync('data/ta/stories-ta.json', 'utf8'));
const enStories = JSON.parse(fs.readFileSync('data/en/stories-en.json', 'utf8'));
const collectionData = JSON.parse(fs.readFileSync('data/ta/collections/ta_aesop-s-fables.json', 'utf8'));

let errors = 0;
let warnings = 0;

console.log(`Checking indices 770 to 814 in data/ta/stories-ta.json (${814 - 770 + 1} stories)...`);

for (let idx = 770; idx <= 814; idx++) {
  const s = taStories[idx];
  const en = enStories[idx];
  const storyNum = idx - 770 + 201;

  if (!s) {
    console.error(`[CRITICAL] Story at index ${idx} is missing!`);
    errors++;
    continue;
  }

  // 1. Basic ID & Title check
  if (s.id !== en.id) {
    console.error(`[ID MISMATCH] Index ${idx}: ${s.id} !== ${en.id}`);
    errors++;
  }
  if (!s.title || !s.summary || !s.moral || !s.full_text) {
    console.error(`[EMPTY FIELD] Story ${storyNum} (${s.id}) has missing/empty primary string fields.`);
    errors++;
  }

  // 2. Language & word count
  if (s.language !== 'ta') {
    console.error(`[LANGUAGE] Story ${storyNum} (${s.id}) language is '${s.language}', expected 'ta'.`);
    errors++;
  }
  const calcWords = s.full_text.trim().split(/\s+/).length;
  if (Math.abs(s.word_count - calcWords) > 2) {
    console.error(`[WORD COUNT] Story ${storyNum} (${s.id}) word_count (${s.word_count}) != calculated (${calcWords})`);
    errors++;
  }

  // 3. Vocabulary checks
  if (!s.vocabulary || s.vocabulary.length !== 4) {
    console.error(`[VOCAB COUNT] Story ${storyNum} (${s.id}) has ${s.vocabulary ? s.vocabulary.length : 0} vocab items, expected 4.`);
    errors++;
  } else {
    s.vocabulary.forEach((v, vIdx) => {
      if (!v.word || !v.meaning || !v.gloss) {
        console.error(`[VOCAB EMPTY] Story ${storyNum} (${s.id}) vocab[${vIdx}] is missing fields.`);
        errors++;
      }
      if (!s.full_text.includes(v.word)) {
        console.error(`[VOCAB NOT IN TEXT] Story ${storyNum} (${s.id}) word '${v.word}' not found in full_text.`);
        errors++;
      }
    });
  }

  // 4. Quiz checks
  if (!s.quiz || s.quiz.length !== 3) {
    console.error(`[QUIZ COUNT] Story ${storyNum} (${s.id}) has ${s.quiz ? s.quiz.length : 0} quiz items, expected 3.`);
    errors++;
  } else {
    s.quiz.forEach((q, qIdx) => {
      if (!q.question || !q.options || q.options.length !== 4 || !q.answer || q.answerIndex === undefined || !q.hint || !q.explanation) {
        console.error(`[QUIZ EMPTY] Story ${storyNum} (${s.id}) quiz[${qIdx}] has incomplete fields.`);
        errors++;
      }
      if (q.options[q.answerIndex] !== q.answer) {
        console.error(`[QUIZ ANSWER MISMATCH] Story ${storyNum} (${s.id}) quiz[${qIdx}] answer mismatch: '${q.answer}' !== '${q.options[q.answerIndex]}'`);
        errors++;
      }
    });
  }

  // 5. Discussion Questions (Bloom's Taxonomy) checks
  if (!s.discussion_questions || s.discussion_questions.length !== 6) {
    console.error(`[DQ COUNT] Story ${storyNum} (${s.id}) has ${s.discussion_questions ? s.discussion_questions.length : 0} DQs, expected 6.`);
    errors++;
  } else {
    s.discussion_questions.forEach((dq, dIdx) => {
      const expectedTier = bloomOrder[dIdx];
      if (dq.tier !== expectedTier || dq.type !== expectedTier) {
        console.error(`[DQ TIER] Story ${storyNum} (${s.id}) DQ[${dIdx}] tier/type mismatch: got ${dq.tier}/${dq.type}, expected ${expectedTier}.`);
        errors++;
      }
      if (!dq.prompt || dq.prompt !== dq.question) {
        console.error(`[DQ PROMPT] Story ${storyNum} (${s.id}) DQ[${dIdx}] prompt !== question.`);
        errors++;
      }
    });
  }

  // 6. Check collection partition match
  const cStory = collectionData.find(c => c.id === s.id);
  if (!cStory) {
    console.error(`[COLLECTION MISSING] Story ${storyNum} (${s.id}) not found in ta_aesop-s-fables.json!`);
    errors++;
  } else {
    if (cStory.title !== s.title || cStory.moral !== s.moral) {
      console.error(`[COLLECTION SYNC] Story ${storyNum} (${s.id}) in collection does not match stories-ta.json!`);
      errors++;
    }
  }
}

console.log('\n--- AUDIT SUMMARY ---');
console.log(`Total stories audited: 45 (Aesop 201 to 245, indices 770 to 814)`);
console.log(`Errors encountered: ${errors}`);
console.log(`Warnings encountered: ${warnings}`);

if (errors === 0) {
  console.log('\n🎉 ALL 45 STORIES (AESOP 201 TO 245) PASSED MASTER AUDIT WITH 0 ERRORS! 🎉');
} else {
  console.error(`\n❌ AUDIT FAILED WITH ${errors} ERRORS. PLEASE FIX.`);
  process.exit(1);
}
