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
  const collection = (params.collection as string) || '';
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
  const cleanMoral = (story.moral || '').trim();
  const canonicalUrl = `https://dailystory.pages.dev/${lang}/${collection}/${slug}/`;
  const seoTitle = lang === 'ta'
    ? `${cleanTitle}: ${story.collection} நீதிக்கதை | Daily Tale`
    : (lang === 'hi'
        ? `${cleanTitle}: ${story.collection} | Daily Tale`
        : `${cleanTitle}: ${story.collection} Story with Moral | Daily Tale`);

  const ogImage = story.image || '/images/stories/default.jpg';
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `https://dailystory.pages.dev${ogImage}`;

  const paragraphsHtml = (story.full_text || '')
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
      "articleSection": story.collection,
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
    .on('#story-crumb-col-link', {
      element(el) {
        el.setAttribute('href', `/${lang}/collections/${collection}/`);
      }
    })
    .on('#story-crumb-col-name', {
      element(el) {
        el.setInnerContent(story.collection);
      }
    })
    .on('#story-crumb-title', {
      element(el) {
        el.setInnerContent(cleanTitle);
      }
    })
    .on('#story-badge-col', {
      element(el) {
        el.setInnerContent(story.collection);
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
    .on('#story-related-stories-container', {
      element(el) {
        if (relatedHtml) {
          el.setInnerContent(relatedHtml, { html: true });
        }
      }
    })
    .on('#story-related-heading', {
      element(el) {
        const text = lang === 'ta' ? `மேலும் ${story.collection}:` : `More Stories from ${story.collection}:`;
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
