import { z } from 'astro:content'

export const hero = z.object({
  writeup: z.any(),
  buttons: z.any(),
})
