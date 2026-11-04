import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.resolve(process.cwd(), 'data');
const languages = ['en', 'ta', 'hi', 'es', 'zh', 'pt', 'ml', 'te', 'kn', 'mr'];

console.log('================================================================');
console.log('                 CONTENT & EDITORIAL AUDIT                      ');
console.log('================================================================\n');

const stats = {};

for (const lang of languages) {
  const filePath = path.join(dataDir, lang, `stories-${lang}.json`);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    continue;
  }

  const stories = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  let totalWords = 0;
  let wordCounts = [];
  let fullyTranslated = 0;
  let stubsOrInProgress = 0;
  let missingMoral = 0;
  let missingQuiz = 0;
  let missingVocab = 0;
  let vocabMismatchCount = 0;

  for (const s of stories) {
    const text = s.full_text || s.story || s.content || '';
    const words = s.word_count || text.trim().split(/\s+/).filter(Boolean).length;
    wordCounts.push(words);
    totalWords += words;

    // Check if translation is honest stub / in-progress
    const isStub = text.includes('விரைவில்') || text.includes('இணைக்கப்படும்') || text.includes('under translation') || text.includes('शीঘ্রই') || text.includes('Esta historia está en proceso de traducción') || words < 45;
    if (lang === 'en') {
      if (words >= 50) fullyTranslated++;
      else stubsOrInProgress++;
    } else {
      if (!isStub && words >= 55) fullyTranslated++;
      else stubsOrInProgress++;
    }

    if (!s.moral || !s.moral.trim()) missingMoral++;
    if (!s.quiz || !Array.isArray(s.quiz) || s.quiz.length === 0) missingQuiz++;
    if (!s.vocabulary || !Array.isArray(s.vocabulary) || s.vocabulary.length === 0) missingVocab++;
    else {
      // Check if vocabulary words appear in the story text
      for (const v of s.vocabulary) {
        const word = (typeof v === 'string' ? v : v.word || '').toLowerCase();
        if (word && !text.toLowerCase().includes(word)) {
          vocabMismatchCount++;
          break;
        }
      }
    }
  }

  const avgWords = Math.round(totalWords / (stories.length || 1));
  const minWords = Math.min(...wordCounts);
  const maxWords = Math.max(...wordCounts);

  stats[lang] = {
    totalStories: stories.length,
    fullyTranslated,
    stubsOrInProgress,
    avgWords,
    minWords,
    maxWords,
    missingMoral,
    missingQuiz,
    missingVocab,
    vocabMismatchCount
  };
}

console.log(JSON.stringify(stats, null, 2));
