import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import bookshop from '@bookshop/astro-bookshop'
import yaml from '@rollup/plugin-yaml'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

// let company = {}
// try {
//   company = yaml.load(
//     fs.readFileSync('./src/content/globals/company.yml', 'utf8')
//   )
// } catch (e) {
//   console.error(e)
// }

export default defineConfig({
  output: 'static',
  site: 'http://localhost:4321',
  compressHTML: import.meta.env.PROD,
  integrations: [
    svelte(),
    sitemap(),
    robotsTxt(),
    bookshop(),
    UnoCSS({
      injectReset: true,
    }),
  ],
  vite: {
    plugins: [yaml()],
  },
})
