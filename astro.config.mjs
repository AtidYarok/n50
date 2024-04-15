import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import alpinejs from '@astrojs/alpinejs'
import sitemap from '@astrojs/sitemap'
import { SITE } from './src/config'

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  trailingSlash: 'never',
  integrations: [tailwind(), alpinejs(), sitemap()],
})
