import { getEntry } from 'astro:content'

export default async (name: string) => {
  const components = await getEntry('data', 'components')
  return components.data.cards[name]
}
