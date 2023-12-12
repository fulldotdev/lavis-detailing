import type { CollectionEntry, ContentCollectionKey } from 'astro:content'
import { getCollection } from 'astro:content'

export default async (): Promise<CollectionEntry<ContentCollectionKey>[]> => {
  const collections: ContentCollectionKey[] = [
    'categories',
    'forms',
    'pages',
    'policies',
    'posts',
    'products',
    'services',
  ]
  const promises = collections.map((key) => getCollection(key))
  const results = await Promise.all(promises)
  const flattened = results.flat()
  const filtered = flattened.filter(Boolean)
  return filtered
}
