import type { Preset } from 'unocss'
import { presetRadix } from 'unocss-preset-radix'

export default function preset({
  base = 'slate',
  brand = 'blue',
  accent = 'green',
  scheme = 'light', // texture = 'solid',
}: any): Preset {
  return {
    name: 'unocss-preset-colors',
    safelist: [
      'hue-base',
      'hue-brand',
      'hue-accent',
      'scheme-light',
      'scheme-dark',
    ],
    presets: [
      presetRadix({
        lightSelector:
          scheme === 'light' ? ':root, .scheme-light' : '.scheme-light',
        darkSelector:
          scheme === 'dark' ? ':root, .scheme-dark' : '.scheme-dark',
        palette: [base, brand, accent],
        aliases: {
          base: base,
          brand: brand,
          accent: accent,
        },
      }),
    ],
    preflights: [
      {
        getCSS: ({ theme }: any) =>
          `
            body, html {
              color-scheme: ${scheme};
            }
            .scheme-light {
              color-scheme: light;
            }
            .scheme-dark {
              color-scheme: dark;
            }
            p, ul, ol, li, label, span {
              color: ${theme['colors'].hue['11']};
            }
            h1, h2, h3, h4, h5, h6 {
              color: ${theme['colors'].hue['12']};
            }
          `,
      },
    ],
  }
}

// ${
//   texture === 'translucent'
//     ? `:root, .hue-base, .hue-brand, .hue-accent {
//     --un-preset-radix-hue2: var(--un-preset-radix-hue2A) !important;
//     --un-preset-radix-hue3: var(--un-preset-radix-hue3A) !important;
//     --un-preset-radix-hue4: var(--un-preset-radix-hue4A) !important;
//     --un-preset-radix-hue5: var(--un-preset-radix-hue5A) !important;
//     --un-preset-radix-hue6: var(--un-preset-radix-hue6A) !important;
//     --un-preset-radix-hue7: var(--un-preset-radix-hue7A) !important;
//     --un-preset-radix-hue8: var(--un-preset-radix-hue8A) !important;
//     --un-preset-radix-hue9: var(--un-preset-radix-hue9A) !important;
//     --un-preset-radix-hue10: var(--un-preset-radix-hue10A) !important;
//     --un-preset-radix-hue11: var(--un-preset-radix-hue11A) !important;
//     --un-preset-radix-hue12: var(--un-preset-radix-hue12A) !important;
//   }`
//     : ''
// }
// ${
//   contrast &&
//   texture === 'translucent' &&
//   scheme === 'light' &&
//   ':root, .hue-base, .hue-brand, .hue-accent { --un-preset-radix-hue1: white !important }'
// }
// ${
//   contrast &&
//   texture === 'translucent' &&
//   scheme === 'dark' &&
//   ':root, .hue-base, .hue-brand, .hue-accent { --un-preset-radix-hue1: rgb(6,6,6) !important }'
// }
