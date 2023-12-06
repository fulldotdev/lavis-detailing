import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'

export default (relativePath: string) => {
  try {
    const absolutePath = path.join(__dirname, relativePath)
    const file = fs.readFileSync(absolutePath, 'utf8')
    const frontmatter = file.match(/---\n(.*)\n---/)?.[1]
    if (!frontmatter) return
    return yaml.load(frontmatter)
  } catch (e) {
    return
  }
}
