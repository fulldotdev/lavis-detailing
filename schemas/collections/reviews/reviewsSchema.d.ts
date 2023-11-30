export interface Reviews {
  title?: string | null
  description?: string | null
  rating?: number | null
  author: {
    name?: string | null
    tagline?: string | null
    avatar?: string | null
  }
}
