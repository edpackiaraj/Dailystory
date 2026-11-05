import fs from 'fs';

const taStories = JSON.parse(fs.readFileSync('data/ta/stories-ta.json', 'utf8'));
const enStories = JSON.parse(fs.readFileSync('data/en/stories-en.json', 'utf8'));
const collection = JSON.parse(fs.readFileSync('data/ta/collections/ta_aesop-s-fables.json', 'utf8'));

console.log('Auditing Aesop stories 59 to 120 (indices 628 to 689)...');

const bloomOrder = ['remembering', 'understanding', 'applying', 'analyzing', 'evaluating', 'creating'];
let errors = 0;
let auditedCount = 0;

for (let i = 628; i <= 689; i++) {
  auditedCount++;
  const s = taStories[i];
  const en = enStories[i];
  const c = collection.find(x => x.id === s.id);

  if (!c) {
    console.error(`Index ${i} (${s.id}) NOT FOUND in ta_aesops-fables.json!`);
    errors++;
  }

  // Check language
  if (s.language !== 'ta') {
    console.error(`Index ${i} (${s.id}) language is not 'ta': ${s.language}`);
    errors++;
  }

  // Check basic fields
  if (!s.title || !s.summary || !s.moral || !s.full_text) {
    console.error(`Index ${i} (${s.id}) missing title/summary/moral/full_text`);
    errors++;
  }

  // Check Tamil content (should contain Tamil characters)
  const tamilRegex = /[\u0B80-\u0BFF]/;
  if (!tamilRegex.test(s.title) || !tamilRegex.test(s.summary) || !tamilRegex.test(s.moral) || !tamilRegex.test(s.full_text)) {
    console.error(`Index ${i} (${s.id}) title/summary/moral/full_text lacks Tamil text!`);
    errors++;
  }

  // Check metadata preservation
  if (s.collection !== "Aesop's Fables" && s.collection !== en.collection) {
    console.error(`Index ${i} (${s.id}) collection mismatch: ${s.collection}`);
    errors++;
  }
  if (!s.slug || s.slug !== en.slug) {
    console.error(`Index ${i} (${s.id}) slug mismatch: ${s.slug}`);
    errors++;
  }
  if (!s.reading_level || !s.author) {
    console.error(`Index ${i} (${s.id}) missing reading_level or author`);
    errors++;
  }

  // Check vocab
  if (!s.vocabulary || s.vocabulary.length !== 4) {
    console.error(`Index ${i} (${s.id}) vocab length !== 4: ${s.vocabulary ? s.vocabulary.length : 0}`);
    errors++;
  } else {
    for (const v of s.vocabulary) {
      if (!s.full_text.includes(v.word)) {
        console.error(`Index ${i} (${s.id}) vocab word '${v.word}' NOT found in full_text!`);
        errors++;
      }
      if (!v.meaning || !v.gloss) {
        console.error(`Index ${i} (${s.id}) vocab word '${v.word}' missing meaning or gloss`);
        errors++;
      }
    }
  }

  // Check quiz
  if (!s.quiz || s.quiz.length !== 3) {
    console.error(`Index ${i} (${s.id}) quiz length !== 3: ${s.quiz ? s.quiz.length : 0}`);
    errors++;
  } else {
    for (let qIdx = 0; qIdx < s.quiz.length; qIdx++) {
      const q = s.quiz[qIdx];
      if (!q.options || q.options.length !== 4) {
        console.error(`Index ${i} (${s.id}) quiz[${qIdx}] options length !== 4`);
        errors++;
      }
      if (!q.options.includes(q.answer)) {
        console.error(`Index ${i} (${s.id}) quiz[${qIdx}] answer '${q.answer}' NOT in options!`);
        errors++;
      }
      if (!q.hint || !q.explanation) {
        console.error(`Index ${i} (${s.id}) quiz[${qIdx}] missing hint or explanation`);
        errors++;
      }
    }
  }

  // Check DQ
  if (!s.discussion_questions || s.discussion_questions.length !== 6) {
    console.error(`Index ${i} (${s.id}) DQ length !== 6: ${s.discussion_questions ? s.discussion_questions.length : 0}`);
    errors++;
  } else {
    for (let dqIdx = 0; dqIdx < 6; dqIdx++) {
      const dq = s.discussion_questions[dqIdx];
      const expectedTier = bloomOrder[dqIdx];
      if (dq.tier !== expectedTier || dq.type !== expectedTier) {
        console.error(`Index ${i} (${s.id}) DQ[${dqIdx}] tier mismatch: got ${dq.tier}/${dq.type}, expected ${expectedTier}`);
        errors++;
      }
      if (!dq.prompt || dq.prompt !== dq.question) {
        console.error(`Index ${i} (${s.id}) DQ[${dqIdx}] prompt/question mismatch`);
        errors++;
      }
    }
  }
}

console.log(`\nAudit completed: ${auditedCount} stories audited.`);
console.log(`Total errors found: ${errors}`);
if (errors === 0) {
  console.log('ALL 62 STORIES IN AESOP 59-120 ARE PERFECT!');
} else {
  process.exit(1);
}
