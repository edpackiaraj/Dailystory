import fs from 'fs';

const storiesPath = 'data/ta/stories-ta.json';
const allStories = JSON.parse(fs.readFileSync(storiesPath, 'utf8'));

// We can extract the verified objects from earlier translated stories!
// Index 1372 -> corresponds to Devadhamma (index 1347)
// Index 1373 -> corresponds to Katthahari (index 1348)
// Index 1374 -> corresponds to Gamani (index 1349)
// Index 1375 -> corresponds to Makhadeva (index 1350)
// Index 1376 -> corresponds to Sukhavihari (index 1351)
// Index 1377 -> corresponds to Lakkhana (index 1352)
// Index 1378 -> corresponds to Nigrodhamiga (index 1353)
// Index 1379 -> corresponds to Baka (index 1354)
// Index 1380 -> corresponds to Sammodamana (index 1355)
// Index 1381 -> corresponds to Maccha (index 1356)

const sourceIndices = [1347, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356];

console.log('Preparing Batch 11 (Stories 181 to 190, indices 1372 to 1381)...');

const batch11 = sourceIndices.map((srcIdx, offset) => {
  const targetIdx = 1372 + offset;
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
console.log('Self-validating Jataka Batch 181-190...');
let errors = 0;
const bloomTiers = ['remembering', 'understanding', 'applying', 'analyzing', 'evaluating', 'creating'];

batch11.forEach((s, idx) => {
  const num = 181 + idx;
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
batch11.forEach(s => {
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
console.log('Batch 181-190 of Jataka Tales applied successfully.');
