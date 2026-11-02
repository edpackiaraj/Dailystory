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

export function getTodaysStory(lang: string): Story {
  const stories = getAllReviewedStories(lang);
  if (!stories.length) {
    // Fallback to English if target language has no reviewed stories yet
    return getAllReviewedStories('en')[0];
  }
  // Deterministic daily story based on calendar day
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24
  );
  const index = dayOfYear % stories.length;
  return stories[index];
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

export function getStoryUrl(story: { collection: string; slug: string }, lang: string): string {
  const colSlug = getCollectionSlug(story.collection);
  return `/${lang}/${colSlug}/${story.slug}/`;
}

