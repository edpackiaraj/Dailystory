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

  // Filter only reviewed stories for indexing (unreviewed translations must not be indexed)
  const indexableStories = stories.filter(s => s.reviewed !== false);

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  // Core pages
  for (const route of coreRoutes) {
    const loc = route ? `${siteUrl}/${lang}/${route}/` : `${siteUrl}/${lang}/`;
    xml += '  <url>\n';
    xml += `    <loc>${loc}</loc>\n`;
    xml += `    <changefreq>${route === '' ? 'daily' : 'monthly'}</changefreq>\n`;
    xml += `    <priority>${route === '' ? '1.0' : '0.7'}</priority>\n`;

    // Add hreflang links across all languages for core pages
    for (const altLang of languages) {
      const altLoc = route ? `${siteUrl}/${altLang}/${route}/` : `${siteUrl}/${altLang}/`;
      xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${altLoc}"/>\n`;
    }
    // x-default points to English
    const xDefaultLoc = route ? `${siteUrl}/en/${route}/` : `${siteUrl}/en/`;
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefaultLoc}"/>\n`;

    xml += '  </url>\n';
  }

  // Story pages
  for (const story of indexableStories) {
    const loc = `${siteUrl}/${lang}/stories/${story.slug}/`;
    xml += '  <url>\n';
    xml += `    <loc>${loc}</loc>\n`;
    xml += `    <lastmod>${story.publish_date || new Date().toISOString().split('T')[0]}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;

    // Only link to sibling translations if they are reviewed!
    for (const otherLang of languages) {
      const otherStoriesPath = path.join(dataDir, otherLang, 'stories.json');
      if (fs.existsSync(otherStoriesPath)) {
        try {
          const siblingStories = JSON.parse(fs.readFileSync(otherStoriesPath, 'utf8'));
          const sibling = siblingStories.find(s => s.id === story.id && s.reviewed !== false);
          if (sibling) {
            xml += `    <xhtml:link rel="alternate" hreflang="${otherLang}" href="${siteUrl}/${otherLang}/stories/${sibling.slug}/"/>\n`;
          }
        } catch(e) {}
      }
    }

    xml += '  </url>\n';
  }

  xml += '</urlset>\n';

  const sitemapFilename = `sitemap-${lang}.xml`;
  fs.writeFileSync(path.join(publicDir, sitemapFilename), xml, 'utf8');
  sitemapFilenames.push(sitemapFilename);
  console.log(`[Sitemap Generator] Generated ${sitemapFilename} with ${coreRoutes.length + indexableStories.length} URLs.`);
}

// Write sitemap index
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
Disallow: /*?*preview=true

Sitemap: ${siteUrl}/sitemap.xml
`;
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf8');
console.log('[Sitemap Generator] Generated robots.txt.');
