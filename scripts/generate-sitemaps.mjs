import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const dataDir = path.join(rootDir, 'data');
const brandConfig = JSON.parse(fs.readFileSync(path.join(rootDir, 'config', 'brand.json'), 'utf8'));

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

function safeWriteFileSync(filePath, data, maxRetries = 5) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      fs.writeFileSync(filePath, data, 'utf8');
      return;
    } catch (err) {
      if (i === maxRetries - 1) throw err;
      const waitMs = 300 * (i + 1);
      const start = Date.now();
      while (Date.now() - start < waitMs) {} // Synchronous spin wait for file unlock
    }
  }
}

const siteUrl = brandConfig.siteUrl.replace(/\/$/, '');
const languages = brandConfig.supportedLanguages.map(l => l.code);

console.log('[Sitemap Generator] Generating multilingual XML sitemaps & robots.txt with dedicated story URLs...');

const sitemapFilenames = [];

const manifestPath = path.join(dataDir, 'en', 'manifest-en.json');
let allCollections = [
  "Cinderella Stories", "Akbar–Birbal", "Panchatantra", "Tenali Rama",
  "Aesop's Fables", "Grimm Fairy Tales", "Hans Christian Andersen", "Mulla Nasruddin",
  "Jataka Tales", "Charles Perrault", "Arabian Nights", "Vikram–Vetal", "Paramartha Guru"
];

if (fs.existsSync(manifestPath)) {
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    allCollections = Array.from(new Set(manifest.map(m => m.collection))).filter(Boolean);
  } catch {}
}

// Clean static core routes for each language
const coreRoutes = [
  '',
  'search',
  'favourites',
  'collections',
  'submit',
  'subscribe',
  'guide',
  'about',
  'contact',
  'disclaimer',
  'privacy',
  'terms',
  'cookies',
  'copyright',
  'guidelines',
  'editorial-policy',
  'parent-guide',
  'accessibility'
];

for (const lang of languages) {
  // Load stories for this language
  let stories = [];
  const collectionsDir = path.join(dataDir, lang, 'collections');
  if (fs.existsSync(collectionsDir)) {
    try {
      const files = fs.readdirSync(collectionsDir).filter(f => f.endsWith('.json'));
      for (const file of files) {
        const filePath = path.join(collectionsDir, file);
        stories.push(...JSON.parse(fs.readFileSync(filePath, 'utf8')));
      }
    } catch (e) {}
  }

  if (stories.length === 0) {
    const langStoriesFilePath = path.join(dataDir, lang, `stories-${lang}.json`);
    const legacyStoriesFilePath = path.join(dataDir, lang, 'stories.json');
    const langStoriesPath = fs.existsSync(langStoriesFilePath) ? langStoriesFilePath : legacyStoriesFilePath;
    if (fs.existsSync(langStoriesPath)) {
      try {
        stories = JSON.parse(fs.readFileSync(langStoriesPath, 'utf8'));
      } catch (e) {
        stories = [];
      }
    }
  }

  // Filter reviewed published stories
  const indexableStories = stories.filter(s => s.reviewed !== false && s.status !== 'draft');

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  // 1. Core pages (clean URLs)
  for (const route of coreRoutes) {
    const loc = route ? `${siteUrl}/${lang}/${route}/` : `${siteUrl}/${lang}/`;
    xml += '  <url>\n';
    xml += `    <loc>${loc}</loc>\n`;
    xml += `    <changefreq>${route === '' ? 'daily' : 'monthly'}</changefreq>\n`;
    xml += `    <priority>${route === '' ? '1.0' : '0.7'}</priority>\n`;

    for (const altLang of languages) {
      const altLoc = route ? `${siteUrl}/${altLang}/${route}/` : `${siteUrl}/${altLang}/`;
      xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${altLoc}"/>\n`;
    }
    const xDefaultLoc = route ? `${siteUrl}/en/${route}/` : `${siteUrl}/`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefaultLoc}"/>\n`;
    xml += '  </url>\n';
  }

  // 2. Collection Hubs (clean URLs)
  let collectionsIndexed = 0;
  for (const col of allCollections) {
    const colSlug = col.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const colStories = indexableStories.filter(s => {
      const norm = (s.collection || '').toLowerCase();
      if (colSlug.includes('cinderella')) {
        return norm.includes('cinderella') || (s.tags && s.tags.some(t => t.toLowerCase().includes('cinderella'))) || s.slug.includes('cinderella');
      }
      return norm === col.toLowerCase();
    });

    if (colStories.length >= 1) {
      collectionsIndexed++;
      const loc = `${siteUrl}/${lang}/collections/${colSlug}/`;
      xml += '  <url>\n';
      xml += `    <loc>${loc}</loc>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>0.9</priority>\n`;

      for (const altLang of languages) {
        xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${siteUrl}/${altLang}/collections/${colSlug}/"/>\n`;
      }
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/en/collections/${colSlug}/"/>\n`;
      xml += '  </url>\n';
    }
  }

  // 3. Individual Story Pages (giving every story its own indexable URL!)
  let storiesIndexed = 0;
  for (const story of indexableStories) {
    const colSlug = (story.collection || 'world-folktales').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const storyLoc = `${siteUrl}/${lang}/${colSlug}/${story.slug}/`;
    const lastModDate = story.publish_date || '2026-03-25';

    xml += '  <url>\n';
    xml += `    <loc>${storyLoc}</loc>\n`;
    xml += `    <lastmod>${lastModDate}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    for (const altLang of languages) {
      xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${siteUrl}/${altLang}/${colSlug}/${story.slug}/"/>\n`;
    }
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/en/${colSlug}/${story.slug}/"/>\n`;
    xml += '  </url>\n';
    storiesIndexed++;
  }

  xml += '</urlset>\n';

  const sitemapFilename = `sitemap-${lang}.xml`;
  safeWriteFileSync(path.join(publicDir, sitemapFilename), xml);
  sitemapFilenames.push(sitemapFilename);
  console.log(`[Sitemap Generator] Generated ${sitemapFilename}: ${coreRoutes.length} core, ${collectionsIndexed} collections, ${storiesIndexed} stories.`);
}

const todayIsoDate = new Date().toISOString().split('T')[0];
let indexXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
indexXml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
for (const fn of sitemapFilenames) {
  indexXml += '  <sitemap>\n';
  indexXml += `    <loc>${siteUrl}/${fn}</loc>\n`;
  indexXml += `    <lastmod>${todayIsoDate}</lastmod>\n`;
  indexXml += '  </sitemap>\n';
}
indexXml += '</sitemapindex>\n';

safeWriteFileSync(path.join(publicDir, 'sitemap.xml'), indexXml);
console.log('[Sitemap Generator] Generated master sitemap.xml index.');

// robots.txt
const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: ${siteUrl}/sitemap.xml
`;
safeWriteFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
console.log('[Sitemap Generator] Generated robots.txt.');
