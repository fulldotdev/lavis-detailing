export interface Posts {
  title: string | null
  description: string | null
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
