// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shmoneywebdesign.com', // TODO: replace with real domain before launch
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
