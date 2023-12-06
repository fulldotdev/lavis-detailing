import fs from 'fs'
import yaml from 'js-yaml'

export default (absolutePath: string) => {
  try {
    const file = fs.readFileSync(absolutePath, 'utf8')
    const regex = /(?<=---)[\s\S]*?(?=---)/
    const frontmatter = file.match(regex)?.[0]
    if (!frontmatter) return null
    return yaml.load(frontmatter)
  } catch (e) {
    return
  }
}
