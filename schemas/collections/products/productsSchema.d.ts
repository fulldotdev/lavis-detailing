export interface Products {
  _stripe_product_id?: string | null
  _stripe_price_id?: string | null

  title?: string | null
  description?: string | null
  images: {
    src?: string | null
    alt?: string | null
  }[]
  price?: number | null
  categories?: string[] | null
  brand?: string | null

  seo: {
    title?: string | null
    description?: string | null
    image: {
      src?: string | null
      alt?: string | null
    }
  }
}
