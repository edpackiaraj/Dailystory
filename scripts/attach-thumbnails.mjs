import fs from 'fs';
import path from 'path';

const languages = ['en', 'ta', 'hi', 'zh', 'ml', 'te', 'kn', 'mr', 'ur'];

for (const lang of languages) {
  // 1. Update manifest
  const manifestPath = path.resolve(`data/${lang}/manifest-${lang}.json`);
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    let count = 0;
    for (const item of manifest) {
      if (item.collection === 'science-stories' || item.collection === 'Science & Discovery') {
        item.image = '/images/stories/science-stories.webp';
        count++;
      } else if (item.collection === 'witty-debates') {
        item.image = '/images/stories/witty-debates.webp';
        count++;
      }
    }
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
    console.log(`[${lang}] Updated ${count} manifest thumbnails.`);
  }

  // 2. Update stories file
  const storiesPath = path.resolve(`data/${lang}/stories-${lang}.json`);
  if (fs.existsSync(storiesPath)) {
    const stories = JSON.parse(fs.readFileSync(storiesPath, 'utf8'));
    let count = 0;
    for (const item of stories) {
      if (item.collection === 'science-stories' || item.collection === 'Science & Discovery') {
        item.image = '/images/stories/science-stories.webp';
        count++;
      } else if (item.collection === 'witty-debates') {
        item.image = '/images/stories/witty-debates.webp';
        count++;
      }
    }
    fs.writeFileSync(storiesPath, JSON.stringify(stories, null, 2), 'utf8');
    console.log(`[${lang}] Updated ${count} all-stories thumbnails.`);
  }

  // 3. Update collection files
  const sciColPath = path.resolve(`data/${lang}/collections/${lang}_science-stories.json`);
  if (fs.existsSync(sciColPath)) {
    const sciCol = JSON.parse(fs.readFileSync(sciColPath, 'utf8'));
    for (const item of sciCol) {
      item.image = '/images/stories/science-stories.webp';
    }
    fs.writeFileSync(sciColPath, JSON.stringify(sciCol, null, 2), 'utf8');
    const pubSci = path.resolve(`public/data/collections/${lang}_science-stories.json`);
    fs.writeFileSync(pubSci, JSON.stringify(sciCol, null, 2), 'utf8');
  }

  const debColPath = path.resolve(`data/${lang}/collections/${lang}_witty-debates.json`);
  if (fs.existsSync(debColPath)) {
    const debCol = JSON.parse(fs.readFileSync(debColPath, 'utf8'));
    for (const item of debCol) {
      item.image = '/images/stories/witty-debates.webp';
    }
    fs.writeFileSync(debColPath, JSON.stringify(debCol, null, 2), 'utf8');
    const pubDeb = path.resolve(`public/data/collections/${lang}_witty-debates.json`);
    fs.writeFileSync(pubDeb, JSON.stringify(debCol, null, 2), 'utf8');
  }
}

console.log('Successfully attached thumbnails to all science-stories and witty-debates across all 9 languages!');
