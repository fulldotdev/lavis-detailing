import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import bookshop from '@bookshop/astro-bookshop'
import yaml from '@rollup/plugin-yaml'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import stripeProducts from './library/hooks/stripeProducts'

export default defineConfig({
  output: 'static',
  compressHTML: true,
  site: import.meta.env.PUBLIC_APP_URL || 'http://localhost:4321',
  integrations: [
    svelte(),
    sitemap(),
    // prefetch(), // can be done with default config, no integration
    robotsTxt(),
    bookshop(),
    UnoCSS({
      injectReset: true,
    }),

    // alpine(),
    // favicons({
    //   masterPicture: './public/favicon.svg',
    //   emitAssets: true,
    //   appName: 'My website',
    //   appDescription: 'My website description',
    //   lang: 'nl',
    //   background: '#fff',
    //   theme_color: '#fff',
    // }),
    stripeProducts,

  ],
  vite: {
    plugins: [yaml()],
  },
})
