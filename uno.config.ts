import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import fs from 'fs'
import yaml from 'js-yaml'
import { defineConfig, presetIcons, presetUno } from 'unocss'
import presetColors from './src/unocss/presetColors'
import presetFonts from './src/unocss/presetFonts'
import presetSizes from './src/unocss/presetSizes'
let theme: any = {}
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
    presetColors(theme?.colors),
    presetSizes(theme?.sizes),
    presetFonts(theme?.fonts),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
