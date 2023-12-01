import { z } from 'astro:content'

export const image = z.object({
  src: z.string().url().nullable(),
  alt: z.string().nullable(),
})
