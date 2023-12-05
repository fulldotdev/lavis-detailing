import type { Preset } from 'unocss'
import { presetWebFonts } from 'unocss'

const getWebFont = (
  option = {
    family: 'Inter',
    weight: 400,
    italic: false,
  }
) => ({
  name: option.family,
  weights: [option.weight],
  italic: option.italic,
})

export default function preset({
  heading,
  subheading,
  text,
  button,
}: any): Preset {
  console.log(heading)
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
      'text-button': `font-button text-size2 leading-none font-${button?.weight}`,
    },
    preflights: [
      {
        getCSS: ({ theme }: any) => {
          return `
            p, ul, ol, li, label {
              --at-apply: ${text?.class};
              font-family: ${theme['fontFamily'].text};
              font-weight: ${text?.weight};
              line-height: ${theme['lineHeight'].relaxed};
            }
            .mode-base :is(h1, h2, h3, h4, h5, h6) {
              --at-apply: ${heading?.class};
              font-family: ${theme['fontFamily'].heading};
              font-weight: ${heading?.weight};
              line-height: ${theme['lineHeight'].tight};
            }
            .mode-compact :is(h1, h2, h3, h4, h5, h6) {
              --at-apply: ${subheading?.class};
              font-family: ${theme['fontFamily'].subheading};
              font-weight: ${subheading?.weight};
              line-height: ${theme['lineHeight'].tight};
            }
          `
        },
      },
    ],
  }
}
