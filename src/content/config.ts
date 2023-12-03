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
  brands: content,
  categories: content,
  employees: content,
  pages: content,
  policies: content,
  posts: content,
  products: content,
  reviews: content,
  services: content,
  data: data,
}
