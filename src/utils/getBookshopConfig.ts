// export default async (
//   bookshopName: `${'cards' | 'blocks' | 'elements'}/${string}` | undefined
// ): Promise<object | undefined> => {
//   if (!bookshopName) return
//   const files = import.meta.glob('/src/components/**/*.bookshop.yml')
//   const path = `/src/components/${bookshopName}.bookshop.yml`
//   const file: any = await files[path]()
//   if (!file) return
//   return file.default.config
// }
