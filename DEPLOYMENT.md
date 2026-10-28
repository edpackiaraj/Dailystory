# Dhinam Oru Kathai (தினமொரு கதை) - Production Deployment & Architecture Guide

A global, multilingual moral and bedtime story library for children, families, and classrooms worldwide. Hosted on **Cloudflare Pages** with static pre-rendering, edge functions, zero-tracking privacy, and rich educational pedagogy.

---

## 1. Project Overview & Tech Stack

| Component | Technology | Role |
| :--- | :--- | :--- |
| **Framework** | **Astro 4.16** (Static Pre-rendering) | Lightning-fast static HTML, minimal JS, Core Web Vitals optimization |
| **Styling** | **Tailwind CSS 3.4** | Custom warm palettes, Noto font subsets, dyslexia-friendly font support |
| **Hosting & Edge** | **Cloudflare Pages + Pages Functions** | Global CDN caching, edge API endpoints (`/api/*`) |
| **Database** | **Cloudflare D1 (SQLite)** | Submissions, double opt-in subscribers, problem reports, metrics |
| **Object Storage** | **Cloudflare R2** | High-definition story audio, illustration assets, PDF worksheets |
| **Edge Cache** | **Cloudflare KV** | Sub-millisecond lookup cache for popular story indexes |
| **Admin Security**| **Cloudflare Access (Zero Trust)** | Protects `/admin/*` with corporate/single-sign-on authentication |
| **Bot Defense** | **Cloudflare Turnstile + Honeypots** | Privacy-preserving CAPTCHA for submission and subscription forms |
| **Narration** | **Web Speech API + R2 Audio** | Native device text-to-speech with sentence highlighting + studio MP3 |
| **Soundscapes** | **Web Audio API** | Real-time synthesized ambient sounds (rain, night crickets, chimes) |

---

## 2. Directory Structure

```text
Story Blog/
├── config/
│   ├── brand.json                  # Brand identity, multilingual tags, contact & grievance info
│   ├── keywords.json               # Core, long-tail, collection, and per-language search keywords
│   └── deity-glossary.json         # Prohibited religious terms & culture-level neutral glossary
├── data/
│   ├── legal/
│   │   └── en.json                 # English master text for all 10 legal and trust policies
│   ├── en/stories.json             # English stories data with rich pedagogical schema
│   ├── ta/stories.json             # Tamil stories (நீதிக்கதைகள் / சிறுவர் கதைகள்)
│   ├── hi/stories.json             # Hindi stories (नैतिक कहानियां / बाल कथाएं)
│   ├── es/stories.json             # Spanish stories (Cuentos infantiles y fábulas)
│   ├── zh/stories.json             # Chinese stories (中国经典民间与寓言故事)
│   ├── pt/stories.json             # Portuguese stories (drafts, reviewed: false)
│   ├── ml/stories.json             # Malayalam stories (drafts, reviewed: false)
│   ├── te/stories.json             # Telugu stories (drafts, reviewed: false)
│   ├── kn/stories.json             # Kannada stories (drafts, reviewed: false)
│   └── mr/stories.json             # Marathi stories (drafts, reviewed: false)
├── d1/
│   └── schema.sql                  # Cloudflare D1 SQLite database tables & indexes
├── functions/
│   └── api/
│       ├── submit.ts               # User story submissions with honeypot & keyword filter
│       ├── subscribe.ts            # Double opt-in newsletter handler (Resend integration)
│       └── feedback.ts             # Story reactions (😍 😊 😐) & moderation reports
├── public/
│   ├── _headers                    # Strict CSP, HSTS, frame-ancestors, Permissions-Policy
│   ├── _routes.json                # Cloudflare routing rules for Pages functions
│   ├── manifest.json               # PWA web app manifest
│   ├── sw.js                       # Offline service worker cache for bedtime reading
│   ├── favicon.svg                 # Brand SVG icon (Katha the Owl)
│   ├── robots.txt                  # Search crawler directives and sitemap declaration
│   ├── sitemap.xml                 # Master XML sitemap index
│   └── images/stories/             # Story illustrations and OpenGraph social share cards
├── scripts/
│   ├── neutralize-deities.mjs      # Build-time deity neutralization script with allow-list
│   ├── translate-pipeline.mjs      # AI translation pipeline generator with reviewed quarantine
│   └── generate-sitemaps.mjs       # Multilingual XML sitemap & hreflang generator
├── src/
│   ├── components/
│   │   ├── Header.astro            # Logo, multilingual switcher with memory, a11y drawer
│   │   ├── Footer.astro            # Legal links, honest community counters, grievance cell
│   │   ├── AudioPlayer.astro       # Web Speech API + sentence read-along highlighting
│   │   ├── BedtimeBar.astro        # Web Audio API synthesizer (rain, crickets) & sleep timer
│   │   ├── QuizModal.astro         # 3-question comprehension quiz with gentle hints
│   │   ├── ThinkAndTalk.astro      # Bloom's taxonomy discussion cards & family activities
│   │   ├── VocabularyTooltip.astro # Tap-to-define word magic with pronunciation
│   │   ├── MagicMoment.astro       # Effort praise, moral card, feedback, countdown ritual
│   │   ├── StoryGarden.astro       # Visual SVG growing garden with gentle streak
│   │   ├── StoryPassport.astro     # World folklore cultural collection stamps
│   │   ├── BilingualViewer.astro   # Side-by-side comparative language reading mode
│   │   ├── ClassroomMode.astro     # Projector mode & printable PDF worksheet
│   │   └── MascotCompanion.astro   # Katha the wise storytelling owl
│   ├── layouts/
│   │   └── BaseLayout.astro        # Core HTML, OpenGraph, Twitter, JSON-LD, hreflang
│   ├── lib/
│   │   ├── stories.ts              # Story loaders, resolvers, and category counters
│   │   └── i18n.ts                 # Localized UI dictionaries for all 10 languages
│   └── pages/
│       ├── index.astro             # Root language chooser with non-blocking browser detection
│       ├── 404.astro               # Custom 404 suggesting Today's Story
│       ├── admin/index.astro       # Editorial dashboard behind Cloudflare Access
│       └── [lang]/
│           ├── index.astro         # Home page (Today's story, mood picker, latest stories)
│           ├── search.astro        # Client-side instant search index with filters
│           ├── favorites.astro     # My Story Corner (localStorage bookmarks, garden, passport)
│           ├── submit.astro        # User story submission form
│           ├── subscribe.astro     # Double opt-in morning email signup
│           ├── [legal].astro       # 11 dynamic Trust and Legal policy pages
│           ├── genres/[genre].astro# Genre hub pages (noindex if < 5 stories)
│           ├── collections/[collection].astro # Collection hub pages
│           └── stories/[slug].astro# Story page with full text, audio, quiz & pedagogical tools
├── astro.config.mjs                # Astro configuration with Tailwind
├── tailwind.config.mjs             # Tailwind configuration with font families and colors
├── wrangler.toml                   # Cloudflare Pages, D1, R2, KV, Access and Cron config
└── package.json                    # Project dependencies and build scripts
```

---

## 3. Cloudflare Setup & Deployment Steps

### Step 1: Install Wrangler CLI & Authenticate
```bash
npm install -g wrangler
wrangler login
```

### Step 2: Create Cloudflare D1 Database
```bash
# Create D1 database
wrangler d1 create dhinam_oru_kathai_d1

# Apply schema migrations
wrangler d1 execute dhinam_oru_kathai_d1 --file=./d1/schema.sql
```
*Copy the generated `database_id` into your `wrangler.toml` file under `[[d1_databases]]`.*

### Step 3: Create Cloudflare R2 Bucket (For Media)
```bash
wrangler r2 bucket create dhinam-media
```

### Step 4: Create Cloudflare KV Namespace (For Edge Cache)
```bash
wrangler kv:namespace create CACHE_KV
```
*Copy the `id` into `wrangler.toml` under `[[kv_namespaces]]`.*

### Step 5: Configure Cloudflare Environment Variables & Secrets
```bash
# Set secrets safely via wrangler
wrangler secret put TURNSTILE_SECRET_KEY
wrangler secret put RESEND_API_KEY
wrangler secret put CLOUDFLARE_ACCESS_AUD
```

### Step 6: Configure Cloudflare Access for `/admin/*`
1. Navigate to the **Cloudflare Zero Trust Dashboard** > **Access** > **Applications**.
2. Click **Add an application** > **Self-hosted**.
3. Set Application domain to: `dhinamorukathai.pages.dev/admin/*`.
4. Configure an Identity Provider (One-Time Pin, Google Workspace, or GitHub).
5. Add an Access Policy granting access exclusively to your editorial team emails.

### Step 7: Build & Deploy to Cloudflare Pages
```bash
# Run full production pipeline
npm run build

# Deploy dist output to Cloudflare Pages
npx wrangler pages deploy dist --project-name=dhinam-oru-kathai
```

---

## 4. Verification Checklists

### A. Technical SEO Checklist
- [x] **H1 / Hierarchy**: Exactly one `<h1>` per page, semantic `<h2>`/`<h3>` headings.
- [x] **Titles & Meta Descriptions**: Unique, under 60 characters for titles, under 160 for descriptions, using native language search terms from `/config/keywords.json`.
- [x] **Canonical & hreflang**: Self-referencing canonical URLs; bidirectional `hreflang` tags across all 10 languages plus `x-default` (English); only reviewed translations are linked.
- [x] **Thin Content Guardrail**: Category and Collection hub pages with fewer than 5 published stories automatically receive `noindex` and 300+ word pedagogic intros.
- [x] **Structured Data (JSON-LD)**: Complete `CreativeWork`/`Article` schema (`inLanguage`, `isAccessibleForFree`, `educationalLevel`, `typicalAgeRange`, `teaches`, `wordCount`), `BreadcrumbList`, `WebSite` with `SearchAction`, and `Organization`.
- [x] **Sitemaps**: Multi-sitemap index (`sitemap.xml`) with language-specific XML sitemaps containing only reviewed stories.

### B. Security & Child Safety Checklist
- [x] **Strict HTTP Security Headers**: Configured in `public/_headers` (`Content-Security-Policy`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Strict-Transport-Security`, `Permissions-Policy`).
- [x] **Zero Tracking & Privacy**: No third-party ads, no tracking cookies, no cross-site analytics beacons. Reading progress and streaks live solely in user `localStorage`.
- [x] **SQL Injection Prevention**: Parameterized D1 SQLite queries across all Pages Functions (`/functions/api/*`).
- [x] **Form Protection**: Turnstile verification tokens and hidden honeypot fields (`website_hp`) protect submission and subscribe endpoints.
- [x] **Server-side Keyword Filter**: Incoming stories are inspected on the server to prevent inappropriate or harmful content.

### C. Accessibility (WCAG 2.2 AA) Checklist
- [x] **OpenDyslexic Font Toggle**: Instant switch in header for readers with dyslexia.
- [x] **Adjustable Typography**: Font sizing (`A-`, `Reset`, `A+`) and comfortable line height.
- [x] **Bedtime Dark Theme**: High-contrast, calming palette exceeding 4.5:1 contrast ratios.
- [x] **Keyboard Navigation**: Accessible skip-to-content link, semantic landmarks, and visible focus rings.
- [x] **Audio & Transcripts**: Full written text provided for every audio story; screen-reader accessible controls.

### D. Legal Review Checklist
> **IMPORTANT NOTICE:** All legal texts in `data/legal/en.json` (About, Contact, Disclaimer, Privacy Policy, Terms of Use, Cookie Notice, Copyright & Takedown, Community Guidelines, Editorial Policy, Parent Guide, Accessibility Statement) are comprehensive operational templates. Prior to public launch, they must be reviewed and customized by a licensed attorney in your operating jurisdiction to ensure total compliance with local laws, including India's DPDP Act 2023, IT Rules 2021, EU GDPR, and US COPPA.
