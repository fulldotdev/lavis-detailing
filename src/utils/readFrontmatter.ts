import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'

export default (absolutePath: string) => {
  try {
    console.log(absolutePath)
    const file = fs.readFileSync(absolutePath, 'utf8')

    const regex = /(?<=---)[\s\S]*?(?=---)/
    const frontmatter = file.match(regex)?.[0]

    if (!frontmatter) return null
    return yaml.load(frontmatter)
  } catch (e) {
    return
  }
}
