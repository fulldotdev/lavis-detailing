import { defineCollection, z } from 'astro:content'

const content = defineCollection({
  type: 'content',
  schema: z.any(),
})

const data = defineCollection({
  type: 'data',
  schema: z.any(),
})

export const collections = {
  categories: content,
  persons: content,
  pages: content,
  policies: content,
  posts: content,
  products: content,
  reviews: content,
  services: content,
  person: content,
  data: data,
  blocks: data,
}
