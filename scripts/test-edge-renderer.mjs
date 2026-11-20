import fs from 'node:fs';
import path from 'node:path';

// Simulation of Cloudflare HTMLRewriter using string / DOM manipulation in Node
// Tests edge transformation output to guarantee zero data bleeding across all collections

console.log('=== TESTING EDGE STORY RENDERER & CI VALIDATION ===\n');

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function replaceDivContent(html, id, newInnerContent) {
  const marker = `id="${id}"`;
  const idIdx = html.indexOf(marker);
  if (idIdx === -1) return html;

  const openTagStart = html.lastIndexOf('<div', idIdx);
  if (openTagStart === -1) return html;

  const openTagEnd = html.indexOf('>', idIdx);
  if (openTagEnd === -1) return html;

  let depth = 1;
  let cursor = openTagEnd + 1;
  while (cursor < html.length && depth > 0) {
    const nextOpen = html.indexOf('<div', cursor);
    const nextClose = html.indexOf('</div>', cursor);

    if (nextClose === -1) break;

    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      cursor = nextOpen + 4;
    } else {
      depth--;
      if (depth === 0) {
        const closeTagEnd = nextClose + 6;
        return html.slice(0, openTagStart) + `<div id="${id}">${newInnerContent}</div>` + html.slice(closeTagEnd);
      }
      cursor = nextClose + 6;
    }
  }
  return html;
}

function simulateEdgeRenderer(shellHtml, story, stories, lang, collection, slug) {
  const cleanTitle = (story.title || '').replace(/\s*\[[A-Za-z]{2}\]/g, '').trim();
  const cleanSummary = (story.summary || '').trim();
  const cleanMoral = (story.moral || story.moral_reflection || '').trim();
  const canonicalUrl = `https://dailystory.pages.dev/${lang}/${collection}/${slug}/`;

  let html = shellHtml;

  // 1. Title & Meta
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${cleanTitle} | Daily Tale</title>`);
  html = html.replace(/<meta name="description" content="[^"]*"/i, `<meta name="description" content="${escapeAttr(cleanSummary)}"`);
  html = html.replace(/<link rel="canonical" href="[^"]*"/i, `<link rel="canonical" href="${canonicalUrl}"`);
  
  // 2. OpenGraph & Twitter: critical fix content attribute
  html = html.replace(/<meta property="og:url" [^>]*>/i, `<meta property="og:url" content="${canonicalUrl}" />`);
  html = html.replace(/<meta property="og:title" content="[^"]*"/i, `<meta property="og:title" content="${escapeAttr(cleanTitle)}"`);
  html = html.replace(/<meta property="og:description" content="[^"]*"/i, `<meta property="og:description" content="${escapeAttr(cleanSummary)}"`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*"/i, `<meta name="twitter:title" content="${escapeAttr(cleanTitle)}"`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*"/i, `<meta name="twitter:description" content="${escapeAttr(cleanSummary)}"`);

  // 2b. JSON-LD Structured Data: replace the first, remove duplicates
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `https://dailystory.pages.dev/${lang}/` },
        { "@type": "ListItem", "position": 2, "name": story.collection, "item": `https://dailystory.pages.dev/${lang}/collections/${collection}/` },
        { "@type": "ListItem", "position": 3, "name": cleanTitle, "item": canonicalUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": cleanTitle,
      "description": cleanSummary,
      "inLanguage": lang,
      "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl },
      "teaches": cleanMoral
    }
  ];
  let jsonLdInjected = false;
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, () => {
    if (!jsonLdInjected) {
      jsonLdInjected = true;
      return `<script type="application/ld+json">${JSON.stringify(jsonLdData)}</script>`;
    }
    return '';
  });

  // 3. Audio suite & Payloads
  html = html.replace(/id="story-audio-suite"[^>]*>/i, `id="story-audio-suite" data-story-id="${story.id || slug}" data-story-title="${escapeAttr(cleanTitle)}" data-collection="${story.collection || collection}">`);
  html = html.replace(/<script type="application\/json" id="initial-story-payload">[\s\S]*?<\/script>/i, `<script type="application/json" id="initial-story-payload">${JSON.stringify(story).replace(/<\//g, '<\\/')}</script>`);
  
  // 3b. Story content & summaries
  const paragraphs = (story.full_text || story.content || '').split(/\n\s*\n/).filter(Boolean);
  const paragraphsHtml = paragraphs.map(p => `<p class="story-paragraph text-[#3B2A1A] dark:text-[#F3EBDD] font-serif text-base sm:text-lg leading-relaxed">${escapeHtml(p)}</p>`).join('\n');
  html = replaceDivContent(html, 'story-body-content', paragraphsHtml);
  html = html.replace(/<h1 id="story-title"[\s\S]*?<\/h1>/i, `<h1 id="story-title">${escapeHtml(cleanTitle)}</h1>`);
  html = html.replace(/<p id="story-summary-text"[\s\S]*?<\/p>/i, `<p id="story-summary-text">${escapeHtml(cleanSummary)}</p>`);

  // 4. Pedagogy: Discuss
  const discussHtml = (story.discussion_questions && story.discussion_questions.length > 0)
    ? `<details class="group rounded-2xl bg-white dark:bg-[#25243E] border border-[#EEDFC8] dark:border-[#383659] p-5 transition-all">
        <summary class="flex items-center justify-between cursor-pointer font-bold text-base text-[#3B2A1A] dark:text-[#F3EBDD] select-none">
          <span class="flex items-center gap-2.5"><span>💬</span> ${lang === 'ta' ? 'சிந்திப்போம் & பேசுவோம்' : 'Think & Talk'}</span>
          <span class="text-xs transition-transform group-open:rotate-180">▼</span>
        </summary>
        <div class="pt-4 space-y-3 text-sm text-[#6B5644] dark:text-[#C8BFAF]">
          ${story.discussion_questions.map(q => `
            <div class="p-3 rounded-xl bg-[#FFF8EC] dark:bg-[#1B1A2E] border border-[#EEDFC8]/60 dark:border-[#383659]/60">
              <span class="text-xs font-bold text-[#D97706] uppercase">${escapeHtml(q.tier || q.type || 'QUESTION')}:</span>
              <p class="mt-0.5 text-[#3B2A1A] dark:text-[#F3EBDD] font-medium">${escapeHtml(q.prompt || q.question || '')}</p>
            </div>
          `).join('')}
        </div>
      </details>`
    : '';
  html = replaceDivContent(html, 'story-discuss-container', discussHtml);

  // 5. Pedagogy: Vocab
  const vocabHtml = (story.vocabulary && story.vocabulary.length > 0)
    ? `<details class="group rounded-2xl bg-white dark:bg-[#25243E] border border-[#EEDFC8] dark:border-[#383659] p-5 transition-all">
        <summary class="flex items-center justify-between cursor-pointer font-bold text-base text-[#3B2A1A] dark:text-[#F3EBDD] select-none">
          <span class="flex items-center gap-2.5"><span>📚</span> ${lang === 'ta' ? 'புதிய சொற்கள்' : 'Vocabulary'}</span>
          <span class="text-xs transition-transform group-open:rotate-180">▼</span>
        </summary>
        <div class="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
          ${story.vocabulary.map(v => `
            <div class="p-3 rounded-xl bg-[#FFF8EC] dark:bg-[#1B1A2E] border border-[#EEDFC8]/60 dark:border-[#383659]/60">
              <strong class="text-[#0F766E] dark:text-[#2DD4BF]">${escapeHtml(v.word || '')}</strong>
              <p class="text-xs text-[#6B5644] dark:text-[#C8BFAF] mt-0.5">${escapeHtml(v.meaning || '')}</p>
            </div>
          `).join('')}
        </div>
      </details>`
    : '';
  html = replaceDivContent(html, 'story-vocab-container', vocabHtml);

  // 6. Pedagogy: Quiz
  const quizTitle = lang === 'ta' ? 'வினாடி வினா' : 'Quick Quiz Challenge';
  const quizCompText = lang === 'ta' ? 'வினாடி வினா முடிந்தது!' : 'Quiz Complete!';
  const classroomText = lang === 'ta' ? 'வகுப்பறைப் பலகையைக் காண்க →' : 'View Classroom Board →';
  const quizHtml = (story.quiz && story.quiz.length > 0)
    ? `<details open class="group rounded-2xl bg-white dark:bg-[#25243E] border border-[#EEDFC8] dark:border-[#383659] p-5 transition-all">
        <summary class="flex items-center justify-between cursor-pointer font-bold text-base text-[#3B2A1A] dark:text-[#F3EBDD] select-none">
          <span class="flex items-center gap-2.5"><span>🎯</span> ${quizTitle}</span>
          <span class="text-xs transition-transform group-open:rotate-180">▼</span>
        </summary>
        <div class="pt-4 space-y-4" id="story-quiz-container" data-total-questions="${story.quiz.length}" data-story-title="${escapeAttr(cleanTitle)}">
          <div id="quiz-completion-banner" class="hidden p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/40 text-emerald-800 dark:text-emerald-200 text-xs font-bold flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="text-lg">🎉</span>
              <span id="quiz-completion-text">${quizCompText}</span>
            </div>
            <a href="/${lang}/classroom/" class="underline text-emerald-700 dark:text-emerald-300">
              ${classroomText}
            </a>
          </div>
          ${story.quiz.map((q, qIdx) => `
            <div class="quiz-question-card p-4 rounded-xl bg-[#FFF8EC] dark:bg-[#1B1A2E] border border-[#EEDFC8]/60 dark:border-[#383659]/60 space-y-3" data-qindex="${qIdx}">
              <p class="text-sm font-bold text-[#3B2A1A] dark:text-[#F3EBDD]">
                ${qIdx + 1}. ${escapeHtml(q.question || '')}
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${(q.options || []).map((opt, optIdx) => `
                  <button
                    type="button"
                    class="quiz-option-btn p-3 rounded-xl border border-[#EEDFC8] dark:border-[#383659] bg-white dark:bg-[#25243E] hover:border-[#D97706] text-xs font-semibold text-start text-[#3B2A1A] dark:text-[#F3EBDD] transition-all flex items-center justify-between min-h-[44px]"
                    data-question-idx="${qIdx}"
                    data-option-idx="${optIdx}"
                    data-is-correct="${optIdx === q.answerIndex ? 'true' : 'false'}"
                    data-correct="${optIdx === q.answerIndex ? 'true' : 'false'}"
                    data-hint="${escapeAttr(q.hint || '')}"
                  >
                    <span>${escapeHtml(opt)}</span>
                    <span class="quiz-feedback-icon hidden"></span>
                  </button>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </details>`
    : '';
  html = replaceDivContent(html, 'story-quiz-container-wrapper', quizHtml);

  // 6b. Related Stories Grid & Sidebar
  const relatedStories = stories.filter(s => s.slug !== slug).slice(0, 4);
  const relatedHtml = relatedStories.map(rel => {
    const rTitle = escapeHtml((rel.title || '').replace(/\s*\[[A-Za-z]{2}\]/g, '').trim());
    const rSummary = escapeHtml((rel.summary || '').trim());
    const rUrl = `/${lang}/${collection}/${rel.slug}/`;
    return `
      <a href="${rUrl}" class="p-4 rounded-2xl bg-white dark:bg-[#25243E] border border-[#EEDFC8] dark:border-[#383659] hover:border-[#D97706] hover:shadow-md transition-all group flex items-start gap-3">
        <span class="text-xl shrink-0" aria-hidden="true">📖</span>
        <div class="space-y-1">
          <h3 class="text-xs sm:text-sm font-bold text-[#3B2A1A] dark:text-[#F3EBDD] group-hover:text-[#D97706] transition-colors line-clamp-1">
            ${rTitle}
          </h3>
          <p class="text-[11px] text-[#6B5644] dark:text-[#C8BFAF] line-clamp-1">
            ${rSummary}
          </p>
        </div>
      </a>`;
  }).join('');
  html = replaceDivContent(html, 'story-related-grid', relatedHtml);

  const sidebarHtml = relatedStories.slice(0, 4).map(rel => {
    const rTitle = escapeHtml((rel.title || '').replace(/\s*\[[A-Za-z]{2}\]/g, '').trim());
    const rUrl = `/${lang}/${collection}/${rel.slug}/`;
    const rTime = escapeHtml(rel.reading_time || '2 min');
    return `
      <a href="${rUrl}" class="p-2.5 rounded-xl bg-[#FFF8EC]/60 dark:bg-[#1B1A2E]/60 border border-[#EEDFC8]/60 dark:border-[#383659]/60 hover:border-[#D97706] transition-all flex items-center gap-2.5 group">
        <span class="text-base shrink-0">📖</span>
        <div class="min-w-0 flex-1">
          <p class="text-xs font-bold text-[#3B2A1A] dark:text-[#F3EBDD] group-hover:text-[#D97706] transition-colors truncate">
            ${rTitle}
          </p>
          <span class="text-[10px] text-[#6B5644] dark:text-[#C8BFAF]">
            ⏱ ${rTime}
          </span>
        </div>
      </a>`;
  }).join('');
  html = replaceDivContent(html, 'story-sidebar-related-list', sidebarHtml);

  // 7. Playlist
  const playlistItems = stories.slice(0, 30).map(s => ({
    id: s.id,
    title: (s.title || '').replace(/\s*\[[A-Za-z]{2}\]/g, '').trim(),
    slug: s.slug,
    collection: s.collection,
    reading_time: s.reading_time || '3m',
    url: `/${lang}/${collection}/${s.slug}/`,
    full_text: s.full_text || s.content || '',
    moral: s.moral || s.moral_reflection || '',
    vocabulary: s.vocabulary || [],
    discussion_questions: s.discussion_questions || []
  }));
  html = html.replace(/<script type="application\/json" id="story-collection-playlist">[\s\S]*?<\/script>/i, `<script type="application/json" id="story-collection-playlist">${JSON.stringify(playlistItems).replace(/<\//g, '<\\/')}</script>`);

  // 8. Share & Favorite Links
  const classShareWhatsapp = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    lang === 'ta'
      ? `📚 வகுப்பறைக் கதை: ${cleanTitle}\nகதையை வாசித்து வினாடி வினாவிற்கு விடையளிக்கவும்:\n${canonicalUrl}`
      : `📚 Classroom Story: ${cleanTitle}\nRead the story and answer the quiz here:\n${canonicalUrl}`
  )}`;
  html = html.replace(/id="share-classroom-whatsapp" href="[^"]*"/i, `id="share-classroom-whatsapp" href="${classShareWhatsapp}"`);
  html = html.replace(/id="share-classroom-btn"([^>]*)data-title="[^"]*" data-url="[^"]*"/i, `id="share-classroom-btn"$1data-title="${escapeAttr(cleanTitle)}" data-url="${canonicalUrl}"`);
  html = html.replace(/id="favourite-story-btn"([^>]*)data-story-id="[^"]*" data-story-title="[^"]*" data-story-url="[^"]*"/i, `id="favourite-story-btn"$1data-story-id="${story.id || slug}" data-story-title="${escapeAttr(cleanTitle)}" data-story-url="${canonicalUrl}"`);
  html = html.replace(/id="copy-link-btn"([^>]*)data-url="[^"]*"/i, `id="copy-link-btn"$1data-url="${canonicalUrl}"`);
  
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    lang === 'ta' ? `${cleanTitle} – தினமும் ஒரு கதையில் வாசியுங்கள்: ${canonicalUrl}` : `${cleanTitle} - Read on Daily Tale: ${canonicalUrl}`
  )}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(cleanTitle)}&url=${encodeURIComponent(canonicalUrl)}`;
  html = html.replace(/id="share-whatsapp-link" href="[^"]*"/i, `id="share-whatsapp-link" href="${whatsappUrl}"`);
  html = html.replace(/id="share-twitter-link" href="[^"]*"/i, `id="share-twitter-link" href="${twitterUrl}"`);

  return html;
}

const shellHtml = fs.readFileSync('dist/en/story/index.html', 'utf8');

// Test Case 1: Akbar-Birbal 75 (The King and the Tiger)
const abStories = JSON.parse(fs.readFileSync('data/en/collections/en_akbar-birbal.json', 'utf8'));
const tigerStory = abStories.find(s => s.slug === 'akbar-birbal-75-the-king-and-the-tiger');

const transformedTiger = simulateEdgeRenderer(shellHtml, tigerStory, abStories, 'en', 'akbar-birbal', 'akbar-birbal-75-the-king-and-the-tiger');

console.log('--- TEST 1: Akbar-Birbal Story 75 (The King and the Tiger) ---');
const canonMatch = transformedTiger.match(/rel="canonical" href="([^"]+)"/)?.[1];
const ogMatch = transformedTiger.match(/property="og:url" content="([^"]+)"/)?.[1];
const sidMatch = transformedTiger.match(/id="story-audio-suite"[^>]*data-story-id="([^"]+)"/)?.[1];

console.log('Canonical URL:', canonMatch);
console.log('OG URL:       ', ogMatch);
console.log('Story ID:     ', sidMatch);

if (canonMatch !== ogMatch) {
  throw new Error(`FAIL: Canonical (${canonMatch}) !== OG URL (${ogMatch})`);
}
if (sidMatch !== 'akbar-birbal-75-the-king-and-the-tiger') {
  throw new Error(`FAIL: Audio suite story ID is ${sidMatch}`);
}

// Check that Fox-and-Grapes vocab does NOT bleed
['trellis', 'luscious'].forEach(w => {
  let pos = 0;
  while ((pos = transformedTiger.indexOf(w, pos)) !== -1) {
    console.error(`Found "${w}" at pos ${pos}:\n...${transformedTiger.slice(Math.max(0, pos - 80), pos + 100)}...\n`);
    pos += w.length;
  }
});
if (transformedTiger.includes('trellis') || transformedTiger.includes('luscious')) {
  throw new Error('FAIL: Fox and Grapes vocabulary bled into Tiger page!');
}
if (transformedTiger.includes('aesops-fables-1-the-fox-and-the-grapes')) {
  throw new Error('FAIL: Fox and Grapes story ID bled into Tiger page!');
}
const tigerVocabMatch = transformedTiger.match(/<div id="story-vocab-container">([\s\S]*?)<\/div>/);
const tigerVocabHtml = tigerVocabMatch ? tigerVocabMatch[1] : '';
if (tigerVocabHtml.includes('disdain') || tigerVocabHtml.includes('trellis') || tigerVocabHtml.includes('luscious')) {
  throw new Error('FAIL: Fox and Grapes vocabulary bled into Tiger vocabulary container!');
}
// Check that Tiger vocab IS present
if (!transformedTiger.includes('bravado') || !transformedTiger.includes('prudence')) {
  throw new Error('FAIL: Tiger vocabulary (bravado, prudence) missing!');
}
// Check that Tiger quiz IS present
if (!transformedTiger.includes('What central dilemma or conflict arises in &quot;The King and the Tiger&quot;?')) {
  throw new Error('FAIL: Tiger quiz question missing!');
}
console.log('✓ Test 1 Passed: Zero data bleed on Akbar-Birbal Tiger story!');

// Test Case 2: Science 1 (Archimedes and the Golden Crown)
const scStories = JSON.parse(fs.readFileSync('data/en/collections/en_science-stories.json', 'utf8'));
const archStory = scStories.find(s => s.slug === 'science-1-archimedes-golden-crown');

const transformedArch = simulateEdgeRenderer(shellHtml, archStory, scStories, 'en', 'science-stories', 'science-1-archimedes-golden-crown');

console.log('\n--- TEST 2: Science Story 1 (Archimedes Golden Crown) ---');
const scCanon = transformedArch.match(/rel="canonical" href="([^"]+)"/)?.[1];
const scOg = transformedArch.match(/property="og:url" content="([^"]+)"/)?.[1];
const scSid = transformedArch.match(/id="story-audio-suite"[^>]*data-story-id="([^"]+)"/)?.[1];

console.log('Canonical URL:', scCanon);
console.log('OG URL:       ', scOg);
console.log('Story ID:     ', scSid);

if (scCanon !== scOg) {
  throw new Error(`FAIL: Canonical (${scCanon}) !== OG URL (${scOg})`);
}
if (scSid !== 'science-1-archimedes-golden-crown') {
  throw new Error(`FAIL: Audio suite story ID is ${scSid}`);
}

// Check that Fox-and-Grapes does NOT bleed
if (transformedArch.includes('trellis') || transformedArch.includes('luscious')) {
  throw new Error('FAIL: Fox and Grapes vocabulary bled into Archimedes page!');
}
if (transformedArch.includes('aesops-fables-1-the-fox-and-the-grapes')) {
  throw new Error('FAIL: Fox and Grapes story ID bled into Archimedes page!');
}
const archVocabMatch = transformedArch.match(/<div id="story-vocab-container">([\s\S]*?)<\/div>/);
const archVocabHtml = archVocabMatch ? archVocabMatch[1] : '';
if (archVocabHtml.includes('disdain') || archVocabHtml.includes('trellis') || archVocabHtml.includes('luscious')) {
  throw new Error('FAIL: Fox and Grapes vocabulary bled into Archimedes vocabulary container!');
}
// Check that Archimedes vocab IS present
if (!transformedArch.includes('density') || !transformedArch.includes('buoyancy') || !transformedArch.includes('displacement')) {
  throw new Error('FAIL: Archimedes vocabulary (density, buoyancy) missing!');
}
// Check that Archimedes quiz IS present
if (!transformedArch.includes('What dilemma puzzled King Hiero II regarding his newly crafted crown?')) {
  throw new Error('FAIL: Archimedes quiz question missing!');
}
console.log('✓ Test 2 Passed: Zero data bleed on Archimedes science story!');

console.log('\n=== ALL TESTS PASSED SUCCESSFULLY! ===\n');
