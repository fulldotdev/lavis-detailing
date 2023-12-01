import { ButtonType } from '../../settings/elements'

export interface Brands {
  title: string | null
  description: string | null
  button: ButtonType
  image: {
    src: string | null
    alt: string | null
  }
  seo: {
    title: string | null
    description: string | null
    image: {
      src: string | null
      alt: string | null
    }
  }
}
