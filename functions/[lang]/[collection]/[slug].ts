// Cloudflare Pages Function: High-Speed Edge Story Renderer
// Preserves 100% of canonical URLs, metadata, OpenGraph, JSON-LD, and story content
// Delivers sub-millisecond edge rendering without static file explosion

interface Env {
  ASSETS: {
    fetch: typeof fetch;
  };
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, params, env } = context;
  const lang = (params.lang as string) || 'en';
  const rawCol = (params.collection as string) || '';
  const collection = (rawCol === 'science-discovery' || rawCol === 'science-and-discovery') ? 'science-stories' : rawCol;
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

  const seoTitle = lang === 'ta'
    ? `${cleanTitle}: ${heroBadgeText} நீதிக்கதை | Daily Tale`
    : (lang === 'hi'
        ? `${cleanTitle}: ${heroBadgeText} | Daily Tale`
        : `${cleanTitle}: ${heroBadgeText} Story with Moral | Daily Tale`);

  const ogImage = story.image || defaultHeroImg;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `https://dailystory.pages.dev${ogImage}`;

  const storySource = (story.source_book || story.source || '').trim();
  const storyAuthor = (story.source_author || story.author || '').trim();
  const storyYear = (story.source_year || '').trim();
  const storyChapter = (story.source_chapter || '').trim();
  const storyAuthNote = (story.authenticity_note || '').trim();
  const hasSource = Boolean(storySource);

  // Audience category
  const ageGroup = (story.age_group || story.audience || '').toLowerCase();
  let audienceLabel = lang === 'ta' ? 'அனைவருக்கும்' : 'Everyone';
  if (colNorm.includes('witty') || colNorm.includes('debate') || colNorm.includes('vikram') || ageGroup.includes('teen') || ageGroup.includes('12') || ageGroup.includes('13')) {
    audienceLabel = lang === 'ta' ? 'இளைஞர்கள்' : (lang === 'hi' ? 'किशोर' : 'Teens');
  } else if (colNorm.includes('aesop') || colNorm.includes('panchatantra') || colNorm.includes('jataka') || colNorm.includes('cinderella') || ageGroup.includes('kid')) {
    audienceLabel = lang === 'ta' ? 'சிறுவர்கள்' : (lang === 'hi' ? 'बच्चे' : 'Kids');
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
    .map((p: string) => `<p class="leading-[1.75] tracking-normal mb-6">${p}</p>`)
    .join('');

  // Pagination & Related Stories
  const prevStory = storyIdx > 0 ? stories[storyIdx - 1] : null;
  const nextStory = storyIdx < stories.length - 1 ? stories[storyIdx + 1] : null;
  const relatedStories = stories.filter((s: any) => s.slug !== slug && s.slug !== rawSlug).slice(0, 4);

  const prevUrl = prevStory ? `/${lang}/${collection}/${prevStory.slug}/` : `/${lang}/collections/${collection}/`;
  const nextUrl = nextStory ? `/${lang}/${collection}/${nextStory.slug}/` : `/${lang}/collections/${collection}/`;
  const prevTitle = prevStory ? (prevStory.title || '').replace(/\s*\[[A-Za-z]{2}\]/g, '').trim() : story.collection;
  const nextTitle = nextStory ? (nextStory.title || '').replace(/\s*\[[A-Za-z]{2}\]/g, '').trim() : story.collection;

  const whatsappText = lang === 'ta'
    ? `${cleanTitle} – தினம் ஒரு கதையில் வாசியுங்கள்: ${canonicalUrl}`
    : `${cleanTitle} - Read on Daily Tale: ${canonicalUrl}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappText)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(cleanTitle)}&url=${encodeURIComponent(canonicalUrl)}`;

  const relatedHtml = relatedStories.map((rel: any) => {
    const rTitle = (rel.title || '').replace(/\s*\[[A-Za-z]{2}\]/g, '').trim();
    const rSummary = (rel.summary || '').trim();
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
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      },
      "author": {
        "@type": "Person",
        "name": "Dr. Edward Packiaraj",
        "jobTitle": "Chief Editor & Educational Researcher",
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

  // 4. Inject metadata & content into HTML using Cloudflare's C++ streaming HTMLRewriter
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
        el.setAttribute('href', canonicalUrl);
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
    .on('script[type="application/ld+json"]', {
      element(el) {
        el.setInnerContent(JSON.stringify(jsonLdData));
      }
    })
    .on('#initial-story-payload', {
      element(el) {
        el.setInnerContent(JSON.stringify(story));
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
        el.setInnerContent(storyYear || 'Verified');
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
    .on('#story-pedagogy-container', {
      element(el) {
        const hasPed = (story.quiz && story.quiz.length > 0) || (story.vocabulary && story.vocabulary.length > 0) || (story.discussion_questions && story.discussion_questions.length > 0);
        if (!hasPed) {
          el.setAttribute('class', 'hidden');
        } else {
          el.setAttribute('class', 'pedagogy-learning-suite space-y-6 pt-4');
        }
      }
    })
    .on('#story-vocab-container', {
      element(el) {
        if (!story.vocabulary || story.vocabulary.length === 0) {
          el.setInnerContent('');
        }
      }
    })
    .on('#story-discuss-container', {
      element(el) {
        if (!story.discussion_questions || story.discussion_questions.length === 0) {
          el.setInnerContent('');
        }
      }
    })
    .on('#story-quiz-container-wrapper', {
      element(el) {
        if (!story.quiz || story.quiz.length === 0) {
          el.setInnerContent('');
        }
      }
    })
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
    })
    .on('#story-app-container', {
      element(el) {
        el.append(`<script id="initial-story-payload" type="application/json">${JSON.stringify(story).replace(/<\//g, '<\\/')}</script>`, { html: true });
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
