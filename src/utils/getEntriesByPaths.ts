import { getCollection } from 'astro:content'

export default async (paths: string[]) => {
  const collection: any = paths[0].split('/')[-2]
  console.log('collection', collection)
  const ids = paths?.map((item) => item.split('/').pop())
  const entries = await getCollection(
    collection,
    (entry: any) => ids?.includes(entry.id)
  )
  return entries
}
