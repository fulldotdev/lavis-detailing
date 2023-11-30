import { z } from 'astro:content'
import { description, image, title } from '../..'

export const postsSchema = z.object({
  title,
  description,
  image,
})
