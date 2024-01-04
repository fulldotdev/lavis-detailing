import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import bookshop from '@bookshop/astro-bookshop'
import yaml from '@rollup/plugin-yaml'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

export default defineConfig({
  output: 'static',
  site: import.meta.env.PUBLIC_APP_URL,
  compressHTML: import.meta.env.PROD,
  integrations: [
    svelte(),
    sitemap(),
    robotsTxt(),
    bookshop(),
    UnoCSS({
      injectReset: true,
      configDeps: ['./src/content/settings/theme.yml'],
    }),
  ],
  vite: {
    plugins: [yaml()],
  },
})
