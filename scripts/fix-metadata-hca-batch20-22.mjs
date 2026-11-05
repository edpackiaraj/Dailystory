import fs from 'fs';

const enStories = JSON.parse(fs.readFileSync('data/en/stories-en.json', 'utf8'));
const taStories = JSON.parse(fs.readFileSync('data/ta/stories-ta.json', 'utf8'));

for (let i = 1172; i <= 1191; i++) {
  const en = enStories[i];
  const ta = taStories[i];
  
  if (en.id !== ta.id) {
    console.error(`ID mismatch at index ${i}: ${en.id} vs ${ta.id}`);
    process.exit(1);
  }

  // Preserve all metadata from en, but keep translated fields from ta
  taStories[i] = {
    ...en,
    language: 'ta',
    title: ta.title,
    summary: ta.summary,
    moral: ta.moral,
    full_text: ta.full_text,
    word_count: ta.full_text.split(/\s+/).filter(Boolean).length,
    vocabulary: ta.vocabulary,
    quiz: ta.quiz,
    discussion_questions: ta.discussion_questions
  };
  console.log(`Restored metadata for index ${i}: ${ta.id}, collection: ${taStories[i].collection}`);
}

fs.writeFileSync('data/ta/stories-ta.json', JSON.stringify(taStories, null, 2), 'utf8');
console.log("Successfully restored metadata for stories 1172-1191.");
