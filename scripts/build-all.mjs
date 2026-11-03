import { spawnSync } from 'node:child_process';

process.env.ASTRO_TELEMETRY_DISABLED = '1';

console.log('=== DHINAM ORU KATHAI: FULL PRODUCTION BUILD PIPELINE ===\n');

console.log('1. Neutralizing deity references...');
let res = spawnSync('node', ['scripts/neutralize-deities.mjs'], { stdio: 'inherit' });
if (res.status !== 0) process.exit(res.status || 1);

console.log('\n1b. Sanitizing tags and applying translations...');
res = spawnSync('node', ['scripts/sanitize-and-translate-stories.mjs'], { stdio: 'inherit' });
if (res.status !== 0) process.exit(res.status || 1);

console.log('\n1c. Overhauling Aesop fables, deduplicating & cleaning slugs...');
res = spawnSync('node', ['scripts/overhaul-aesop.mjs'], { stdio: 'inherit' });
if (res.status !== 0) process.exit(res.status || 1);

console.log('\n2. Partitioning collections...');
res = spawnSync('node', ['scripts/partition-stories.mjs'], { stdio: 'inherit' });
if (res.status !== 0) process.exit(res.status || 1);

console.log('\n2b. Exporting individual story files with descriptive names...');
res = spawnSync('node', ['scripts/export-individual-stories.mjs'], { stdio: 'inherit' });
if (res.status !== 0) process.exit(res.status || 1);

console.log('\n3. Generating sitemaps and robots.txt...');
res = spawnSync('node', ['scripts/generate-sitemaps.mjs'], { stdio: 'inherit' });
if (res.status !== 0) process.exit(res.status || 1);

console.log('\n4. Running Astro static site compilation...');
res = spawnSync('npx astro build', { stdio: 'inherit', env: process.env, shell: true });
if (res.status !== 0) process.exit(res.status || 1);

console.log('\n=== BUILD COMPLETED SUCCESSFULLY ===');
