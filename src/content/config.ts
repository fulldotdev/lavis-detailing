import { defineCollection } from 'astro:content'

const pagesCollection = defineCollection({})
const postsCollection = defineCollection({
  /* ... */
})
const servicesCollection = defineCollection({
  /* ... */
})
const productsCollection = defineCollection({
  /* ... */
})
const categoriesCollection = defineCollection({
  /* ... */
})
const brandsCollection = defineCollection({
  /* ... */
})
const employeesCollection = defineCollection({
  /* ... */
})
const reviewsCollection = defineCollection({
  /* ... */
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
