import { z } from 'astro:content'

export const author = z.object({
  name: z.string().nullable(),
  tagline: z.string().nullable(),
  avatar: z.string().nullable(),
})
