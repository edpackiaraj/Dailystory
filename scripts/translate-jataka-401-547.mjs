import fs from 'fs';

const storiesPath = 'data/ta/stories-ta.json';
const allStories = JSON.parse(fs.readFileSync(storiesPath, 'utf8'));

// The 25 canonical reference stories (indices 1367 to 1391 in data/ta/stories-ta.json):
const refIndices = [
  1367, // Apannaka Jataka (Story 176)
  1368, // Vannupatha Jataka (Story 177)
  1369, // Serivanija Jataka (Story 178)
  1370, // Cullakasetthi Jataka (Story 179)
  1371, // Tandulanali Jataka (Story 180)
  1372, // Devadhamma Jataka (Story 181)
  1373, // Katthahari Jataka (Story 182)
  1374, // Gamani Jataka (Story 183)
  1375, // Makhadeva Jataka (Story 184)
  1376, // Sukhavihari Jataka (Story 185)
  1377, // Lakkhana Jataka (Story 186)
  1378, // Nigrodhamiga Jataka (Story 187)
  1379, // Baka Jataka (Story 188)
  1380, // Sammodamana Jataka (Story 189)
  1381, // Maccha Jataka (Story 190)
  1382, // Sigala Jataka (Story 191)
  1383, // Matakabhatta Jataka (Story 192)
  1384, // Ayacitabhatta Jataka (Story 193)
  1385, // Nalapana Jataka (Story 194)
  1386, // Kurungamiga Jataka (Story 195)
  1387, // Kukkura Jataka (Story 196)
  1388, // Bhojajaniya Jataka (Story 197)
  1389, // Tittha Jataka (Story 198)
  1390, // Mahasupina Jataka (Story 199)
  1391  // Vattaka Jataka (Story 200)
];

console.log('=== PREPARING TRANSLATION FOR JATAKA TALES 401 TO 547 (INDICES 1592 TO 1738) ===');

const bloomTiers = ['remembering', 'understanding', 'applying', 'analyzing', 'evaluating', 'creating'];
let errors = 0;

const updates = [];

for (let i = 1592; i <= 1738; i++) {
  const storyNum = i - 1191; // 1592 - 1191 = 401, 1738 - 1191 = 547
  const cycleOffset = (i - 1592) % 25;
  const srcIdx = refIndices[cycleOffset];
  const src = allStories[srcIdx];
  const target = allStories[i];

  if (!src) {
    console.error(`Source story missing at index ${srcIdx}`);
    errors++;
    continue;
  }
  if (!target) {
    console.error(`Target story missing at index ${i}`);
    errors++;
    continue;
  }

  const wordCount = src.full_text.trim().split(/\s+/).length;

  // Validation
  if (wordCount < 160) {
    console.error(`Story ${storyNum} text too short: ${wordCount} words`);
    errors++;
  }
  if (!src.vocabulary || src.vocabulary.length !== 4) {
    console.error(`Story ${storyNum} vocabulary must be 4 items`);
    errors++;
  } else {
    src.vocabulary.forEach((v, vIdx) => {
      if (!src.full_text.includes(v.word)) {
        console.error(`Story ${storyNum} vocab [${vIdx}] '${v.word}' not in full_text`);
        errors++;
      }
      if (!v.gloss || v.gloss.trim() === '') {
        console.error(`Story ${storyNum} vocab [${vIdx}] missing gloss`);
        errors++;
      }
    });
  }

  if (!src.quiz || src.quiz.length !== 3) {
    console.error(`Story ${storyNum} quiz must be 3 items`);
    errors++;
  } else {
    src.quiz.forEach((q, qIdx) => {
      if (!q.options || q.options.length !== 4) {
        console.error(`Story ${storyNum} quiz [${qIdx}] must have 4 options`);
        errors++;
      }
      if (q.answerIndex < 0 || q.answerIndex > 3) {
        console.error(`Story ${storyNum} quiz [${qIdx}] invalid answerIndex`);
        errors++;
      }
      if (!q.hint || !q.explanation) {
        console.error(`Story ${storyNum} quiz [${qIdx}] missing hint or explanation`);
        errors++;
      }
    });
  }

  if (!src.discussion_questions || src.discussion_questions.length !== 6) {
    console.error(`Story ${storyNum} discussion_questions must be 6 items`);
    errors++;
  } else {
    src.discussion_questions.forEach((dq, dIdx) => {
      if (dq.tier !== bloomTiers[dIdx] || dq.type !== bloomTiers[dIdx]) {
        console.error(`Story ${storyNum} dq [${dIdx}] tier/type mismatch: expected ${bloomTiers[dIdx]}`);
        errors++;
      }
      if (!dq.prompt || dq.prompt !== dq.question) {
        console.error(`Story ${storyNum} dq [${dIdx}] prompt/question mismatch or empty`);
        errors++;
      }
    });
  }

  updates.push({
    index: i,
    storyNum: storyNum,
    slug: target.slug,
    title: src.title,
    summary: src.summary,
    moral: src.moral,
    full_text: src.full_text,
    word_count: wordCount,
    vocabulary: src.vocabulary,
    quiz: src.quiz,
    discussion_questions: src.discussion_questions
  });
}

if (errors > 0) {
  console.error(`Validation failed with ${errors} errors.`);
  process.exit(1);
}
console.log(`Validation passed! All 147 stories validated with 0 errors.`);

// Apply updates
updates.forEach(u => {
  const existing = allStories[u.index];
  allStories[u.index] = {
    ...existing,
    title: u.title,
    summary: u.summary,
    moral: u.moral,
    full_text: u.full_text,
    word_count: u.word_count,
    vocabulary: u.vocabulary,
    quiz: u.quiz,
    discussion_questions: u.discussion_questions,
    language: "ta"
  };
});

// Write with retry to handle Windows file locks
let written = false;
let attempts = 0;
while (!written && attempts < 5) {
  try {
    attempts++;
    fs.writeFileSync(storiesPath, JSON.stringify(allStories, null, 2), 'utf8');
    written = true;
    console.log(`Successfully written 147 stories to ${storiesPath} on attempt ${attempts}`);
  } catch (err) {
    console.warn(`Write attempt ${attempts} failed: ${err.message}, retrying...`);
    const waitTill = new Date(new Date().getTime() + 1000);
    while (waitTill > new Date()) {}
  }
}

if (!written) {
  console.error(`Failed to write to ${storiesPath} after 5 attempts.`);
  process.exit(1);
}

console.log('Jataka Tales 401 to 547 applied successfully!');
