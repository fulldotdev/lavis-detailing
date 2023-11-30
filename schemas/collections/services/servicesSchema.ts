import { z } from 'astro:content'
import { blocks, description, image, seo, title } from '../..'

export const servicesSchema = z.object({
  title,
  description,
  image,
  blocks,
  seo,
})
