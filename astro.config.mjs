import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Cloudflare Pages deployment with static pre-rendering
export default defineConfig({
  output: 'static',
  site: 'https://dailystory.pages.dev',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  vite: {
    ssr: {
      noExternal: [],
    },
  },
});
