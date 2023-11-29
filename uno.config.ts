import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { defineConfig, presetIcons, presetUno } from 'unocss'
// import settings from './.payload/.payload-settings'
// import presetColors from './src/core/settings/settingsPresetColors'
// import presetFonts from './src/core/settings/settingsPresetFonts'
// import presetSizes from './src/core/settings/settingsPresetSizes'
// import presetStyles from './src/core/settings/settingsPresetStyles'

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
    // presetSizes(settings.theme.sizes),
    // presetColors(settings.theme.colors),
    // presetFonts(settings.theme.fonts),
    // presetStyles(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
