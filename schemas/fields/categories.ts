import { reference, z } from 'astro:content'

export const categories = z.array(reference('categories')).nullable()
