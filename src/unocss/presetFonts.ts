import type { Settings } from 'types'
import type { Preset } from 'unocss'
import { presetWebFonts } from 'unocss'

const weightMap = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
}

const getWebFont = (option) => {
  const setting = {
    name: option.family,
    weights: [weightMap[option.weight]],
    italic: option.italic,
  }
  return setting
}

export default function preset({
  heading,
  subheading,
  text,
  button,
}: Settings['theme']['fonts']): Preset {
  return {
    name: 'unocss-preset-fonts',
    presets: [
      presetWebFonts({
        fonts: {
          heading: getWebFont(heading),
          subheading: getWebFont(subheading),
          text: getWebFont(text),
          button: getWebFont(button),
        },
      }),
    ],
    shortcuts: {
      'text-button': `font-button text-size2 leading-none font-${button.weight}`,
    },
    preflights: [
      {
        getCSS: ({ theme }) => {
          return `
            p, ul, ol, li, label {
              --at-apply: ${text.className};
              font-family: ${theme['fontFamily'].text};
              font-weight: ${theme['fontWeight'][text.weight]};
              line-height: ${theme['lineHeight'].relaxed};
            }
            .mode-base :is(h1, h2, h3, h4, h5, h6) {
              --at-apply: ${heading.className};
              font-family: ${theme['fontFamily'].heading};
              font-weight: ${theme['fontWeight'][heading.weight]};
              line-height: ${theme['lineHeight'].tight};
            }
            .mode-compact :is(h1, h2, h3, h4, h5, h6) {
              --at-apply: ${subheading.className};
              font-family: ${theme['fontFamily'].subheading};
              font-weight: ${theme['fontWeight'][subheading.weight]};
              line-height: ${theme['lineHeight'].tight};
            }
          `
        },
      },
    ],
  }
}
