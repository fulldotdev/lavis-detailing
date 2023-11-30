import { blocks, seo } from '@schemas'
import { z } from 'astro:content'

export const pagesSchema = z.object({
  blocks,
  seo,
})
