import { description, image, title } from '@schemas'
import { z } from 'astro:content'

export const seo = z.object({
  title,
  description,
  image,
})
