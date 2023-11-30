import { z } from 'astro:content'

export const author = z.object({
  name: z.string(),
  tagline: z.string(),
  avatar: z.string(),
})
