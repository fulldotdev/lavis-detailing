import { z } from 'astro:content'
import { description, image, title } from '..'

export const seo = z.object({
  title,
  description,
  image,
})
