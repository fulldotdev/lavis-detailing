import { pagesSchema } from '@schemas'
import { defineCollection } from 'astro:content'

const brandsCollection = defineCollection({
  type: 'content',
  schema: pagesSchema.partial(),
})

const categoriesCollection = defineCollection({
  type: 'content',
  schema: pagesSchema.partial(),
})

const employeesCollection = defineCollection({
  type: 'content',
  schema: pagesSchema.partial(),
})

const pagesCollection = defineCollection({
  type: 'content',
  schema: pagesSchema.partial(),
})

const policiesCollection = defineCollection({
  type: 'content',
  schema: pagesSchema.partial(),
})

const postsCollection = defineCollection({
  type: 'content',
  schema: pagesSchema.partial(),
})

const productsCollection = defineCollection({
  type: 'content',
  schema: pagesSchema.partial(),
})

const reviewsCollection = defineCollection({
  type: 'content',
  schema: pagesSchema.partial(),
})

const servicesCollection = defineCollection({
  type: 'content',
  schema: pagesSchema.partial(),
})

export const collections = {
  brands: brandsCollection,
  categories: categoriesCollection,
  employees: employeesCollection,
  pages: pagesCollection,
  policies: policiesCollection,
  posts: postsCollection,
  products: productsCollection,
  reviews: reviewsCollection,
  services: servicesCollection,
}
