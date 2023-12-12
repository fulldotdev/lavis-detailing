import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { readFrontmatter } from '.'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const dirPath = path.resolve(__dirname, '../../src/content/products')

let contentArray: any[] = []

fs.readdirSync(dirPath).map((file) => {
  const frontMatter = readFrontmatter(`${dirPath}/${file}`)

  contentArray.push({ ...(frontMatter || {}), file: file })
})

export default contentArray
