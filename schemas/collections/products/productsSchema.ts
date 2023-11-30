import { z } from 'astro:content'
import { brand, categories, description, images, price, title } from '../..'

export const productsSchema = z.object({
  _stripe_product_id: z.string(),
  _stripe_price_id: z.string(),
  title,
  description,
  images,
  price,
  categories,
  brand,
})
