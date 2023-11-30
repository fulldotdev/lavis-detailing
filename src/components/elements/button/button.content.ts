import { z } from 'astro:content'

export const button = z.object({
  label: z.string(),
  href: z.string().url(),
})
