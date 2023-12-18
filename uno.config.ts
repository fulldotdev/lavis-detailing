import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { defineConfig, presetIcons, presetUno } from 'unocss'
import presetColors from './src/unocss/presetColors'
import presetFonts from './src/unocss/presetFonts'
import presetSizes from './src/unocss/presetSizes'

export default defineConfig({
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'src/**/*.yml',
      ],
    },
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
