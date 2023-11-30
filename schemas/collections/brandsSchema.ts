import { z } from 'astro:content'
import { description, image, seo, title } from '..'

export const brandsSchema = z.object({
  title,
  description,
  image,
  seo,
})
