import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const dataDir = path.join(rootDir, 'data');

console.log('=== Step: Fixing Story Collection Images Across All Datasets ===');

const collectionImageMap = {
  'vikram-vetal': '/images/stories/vikram-vetal.webp',
  'vikram–vetal': '/images/stories/vikram-vetal.webp',
  'paramartha-guru': '/images/stories/paramartha-guru.webp',
  'grimm-fairy-tales': '/images/stories/grimm.webp',
  'charles-perrault': '/images/stories/charles-perrault.webp',
  'panchatantra': '/images/stories/panchatantra.webp',
  'tenali-rama': '/images/stories/tenali-rama.webp',
  'akbar-birbal': '/images/stories/akbar-birbal.webp',
  'akbar–birbal': '/images/stories/akbar-birbal.webp',
  'jataka-tales': '/images/stories/jataka.webp',
  'arabian-nights': '/images/stories/arabian-nights.webp',
  'aesop-s-fables': '/images/stories/aesop.webp',
  'aesops-fables': '/images/stories/aesop.webp',
  'cinderella-stories': '/images/stories/cinderella.webp',
  'hans-christian-andersen': '/images/stories/andersen.webp',
  'mulla-nasruddin': '/images/stories/nasruddin.webp'
};

function getCorrectImage(collectionName) {
  if (!collectionName) return '/images/og-default.png';
  const slug = collectionName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return collectionImageMap[slug] || collectionImageMap[collectionName.toLowerCase()] || '/images/stories/panchatantra.webp';
}

function safeReadFileSync(filePath) {
  for (let attempt = 1; attempt <= 10; attempt++) {
    try {
      return fs.readFileSync(filePath, 'utf8');
    } catch (err) {
      if (attempt === 10) throw err;
      const delay = attempt * 150;
      const AtomicsWait = new Int32Array(new SharedArrayBuffer(4));
      Atomics.wait(AtomicsWait, 0, 0, delay);
    }
  }
}

function safeWriteFileSync(filePath, content) {
  for (let attempt = 1; attempt <= 10; attempt++) {
    try {
      fs.writeFileSync(filePath, content, 'utf8');
      return;
    } catch (err) {
      if (attempt === 10) throw err;
      const delay = attempt * 150;
      const AtomicsWait = new Int32Array(new SharedArrayBuffer(4));
      Atomics.wait(AtomicsWait, 0, 0, delay);
    }
  }
}

function fixStoryImage(story) {
  if (!story || typeof story !== 'object') return false;
  const correct = getCorrectImage(story.collection);
  if (story.image !== correct) {
    story.image = correct;
    return true;
  }
  return false;
}

function processDirectory(dir) {
  if (!fs.existsSync(dir)) return 0;
  const files = fs.readdirSync(dir);
  let modifiedCount = 0;

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      modifiedCount += processDirectory(fullPath);
    } else if (file.endsWith('.json')) {
      try {
        const raw = safeReadFileSync(fullPath);
        const parsed = JSON.parse(raw);
        let changed = false;

        if (Array.isArray(parsed)) {
          for (const s of parsed) {
            if (fixStoryImage(s)) changed = true;
          }
        } else if (parsed && typeof parsed === 'object') {
          if (parsed.stories && Array.isArray(parsed.stories)) {
            for (const s of parsed.stories) {
              if (fixStoryImage(s)) changed = true;
            }
          }
          if (fixStoryImage(parsed)) changed = true;
        }

        if (changed) {
          safeWriteFileSync(fullPath, JSON.stringify(parsed, null, 2) + '\n');
          modifiedCount++;
        }
      } catch (err) {
        console.error(`Error in ${fullPath}:`, err.message);
      }
    }
  }
  return modifiedCount;
}

const totalFixed = processDirectory(dataDir);
console.log(`=== Complete: Updated image paths in ${totalFixed} files. ===\n`);
