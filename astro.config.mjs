import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://buddymalin.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
