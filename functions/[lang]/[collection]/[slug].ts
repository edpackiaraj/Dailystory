// Cloudflare Pages Function: High-Speed Edge Story Renderer
// Preserves 100% of canonical URLs, metadata, OpenGraph, JSON-LD, and story content
// Delivers sub-millisecond edge rendering without static file explosion or template bleeding

interface Env {
  ASSETS: {
    fetch: typeof fetch;
  };
}

function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, params, env } = context;
  const lang = (params.lang as string) || 'en';
  const rawCol = (params.collection as string) || '';

  // Canonical collection normalization
  let collection = rawCol.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  if (collection === 'science' || collection === 'science-discovery' || collection === 'science-and-discovery') {
    collection = 'science-stories';
  } else if (collection === 'aesops-fables' || collection === 'aesop-fables' || collection === 'aesop') {
    collection = 'aesop-s-fables';
  } else if (collection === 'witty-debate' || collection === 'debates') {
    collection = 'witty-debates';
  } else if (collection === 'cinderella') {
    collection = 'cinderella-stories';
  } else if (collection === 'grimm' || collection === 'brothers-grimm') {
    collection = 'grimm-fairy-tales';
  } else if (collection === 'andersen') {
    collection = 'hans-christian-andersen';
  } else if (collection === 'mulla' || collection === 'nasruddin') {
    collection = 'mulla-nasruddin';
  }

  const rawSlug = (params.slug as string) || '';
  const slug = rawSlug.replace(/\/$/, '');

  // 1. Fetch collection data from static assets
  const dataUrl = new URL(`/data/collections/${lang}_${collection}.json`, request.url);
  let dataRes = await env.ASSETS.fetch(dataUrl);

  // Fallback to English if translation file is not present
  if (!dataRes.ok && lang !== 'en') {
    const fallbackUrl = new URL(`/data/collections/en_${collection}.json`, request.url);
    dataRes = await env.ASSETS.fetch(fallbackUrl);
  }

  if (!dataRes.ok) {
    return env.ASSETS.fetch(request);
  }

  let stories: any[] = [];
  try {
    stories = await dataRes.json();
  } catch (e) {
    return env.ASSETS.fetch(request);
  }

  const storyIdx = stories.findIndex((s: any) => s.slug === slug || s.slug === rawSlug);
  if (storyIdx === -1) {
    return env.ASSETS.fetch(request);
  }
  const story = stories[storyIdx];

  // 2. Fetch language Story Reader shell
  const shellUrl = new URL(`/${lang}/story/`, request.url);
  const shellRes = await env.ASSETS.fetch(shellUrl);

  if (!shellRes.ok) {
    return env.ASSETS.fetch(request);
  }

  // 3. Prepare SEO & Content fields
  const cleanTitle = (story.title || '').replace(/\s*\[[A-Za-z]{2}\]/g, '').trim();
  const cleanSummary = (story.summary || '').trim();
  const cleanMoral = (story.moral || story.moral_reflection || '').trim();
  const canonicalUrl = `https://dailystory.pages.dev/${lang}/${collection}/${slug}/`;

  // Prepare Collection Visual & Authentic Hero Thumbnail
  const colNorm = (collection || story.collection || '').toLowerCase();
  let heroIcon = '📖 ✨ 🌍';
  let heroBadgeText = story.collection || '';
  let defaultHeroImg = '/images/stories/default.jpg';

  if (colNorm.includes('witty') || colNorm.includes('debate') || colNorm.includes('விவாதம்') || colNorm.includes('தலைவர்')) {
    heroIcon = '🎙️ ⚖️ 🏛️ 📜';
    heroBadgeText = lang === 'ta' ? 'விசித்திர விவாதங்கள்' : (lang === 'hi' ? 'विश्व नेताओं के रोचक संवाद' : 'Witty Debates');
    defaultHeroImg = '/images/stories/witty-debates.webp';
  } else if (colNorm.includes('science') || colNorm.includes('அறிவியல்') || colNorm.includes('discovery')) {
    heroIcon = '🔬 ⚡ 🌌 🧪';
    heroBadgeText = lang === 'ta' ? '200 அறிவியல் கண்டுபிடிப்புக் கதைகள்' : (lang === 'hi' ? '200 प्रामाणिक विज्ञान कहानियाँ' : '200 Science Stories');
    defaultHeroImg = '/images/stories/science-stories.webp';
  } else if (colNorm.includes('panchatantra') || colNorm.includes('பஞ்சதந்திர')) {
    heroIcon = '🦁 🐘 🦊 📜';
    heroBadgeText = lang === 'ta' ? 'பஞ்சதந்திரக் கதைகள்' : 'Panchatantra';
    defaultHeroImg = '/images/stories/panchatantra.webp';
  } else if (colNorm.includes('tenali') || colNorm.includes('தெனாலிராமன்')) {
    heroIcon = '👳‍♂️ 🪷 👑 ✨';
    heroBadgeText = lang === 'ta' ? 'தெனாலிராமன் கதைகள்' : 'Tenali Rama';
    defaultHeroImg = '/images/stories/tenali-rama.webp';
  } else if (colNorm.includes('akbar') || colNorm.includes('birbal') || colNorm.includes('அக்பர்')) {
    heroIcon = '👑 🏛️ 💎 📜';
    heroBadgeText = lang === 'ta' ? 'அக்பர்–பீர்பால் கதைகள்' : 'Akbar–Birbal';
    defaultHeroImg = '/images/stories/akbar-birbal.webp';
  } else if (colNorm.includes('vikram') || colNorm.includes('விக்கிரமாதித்தன்')) {
    heroIcon = '🗡️ 🌲 🌕 🦉';
    heroBadgeText = lang === 'ta' ? 'விக்கிரமாதித்தன்–வேதாளம் கதைகள்' : 'Vikram–Vetal';
    defaultHeroImg = '/images/stories/vikram-vetal.webp';
  } else if (colNorm.includes('paramartha') || colNorm.includes('பரமார்த்த')) {
    heroIcon = '🌴 🥥 📜 🐂';
    heroBadgeText = lang === 'ta' ? 'பரமார்த்த குரு கதைகள்' : 'Paramartha Guru';
    defaultHeroImg = '/images/stories/paramartha-guru.webp';
  } else if (colNorm.includes('aesop') || colNorm.includes('ஈசாப்')) {
    heroIcon = '🏛️ 🦊 🍇 🦉';
    heroBadgeText = lang === 'ta' ? 'ஈசாப் உலக நீதிக்கதைகள்' : "Aesop's Fables";
    defaultHeroImg = '/images/stories/aesop.webp';
  } else if (colNorm.includes('mulla') || colNorm.includes('nasruddin') || colNorm.includes('முல்லா')) {
    heroIcon = '🫏 👳 🌻 📜';
    heroBadgeText = lang === 'ta' ? 'முல்லா நஸ்ருதீன் கதைகள்' : 'Mulla Nasruddin';
    defaultHeroImg = '/images/stories/nasruddin.webp';
  } else if (colNorm.includes('arabian') || colNorm.includes('ஆயிரத்தொரு') || colNorm.includes('அரேபிய')) {
    heroIcon = '🌙 🕌 ⭐ 🧞';
    heroBadgeText = lang === 'ta' ? 'ஆயிரத்தொரு இரவுகள்' : '1001 Arabian Nights';
    defaultHeroImg = '/images/stories/arabian-nights.webp';
  }

  const isMoralCollection = colNorm.includes('aesop') || colNorm.includes('panchatantra') || colNorm.includes('jataka') || colNorm.includes('paramartha');
  const storySuffix = isMoralCollection ? 'Story with Moral' : 'Story';
  const taSuffix = isMoralCollection ? 'நீதிக்கதை' : 'கதை';
  const seoTitle = lang === 'ta'
    ? `${cleanTitle}: ${heroBadgeText} ${taSuffix} | Daily Tale`
    : (lang === 'hi'
        ? `${cleanTitle}: ${heroBadgeText} | Daily Tale`
        : `${cleanTitle}: ${heroBadgeText} ${storySuffix} | Daily Tale`);

  const ogImage = story.image || defaultHeroImg;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `https://dailystory.pages.dev${ogImage}`;

  const storySource = (story.source_book || story.source || '').trim();
  const storyAuthor = (story.source_author || story.author || '').trim();
  const storyYear = (story.source_year || '').trim();
  const storyChapter = (story.source_chapter || '').trim();
  const storyAuthNote = (story.authenticity_note || '').trim();
  const hasSource = Boolean(storySource);

  // Provenance-tier-aware source badge label
  const provenanceTier = ((story.provenance_tier as string) || '').toLowerCase();
  const provenanceLabel =
    provenanceTier === 'documented' || provenanceTier === 'documented_ancient'
      ? (lang === 'ta' ? 'ஆதாரம் உள்ளது' : 'Source Documented')
      : provenanceTier === 'attributed'
      ? (lang === 'ta' ? 'மரபு வழி கதை' : 'Attributed Tradition')
      : provenanceTier === 'traditional'
      ? (lang === 'ta' ? 'மரபு வழிக் கதை' : 'Traditional Account')
      : hasSource
      ? (lang === 'ta' ? 'ஆதாரம் உள்ளது' : 'Source Cited')
      : (lang === 'ta' ? 'ஆசிரியர் தொகுப்பு' : 'Editorial Retelling');

  // Audience category: accurately distinguish kids vs teens (never map "Below 13" to teens)
  const ageGroup = (story.age_group || story.audience || '').toLowerCase();
  let audienceLabel = lang === 'ta' ? 'அனைவருக்கும்' : (lang === 'hi' ? 'सभी के लिए' : 'Everyone');
  if (
    ageGroup.includes('below 13') ||
    ageGroup.includes('kid') ||
    ageGroup.includes('child') ||
    colNorm.includes('aesop') ||
    colNorm.includes('panchatantra') ||
    colNorm.includes('jataka') ||
    colNorm.includes('cinderella')
  ) {
    audienceLabel = lang === 'ta' ? 'சிறுவர்கள்' : (lang === 'hi' ? 'बच्चे' : 'Kids');
  } else if (
    ageGroup.includes('teen') ||
    ageGroup.includes('13+') ||
    ageGroup.includes('young adult') ||
    colNorm.includes('witty') ||
    colNorm.includes('debate') ||
    colNorm.includes('vikram')
  ) {
    audienceLabel = lang === 'ta' ? 'இளைஞர்கள்' : (lang === 'hi' ? 'किशोर' : 'Teens');
  }

  // Reading time
  const readingTimeRaw = story.reading_time || '4 min';
  const localizedReadingTime = lang === 'ta'
    ? String(readingTimeRaw).replace('min', 'நிமிடம்').replace('m', ' நிமிடம்')
    : readingTimeRaw;

  // Culture / Region
  const cultureRaw = story.culture_region || '';
  let localizedCulture = cultureRaw;
  if (lang === 'ta' && cultureRaw) {
    const cultureRegionsMap: Record<string, string> = {
      "India": "பாரதப் பாரம்பரியம்",
      "Ancient India": "பண்டைய பாரதம்",
      "Greece": "பண்டைய கிரேக்கம்",
      "Ancient Greece": "பண்டைய கிரேக்கம்",
      "Middle East": "மத்திய கிழக்கு",
      "Germany": "ஜெர்மன் நாட்டார் மரபு",
      "Denmark": "டென்மார்க் இலக்கியம்",
      "France": "பிரெஞ்சுப் பாரம்பரியம்",
      "Arabia": "அரேபியப் பாரம்பரியம்",
      "Global": "உலக நாட்டார் கதைகள்"
    };
    localizedCulture = cultureRegionsMap[cultureRaw] || cultureRaw;
  }

  const classShareWhatsapp = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    lang === 'ta'
      ? `📚 வகுப்பறைக் கதை: ${cleanTitle}\nகதையை வாசித்து வினாடி வினாவிற்கு விடையளிக்கவும்:\n${canonicalUrl}`
      : `📚 Classroom Story: ${cleanTitle}\nRead the story and answer the quiz here:\n${canonicalUrl}`
  )}`;

  const storyBody = (story.full_text || story.content || '').trim();
  const paragraphsHtml = storyBody
    .split(/\n\n+/)
    .map((p: string) => `<p class="leading-[1.75] tracking-normal mb-6">${escapeHtml(p)}</p>`)
    .join('');

  // Pagination & Related Stories
  const prevStory = storyIdx > 0 ? stories[storyIdx - 1] : null;
  const nextStory = storyIdx < stories.length - 1 ? stories[storyIdx + 1] : null;
  const relatedStories = stories.filter((s: any) => s.slug !== slug && s.slug !== rawSlug).slice(0, 4);

  const prevUrl = prevStory ? `/${lang}/${collection}/${prevStory.slug}/` : `/${lang}/collections/${collection}/`;
  const nextUrl = nextStory ? `/${lang}/${collection}/${nextStory.slug}/` : `/${lang}/collections/${collection}/`;
  const prevTitle = prevStory ? (prevStory.title || '').replace(/\s*\[[A-Za-z]{2}\]/g, '').trim() : heroBadgeText;
  const nextTitle = nextStory ? (nextStory.title || '').replace(/\s*\[[A-Za-z]{2}\]/g, '').trim() : heroBadgeText;

  const whatsappText = lang === 'ta'
    ? `${cleanTitle} – தினம் ஒரு கதையில் வாசியுங்கள்: ${canonicalUrl}`
    : `${cleanTitle} - Read on Daily Tale: ${canonicalUrl}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappText)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(cleanTitle)}&url=${encodeURIComponent(canonicalUrl)}`;

  // Related Stories HTML (Bottom Section)
  const relatedHtml = relatedStories.map((rel: any) => {
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

  // Sidebar Related Stories HTML
  const sidebarHtml = relatedStories.slice(0, 4).map((rel: any) => {
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

  // Story-Specific Pedagogy HTML (Prevents template bleeding between stories)
  const discussHtml = (story.discussion_questions && story.discussion_questions.length > 0)
    ? `<details class="group rounded-2xl bg-white dark:bg-[#25243E] border border-[#EEDFC8] dark:border-[#383659] p-5 transition-all">
        <summary class="flex items-center justify-between cursor-pointer font-bold text-base text-[#3B2A1A] dark:text-[#F3EBDD] select-none">
          <span class="flex items-center gap-2.5">
            <span>💬</span> ${lang === 'ta' ? 'சிந்திப்போம் & பேசுவோம்' : 'Think & Talk'}
          </span>
          <span class="text-xs transition-transform group-open:rotate-180">▼</span>
        </summary>
        <div class="pt-4 space-y-3 text-sm text-[#6B5644] dark:text-[#C8BFAF]">
          ${story.discussion_questions.map((q: any) => `
            <div class="p-3 rounded-xl bg-[#FFF8EC] dark:bg-[#1B1A2E] border border-[#EEDFC8]/60 dark:border-[#383659]/60">
              <span class="text-xs font-bold text-[#D97706] uppercase">${escapeHtml(q.tier || q.type || 'QUESTION')}:</span>
              <p class="mt-0.5 text-[#3B2A1A] dark:text-[#F3EBDD] font-medium">${escapeHtml(q.prompt || q.question || '')}</p>
            </div>
          `).join('')}
        </div>
      </details>`
    : '';

  const vocabHtml = (story.vocabulary && story.vocabulary.length > 0)
    ? `<details class="group rounded-2xl bg-white dark:bg-[#25243E] border border-[#EEDFC8] dark:border-[#383659] p-5 transition-all">
        <summary class="flex items-center justify-between cursor-pointer font-bold text-base text-[#3B2A1A] dark:text-[#F3EBDD] select-none">
          <span class="flex items-center gap-2.5">
            <span>📚</span> ${lang === 'ta' ? 'புதிய சொற்கள்' : 'Vocabulary'}
          </span>
          <span class="text-xs transition-transform group-open:rotate-180">▼</span>
        </summary>
        <div class="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
          ${story.vocabulary.map((v: any) => `
            <div class="p-3 rounded-xl bg-[#FFF8EC] dark:bg-[#1B1A2E] border border-[#EEDFC8]/60 dark:border-[#383659]/60">
              <strong class="text-[#0F766E] dark:text-[#2DD4BF]">${escapeHtml(v.word || '')}</strong>
              <p class="text-xs text-[#6B5644] dark:text-[#C8BFAF] mt-0.5">${escapeHtml(v.meaning || '')}</p>
            </div>
          `).join('')}
        </div>
      </details>`
    : '';

  const quizTitle = lang === 'ta' ? 'வினாடி வினா' : 'Quick Quiz Challenge';
  const quizCompText = lang === 'ta' ? 'வினாடி வினா முடிந்தது!' : 'Quiz Complete!';
  const classroomText = lang === 'ta' ? 'வகுப்பறைப் பலகையைக் காண்க →' : 'View Classroom Board →';
  const quizHtml = (story.quiz && story.quiz.length > 0)
    ? `<details open class="group rounded-2xl bg-white dark:bg-[#25243E] border border-[#EEDFC8] dark:border-[#383659] p-5 transition-all">
        <summary class="flex items-center justify-between cursor-pointer font-bold text-base text-[#3B2A1A] dark:text-[#F3EBDD] select-none">
          <span class="flex items-center gap-2.5">
            <span>🎯</span> ${quizTitle}
          </span>
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
          ${story.quiz.map((q: any, qIdx: number) => `
            <div class="quiz-question-card p-4 rounded-xl bg-[#FFF8EC] dark:bg-[#1B1A2E] border border-[#EEDFC8]/60 dark:border-[#383659]/60 space-y-3" data-qindex="${qIdx}">
              <p class="text-sm font-bold text-[#3B2A1A] dark:text-[#F3EBDD]">
                ${qIdx + 1}. ${escapeHtml(q.question || '')}
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${(q.options || []).map((opt: string, optIdx: number) => `
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

  // Collection Playlist (Embed up to 30 stories from the active collection)
  const playlistItems = stories.slice(0, 30).map((s: any) => ({
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

  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `https://dailystory.pages.dev/${lang}/`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": story.collection,
          "item": `https://dailystory.pages.dev/${lang}/collections/${collection}/`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": cleanTitle,
          "item": canonicalUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": cleanTitle,
      "description": cleanSummary,
      "image": fullOgImage,
      "inLanguage": lang,
      "genre": story.genre || "Folk Tale",
      "articleSection": heroBadgeText,
      "wordCount": story.word_count || 450,
      "datePublished": story.publish_date || "2026-03-25T00:00:00Z",
      "dateModified": new Date().toISOString().split('T')[0] + "T00:00:00Z",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      },
      "author": {
        "@type": "Person",
        "name": storyAuthor || "Daily Tale Editorial Team",
        "url": `https://dailystory.pages.dev/${lang}/about/`
      },
      "publisher": {
        "@type": "Organization",
        "name": "Daily Tale",
        "logo": {
          "@type": "ImageObject",
          "url": "https://dailystory.pages.dev/favicon.svg"
        }
      },
      "teaches": cleanMoral
    }
  ];

  const effectiveHeroImg = story.image || defaultHeroImg;
  let jsonLdInjected = false;

  // 4. Inject metadata & content into HTML using Cloudflare's streaming HTMLRewriter
  const rewriter = new HTMLRewriter()
    .on('title', {
      element(el) {
        el.setInnerContent(seoTitle);
      }
    })
    .on('meta[name="description"]', {
      element(el) {
        el.setAttribute('content', cleanSummary);
      }
    })
    .on('meta[name="author"]', {
      element(el) {
        el.setAttribute('content', storyAuthor || (lang === 'ta' ? 'Daily Tale பதிப்பகம்' : 'Daily Tale Editorial Team'));
      }
    })
    .on('link[rel="canonical"]', {
      element(el) {
        el.setAttribute('href', canonicalUrl);
      }
    })
    // Canonical Multilingual hreflang update (replaces placeholder /story/ links)
    .on('link[rel="alternate"][hreflang]', {
      element(el) {
        const hLang = el.getAttribute('hreflang');
        if (hLang === 'x-default') {
          el.setAttribute('href', `https://dailystory.pages.dev/en/${collection}/${slug}/`);
        } else if (hLang) {
          el.setAttribute('href', `https://dailystory.pages.dev/${hLang}/${collection}/${slug}/`);
        }
      }
    })
    .on('meta[property="og:title"]', {
      element(el) {
        el.setAttribute('content', cleanTitle);
      }
    })
    .on('meta[property="og:description"]', {
      element(el) {
        el.setAttribute('content', cleanSummary);
      }
    })
    .on('meta[property="og:url"]', {
      element(el) {
        // Critical: Set content attribute (not href) so social cards and crawlers get accurate URL
        el.setAttribute('content', canonicalUrl);
      }
    })
    .on('meta[property="og:image"]', {
      element(el) {
        el.setAttribute('content', fullOgImage);
      }
    })
    .on('meta[name="twitter:title"]', {
      element(el) {
        el.setAttribute('content', cleanTitle);
      }
    })
    .on('meta[name="twitter:description"]', {
      element(el) {
        el.setAttribute('content', cleanSummary);
      }
    })
    .on('meta[name="twitter:image"]', {
      element(el) {
        el.setAttribute('content', fullOgImage);
      }
    })
    // Ensure clean JSON-LD without 4x duplication
    .on('script[type="application/ld+json"]', {
      element(el) {
        if (!jsonLdInjected) {
          jsonLdInjected = true;
          el.setInnerContent(JSON.stringify(jsonLdData));
        } else {
          el.remove();
        }
      }
    })
    .on('#initial-story-payload', {
      element(el) {
        el.setInnerContent(JSON.stringify(story).replace(/<\//g, '<\\/'));
      }
    })
    .on('#story-crumb-col-link', {
      element(el) {
        el.setAttribute('href', `/${lang}/collections/${collection}/`);
      }
    })
    .on('#story-crumb-col-name', {
      element(el) {
        el.setInnerContent(heroBadgeText);
      }
    })
    .on('#story-crumb-title', {
      element(el) {
        el.setInnerContent(cleanTitle);
      }
    })
    .on('#story-badge-col', {
      element(el) {
        el.setInnerContent(heroBadgeText);
      }
    })
    .on('#story-badge-audience', {
      element(el) {
        el.setInnerContent(audienceLabel);
      }
    })
    .on('#story-reading-time', {
      element(el) {
        el.setInnerContent(`⏱ ${localizedReadingTime}`);
      }
    })
    .on('#story-culture-region', {
      element(el) {
        if (!localizedCulture) {
          el.setAttribute('class', 'hidden');
        } else {
          el.setAttribute('class', 'text-[#6B5644] dark:text-[#C8BFAF]');
          el.setInnerContent(`• ${localizedCulture}`);
        }
      }
    })
    .on('#story-hero-image', {
      element(el) {
        el.setAttribute('src', effectiveHeroImg);
        el.setAttribute('alt', cleanTitle);
      }
    })
    .on('#story-hero-badge-icon', {
      element(el) {
        el.setInnerContent(heroIcon);
      }
    })
    .on('#story-hero-badge-text', {
      element(el) {
        el.setInnerContent(heroBadgeText);
      }
    })
    .on('#story-main-title', {
      element(el) {
        el.setInnerContent(cleanTitle);
      }
    })
    .on('#story-summary-text', {
      element(el) {
        el.setInnerContent(cleanSummary);
      }
    })
    .on('#story-body-content', {
      element(el) {
        el.setInnerContent(paragraphsHtml, { html: true });
      }
    })
    .on('#story-moral-card', {
      element(el) {
        if (!cleanMoral) {
          el.setAttribute('class', 'hidden');
        } else {
          el.setAttribute('class', 'p-6 rounded-3xl bg-[#D97706]/10 dark:bg-[#D97706]/20 border-2 border-[#D97706]/40 shadow-xs space-y-2');
        }
      }
    })
    .on('#story-moral-text', {
      element(el) {
        el.setInnerContent(cleanMoral);
      }
    })
    .on('#story-source-book-card', {
      element(el) {
        if (!hasSource) {
          el.setAttribute('class', 'hidden');
        } else {
          el.setAttribute('class', 'p-6 rounded-3xl bg-linear-to-br from-cyan-900/10 via-teal-900/10 to-slate-900/10 dark:from-cyan-950/40 dark:via-teal-950/30 dark:to-[#1B1A2E] border-2 border-cyan-600/30 dark:border-cyan-500/40 shadow-xs space-y-3');
        }
      }
    })
    .on('#story-provenance-badge', {
      element(el) {
        el.setInnerContent(provenanceLabel);
      }
    })
    .on('#story-source-book-title', {
      element(el) {
        el.setInnerContent(storySource);
      }
    })
    .on('#story-source-book-meta', {
      element(el) {
        if (!storyAuthor && !storyYear && !storyChapter) {
          el.setAttribute('class', 'hidden');
        } else {
          el.setAttribute('class', 'flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#6B5644] dark:text-[#C8BFAF]');
        }
      }
    })
    .on('#story-source-book-author-wrap', {
      element(el) {
        if (!storyAuthor) {
          el.setAttribute('class', 'hidden');
        } else {
          el.setAttribute('class', '');
        }
      }
    })
    .on('#story-source-book-author', {
      element(el) {
        el.setInnerContent(storyAuthor);
      }
    })
    .on('#story-source-book-year-wrap', {
      element(el) {
        if (!storyYear) {
          el.setAttribute('class', 'hidden');
        } else {
          el.setAttribute('class', '');
        }
      }
    })
    .on('#story-source-book-year', {
      element(el) {
        el.setInnerContent(storyYear);
      }
    })
    .on('#story-source-book-chapter-wrap', {
      element(el) {
        if (!storyChapter) {
          el.setAttribute('class', 'hidden');
        } else {
          el.setAttribute('class', '');
        }
      }
    })
    .on('#story-source-book-chapter', {
      element(el) {
        el.setInnerContent(storyChapter);
      }
    })
    .on('#story-source-auth-note', {
      element(el) {
        if (!storyAuthNote) {
          el.setAttribute('class', 'hidden');
        } else {
          el.setAttribute('class', 'text-xs text-[#6B5644] dark:text-[#C8BFAF] leading-relaxed pt-1 border-t border-cyan-700/10 dark:border-cyan-400/10');
        }
      }
    })
    .on('#story-source-auth-note-text', {
      element(el) {
        el.setInnerContent(storyAuthNote);
      }
    })
    .on('#companion-source-book-card', {
      element(el) {
        if (!hasSource) {
          el.setAttribute('class', 'hidden');
        } else {
          el.setAttribute('class', 'p-5 rounded-3xl bg-linear-to-br from-cyan-950/10 via-teal-950/10 to-transparent dark:bg-[#25243E] border border-cyan-600/30 dark:border-cyan-500/40 shadow-xs space-y-2.5');
        }
      }
    })
    .on('#companion-source-year', {
      element(el) {
        el.setInnerContent(storyYear || (hasSource ? 'Chronicle' : 'Folklore'));
      }
    })
    .on('#companion-source-title', {
      element(el) {
        el.setInnerContent(storySource);
      }
    })
    .on('#companion-source-author-wrap', {
      element(el) {
        if (!storyAuthor) {
          el.setAttribute('class', 'hidden');
        } else {
          el.setAttribute('class', 'text-[11px] text-[#6B5644] dark:text-[#C8BFAF]');
        }
      }
    })
    .on('#companion-source-author', {
      element(el) {
        el.setInnerContent(storyAuthor);
      }
    })
    // Story Audio Suite attributes (fixes data-story-id bleed)
    .on('#story-audio-suite', {
      element(el) {
        el.setAttribute('data-story-id', String(story.id || slug));
        el.setAttribute('data-story-title', cleanTitle);
        el.setAttribute('data-collection', story.collection || collection);
      }
    })
    // Collection Playlist (Embeds actual collection playlist, fixes Aesop bedtime bleed)
    .on('#story-collection-playlist', {
      element(el) {
        el.setInnerContent(JSON.stringify(playlistItems).replace(/<\//g, '<\\/'));
      }
    })
    .on('#story-nav-prev-link', {
      element(el) {
        el.setAttribute('href', prevUrl);
      }
    })
    .on('#story-nav-prev-title', {
      element(el) {
        el.setInnerContent(prevTitle);
      }
    })
    .on('#story-nav-next-link', {
      element(el) {
        el.setAttribute('href', nextUrl);
      }
    })
    .on('#story-nav-next-title', {
      element(el) {
        el.setInnerContent(nextTitle);
      }
    })
    .on('#mobile-nav-prev-link', {
      element(el) {
        el.setAttribute('href', prevUrl);
      }
    })
    .on('#mobile-nav-next-link', {
      element(el) {
        el.setAttribute('href', nextUrl);
      }
    })
    .on('#share-whatsapp-link', {
      element(el) {
        el.setAttribute('href', whatsappUrl);
      }
    })
    .on('#share-twitter-link', {
      element(el) {
        el.setAttribute('href', twitterUrl);
      }
    })
    .on('#copy-link-btn', {
      element(el) {
        el.setAttribute('data-url', canonicalUrl);
      }
    })
    .on('#favourite-story-btn', {
      element(el) {
        el.setAttribute('data-story-id', String(story.id || slug));
        el.setAttribute('data-story-title', cleanTitle);
        el.setAttribute('data-story-url', canonicalUrl);
      }
    })
    .on('#share-classroom-btn', {
      element(el) {
        el.setAttribute('data-title', cleanTitle);
        el.setAttribute('data-url', canonicalUrl);
      }
    })
    .on('#share-classroom-whatsapp', {
      element(el) {
        el.setAttribute('href', classShareWhatsapp);
      }
    })
    // School / Classroom Pedagogy Suite: Injects story-specific content
    .on('#story-pedagogy-container', {
      element(el) {
        const hasPed = Boolean(
          (story.quiz && story.quiz.length > 0) ||
          (story.vocabulary && story.vocabulary.length > 0) ||
          (story.discussion_questions && story.discussion_questions.length > 0)
        );
        if (!hasPed) {
          el.setAttribute('class', 'hidden');
        } else {
          el.setAttribute('class', 'pedagogy-learning-suite space-y-6 pt-4');
        }
      }
    })
    .on('#story-vocab-container', {
      element(el) {
        el.setInnerContent(vocabHtml, { html: true });
      }
    })
    .on('#story-discuss-container', {
      element(el) {
        el.setInnerContent(discussHtml, { html: true });
      }
    })
    .on('#story-quiz-container-wrapper', {
      element(el) {
        el.setInnerContent(quizHtml, { html: true });
      }
    })
    // Sidebar Related Stories (fixes Aesop links bleed in sidebar)
    .on('#story-sidebar-related-col', {
      element(el) {
        el.setInnerContent(heroBadgeText);
      }
    })
    .on('#story-sidebar-related-all-link', {
      element(el) {
        el.setAttribute('href', `/${lang}/collections/${collection}/`);
      }
    })
    .on('#story-sidebar-related-list', {
      element(el) {
        if (sidebarHtml) {
          el.setInnerContent(sidebarHtml, { html: true });
        }
      }
    })
    // Bottom Related Stories Strip
    .on('#story-related-stories-container', {
      element(el) {
        if (relatedHtml) {
          el.setInnerContent(relatedHtml, { html: true });
        }
      }
    })
    .on('#story-related-heading', {
      element(el) {
        const text = lang === 'ta' ? `மேலும் ${heroBadgeText}:` : `More Stories from ${heroBadgeText}:`;
        el.setInnerContent(text);
      }
    })
    .on('#story-related-all-link', {
      element(el) {
        el.setAttribute('href', `/${lang}/collections/${collection}/`);
      }
    });

  const response = rewriter.transform(shellRes);
  const headers = new Headers(response.headers);
  headers.set('Cache-Control', 'public, max-age=604800, s-maxage=604800, stale-while-revalidate=86400');
  headers.set('Content-Type', 'text/html; charset=utf-8');

  return new Response(response.body, {
    status: 200,
    headers
  });
};
