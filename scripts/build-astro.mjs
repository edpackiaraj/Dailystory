import { spawnSync } from 'node:child_process';

process.env.ASTRO_TELEMETRY_DISABLED = '1';

const res = spawnSync('npx astro build', {
  stdio: 'inherit',
  env: process.env,
  shell: true,
});

process.exit(res.status ?? 0);
