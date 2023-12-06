import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import fs from 'fs'
import yaml from 'js-yaml'
import { defineConfig, presetIcons, presetUno } from 'unocss'
import presetColors from './src/unocss/presetColors'
import presetFonts from './src/unocss/presetFonts'
import presetSizes from './src/unocss/presetSizes'
import presetStyles from './src/unocss/presetStyles'

let theme: any
try {
  theme = yaml.load(fs.readFileSync('./src/content/settings/theme.yml', 'utf8'))
} catch (e) {
  console.error(e)
}

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      prefix: '',
      collections: {
        icon: () =>
          import('@iconify-json/tabler/icons.json').then(
            (i) => i.default as any
          ),
      },
    }),
    presetSizes(theme?.sizes || {}),
    presetColors(theme?.colors || {}),
    presetFonts(theme?.fonts || {}),
    presetStyles(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
