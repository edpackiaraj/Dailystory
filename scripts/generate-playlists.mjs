import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const dataDir = path.join(rootDir, 'data');
const brandConfig = JSON.parse(fs.readFileSync(path.join(rootDir, 'config', 'brand.json'), 'utf8'));

const languages = brandConfig.supportedLanguages.map(l => l.code);
const playlistsDir = path.join(publicDir, 'playlists');

if (!fs.existsSync(playlistsDir)) {
  fs.mkdirSync(playlistsDir, { recursive: true });
}

function sanitizeTag(str) {
  if (!str) return '';
  return str
    .replace(/\s*\[[A-Za-z]{2}\]/g, '')
    .replace(/\s*\([A-Za-z\s\u0B80-\u0BFF\u0900-\u097F]+\)$/, '')
    .trim();
}

console.log('[Playlists Generator] Generating lightweight bedtime/travel audio playlists...');

for (const lang of languages) {
  const langPlaylistsDir = path.join(playlistsDir, lang);
  if (!fs.existsSync(langPlaylistsDir)) {
    fs.mkdirSync(langPlaylistsDir, { recursive: true });
  }

  const collectionsDir = path.join(dataDir, lang, 'collections');
  if (!fs.existsSync(collectionsDir)) continue;

  const files = fs.readdirSync(collectionsDir).filter(f => f.endsWith('.json'));
  const allStories = [];

  for (const file of files) {
    const filePath = path.join(collectionsDir, file);
    try {
      const stories = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      const colSlug = file.replace(`${lang}_`, '').replace('.json', '');
      
      const playlist = stories.map(s => ({
        id: s.id,
        title: sanitizeTag(s.title),
        collection: s.collection,
        slug: s.slug,
        full_text: s.full_text || '',
        moral: sanitizeTag(s.moral || ''),
        vocabulary: (s.vocabulary || []).slice(0, 3),
        discussion_questions: (s.discussion_questions || []).slice(0, 2),
        audio_url: s.audio_url || null,
        reading_time: s.reading_time || '3 min'
      }));

      allStories.push(...playlist);

      fs.writeFileSync(
        path.join(langPlaylistsDir, `${colSlug}.json`),
        JSON.stringify(playlist),
        'utf8'
      );
    } catch (e) {
      console.error(`Error generating playlist for ${file}:`, e);
    }
  }

  // Also create a "featured" / "all" mixed playlist of 100 top stories for quick streaming
  const mixedPool = allStories.slice(0, 80);
  fs.writeFileSync(
    path.join(langPlaylistsDir, 'all.json'),
    JSON.stringify(mixedPool),
    'utf8'
  );

  console.log(`[Playlists Generator] Generated playlists for ${lang} (${files.length} collections + all.json).`);
}

console.log('[Playlists Generator] Complete!');
