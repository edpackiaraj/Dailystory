import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Cloudflare Pages deployment with static pre-rendering
export default defineConfig({
  output: 'static',
  site: 'https://dhinamorukathai.pages.dev',
  trailingSlash: 'ignore',
  build: {
    format: 'file',
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
