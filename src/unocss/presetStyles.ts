import type { Preset } from 'unocss'
import flattenShortcutObject from './functions/flattenShortcutObject'

export default function preset(): Preset {
  return {
    name: 'unocss-preset-styles',
    shortcuts: {
      ...flattenShortcutObject({
        look: {
          ghost: 'bg-transparent [&[href]]:(hover:bg-hue4 active:bg-hue5)',
          outline:
            'bg-transparent ring ring-inset ring-hue6 [&[href]]:(hover:bg-hue4 active:bg-hue5)',
          surface:
            'bg-hue2 ring ring-inset ring-hue6 [&[href]]:(hover:bg-hue4 active:bg-hue5 hover:border-hue8 active:border-hue9)',
          soft: 'bg-hue3 [&[href]]:(hover:bg-hue4 active:bg-hue5)',
          solid:
            'bg-hue9 text-hue-fg [&[href]]:(hover:bg-hue10 active:bg-hue11 hover:text-hue-fg)',
        },
      }),
      prose: `
      mx-auto
      [&_h1]:(mb-size3)
      [&_h1+p]:(mb-size6)
      [&_h2]:(mt-size5 mb-size3)
      [&_h3]:(mt-size5 mb-size3)
      [&_p]:(mt-size3)
      [&_*:first-child]:mt-0
      [&_*:last-child]:mb-0
    `,
      rich: `
      size-medium mx-auto
      [&_h1]:(size-large mb-size3)
      [&_h1+p]:(size-large mb-size5)
      [&_h2]:(size-medium mt-size5 mb-size3)
      [&_h3]:(size-small mt-size5 mb-size3)
      [&_p]:mt-size3
      [&_*:first-child]:(mt-0)
    `,
      button:
        'gap-xs text-hue11 hover:text-hue12 inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-size1 p-size3 text-center text-size2 font-button leading-[1] transition active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed',
      'button-group':
        'flex w-full gap-x-size3 gap-y-size2 flex-wrap size-small:max-w-xl size-large:max-w-3xl max-w-2xl',
      link: 'whitespace-nowrap text-size2 text-hue11 hover:text-hue12 disabled:pointer-events-none disabled:opacity-50',
      form: 'flex flex-col gap-size3 size-small:max-w-md size-large:max-w-xl max-w-lg',
      input:
        'look-surface p-.4rem text-hue12 bg-hue4 border border-hue6 rounded-size1 placeholder:text-hue11 disabled:pointer-events-none disabled:opacity-50',
      select:
        'look-surface p-.4rem text-hue12 shrink-0 rounded-size1 text-hue12 py-0.9375em disabled:pointer-events-none disabled:opacity-50',
      textarea:
        'rounded-size1 look-surface p-.4rem bg-hue4 border border-hue6 min-h-5rem text-hue12 placeholder:text-hue11 disabled:pointer-events-none disabled:opacity-50',
      label: 'text-size1 text-hue12 pb-size2',
      image: 'block w-full h-auto rounded-size2 object-cover overflow-hidden',
    },
  }
}
