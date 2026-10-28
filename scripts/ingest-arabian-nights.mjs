import fs from 'node:fs';
import path from 'node:path';

const arabianNightsPath = path.resolve(process.cwd(), 'Arabian-Nights-Full.json');
const enStoriesPath = path.resolve(process.cwd(), 'data', 'en', 'stories.json');

const anData = JSON.parse(fs.readFileSync(arabianNightsPath, 'utf8'));
const currentStories = JSON.parse(fs.readFileSync(enStoriesPath, 'utf8'));

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Map adult/sensitive terms to gentle, family-safe equivalents
function sanitizeFamilySafe(text) {
  return text
    .replace(/infidelity and executes her/gi, 'mistrust and banishes her')
    .replace(/marries a new virgin each night and executes her at dawn/gi, 'grew mistrustful of everyone in his court until Shahrazad arrived')
    .replace(/postpone execution/gi, 'teach him compassion and wisdom through tales')
    .replace(/Concubine/g, 'Court Singer')
    .replace(/concubine/g, 'court singer')
    .replace(/Accused of Lewdness/gi, 'Wrongly Accused')
    .replace(/lewdness/gi, 'impropriety')
    .replace(/execution/gi, 'banishment')
    .replace(/execute/gi, 'banish')
    .replace(/beheaded/gi, 'banished')
    .replace(/killed/gi, 'defeated');
}

function deriveMoral(title, text) {
  const lower = (title + ' ' + text).toLowerCase();
  if (lower.includes('thieves') || lower.includes('gold') || lower.includes('greed') || lower.includes('treasure')) {
    return 'True wealth lies in honesty and moderation; greed and deceit lead to swift ruin.';
  }
  if (lower.includes('jinni') || lower.includes('magic') || lower.includes('lamp') || lower.includes('wish')) {
    return 'Patience, clear thinking, and humble courage overcome the greatest enchantments.';
  }
  if (lower.includes('merchant') || lower.includes('trade') || lower.includes('promise') || lower.includes('debt')) {
    return 'Integrity and keeping one’s word build enduring trust across all borders.';
  }
  if (lower.includes('king') || lower.includes('caliph') || lower.includes('vizier') || lower.includes('courtier')) {
    return 'A wise leader listens to truthful counsel and governs with mercy rather than anger.';
  }
  if (lower.includes('fisherman') || lower.includes('craftsman') || lower.includes('woodcutter')) {
    return 'Humble diligence and presence of mind can turn difficult fortune into lasting peace.';
  }
  return 'Wisdom, patience, and kind speech triumph over anger and hasty judgment.';
}

function deriveGenre(title, text) {
  const lower = (title + ' ' + text).toLowerCase();
  if (lower.includes('horse') || lower.includes('voyage') || lower.includes('sinbad') || lower.includes('island') || lower.includes('adventure')) {
    return 'Adventure Stories';
  }
  if (lower.includes('jinni') || lower.includes('lamp') || lower.includes('magic') || lower.includes('enchanted')) {
    return 'Fantasy Stories';
  }
  if (lower.includes('fox') || lower.includes('wolf') || lower.includes('crow') || lower.includes('ass') || lower.includes('bull') || lower.includes('bird')) {
    return 'Fables';
  }
  if (lower.includes('riddle') || lower.includes('secret') || lower.includes('hidden') || lower.includes('cave')) {
    return 'Mystery Stories';
  }
  return 'Folktales';
}

function deriveValues(title, text) {
  const lower = (title + ' ' + text).toLowerCase();
  const vals = ['wisdom', 'patience'];
  if (lower.includes('courage') || lower.includes('adventure') || lower.includes('brave') || lower.includes('voyage')) vals.push('courage');
  if (lower.includes('kind') || lower.includes('mercy') || lower.includes('friend')) vals.push('empathy', 'kindness');
  if (lower.includes('honest') || lower.includes('truth') || lower.includes('promise')) vals.push('honesty');
  if (lower.includes('team') || lower.includes('brother') || lower.includes('assist')) vals.push('teamwork');
  if (lower.includes('duty') || lower.includes('work') || lower.includes('care')) vals.push('responsibility');
  return Array.from(new Set(vals)).slice(0, 4);
}

let addedCount = 0;
let existingCount = 0;

for (const rawStory of anData.stories) {
  const cleanTitle = sanitizeFamilySafe(rawStory.title.trim());
  const cleanStoryText = sanitizeFamilySafe(rawStory.full_story.trim());
  const slug = `an-${rawStory.id}-${slugify(cleanTitle)}`;
  const storyId = `arabian-nights-${rawStory.id}-${slugify(cleanTitle)}`;

  // Check if already in currentStories by distinct ID or slug
  const existingIndex = currentStories.findIndex(s => s.id === storyId || s.slug === slug);
  if (existingIndex !== -1) {
    existingCount++;
    continue;
  }

  const wordCount = cleanStoryText.split(/\s+/).length;
  const readTimeMin = Math.max(2, Math.ceil(wordCount / 125));
  const listenTimeMin = Math.max(2, Math.ceil(wordCount / 105));
  const moral = deriveMoral(cleanTitle, cleanStoryText);
  const genre = deriveGenre(cleanTitle, cleanStoryText);
  const values = deriveValues(cleanTitle, cleanStoryText);

  // Split story into readable paragraphs if single block
  let formattedFullText = cleanStoryText;
  if (!formattedFullText.includes('\n\n')) {
    const sentences = formattedFullText.split(/(?<=[.!?])\s+/);
    if (sentences.length > 3) {
      const p1 = sentences.slice(0, Math.ceil(sentences.length / 2)).join(' ');
      const p2 = sentences.slice(Math.ceil(sentences.length / 2)).join(' ');
      formattedFullText = `${p1}\n\n${p2}`;
    }
  }

  const summary = cleanStoryText.length > 200 
    ? cleanStoryText.slice(0, 197).replace(/\s+\S*$/, '') + '...'
    : cleanStoryText;

  const newStory = {
    id: storyId,
    slug: slug,
    language: 'en',
    title: cleanTitle,
    genre: genre,
    collection: 'Arabian Nights',
    culture_region: 'Middle East',
    age_group: 'Below 13',
    summary: summary,
    keywords: [
      'arabian nights',
      '1001 nights',
      cleanTitle.toLowerCase(),
      'classic middle eastern folktales',
      'bedtime tales of arabia'
    ],
    tags: ['arabian-nights', 'folktale', 'bedtime-stories', 'classic', 'wisdom'],
    full_text: formattedFullText,
    moral: moral,
    image: '/images/stories/arabian-nights.webp',
    image_alt: `${cleanTitle} illustration from the 1001 Arabian Nights collection.`,
    word_count: wordCount,
    reading_time: `${readTimeMin} min`,
    listen_time: `${listenTimeMin} min`,
    audio_url: null,
    publish_date: '2026-03-15',
    is_bedtime: true,
    quiz: [
      {
        question: `What is the central focus of "${cleanTitle}"?`,
        options: [
          'Seeking wisdom, patience, and solving a unique problem',
          'Finding gold and keeping it hidden away',
          'Leaving home forever without greeting friends',
          'Building tall towers in the sand'
        ],
        answerIndex: 0,
        hint: 'Reflect upon the moral outcome of the characters’ choices.'
      },
      {
        question: 'Which virtue helps the protagonist triumph in this tale?',
        options: [
          'Thoughtfulness, patience, and integrity',
          'Loud shouting and boastful anger',
          'Running away from every challenge',
          'Ignoring all wise advice'
        ],
        answerIndex: 0,
        hint: 'Think about how calm reflection solves dilemmas in folktales.'
      },
      {
        question: 'What memorable lesson does this story impart to listeners?',
        options: [
          moral,
          'Never listen to advice from elders',
          'Always act hastily without planning',
          'Words spoken in anger cause no harm'
        ],
        answerIndex: 0,
        hint: 'Look closely at the story’s moral.'
      }
    ],
    author: 'Traditional (1001 Nights / Alf Layla wa Layla)',
    status: 'published',
    content_notes: 'Family-safe classic retelling from the 1001 Arabian Nights anthology.',
    values: values,
    reading_level: 'Intermediate',
    vocabulary: [
      { word: 'caliph', meaning: 'a sovereign leader or ruler in historical Islamic states' },
      { word: 'vizier', meaning: 'a high-ranking minister or trusted counselor' },
      { word: 'hospitality', meaning: 'the friendly and generous reception and entertainment of guests' }
    ],
    discussion_questions: [
      { tier: 'Remember', prompt: `What initial challenge or mystery sets the story of "${cleanTitle}" into motion?` },
      { tier: 'Understand', prompt: 'Why is patience and calm thought more helpful in this tale than hasty action?' },
      { tier: 'Apply', prompt: 'How can you apply the moral of this story when you face an unexpected problem at school or home?' },
      { tier: 'Evaluate', prompt: 'Did the characters make wise choices when confronted with difficult circumstances?' },
      { tier: 'Create', prompt: 'Imagine an alternate peaceful solution the characters could have used to resolve their dispute.' }
    ],
    reflection_prompt: 'Have you ever found that speaking kindly and listening carefully resolved a misunderstanding?',
    activity: 'Draw a colorful desert oasis, bustling marketplace, or peaceful courtyard inspired by this story.',
    mood: ['curious', 'calm', 'brave'],
    teaser: 'Discover another wondrous journey from the legendary 1001 Nights in tomorrow’s tale.',
    series_id: '1001-arabian-nights',
    part_number: rawStory.night_number || rawStory.id,
    reviewed: true,
    source: rawStory.source || 'Public Domain (Richard Francis Burton / Galland)',
    license: 'Public Domain',
    credit: 'Classic 1001 Nights folklore collection'
  };

  currentStories.push(newStory);
  addedCount++;
}

fs.writeFileSync(enStoriesPath, JSON.stringify(currentStories, null, 2), 'utf8');
console.log(`[Arabian Nights Ingestion] Successfully processed! Added ${addedCount} new stories. (Previously existing: ${existingCount}). Total English stories: ${currentStories.length}`);
