import {
  getEntry,
  type CollectionEntry,
  type CollectionKey,
} from 'astro:content'

const collectionKeys: CollectionKey[] = [
  'categories',
  'forms',
  'pages',
  'policies',
  'posts',
  'products',
  'reviews',
  'services',
]

export default async (
  path: string
): Promise<CollectionEntry<CollectionKey> | undefined> => {
  const collectionKey = collectionKeys.find((key) =>
    path.includes(`/${key}/`)
  ) as CollectionKey | undefined

  if (!collectionKey) return

  const entryId = path.split(`/${collectionKey}/`).pop() as
    | CollectionEntry<CollectionKey>['id']
    | undefined

  if (!entryId) return

  const entry = await getEntry(collectionKey, entryId)

  return entry
}
