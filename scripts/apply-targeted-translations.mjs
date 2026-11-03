import fs from 'node:fs';
import path from 'node:path';
import { tamilTranslations } from './translations-tamil.mjs';
import { hindiTranslations } from './translations-hindi.mjs';
import { spanishTranslations } from './translations-spanish.mjs';

function safeWriteFileSync(filePath, data, maxRetries = 5) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      fs.writeFileSync(filePath, data, 'utf8');
      return;
    } catch (err) {
      if (i === maxRetries - 1) throw err;
      const waitMs = 300 * (i + 1);
      const start = Date.now();
      while (Date.now() - start < waitMs) {}
    }
  }
}

function applyTranslations(lang, translations) {
  const filePath = path.resolve(`data/${lang}/stories-${lang}.json`);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }

  const stories = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  let updatedCount = 0;

  for (const tr of translations) {
    const idx = stories.findIndex(s => s.id === tr.id || (s.slug && s.slug.startsWith(tr.id)));
    if (idx !== -1) {
      const orig = stories[idx];
      orig.title = tr.title;
      orig.summary = tr.summary;
      orig.full_text = tr.full_text;
      orig.moral = tr.moral;
      orig.word_count = tr.full_text.split(/\s+/).length;
      orig.reading_time = `${Math.max(2, Math.ceil(orig.word_count / 120))} min`;
      orig.listen_time = `${Math.max(2, Math.ceil(orig.word_count / 110))} min`;
      orig.reviewed = true;
      orig.status = 'published';
      if (tr.vocabulary) orig.vocabulary = tr.vocabulary;
      if (tr.discussion_questions) orig.discussion_questions = tr.discussion_questions;
      updatedCount++;
    } else {
      console.warn(`Target not found in ${lang}: ${tr.id}`);
    }
  }

  safeWriteFileSync(filePath, JSON.stringify(stories, null, 2) + '\n');
  console.log(`[${lang}] Successfully applied ${updatedCount} authentic full translations.`);
}

console.log('Applying targeted authentic translations...');
applyTranslations('ta', tamilTranslations);
applyTranslations('hi', hindiTranslations);
applyTranslations('es', spanishTranslations);
console.log('All translations applied successfully.');
