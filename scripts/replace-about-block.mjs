import fs from 'node:fs';
import path from 'node:path';

const pageAstroPath = path.resolve('src/pages/[lang]/[page].astro');
let content = fs.readFileSync(pageAstroPath, 'utf8');

// 1. Add import for AboutView
if (!content.includes('import AboutView from')) {
  content = content.replace(
    "import StoryIllustration from '../../components/StoryIllustration.astro';",
    "import StoryIllustration from '../../components/StoryIllustration.astro';\nimport AboutView from '../../components/AboutView.astro';"
  );
  console.log('✓ Added AboutView import');
}

// 2. Replace the old hardcoded view === 'about' block with <AboutView currentLang={currentLang} />
const startMarker = "    <!-- VIEW: DEDICATED ABOUT PAGE -->\n    {view === 'about' && (";
const endMarker = "    <!-- VIEW 8: LEGAL / ABOUT / POLICY VIEWS -->";

const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
  const replacement = `    <!-- VIEW: DEDICATED ABOUT PAGE -->
    {view === 'about' && (
      <AboutView currentLang={currentLang} />
    )}

`;
  content = content.substring(0, startIdx) + replacement + content.substring(endIdx);
  console.log('✓ Successfully replaced about block with <AboutView currentLang={currentLang} />');
  fs.writeFileSync(pageAstroPath, content, 'utf8');
} else {
  console.error('Failed to locate markers:', { startIdx, endIdx });
}
