import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'

export default (relativePath: string, data: object) => {
  try {
    const absolutePath = path.join(__dirname, relativePath)
    const file = fs.readFileSync(absolutePath, 'utf8')
    const dataAsYamlString = yaml.dump(data)
    const regex = /(?<=---)[\s\S]*?(?=---)/
    const replacedFile = file.replace(regex, `\n${dataAsYamlString}`)
    fs.writeFileSync(absolutePath, replacedFile)
    // console.log('replaced')
    // console.log(replaced)
    // fs.writeFileSync(`${dirPath}/${file}`, `${replaced}`)
  } catch (e) {
    return
  }
}
