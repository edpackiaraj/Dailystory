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

export function getStoriesByLang(lang: string): Story[] {
  if (storiesCache[lang]) {
    return storiesCache[lang];
  }

  const filePath = path.resolve(process.cwd(), 'data', lang, 'stories.json');
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
