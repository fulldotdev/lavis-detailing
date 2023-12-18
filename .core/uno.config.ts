import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { defineConfig, presetIcons, presetUno } from 'unocss'
import presetColors from './src/unocss/presetColors'
import presetFonts from './src/unocss/presetFonts'
import presetSizes from './src/unocss/presetSizes'

export default defineConfig({
  content: {
    filesystem: ['src/**/*.yml'],
  },
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
    presetColors(),
    presetSizes(),
    presetFonts(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
