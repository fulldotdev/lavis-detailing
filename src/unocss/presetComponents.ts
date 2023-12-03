import type { Preset } from 'unocss'
import buildChildVariant from './functions/buildChildVariant'

const defaultOptions: any = {
  prose: `
    text mx-auto
    [&_h1]:(heading mb-size3)
    [&_h1+p]:(mb-size6)
    [&_h2]:(heading mt-size5 mb-size3)
    [&_h3]:(subheading mt-size5 mb-size3)
    [&_p]:(text mt-size3)
    [&_*:fisrt-child]:mt-0
    [&_*:last-child]:mb-0
  `,
  rich: `
    text-primary size-medium mx-auto
    [&_h1]:(size-large heading-primary mb-size3)
    [&_h1+p]:(size-large text-primary mb-size5)
    [&_h2]:(size-medium heading-secondary mt-size5 mb-size3)
    [&_h3]:(size-small heading-secondary mt-size5 mb-size3)
    [&_p]:mt-size3
    [&_*:first-child]:(mt-0)
  `,
  button:
    'gap-xs text-hue11 hover:text-hue12 inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-size2 p-size3 text-center text-size2 font-base leading-[1] transition active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed',
  'button-group':
    'flex w-full gap-x-size3 gap-y-size2 flex-wrap size-small:max-w-xl size-large:max-w-3xl max-w-2xl',
  link: 'whitespace-nowrap text-size2 text-hue11 hover:text-hue12 disabled:pointer-events-none disabled:opacity-50 font-base',
  form: 'flex flex-col gap-size3 size-small:max-w-md size-large:max-w-xl max-w-lg',
  input:
    'variant-surface p-.4rem text-primary text-hue12 bg-hue4 border border-hue6 rounded-size1 placeholder:text-hue11 disabled:pointer-events-none disabled:opacity-50',
  select:
    'variant-surface p-.4rem text-primary text-hue12 shrink-0 rounded-size1 text-hue12 py-0.9375em disabled:pointer-events-none disabled:opacity-50',
  textarea:
    'rounded-size1 variant-surface p-.4rem bg-hue4 border border-hue6 min-h-5rem text-hue12 placeholder:text-hue11 disabled:pointer-events-none disabled:opacity-50',
  label: 'text-secondary text-hue12 pb-size2',
  image: 'block w-full h-auto rounded-md object-cover overflow-hidden',
}

export default function preset(options: any): Preset {
  let mergedOptions: any = defaultOptions
  Object.entries(options || {}).forEach(([key, value]) => {
    mergedOptions[key] = `${value} ${defaultOptions[key]}`
  })

  const variants = Object.keys(defaultOptions).map((key) =>
    buildChildVariant(key)
  )

  return {
    name: 'unocss-preset-components',
    shortcuts: mergedOptions,
    variants,
  }
}
