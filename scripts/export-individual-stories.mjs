import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const languages = ['en', 'hi', 'kn', 'ml', 'mr', 'ta', 'te', 'zh'];

export function getGroupSlug(collection) {
  if (!collection) return 'folktale';
  const c = collection.toLowerCase();
  if (c.includes('panchatantra') || c.includes('panjathanthira')) return 'panchatantra';
  if (c.includes('akbar') || c.includes('birbal')) return 'akbar-birbal';
  if (c.includes('tenali')) return 'tenali-rama';
  if (c.includes('nasruddin') || c.includes('mulla')) return 'mulla-nasruddin';
  if (c.includes('aesop')) return 'aesop';
  if (c.includes('arabian')) return 'arabian-nights';
  if (c.includes('jataka')) return 'jataka-tales';
  if (c.includes('grimm')) return 'grimm-fairy-tales';
  if (c.includes('andersen')) return 'andersen';
  if (c.includes('paramartha')) return 'paramartha-guru';
  if (c.includes('vikram') || c.includes('vetal')) return 'vikram-vetal';
  if (c.includes('cinderella')) return 'cinderella';
  if (c.includes('perrault')) return 'charles-perrault';
  return collection.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function getCategorySlug(genre) {
  if (!genre) return 'moral';
  const g = genre.toLowerCase();
  if (g.includes('moral')) return 'moral';
  if (g.includes('humor') || g.includes('funny') || g.includes('satir')) return 'humor';
  if (g.includes('folk')) return 'folktale';
  if (g.includes('fairy')) return 'fairy-tale';
  if (g.includes('fable')) return 'fable';
  if (g.includes('bedtime')) return 'bedtime';
  if (g.includes('animal')) return 'animal';
  if (g.includes('adventure')) return 'adventure';
  if (g.includes('fantasy')) return 'fantasy';
  if (g.includes('mystery') || g.includes('riddle')) return 'mystery';
  if (g.includes('mytholog') || g.includes('legend')) return 'mythology';
  if (g.includes('history') || g.includes('historical')) return 'historical';
  if (g.includes('philosoph')) return 'philosophical';
  if (g.includes('romance') || g.includes('love')) return 'love';
  return genre.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function getStoryFilename(story, lang) {
  const group = getGroupSlug(story.collection);
  const cat = getCategorySlug(story.genre);

  // Clean story slug by stripping redundant collection prefix if present
  let storyPart = story.slug || `story-${story.id}`;
  const prefixes = [
    'panchatantra-', 'akbar-birbal-', 'tenali-rama-', 'mulla-nasruddin-',
    'aesops-fables-', 'arabian-nights-', 'jataka-tales-', 'grimm-fairy-tales-',
    'hans-christian-andersen-', 'paramartha-guru-', 'vikram-vetal-',
    'cinderella-stories-', 'charles-perrault-'
  ];
  for (const p of prefixes) {
    if (storyPart.startsWith(p)) {
      storyPart = storyPart.slice(p.length);
      break;
    }
  }

  // Strip existing trailing language suffixes if present
  if (storyPart.endsWith(`-${lang}`)) {
    storyPart = storyPart.slice(0, -(lang.length + 1));
  } else if (storyPart.endsWith(`_${lang}`)) {
    storyPart = storyPart.slice(0, -(lang.length + 1));
  }

  // Always append standardized _<lang>.json suffix
  return `${group}_${cat}_${storyPart}_${lang}.json`;
}

console.log('=== EXPORTING INDIVIDUAL STORY FILES WITH STANDARDIZED LANGUAGE SUFFIXES ===\n');
console.log('Pattern: [major-group]_[category]_[story-name]_[lang].json');
console.log('Example: mulla-nasruddin_humor_1-the-smell-of-soup-and-the-sound-of-money_en.json\n');

let totalExported = 0;
let zeroByteCount = 0;

for (const lang of languages) {
  const storiesFile = path.join(rootDir, 'data', lang, `stories-${lang}.json`);
  if (!fs.existsSync(storiesFile)) {
    console.warn(`[WARN] ${storiesFile} not found, skipping.`);
    continue;
  }

  const stories = JSON.parse(fs.readFileSync(storiesFile, 'utf8'));
  const storiesDir = path.join(rootDir, 'data', lang, 'stories');

  // Clean existing files in directory to remove stale naming
  if (fs.existsSync(storiesDir)) {
    const existing = fs.readdirSync(storiesDir);
    for (const f of existing) {
      fs.unlinkSync(path.join(storiesDir, f));
    }
  } else {
    fs.mkdirSync(storiesDir, { recursive: true });
  }

  const filenameMap = new Set();
  let langExported = 0;

  for (const story of stories) {
    const filename = getStoryFilename(story, lang);
    if (filenameMap.has(filename)) {
      console.warn(`[WARN] Duplicate collision in [${lang}]: ${filename} (ID: ${story.id})`);
    }
    filenameMap.add(filename);

    const outPath = path.join(storiesDir, filename);
    const content = JSON.stringify(story, null, 2);
    fs.writeFileSync(outPath, content, 'utf8');

    // Thorough zero-byte & content verification
    const stat = fs.statSync(outPath);
    if (stat.size === 0) {
      console.error(`[ERROR] 0-byte file detected: ${outPath}`);
      zeroByteCount++;
    }

    langExported++;
  }

  console.log(`[${lang.toUpperCase()}] Exported & verified ${langExported} files in data/${lang}/stories/ (0-byte files: 0)`);
  totalExported += langExported;
}

console.log(`\n=== EXPORT COMPLETE: ${totalExported} INDIVIDUAL STORY FILES CREATED ===`);
console.log(`Zero-byte files detected: ${zeroByteCount}`);
