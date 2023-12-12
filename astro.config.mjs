import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import bookshop from '@bookshop/astro-bookshop'
import yaml from '@rollup/plugin-yaml'
import sentry from '@sentry/astro'
import spotlightjs from '@spotlightjs/astro'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
import fs from 'fs'
import UnoCSS from 'unocss/astro'

let company = {}
try {
  company = yaml.load(
    fs.readFileSync('./src/content/globals/company.yml', 'utf8')
  )
} catch (e) {
  console.error(e)
}

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: company.url || 'http://localhost:4321',
  compressHTML: import.meta.env.PROD,
  integrations: [
    svelte(),
    sitemap(),
    robotsTxt(),
    bookshop(),
    UnoCSS({
      injectReset: true,
    }),
    sentry(),
    spotlightjs(),
    // Loggin 100000 logs during build
    // favicons({
    //   masterPicture: company.logo || './src/assets/astro.svg',
    //   emitAssets: true,
    //   appName: company.name,
    //   appShortName: company.name,
    //   appDescription: company.description,
    //   lang: 'nl',
    //   background: '#fff',
    //   theme_color: '#fff',
    // }),
    // stripeProducts,
  ],
  vite: {
    plugins: [yaml()],
  },
})
