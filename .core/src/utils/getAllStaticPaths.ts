import { getAllEntries, getRouteByEntry } from '@utils'
import type { CollectionEntry, ContentCollectionKey } from 'astro:content'

interface StaticPaths {
  params: {
    route: string | undefined
  }
  props: {
    entry: CollectionEntry<ContentCollectionKey>
  }
}

export default async (): Promise<StaticPaths[]> => {
  const entries = await getAllEntries()
  const staticPaths = entries.map((entry) => ({
    params: {
      route: getRouteByEntry(entry),
    },
    props: {
      entry: entry,
    },
  }))
  return staticPaths
}
