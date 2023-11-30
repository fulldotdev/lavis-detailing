import { z } from 'astro:content'
import { blocks, seo } from '..'

export const pagesSchema = z.object({
  blocks,
  seo,
})
