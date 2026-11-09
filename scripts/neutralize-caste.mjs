import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const dataDir = path.join(rootDir, 'data');

console.log('=== Step: Neutralizing Caste-Related Terms Across All Content ===');

// Replacement mappings
const tamilReplacements = [
  // Specific inflections first to avoid partial replacements
  { regex: /பிராமணர்களின்/g, replace: 'பூசாரிகளின்' },
  { regex: /பிராமணர்களுக்கு/g, replace: 'பூசாரிகளுக்கு' },
  { regex: /பிராமணர்களை/g, replace: 'பூசாரிகளை' },
  { regex: /பிராமணர்கள்/g, replace: 'பூசாரிகள்' },
  { regex: /பிராமணருக்கு/g, replace: 'பூசாரிக்கு' },
  { regex: /பிராமணரின்/g, replace: 'பூசாரியின்' },
  { regex: /பிராமணனைப்/g, replace: 'பூசாரியைப்' },
  { regex: /பிராமணனை/g, replace: 'பூசாரியை' },
  { regex: /பிராமணனின்/g, replace: 'பூசாரியின்' },
  { regex: /பிராமணனுக்கு/g, replace: 'பூசாரிக்கு' },
  { regex: /பிராமணனும்/g, replace: 'பூசாரியும்' },
  { regex: /பிராமணரோடு/g, replace: 'பூசாரியோடு' },
  { regex: /பிராமணரால்/g, replace: 'பூசாரியால்' },
  { regex: /பிராமணருடன்/g, replace: 'பூசாரியுடன்' },
  { regex: /பிராமணர்/g, replace: 'பூசாரி' },
  { regex: /பிராமணன்/g, replace: 'பூசாரி' },
  { regex: /பிராமணக்/g, replace: 'பூசாரிக்குடும்பக்' },
  { regex: /பிராமணப்/g, replace: 'பூசாரிக்குடும்பப்' },
  { regex: /பிராமணத்/g, replace: 'பூசாரிக்குடும்பத்' },
  { regex: /பிராமண/g, replace: 'பூசாரி' },
  { regex: /பிராமின்/g, replace: 'பூசாரி' },
  { regex: /பிராமினர்/g, replace: 'பூசாரி' },
  { regex: /பார்ப்பனர்களின்/g, replace: 'பூசாரிகளின்' },
  { regex: /பார்ப்பனர்கள்/g, replace: 'பூசாரிகள்' },
  { regex: /பார்ப்பனருக்கு/g, replace: 'பூசாரிக்கு' },
  { regex: /பார்ப்பனரின்/g, replace: 'பூசாரியின்' },
  { regex: /பார்ப்பனர்/g, replace: 'பூசாரி' },
  { regex: /பார்ப்பான்/g, replace: 'பூசாரி' },
  { regex: /பார்ப்பன/g, replace: 'பூசாரி' },
  { regex: /அந்தணர்களின்/g, replace: 'பூசாரிகளின்' },
  { regex: /அந்தணர்களுக்கு/g, replace: 'பூசாரிகளுக்கு' },
  { regex: /அந்தணர்களை/g, replace: 'பூசாரிகளை' },
  { regex: /அந்தணர்கள்/g, replace: 'பூசாரிகள்' },
  { regex: /அந்தணரின்/g, replace: 'பூசாரியின்' },
  { regex: /அந்தணருக்கு/g, replace: 'பூசாரிக்கு' },
  { regex: /அந்தணனை/g, replace: 'பூசாரியை' },
  { regex: /அந்தணனும்/g, replace: 'பூசாரியும்' },
  { regex: /அந்தணர்/g, replace: 'பூசாரி' },
  { regex: /அந்தணன்/g, replace: 'பூசாரி' }
];

const englishReplacements = [
  { regex: /\bBrahmins'\b/g, replace: "Priests'" },
  { regex: /\bbrahmins'\b/g, replace: "priests'" },
  { regex: /\bBrahmin's\b/g, replace: "Priest's" },
  { regex: /\bbrahmin's\b/g, replace: "priest's" },
  { regex: /\bBrahmins\b/g, replace: 'Priests' },
  { regex: /\bbrahmins\b/g, replace: 'priests' },
  { regex: /\bBrahmin\b/g, replace: 'Priest' },
  { regex: /\bbrahmin\b/g, replace: 'priest' },
  { regex: /\bBrahmans'\b/g, replace: "Priests'" },
  { regex: /\bbrahmans'\b/g, replace: "priests'" },
  { regex: /\bBrahman's\b/g, replace: "Priest's" },
  { regex: /\bbrahman's\b/g, replace: "priest's" },
  { regex: /\bBrahmans\b/g, replace: 'Priests' },
  { regex: /\bbrahmans\b/g, replace: 'priests' },
  { regex: /\bBrahman\b/g, replace: 'Priest' },
  { regex: /\bbrahman\b/g, replace: 'priest' }
];

const hindiReplacements = [
  { regex: /ब्राह्मणों/g, replace: 'पुजारियों' },
  { regex: /ब्राह्मण/g, replace: 'पुजारी' }
];

const teluguReplacements = [
  { regex: /బ్రాహ్మణులు/g, replace: 'పూజారులు' },
  { regex: /బ్రాహ్మణుడు/g, replace: 'పూజారి' },
  { regex: /బ్రాహ్మణ/g, replace: 'పూజారి' }
];

const kannadaReplacements = [
  { regex: /ಬ್ರಾಹ್ಮಣರು/g, replace: 'ಪೂಜಾರಿಗಳು' },
  { regex: /ಬ್ರಾಹ್ಮಣ/g, replace: 'ಪೂಜಾರಿ' }
];

const malayalamReplacements = [
  { regex: /ബ്രാഹ്മണർ/g, replace: 'പൂജാരിമാർ' },
  { regex: /ബ്രാഹ്മണൻ/g, replace: 'പൂജാരി' },
  { regex: /ബ്രാഹ്മണ/g, replace: 'പൂജാരി' }
];

const marathiReplacements = [
  { regex: /ब्राह्मणांना/g, replace: 'पुजाऱ्यांना' },
  { regex: /ब्राह्मण/g, replace: 'पुजारी' }
];

function sanitizeString(str, lang) {
  if (!str || typeof str !== 'string') return str;
  let out = str;
  if (lang === 'ta') {
    for (const r of tamilReplacements) {
      out = out.replace(r.regex, r.replace);
    }
  } else if (lang === 'en') {
    for (const r of englishReplacements) {
      out = out.replace(r.regex, r.replace);
    }
  } else if (lang === 'hi') {
    for (const r of hindiReplacements) {
      out = out.replace(r.regex, r.replace);
    }
  } else if (lang === 'te') {
    for (const r of teluguReplacements) {
      out = out.replace(r.regex, r.replace);
    }
  } else if (lang === 'kn') {
    for (const r of kannadaReplacements) {
      out = out.replace(r.regex, r.replace);
    }
  } else if (lang === 'ml') {
    for (const r of malayalamReplacements) {
      out = out.replace(r.regex, r.replace);
    }
  } else if (lang === 'mr') {
    for (const r of marathiReplacements) {
      out = out.replace(r.regex, r.replace);
    }
  }
  return out;
}

function processStoryObj(story, lang) {
  let changed = false;
  ['title', 'summary', 'full_text', 'moral'].forEach(field => {
    if (story[field]) {
      const orig = story[field];
      const sanitized = sanitizeString(orig, lang);
      if (sanitized !== orig) {
        story[field] = sanitized;
        changed = true;
      }
    }
  });
  if (Array.isArray(story.tags)) {
    story.tags = story.tags.map(t => sanitizeString(t, lang));
  }
  return changed;
}

function safeReadFileSync(filePath) {
  for (let attempt = 1; attempt <= 10; attempt++) {
    try {
      return fs.readFileSync(filePath, 'utf8');
    } catch (err) {
      if (attempt === 10) throw err;
      const delay = attempt * 200;
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
      const delay = attempt * 200;
      const AtomicsWait = new Int32Array(new SharedArrayBuffer(4));
      Atomics.wait(AtomicsWait, 0, 0, delay);
    }
  }
}

function processDirectory(dir, lang) {
  if (!fs.existsSync(dir)) return 0;
  const files = fs.readdirSync(dir);
  let filesModified = 0;

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      filesModified += processDirectory(fullPath, lang);
    } else if (file.endsWith('.json')) {
      try {
        const content = safeReadFileSync(fullPath);
        const parsed = JSON.parse(content);
        let changed = false;

        if (Array.isArray(parsed)) {
          for (const item of parsed) {
            if (item && typeof item === 'object') {
              if (processStoryObj(item, lang)) changed = true;
            }
          }
        } else if (parsed && typeof parsed === 'object') {
          if (parsed.stories && Array.isArray(parsed.stories)) {
            for (const item of parsed.stories) {
              if (processStoryObj(item, lang)) changed = true;
            }
          }
          if (processStoryObj(parsed, lang)) changed = true;
        }

        if (changed) {
          safeWriteFileSync(fullPath, JSON.stringify(parsed, null, 2) + '\n');
          filesModified++;
        }
      } catch (err) {
        console.error(`Error processing ${fullPath}:`, err.message);
      }
    }
  }
  return filesModified;
}

const languages = ['ta', 'en', 'hi', 'te', 'kn', 'ml', 'mr', 'zh'];
let totalModified = 0;

for (const lang of languages) {
  const langDir = path.join(dataDir, lang);
  const count = processDirectory(langDir, lang);
  console.log(`[Neutralizer] Processed language "${lang}": ${count} files modified.`);
  totalModified += count;
}

// Also process src/lib/story-visuals.ts and src/data/*.json
const extraFiles = [
  { path: path.join(rootDir, 'src', 'lib', 'story-visuals.ts'), lang: 'ta' },
  { path: path.join(rootDir, 'src', 'data', 'panchatantra-syllabus.json'), lang: 'en' }
];

for (const extra of extraFiles) {
  if (fs.existsSync(extra.path)) {
    let content = fs.readFileSync(extra.path, 'utf8');
    const orig = content;
    content = sanitizeString(content, extra.lang);
    if (extra.lang === 'ta') {
      content = sanitizeString(content, 'en');
    }
    if (content !== orig) {
      fs.writeFileSync(extra.path, content, 'utf8');
      console.log(`[Neutralizer] Updated ${extra.path}`);
      totalModified++;
    }
  }
}

console.log(`=== Complete: ${totalModified} files updated with caste neutralization. ===\n`);
