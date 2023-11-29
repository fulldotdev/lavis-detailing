import { z, defineCollection } from 'astro:content';

const pagesCollection = defineCollection({ 
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});
const postsCollection = defineCollection({ /* ... */ });
const servicesCollection = defineCollection({ /* ... */ });
const productsCollection = defineCollection({ /* ... */ });
const categoriesCollection = defineCollection({ /* ... */ });
const brandsCollection = defineCollection({ /* ... */ });
const employeesCollection = defineCollection({ /* ... */ });
const reviewsCollection = defineCollection({ /* ... */ });




export const collections = {
  'pages': pagesCollection,
  'posts': postsCollection,
  'services': servicesCollection,
  'products': productsCollection,
  'categories': categoriesCollection,
  'brands': brandsCollection,
  'employees': employeesCollection,
  'reviews': reviewsCollection,
};