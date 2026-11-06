import fs from 'node:fs';
import path from 'node:path';

const pageAstroPath = path.resolve('src/pages/[lang]/[page].astro');
let content = fs.readFileSync(pageAstroPath, 'utf8');

// 1. Add import for ContactView
if (!content.includes('import ContactView from')) {
  content = content.replace(
    "import AboutView from '../../components/AboutView.astro';",
    "import AboutView from '../../components/AboutView.astro';\nimport ContactView from '../../components/ContactView.astro';"
  );
  console.log('✓ Added ContactView import');
}

// 2. Replace the contact block
const startMarker = "    <!-- VIEW 7: DEDICATED CONTACT & COLLABORATION PAGE -->\n    {view === 'contact' && (";
const endMarker = "    <!-- VIEW: DEDICATED ABOUT PAGE -->";

const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
  const replacement = `    <!-- VIEW 7: DEDICATED CONTACT & COLLABORATION PAGE -->
    {view === 'contact' && (
      <ContactView currentLang={currentLang} />
    )}

`;
  content = content.substring(0, startIdx) + replacement + content.substring(endIdx);
  console.log('✓ Successfully replaced contact block with <ContactView currentLang={currentLang} />');

  // Also remove the old inline contact form script listener at the bottom if present
  const oldScriptMarker = "  // Contact Form Instant Dispatch Handler";
  const oldScriptEnd = "  // End Contact Form Handler";
  const sIdx = content.indexOf(oldScriptMarker);
  const eIdx = content.indexOf(oldScriptEnd);
  if (sIdx !== -1 && eIdx !== -1) {
    content = content.substring(0, sIdx) + content.substring(eIdx + oldScriptEnd.length);
    console.log('✓ Removed old redundant script from bottom of page.astro');
  }

  fs.writeFileSync(pageAstroPath, content, 'utf8');
} else {
  console.error('Failed to locate contact markers:', { startIdx, endIdx });
}
