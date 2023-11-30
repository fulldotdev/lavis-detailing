import { z } from 'astro:content'
import { description, image } from '../..'

export const employeesSchema = z.object({
  name: z.string(),
  tagline: z.string(),
  description,
  image,
})
