import fm from 'front-matter'
import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const dirPath = path.resolve(__dirname, '../../src/content/products')

let contentArray = []

fs.readdirSync(dirPath).map((file) => {
  const filePath = path.join(dirPath, file)
  const data = fs.readFileSync(filePath, 'utf8')
  const content = fm(data)
  contentArray.push(content.attributes)
})

export default contentArray
