import fs from 'node:fs';
import path from 'node:path';

const pageAstroPath = path.resolve('src/pages/[lang]/[page].astro');
let content = fs.readFileSync(pageAstroPath, 'utf8');

// 1. Update getStaticPaths to load language-specific legal data
const oldGetStaticPaths = `export function getStaticPaths() {
  const legalKeys = Object.keys(legalData.pages);
  const paths: any[] = [];

  for (const lang of brandConfig.supportedLanguages) {`;

const newGetStaticPaths = `export function getStaticPaths() {
  const paths: any[] = [];

  for (const lang of brandConfig.supportedLanguages) {
    const langLegalPath = path.resolve(\`./data/legal/\${lang.code}.json\`);
    const currentLegalData = fs.existsSync(langLegalPath)
      ? JSON.parse(fs.readFileSync(langLegalPath, 'utf8'))
      : legalData;
    const legalKeys = Object.keys(currentLegalData.pages || legalData.pages);`;

if (content.includes(oldGetStaticPaths)) {
  content = content.replace(oldGetStaticPaths, newGetStaticPaths);
  // Also replace pageData assignment in getStaticPaths
  content = content.replaceAll(
    'pageData: (legalData.pages as Record<string, any>)[key],',
    'pageData: ((currentLegalData.pages as Record<string, any>)[key] || (legalData.pages as Record<string, any>)[key]),'
  );
  content = content.replaceAll(
    'lastUpdated: legalData.lastUpdated',
    'lastUpdated: (currentLegalData.lastUpdated || legalData.lastUpdated)'
  );
  console.log('✓ Successfully updated getStaticPaths for per-language legalData');
} else {
  console.log('Notice: oldGetStaticPaths target not found (might already be modified)');
}

// 2. Update pageTitle and pageDesc for view === 'about'
const oldAboutMeta = `} else if (view === 'about') {
  pageTitle = \`About Daily Tale — \${brandConfig.tagline}\`;
  pageDesc = "Learn about Daily Tale, our global multilingual folktale treasury in 8 languages, educational mission, and founder Dr. S. Edward Packiaraj.";`;

const newAboutMeta = `} else if (view === 'about') {
  pageTitle = currentLang === 'ta'
    ? \`Daily Tale பற்றி — நீதிநெறிக் கதைகளும் பண்பாட்டு மரபுக் கதைகளும்\`
    : \`About Daily Tale — \${brandConfig.tagline}\`;
  pageDesc = currentLang === 'ta'
    ? "Daily Tale தளம், எமது பன்மொழி நாட்டார் கதைப் பேழை, கல்வி நோக்கம் மற்றும் நிறுவனர் எஸ். எட்வர்ட் பாக்கியராஜ் பற்றிய முழு விவரங்கள்."
    : "Learn about Daily Tale, our global multilingual folktale treasury in 8 languages, educational mission, and founder Dr. S. Edward Packiaraj.";`;

if (content.includes(oldAboutMeta)) {
  content = content.replace(oldAboutMeta, newAboutMeta);
  console.log('✓ Successfully updated About page meta title & description for Tamil');
}

fs.writeFileSync(pageAstroPath, content, 'utf8');
console.log('Finished updating getStaticPaths & meta.');
