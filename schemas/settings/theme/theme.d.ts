type ColorBase = 'gray' | 'mauve' | 'slate' | 'sage' | 'olive' | 'sand'
type ColorVbrant =
  | 'tomato'
  | 'red'
  | 'ruby'
  | 'crimson'
  | 'pink'
  | 'plum'
  | 'purple'
  | 'violet'
  | 'iris'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'jade'
  | 'green'
  | 'grass'
  | 'bronze'
  | 'gold'
  | 'brown'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'mint'
  | 'sky'

interface Font {
  family: string
  weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  italic: boolean
  className: string
}

export interface Theme {
  colors: {
    base: ColorBase
    vibrant: ColorVbrant
    scheme: 'light' | 'dark'
    texture: 'solid' | 'translucent'
    contrast: boolean
  }
  fonts: {
    heading: Font
    subheading: Font
    body: Font
    button: Font
  }
  sizes: {
    scale: number
    rounded: 'none' | 'tiny' | 'small' | 'medium' | 'large'
    body: number
    button: number
    shadow: 'none' | 'tiny' | 'small' | 'medium' | 'large'
  }
}
