import fs from 'node:fs';
import path from 'node:path';

console.log('=== RUNNING POST-BUILD VERIFY-DIST AUDIT ===\n');

let errors = [];

function assert(condition, message) {
  if (!condition) {
    errors.push(message);
    console.error(`❌ FAIL: ${message}`);
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

// 1. Audit static story shell
const shellPath = path.resolve('dist/en/story/index.html');
if (!fs.existsSync(shellPath)) {
  assert(false, `Shell HTML file does not exist at ${shellPath}`);
} else {
  const shellHtml = fs.readFileSync(shellPath, 'utf8');

  // Check duplicate IDs
  const payloadMatches = shellHtml.match(/id="initial-story-payload"/g) || [];
  assert(payloadMatches.length <= 1, `initial-story-payload must not be duplicated (found ${payloadMatches.length})`);

  // Check scripts after </html>
  const htmlEndIdx = shellHtml.indexOf('</html>');
  if (htmlEndIdx !== -1) {
    const afterHtml = shellHtml.slice(htmlEndIdx + 7).trim();
    assert(
      !afterHtml.includes('<script'),
      `No <script> tags should appear after </html>. Found: ${afterHtml.slice(0, 100)}`
    );
  }

  // Check bedtime initial playlist weight
  const bedtimePlaylistMatch = shellHtml.match(/<script type="application\/json" id="bedtime-initial-playlist">([\s\S]*?)<\/script>/);
  if (bedtimePlaylistMatch) {
    const bedtimeJson = bedtimePlaylistMatch[1];
    assert(
      !bedtimeJson.includes('trellis') && !bedtimeJson.includes('luscious'),
      'Bedtime initial playlist does not leak Fox and Grapes vocabulary into static shell'
    );
  }

  // Check bad google verification tag
  assert(
    !shellHtml.includes('google68c0735e3fcc5331'),
    'Bad google-site-verification format removed from BaseLayout'
  );
}

// 2. Audit Akbar-Birbal Dataset (All 200 stories)
const abPath = path.resolve('data/en/collections/en_akbar-birbal.json');
if (fs.existsSync(abPath)) {
  const stories = JSON.parse(fs.readFileSync(abPath, 'utf8'));
  assert(stories.length === 200, `Akbar-Birbal collection contains 200 stories (found ${stories.length})`);

  let genericVocabCount = 0;
  let genericQuizCount = 0;
  let answerIndexCounts = { 0: 0, 1: 0, 2: 0, 3: 0 };

  for (const s of stories) {
    const words = (s.vocabulary || []).map(v => (v.word || '').toLowerCase());
    if (words.includes('counsel') && words.includes('discernment') && words.includes('presence of mind')) {
      genericVocabCount++;
    }

    for (const q of (s.quiz || [])) {
      if ((q.question || '').includes('What is the main moral taught by Akbar and Birbal') &&
          (q.options || [])[0] === 'Wit beats power') {
        genericQuizCount++;
      }
      if (typeof q.answerIndex === 'number') {
        answerIndexCounts[q.answerIndex] = (answerIndexCounts[q.answerIndex] || 0) + 1;
      }
    }
  }

  assert(genericVocabCount === 0, `0 stories with generic Fox/template vocabulary (found ${genericVocabCount})`);
  assert(genericQuizCount === 0, `0 questions with generic "Wit beats power" template quiz (found ${genericQuizCount})`);
  
  const hasDiversity = Object.values(answerIndexCounts).every(c => c > 50);
  assert(
    hasDiversity,
    `Quiz answer indices are evenly distributed across choices 0-3: ${JSON.stringify(answerIndexCounts)}`
  );
}

// 3. Audit Edge Story Transformation simulation
// Test Tiger Story
const abStories = JSON.parse(fs.readFileSync('data/en/collections/en_akbar-birbal.json', 'utf8'));
const tigerStory = abStories.find(s => s.slug === 'akbar-birbal-75-the-king-and-the-tiger');

assert(tigerStory !== undefined, 'Found tiger story: akbar-birbal-75-the-king-and-the-tiger');
const tigerVocab = (tigerStory.vocabulary || []).map(v => v.word.toLowerCase());
assert(
  tigerVocab.includes('bravado') && tigerVocab.includes('prudence'),
  `Tiger story has authentic vocabulary: ${tigerVocab.join(', ')}`
);

// Test Archimedes Story
const scStories = JSON.parse(fs.readFileSync('data/en/collections/en_science-stories.json', 'utf8'));
const archStory = scStories.find(s => s.slug === 'science-1-archimedes-golden-crown');
assert(archStory !== undefined, 'Found Archimedes story: science-1-archimedes-golden-crown');
const archVocab = (archStory.vocabulary || []).map(v => v.word.toLowerCase());
assert(
  archVocab.includes('density') && archVocab.includes('buoyancy'),
  `Archimedes story has authentic vocabulary: ${archVocab.join(', ')}`
);

// 4. Check CI Summary
console.log('\n=======================================');
if (errors.length > 0) {
  console.error(`🚨 VERIFY FAILED WITH ${errors.length} ERROR(S):`);
  errors.forEach((err, i) => console.error(`  ${i + 1}. ${err}`));
  process.exit(1);
} else {
  console.log('🎉 ALL VERIFY-DIST CHECKS PASSED PERFECTLY!');
  process.exit(0);
}
