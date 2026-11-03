import fs from 'node:fs';
import { expandArabianNights } from './expand-arabian-nights.mjs';
import { expandVikramVetal } from './expand-vikram-vetal.mjs';
import { expandGrimmStory } from './expand-grimm.mjs';
import { expandAndersenStory } from './expand-andersen.mjs';
import { expandMullaStory } from './expand-mulla.mjs';
import { expandAesopStory } from './expand-aesop.mjs';

const isTarget = s => {
  const text = (s.full_text || '').trim();
  const words = text.split(/\s+/).filter(Boolean).length;
  const paras = text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
  return paras < 3 || words < 150;
};

console.log('Loading data/en/stories-en.json...');
const enStories = JSON.parse(fs.readFileSync('data/en/stories-en.json', 'utf8'));

let expandedCount = 0;
for (const s of enStories) {
  if (isTarget(s)) {
    let expandedText = s.full_text;
    if (s.collection === 'Arabian Nights') {
      expandedText = expandArabianNights(s);
    } else if (s.collection === 'Vikram–Vetal') {
      expandedText = expandVikramVetal(s);
    } else if (s.collection === 'Grimm Fairy Tales') {
      expandedText = expandGrimmStory(s);
    } else if (s.collection === 'Hans Christian Andersen') {
      expandedText = expandAndersenStory(s);
    } else if (s.collection === 'Mulla Nasruddin') {
      expandedText = expandMullaStory(s);
    } else if (s.collection === "Aesop's Fables") {
      expandedText = expandAesopStory(s);
    }

    if (expandedText && expandedText !== s.full_text) {
      s.full_text = expandedText.trim();
      const words = s.full_text.split(/\s+/).filter(Boolean).length;
      s.word_count = words;
      s.reading_time = `${Math.max(1, Math.round(words / 130))} min`;
      s.listen_time = `${Math.max(1, Math.round(words / 120))} min`;
      expandedCount++;
    }
  }
}

console.log(`Successfully expanded ${expandedCount} stories in memory!`);

// Check remaining stubs in en
const remainingStubs = enStories.filter(isTarget);
console.log(`Remaining targets in en: ${remainingStubs.length}`);
if (remainingStubs.length > 0) {
  console.log('Sample remaining:');
  for (const s of remainingStubs.slice(0, 5)) {
    console.log(`- [${s.id}] (${s.collection}) ${s.title}: ${s.full_text.split(/\s+/).length} words, ${s.full_text.split(/\n\s*\n/).length} paras`);
  }
}

// Write back data/en/stories-en.json
fs.writeFileSync('data/en/stories-en.json', JSON.stringify(enStories, null, 2), 'utf8');
console.log('Saved data/en/stories-en.json!');

// Propagate to other language catalogs
const languages = ['ta', 'hi', 'es', 'zh', 'pt', 'ml', 'te', 'kn', 'mr'];
const tamilRegex = /[\u0B80-\u0BFF]/;

// Build lookup map from enStories
const enMap = new Map();
for (const s of enStories) {
  enMap.set(s.id, s);
}

for (const lang of languages) {
  const filePath = `data/${lang}/stories-${lang}.json`;
  if (!fs.existsSync(filePath)) continue;

  const list = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let updatedLangCount = 0;

  for (const s of list) {
    const enMatch = enMap.get(s.id);
    if (!enMatch) continue;

    // For Tamil, never overwrite authentic Tamil stories
    if (lang === 'ta' && tamilRegex.test(s.full_text)) {
      continue;
    }

    // If story in other language is a stub or untranslated base, update with expanded narrative
    if (isTarget(s) || !s.full_text || s.full_text.length < enMatch.full_text.length) {
      s.full_text = enMatch.full_text;
      s.word_count = enMatch.word_count;
      s.reading_time = enMatch.reading_time;
      s.listen_time = enMatch.listen_time;
      updatedLangCount++;
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(list, null, 2), 'utf8');
  console.log(`Updated ${updatedLangCount} stories in ${filePath}`);
}

console.log('All catalogs updated successfully!');
