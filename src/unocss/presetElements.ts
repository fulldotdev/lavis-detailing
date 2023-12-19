import { cva } from 'cva'
import type { Preset } from 'unocss'
import readYaml from '../utils/readYaml'
import { hue, scheme } from '../variants'

const buttonVariant = cva({
  base: 'gap-xs inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-size1 p-size3 text-center text-button transition active:scale-95 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed',
  variants: {
    look: {
      solid: 'bg-hue9 text-hue-fg hover:bg-hue10 active:bg-hue11',
      soft: 'bg-hue3 text-hue11 hover:bg-hue4 active:bg-hue5',
      surface:
        'bg-hue2 text-hue11 ring ring-inset ring-hue6 hover:(bg-hue3 ring-hue7) active:(bg-hue4 ring-hue8)',
      outline:
        'bg-transparent text-hue11 ring-2 ring-inset ring-hue6 hover:(bg-hue2A ring-hue7) active:(bg-hue3A ring-hue8)',
      ghost: 'bg-transparent hover:bg-hue2 active:bg-hue3 text-hue11',
    },
    hue,
    scheme,
  },
})

export const inputVariant = cva({
  base: 'p-.4rem rounded-size2 text-hue12 hover:(ring ring-inset ring-hue7) active:(ring ring-inset ring-hue8)',
  variants: {
    look: {
      surface: 'bg-hue2 ring ring-inset ring-hue6',
      outline: 'bg-transparent ring ring-inset ring-hue6',
      soft: 'bg-hue3',
    },
  },
})

export default function preset(): Preset {
  const theme: any = readYaml('../content/settings/theme.yml')
  const { button, input } = theme.elements
  return {
    name: 'unocss-preset-elements',
    shortcuts: {
      'button-primary': buttonVariant(button?.primary),
      'button-secondary': buttonVariant(button?.secondary),
      'button-tertiary': buttonVariant(button?.tertiary),
      input: inputVariant(input),
    },
  }
}
