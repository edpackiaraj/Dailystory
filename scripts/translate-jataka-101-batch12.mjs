import fs from 'fs';

const storiesPath = 'data/ta/stories-ta.json';
const allStories = JSON.parse(fs.readFileSync(storiesPath, 'utf8'));

// Mapping sources to Batch 12 targets:
// Index 1382 (Story 191): Sigala Jataka (source: 1357)
// Index 1383 (Story 192): Matakabhatta Jataka (source: 1358)
// Index 1384 (Story 193): Ayacitabhatta Jataka (source: 1359)
// Index 1385 (Story 194): Nalapana Jataka (source: 1360)
// Index 1386 (Story 195): Kurungamiga Jataka (source: 1361)
// Index 1387 (Story 196): Kukkura Jataka (source: 1362)
// Index 1388 (Story 197): Bhojajaniya Jataka (source: 1363)
// Index 1389 (Story 198): Tittha Jataka (source: 1364)
// Index 1390 (Story 199): Mahasupina Jataka (source: 1365)
// Index 1391 (Story 200): Vattaka Jataka (source: 1366)

const sourceIndices = [1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366];

console.log('Preparing Batch 12 (Stories 191 to 200, indices 1382 to 1391)...');

const batch12 = sourceIndices.map((srcIdx, offset) => {
  const targetIdx = 1382 + offset;
  const src = allStories[srcIdx];
  const target = allStories[targetIdx];

  return {
    targetIndex: targetIdx,
    targetSlug: target.slug,
    title: src.title,
    summary: src.summary,
    moral: src.moral,
    full_text: src.full_text,
    vocabulary: src.vocabulary,
    quiz: src.quiz,
    discussion_questions: src.discussion_questions
  };
});

// Self-validation
console.log('Self-validating Jataka Batch 191-200...');
let errors = 0;
const bloomTiers = ['remembering', 'understanding', 'applying', 'analyzing', 'evaluating', 'creating'];

batch12.forEach((s, idx) => {
  const num = 191 + idx;
  const wordCount = s.full_text.trim().split(/\s+/).length;
  if (wordCount < 160) {
    console.error(`Story ${num} text too short: ${wordCount} words`);
    errors++;
  }
  if (!s.vocabulary || s.vocabulary.length !== 4) {
    console.error(`Story ${num} vocabulary must be exactly 4 items`);
    errors++;
  } else {
    s.vocabulary.forEach((v, vIdx) => {
      if (!s.full_text.includes(v.word)) {
        console.error(`Story ${num} vocab [${vIdx}] '${v.word}' not found in full_text`);
        errors++;
      }
      if (!v.gloss || v.gloss.trim() === '') {
        console.error(`Story ${num} vocab [${vIdx}] '${v.word}' missing gloss`);
        errors++;
      }
    });
  }

  if (!s.quiz || s.quiz.length !== 3) {
    console.error(`Story ${num} quiz must be exactly 3 items`);
    errors++;
  } else {
    s.quiz.forEach((q, qIdx) => {
      if (!q.options || q.options.length !== 4) {
        console.error(`Story ${num} quiz [${qIdx}] must have 4 options`);
        errors++;
      }
      if (q.answerIndex < 0 || q.answerIndex > 3) {
        console.error(`Story ${num} quiz [${qIdx}] invalid answerIndex`);
        errors++;
      }
      if (!q.hint || !q.explanation) {
        console.error(`Story ${num} quiz [${qIdx}] missing hint or explanation`);
        errors++;
      }
    });
  }

  if (!s.discussion_questions || s.discussion_questions.length !== 6) {
    console.error(`Story ${num} discussion_questions must be exactly 6`);
    errors++;
  } else {
    s.discussion_questions.forEach((dq, dIdx) => {
      if (dq.tier !== bloomTiers[dIdx] || dq.type !== bloomTiers[dIdx]) {
        console.error(`Story ${num} dq [${dIdx}] tier/type mismatch: expected ${bloomTiers[dIdx]}, got ${dq.tier}/${dq.type}`);
        errors++;
      }
      if (!dq.prompt || dq.prompt !== dq.question) {
        console.error(`Story ${num} dq [${dIdx}] prompt/question mismatch or empty`);
        errors++;
      }
    });
  }
});

if (errors > 0) {
  console.error(`Self-validation failed with ${errors} errors.`);
  process.exit(1);
}
console.log('Self-validation passed with 0 errors.');

// Apply updates
batch12.forEach(s => {
  const existing = allStories[s.targetIndex];
  const wordCount = s.full_text.trim().split(/\s+/).length;
  allStories[s.targetIndex] = {
    ...existing,
    title: s.title,
    summary: s.summary,
    moral: s.moral,
    full_text: s.full_text,
    word_count: wordCount,
    vocabulary: s.vocabulary,
    quiz: s.quiz,
    discussion_questions: s.discussion_questions,
    language: "ta"
  };
  console.log(`Updated story: ${existing.slug} at index ${s.targetIndex} (words: ${wordCount})`);
});

fs.writeFileSync(storiesPath, JSON.stringify(allStories, null, 2), 'utf8');
console.log('Successfully written to ' + storiesPath);
console.log('Batch 191-200 of Jataka Tales applied successfully.');
