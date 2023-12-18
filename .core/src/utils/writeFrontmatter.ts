import fs from 'fs'
import yaml from 'js-yaml'

export default (absolutePath: string, data: object) => {
  try {
    const file = fs.readFileSync(absolutePath, 'utf8')
    const dataAsYamlString = yaml.dump(data)
    const regex = /(?<=---)[\s\S]*?(?=---)/
    const replacedFile = file.replace(regex, `\n${dataAsYamlString}`)
    fs.writeFileSync(absolutePath, replacedFile)
  } catch (e) {
    return
  }
}
