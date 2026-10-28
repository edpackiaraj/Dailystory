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

const siteUrl = brandConfig.siteUrl.replace(/\/$/, '');
const languages = brandConfig.supportedLanguages.map(l => l.code);

console.log('[Sitemap Generator] Generating multilingual XML sitemaps & robots.txt...');

const sitemapFilenames = [];

const allCollections = [
  "Cinderella Stories", "Akbar–Birbal", "Panchatantra", "Tenali Rama",
  "Aesop's Fables", "Grimm Fairy Tales", "Hans Christian Andersen", "Mulla Nasruddin",
  "Jataka Tales", "Charles Perrault", "Chinese Folktales and Fables", "Arabian Nights",
  "Vikram–Vetal", "Simhasana Battisi", "Sheikh Chilli", "Paramartha Guru",
  "Mariyadai Raman", "African Folktales", "Latin American Folktales",
  "Tamil Folk", "Tamil Folk Humor", "La Fontaine"
];

const allGenres = [
  "Moral Stories", "Funny Stories", "Humorous Tales", "Folktales", "Fairy Tales",
  "Fables", "Bedtime Stories", "Animal Stories", "Adventure Stories", "Fantasy Stories",
  "Mystery Stories", "Horror Stories", "Love Stories", "Inspirational Stories",
  "Mythology Stories", "Legends", "Science Fiction Stories", "Historical Stories"
];

// Static core routes for each language
const coreRoutes = [
  '',
  'search',
  'submit',
  'subscribe',
  'favorites',
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
  const langStoriesPath = path.join(dataDir, lang, 'stories.json');
  let stories = [];
  if (fs.existsSync(langStoriesPath)) {
    try {
      stories = JSON.parse(fs.readFileSync(langStoriesPath, 'utf8'));
    } catch (e) {
      stories = [];
    }
  }

  // Filter only reviewed stories for indexing
  const indexableStories = stories.filter(s => s.reviewed !== false);

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  // 1. Core pages
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
    const xDefaultLoc = route ? `${siteUrl}/en/${route}/` : `${siteUrl}/en/`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefaultLoc}"/>\n`;

    xml += '  </url>\n';
  }

  // 2. Collection Hubs (Indexable if 5+ stories in that collection)
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

    if (colStories.length >= 5 || lang === 'en') {
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

  // 3. Genre Hubs
  let genresIndexed = 0;
  for (const genre of allGenres) {
    const genreSlug = genre.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const genreStories = indexableStories.filter(s => (s.genre || '').toLowerCase() === genre.toLowerCase());

    if (genreStories.length >= 5 || lang === 'en') {
      genresIndexed++;
      const loc = `${siteUrl}/${lang}/genres/${genreSlug}/`;
      xml += '  <url>\n';
      xml += `    <loc>${loc}</loc>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>0.8</priority>\n`;

      for (const altLang of languages) {
        xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${siteUrl}/${altLang}/genres/${genreSlug}/"/>\n`;
      }
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/en/genres/${genreSlug}/"/>\n`;
      xml += '  </url>\n';
    }
  }

  xml += '</urlset>\n';

  const sitemapFilename = `sitemap-${lang}.xml`;
  fs.writeFileSync(path.join(publicDir, sitemapFilename), xml, 'utf8');
  sitemapFilenames.push(sitemapFilename);
  console.log(`[Sitemap Generator] Generated ${sitemapFilename} with ${coreRoutes.length + collectionsIndexed + genresIndexed} URLs.`);
}

// Write master sitemap index
let indexXml = '<?xml version="1.0" encoding="UTF-8"?>\n';
indexXml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
for (const fn of sitemapFilenames) {
  indexXml += '  <sitemap>\n';
  indexXml += `    <loc>${siteUrl}/${fn}</loc>\n`;
  indexXml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
  indexXml += '  </sitemap>\n';
}
indexXml += '</sitemapindex>\n';

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), indexXml, 'utf8');
console.log('[Sitemap Generator] Generated master sitemap.xml index.');

// Write robots.txt
const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: ${siteUrl}/sitemap.xml
`;
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf8');
console.log('[Sitemap Generator] Generated robots.txt.');
