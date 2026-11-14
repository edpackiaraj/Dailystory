import fs from 'node:fs';
import path from 'node:path';
import brandConfig from '../../config/brand.json';

export interface Story {
  id: string;
  slug: string;
  language: string;
  title: string;
  genre: string;
  collection: string;
  culture_region: string;
  age_group: string;
  summary: string;
  keywords: string[];
  tags: string[];
  full_text: string;
  moral: string;
  image: string;
  image_alt: string;
  word_count: number;
  reading_time: string;
  listen_time: string;
  audio_url: string | null;
  publish_date: string;
  is_bedtime: boolean;
  quiz: {
    question: string;
    options: string[];
    answerIndex: number;
    hint: string;
  }[];
  author: string;
  status: string;
  content_notes: string;
  values: string[];
  reading_level: 'Beginner' | 'Intermediate' | 'Advanced';
  vocabulary: { word: string; meaning: string }[];
  discussion_questions: { tier: string; prompt: string }[];
  reflection_prompt: string;
  activity: string;
  mood: string[];
  teaser: string;
  series_id: string | null;
  part_number: number | null;
  reviewed: boolean;
  source: string;
  license: string;
  credit: string;
}

const storiesCache: Record<string, Story[]> = {};
const collectionCache: Record<string, Record<string, Story[]>> = {};

export function getStoriesByLang(lang: string): Story[] {
  if (storiesCache[lang]) {
    return storiesCache[lang];
  }

  const collectionsDir = path.resolve(process.cwd(), 'data', lang, 'collections');
  if (fs.existsSync(collectionsDir)) {
    try {
      const files = fs.readdirSync(collectionsDir).filter(f => f.endsWith('.json'));
      const all: Story[] = [];
      for (const file of files) {
        const filePath = path.join(collectionsDir, file);
        const stories: Story[] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        all.push(...stories);
      }
      storiesCache[lang] = all;
      return all;
    } catch (e) {
      console.error(`Error loading collections for language ${lang}:`, e);
    }
  }

  const langFilePath = path.resolve(process.cwd(), 'data', lang, `stories-${lang}.json`);
  const legacyFilePath = path.resolve(process.cwd(), 'data', lang, 'stories.json');
  const filePath = fs.existsSync(langFilePath) ? langFilePath : legacyFilePath;
  if (!fs.existsSync(filePath)) {
    return [];
  }

  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const stories: Story[] = JSON.parse(raw);
    storiesCache[lang] = stories;
    return stories;
  } catch (e) {
    console.error(`Error loading stories for language ${lang}:`, e);
    return [];
  }
}

export function getStoriesByCollection(lang: string, collection: string): Story[] {
  const colSlug = getCollectionSlug(collection);
  if (collectionCache[lang]?.[colSlug]) {
    return collectionCache[lang][colSlug];
  }

  const newColPath = path.resolve(process.cwd(), 'data', lang, 'collections', `${lang}_${colSlug}.json`);
  const legacyColPath = path.resolve(process.cwd(), 'data', lang, 'collections', `${colSlug}.json`);
  const colPath = fs.existsSync(newColPath) ? newColPath : legacyColPath;
  if (fs.existsSync(colPath)) {
    try {
      const stories: Story[] = JSON.parse(fs.readFileSync(colPath, 'utf8'));
      if (!collectionCache[lang]) collectionCache[lang] = {};
      collectionCache[lang][colSlug] = stories;
      return stories;
    } catch (e) {
      console.error(`Error loading collection ${colSlug} for language ${lang}:`, e);
    }
  }

  // Fallback to filtering all stories
  return getStoriesByLang(lang).filter(s => getCollectionSlug(s.collection) === colSlug);
}

export function getAllReviewedStories(lang: string): Story[] {
  return getStoriesByLang(lang).filter(s => s.reviewed !== false && s.status === 'published');
}

export function getStoryBySlug(lang: string, slug: string): Story | undefined {
  const stories = getStoriesByLang(lang);
  return stories.find(s => s.slug === slug);
}

export function getStoryById(lang: string, id: string): Story | undefined {
  const stories = getStoriesByLang(lang);
  return stories.find(s => s.id === id);
}

export function getSiblingStoryInLang(sourceStoryId: string, targetLang: string): Story | undefined {
  const targetStories = getStoriesByLang(targetLang);
  return targetStories.find(s => s.id === sourceStoryId && s.reviewed !== false);
}

export const scriptRegexes: Record<string, RegExp> = {
  ta: /[\u0B80-\u0BFF]/,
  hi: /[\u0900-\u097F]/,
  mr: /[\u0900-\u097F]/,
  te: /[\u0C00-\u0C7F]/,
  kn: /[\u0C80-\u0CFF]/,
  ml: /[\u0D00-\u0D7F]/,
  zh: /[\u4E00-\u9FFF]/,
  es: /([áéíóúüñ¿¡]|\b(el|la|los|las|había|érase|entonces|dijo|cuento)\b)/i,
  pt: /([ãõáéíóúçê]|\b(havia|então|disse|estava|quando|muito|conto)\b)/i
};

export function isStoryTranslated(story: Story, lang: string): boolean {
  if (!story || !story.full_text) return false;
  if (lang === 'en') return true;
  const rx = scriptRegexes[lang];
  if (rx) {
    return rx.test(story.full_text);
  }
  return false;
}

export function getTodaysStory(lang: string): Story {
  const allStories = getAllReviewedStories(lang);
  if (!allStories.length) {
    // Fallback to English if target language has no reviewed stories yet
    return getAllReviewedStories('en')[0];
  }
  const translatedPool = lang === 'en' ? allStories : allStories.filter(s => isStoryTranslated(s, lang));
  const pool = translatedPool.length > 0 ? translatedPool : allStories;

  // Deterministic daily story based on calendar day
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24
  );
  const index = dayOfYear % pool.length;
  return pool[index];
}

export function getSurpriseStory(lang: string, currentId?: string): Story {
  const stories = getAllReviewedStories(lang);
  const pool = currentId ? stories.filter(s => s.id !== currentId) : stories;
  if (!pool.length) return stories[0];
  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

export function getGenresWithCounts(lang: string) {
  const stories = getAllReviewedStories(lang);
  const counts: Record<string, number> = {};
  for (const s of stories) {
    counts[s.genre] = (counts[s.genre] || 0) + 1;
  }
  return counts;
}

export function getCollectionsWithCounts(lang: string) {
  const stories = getAllReviewedStories(lang);
  const counts: Record<string, number> = {};
  for (const s of stories) {
    counts[s.collection] = (counts[s.collection] || 0) + 1;
  }
  return counts;
}

export function getAudienceCategory(ageGroup?: string): 'kids' | 'teens' | 'everyone' {
  const lower = (ageGroup || '').toLowerCase();
  if (lower.includes('below 10') || lower.includes('below 8') || lower.includes('kids') || lower.includes('children') || lower.includes('below 13')) {
    return 'kids';
  }
  if (lower.includes('teen') || lower.includes('13-18') || lower.includes('young adult')) {
    return 'teens';
  }
  return 'everyone';
}

export function getLengthCategory(wordCount?: number): 'short' | 'medium' | 'long' {
  const count = wordCount || 400;
  if (count <= 350) return 'short';
  if (count <= 850) return 'medium';
  return 'long';
}

export function getCollectionSlug(collection: string): string {
  if (!collection) return 'world-folktales';
  return collection.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export const collectionImageMap: Record<string, string> = {
  'aesop-s-fables': '/images/stories/aesop.webp',
  'aesops-fables': '/images/stories/aesop.webp',
  'akbar-birbal': '/images/stories/akbar-birbal.webp',
  'andersen': '/images/stories/andersen.webp',
  'hans-christian-andersen': '/images/stories/andersen.webp',
  'arabian-nights': '/images/stories/arabian-nights.webp',
  'charles-perrault': '/images/stories/charles-perrault.webp',
  'cinderella-stories': '/images/stories/cinderella.webp',
  'cinderella': '/images/stories/cinderella.webp',
  'grimm-fairy-tales': '/images/stories/grimm.webp',
  'jataka-tales': '/images/stories/jataka.webp',
  'mulla-nasruddin': '/images/stories/nasruddin.webp',
  'panchatantra': '/images/stories/panchatantra.webp',
  'paramartha-guru': '/images/stories/paramartha-guru.webp',
  'tenali-rama': '/images/stories/tenali-rama.webp',
  'vikram-vetal': '/images/stories/vikram-vetal.webp'
};

export function getStoryOgImage(story?: { collection?: string; image?: string } | null): string {
  if (!story) return '/images/og-default.png';
  const colSlug = getCollectionSlug(story.collection || '');
  if (collectionImageMap[colSlug]) {
    return collectionImageMap[colSlug];
  }
  if (story.image && story.image !== '/images/stories/akbar-birbal.webp' && story.image !== '/images/og-default.png') {
    return story.image;
  }
  return collectionImageMap[colSlug] || '/images/og-default.png';
}

export const localizedCollectionNames: Record<string, Record<string, string>> = {
  ta: {
    "cinderella-stories": "சிண்ட்ரெல்லா உலகக் கதைகள்",
    "akbar-birbal": "அக்பர்–பீர்பால் கதைகள்",
    "panchatantra": "பஞ்சதந்திரக் கதைகள்",
    "tenali-rama": "தெனாலிராமன் கதைகள்",
    "aesop-s-fables": "ஈசாப் நீதிக்கதைகள்",
    "aesops-fables": "ஈசாப் நீதிக்கதைகள்",
    "grimm-fairy-tales": "கிரிம் சகோதரர்கள் கதைகள்",
    "hans-christian-andersen": "ஹான்ஸ் கிறிஸ்டியன் ஆண்டர்சன் கதைகள்",
    "mulla-nasruddin": "முல்லா நஸ்ருதீன் கதைகள்",
    "jataka-tales": "ஜாதகக் கதைகள் (புத்தர் நீதிக்கதைகள்)",
    "arabian-nights": "ஆயிரத்தொரு இரவுகள் (அரேபிய இரவுகள்)",
    "paramartha-guru": "பரமார்த்த குரு கதைகள் (வீரமாமுனிவர்)",
    "vikram-vetal": "விக்கிரமாதித்தன்–வேதாளம் கதைகள்",
    "charles-perrault": "சார்லஸ் பெரோ கதைகள்"
  },
  hi: {
    "cinderella-stories": "सिंड्रेला की विश्व प्रसिद्ध कहानियाँ",
    "akbar-birbal": "अकबर-बीरबल की कहानियाँ",
    "panchatantra": "पंचतंत्र की कहानियाँ",
    "tenali-rama": "तेनालीराम की कहानियाँ",
    "aesop-s-fables": "ईसप की नीतिकथाएँ",
    "aesops-fables": "ईसप की नीतिकथाएँ",
    "grimm-fairy-tales": "ग्रिम्स की परियों की कहानियाँ",
    "hans-christian-andersen": "हंस क्रिश्चियन एंडरसन की कहानियाँ",
    "mulla-nasruddin": "मुल्ला नसरुद्दीन के किस्से",
    "jataka-tales": "जातक कथाएँ",
    "arabian-nights": "अलिफ़ लैला (अरेबियन नाइट्स)",
    "paramartha-guru": "परमार्थ गुरु की कथाएँ",
    "vikram-vetal": "विक्रम-वेताल की कहानियाँ",
    "charles-perrault": "चार्ल्स पेरौल्ट की कहानियाँ"
  },
  ur: {
    "cinderella-stories": "سنڈریلا کی عالمی کہانیاں",
    "akbar-birbal": "اکبر و بیربل کے قصے",
    "panchatantra": "پنچ تنتر کی کہانیاں",
    "tenali-rama": "تینالی راما کی کہانیاں",
    "aesop-s-fables": "ایسوپ کی اخلاقی کہانیاں",
    "aesops-fables": "ایسوپ کی اخلاقی کہانیاں",
    "grimm-fairy-tales": "برادرانِ گریم کی کہانیاں",
    "hans-christian-andersen": "ہانس کرسچن اینڈرسن کی کہانیاں",
    "mulla-nasruddin": "ملا نصر الدین کے لطائف و قصے",
    "jataka-tales": "جاتک کہانیاں",
    "arabian-nights": "الف لیلہ و لیلہ (عربین نائٹس)",
    "paramartha-guru": "پرمارتھ گرو کی کہانیاں",
    "vikram-vetal": "وکرم اور ویتال کی کہانیاں",
    "charles-perrault": "چارلس پیرول کی کہانیاں"
  }
};

export function getLocalizedCollectionName(collectionName: string, lang: string): string {
  if (!collectionName) return '';
  const colSlug = getCollectionSlug(collectionName);
  const langMap = localizedCollectionNames[lang];
  if (langMap && langMap[colSlug]) {
    return langMap[colSlug];
  }
  return collectionName;
}

export function cleanStorySummary(summary?: string): string {
  if (!summary) return '';
  let s = summary.replace(/\s*\[[A-Za-z]{2}\]/g, '').trim();
  const repetitivePrefix = /^Through unexpected trial and turning point, each character learns that\s*/i;
  if (repetitivePrefix.test(s)) {
    s = s.replace(repetitivePrefix, '');
    s = s.charAt(0).toUpperCase() + s.slice(1);
  }
  return s;
}

export function sanitizeQuizAndDiscussion(story: Story): Story {
  if (!story) return story;
  const clone = { ...story };
  const moral = story.moral || 'Good character, wisdom, and kindness triumph over deceit.';

  // Sanitize quiz
  if (Array.isArray(clone.quiz)) {
    clone.quiz = clone.quiz.map(q => {
      const isMoralQuestion = /moral|lesson|learn|teaches/i.test(q.question);
      const newOptions = [...q.options];
      // If question asks about moral and option 0 was hardcoded to "Wit beats power" but moral is different
      if (isMoralQuestion && newOptions[0] === 'Wit beats power' && !/wit/i.test(moral)) {
        newOptions[0] = moral.split(';')[0].trim();
      }
      return {
        ...q,
        options: newOptions
      };
    });
  }

  // Sanitize discussion questions
  if (Array.isArray(clone.discussion_questions)) {
    clone.discussion_questions = clone.discussion_questions.map(dq => {
      let prompt = dq.prompt || '';
      if (prompt.includes('"Wit beats power"') && !/wit/i.test(moral)) {
        const shortMoral = moral.split(';')[0].replace(/\.$/, '').trim();
        prompt = prompt.replace('"Wit beats power"', `"${shortMoral}"`);
      }
      return {
        ...dq,
        prompt
      };
    });
  }

  return clone;
}

export function getStoryUrl(story: { collection: string; slug: string }, lang: string): string {
  const colSlug = getCollectionSlug(story.collection);
  return `/${lang}/${colSlug}/${story.slug}/`;
}

