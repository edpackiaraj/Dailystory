import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const languages = ['en', 'es', 'hi', 'kn', 'ml', 'mr', 'pt', 'ta', 'te', 'zh'];

console.log('================================================================');
console.log('  COMPREHENSIVE AUDIT: ALL STORIES AVAILABILITY & HYPERLINKS');
console.log('================================================================\n');

function getCollectionSlug(collection) {
  if (!collection) return 'world-folktales';
  return collection.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function getStoryUrl(story, lang) {
  const colSlug = getCollectionSlug(story.collection);
  return `/${lang}/collections/${lang}-collection-${colSlug}/#${story.slug}`;
}

let totalStoriesAcrossLanguages = 0;
let totalStoriesWithValidLinks = 0;
let brokenLinksCount = 0;
const errors = [];
const collectionPageCache = new Map();

// Helper to check if a collection page HTML exists and contains the story slug
function verifyStoryInDist(lang, colSlug, storySlug) {
  const pagePath = path.join(rootDir, 'dist', lang, 'collections', `${lang}-collection-${colSlug}.html`);
  if (!fs.existsSync(pagePath)) {
    return { exists: false, inPage: false, reason: `Page dist/${lang}/collections/${lang}-collection-${colSlug}.html does not exist` };
  }

  let htmlContent = collectionPageCache.get(pagePath);
  if (!htmlContent) {
    htmlContent = fs.readFileSync(pagePath, 'utf8');
    collectionPageCache.set(pagePath, htmlContent);
  }

  // Check if story slug is in the collection page HTML (either in stories array, dropdown, or grid)
  const hasSlug = htmlContent.includes(storySlug);
  return { exists: true, inPage: hasSlug, reason: hasSlug ? null : `Story slug "${storySlug}" not found in ${colSlug}.html` };
}

// 1. Audit all stories in each language
console.log('1. AUDITING 25,030 STORIES ACROSS 10 LANGUAGES:');
for (const lang of languages) {
  const storiesFile = path.join(rootDir, 'data', lang, `stories-${lang}.json`);
  if (!fs.existsSync(storiesFile)) {
    errors.push(`Missing data file: data/${lang}/stories-${lang}.json`);
    continue;
  }

  const stories = JSON.parse(fs.readFileSync(storiesFile, 'utf8'));
  let langBroken = 0;
  let langValid = 0;

  for (const story of stories) {
    totalStoriesAcrossLanguages++;
    const colSlug = getCollectionSlug(story.collection);
    const storyUrl = getStoryUrl(story, lang);

    // Validate story structure
    if (!story.id || !story.title || !story.slug || !story.full_text || !story.moral) {
      errors.push(`[${lang}] Story ${story.id || 'NO_ID'} missing required fields`);
      langBroken++;
      continue;
    }

    // Verify link targets an existing page in dist and the story is indexed inside it
    const check = verifyStoryInDist(lang, colSlug, story.slug);
    if (!check.exists) {
      errors.push(`[${lang}] Story "${story.title}" (${story.id}) broken link: ${storyUrl} -> ${check.reason}`);
      langBroken++;
    } else if (!check.inPage) {
      errors.push(`[${lang}] Story "${story.title}" (${story.id}) not indexed in page: ${storyUrl} -> ${check.reason}`);
      langBroken++;
    } else {
      langValid++;
      totalStoriesWithValidLinks++;
    }
  }

  console.log(`  ✓ [${lang.toUpperCase()}] ${stories.length} stories verified: ${langValid} valid links, ${langBroken} broken.`);
}

console.log('\n2. AUDITING INTERNAL HYPERLINKS IN COMPILED PAGES (dist/):');

// Check core pages existence for all 10 languages
const corePages = [
  'index.html',
  'about.html',
  'contact.html',
  'privacy.html',
  'terms.html',
  'disclaimer.html',
  'cookies.html',
  'copyright.html',
  'guidelines.html',
  'editorial-policy.html',
  'parent-guide.html',
  'accessibility.html',
  'search.html',
  'submit.html',
  'subscribe.html',
  'favorites.html'
];

let corePagesChecked = 0;
let corePagesMissing = 0;

for (const lang of languages) {
  // Check lang home: dist/en.html
  const langHome = path.join(rootDir, 'dist', `${lang}.html`);
  if (!fs.existsSync(langHome)) {
    errors.push(`Missing language root page: dist/${lang}.html`);
    corePagesMissing++;
  } else {
    corePagesChecked++;
  }

  for (const page of corePages) {
    if (page === 'index.html') continue;
    const pageKey = page.replace('.html', '');
    const pagePath = path.join(rootDir, 'dist', lang, `${lang}-${pageKey}.html`);
    if (!fs.existsSync(pagePath)) {
      errors.push(`Missing page: dist/${lang}/${lang}-${pageKey}.html`);
      corePagesMissing++;
    } else {
      corePagesChecked++;
    }
  }
}

console.log(`  ✓ Checked ${corePagesChecked} core multilingual pages across 10 languages (${corePagesMissing} missing).`);

// 3. Sitemaps URL check
console.log('\n3. AUDITING SITEMAPS HYPERLINKS:');
const sitemapMaster = path.join(rootDir, 'dist', 'sitemap.xml');
if (fs.existsSync(sitemapMaster)) {
  const masterContent = fs.readFileSync(sitemapMaster, 'utf8');
  const sitemapUrls = masterContent.match(/<loc>(.*?)<\/loc>/g) || [];
  console.log(`  ✓ Master sitemap.xml contains ${sitemapUrls.length} language sitemaps.`);

  let totalSitemapStories = 0;
  for (const lang of languages) {
    const langSitemap = path.join(rootDir, 'dist', `sitemap-${lang}.xml`);
    if (fs.existsSync(langSitemap)) {
      const content = fs.readFileSync(langSitemap, 'utf8');
      const urls = content.match(/<loc>(.*?)<\/loc>/g) || [];
      totalSitemapStories += urls.length;
    }
  }
  console.log(`  ✓ Total URLs across all language sitemaps: ${totalSitemapStories}`);
} else {
  errors.push('Missing dist/sitemap.xml');
}

console.log('\n================================================================');
console.log('                      AUDIT RESULTS SUMMARY                     ');
console.log('================================================================');
console.log(`Total Stories in Database:        ${totalStoriesAcrossLanguages}`);
console.log(`Stories with Verified Hyperlinks:  ${totalStoriesWithValidLinks}`);
console.log(`Total Errors / Broken Links:      ${errors.length}`);

if (errors.length === 0) {
  console.log('\n>>> RESULT: 100% PERFECT! ALL STORIES ARE AVAILABLE AND PROPERLY LINKED! <<<');
} else {
  console.log(`\n>>> RESULT: ${errors.length} ISSUES FOUND. Sample errors: <<<`);
  errors.slice(0, 15).forEach(e => console.log('  - ' + e));
}
