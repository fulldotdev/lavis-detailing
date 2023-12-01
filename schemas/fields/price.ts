import { z } from 'astro:content'

export const price = z.number().min(0).nullable()
