import { z } from 'astro:content'
import { author, description, title } from '..'

export const reviewsSchema = z.object({
  title,
  description,
  author,
})
