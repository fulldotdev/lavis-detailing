import { pagesSchema } from '@schemas'
import { defineCollection } from 'astro:content'

const pagesCollection = defineCollection({
  type: 'content',
  schema: pagesSchema.partial(),
})

const postsCollection = defineCollection({
  type: 'content',
  schema: pagesSchema.partial(),
})

const servicesCollection = defineCollection({
  type: 'content',
  schema: pagesSchema.partial(),
})

const productsCollection = defineCollection({
  type: 'content',
  schema: pagesSchema.partial(),
})

const categoriesCollection = defineCollection({
  type: 'content',
  schema: pagesSchema.partial(),
})

const brandsCollection = defineCollection({
  type: 'content',
  schema: pagesSchema.partial(),
})

const employeesCollection = defineCollection({
  type: 'content',
  schema: pagesSchema.partial(),
})

const reviewsCollection = defineCollection({
  type: 'content',
  schema: pagesSchema.partial(),
})

export const collections = {
  pages: pagesCollection,
  posts: postsCollection,
  services: servicesCollection,
  products: productsCollection,
  categories: categoriesCollection,
  brands: brandsCollection,
  employees: employeesCollection,
  reviews: reviewsCollection,
}
