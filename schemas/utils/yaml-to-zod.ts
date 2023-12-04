import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'
import { z } from 'zod'
import { createFixture } from 'zod-fixture'

// Reads and parses a YAML file
const readYamlFile = (relativePath: string) => {
  try {
    const absolutePath = path.join(__dirname, relativePath)
    const file = fs.readFileSync(absolutePath, 'utf8')
    return yaml.load(file)
  } catch (e) {
    console.error(e)
    return null
  }
}

// Gets a Zod type from a cloudcannon input type
const getZodTypeFromInputType = (inputType: string): z.ZodTypeAny => {
  switch (inputType) {
    case 'number':
    case 'range':
      return z.number().nullable()
    case 'checkbox':
    case 'switch':
      return z.boolean().nullable()
    case 'select':
    case 'choice':
      return z.string().nullable()
    case 'multiselect':
    case 'multichoice':
      return z.array(z.string()).nullable()
    default:
      return z.string().nullable()
  }
}

// Infers the Zod type based on the value if no input type is provided
const inferZodType = (value: any, inputType?: string): z.ZodTypeAny => {
  if (inputType) return getZodTypeFromInputType(inputType)
  else if (value === null) return z.string().nullable()
  else if (typeof value === 'object' && !Array.isArray(value))
    return createZodSchemaFromData(value)
  else return z.any().nullable()
}

// Generates a Zod schema from a JavaScript object
const createZodSchemaFromData = (
  dataObject: any,
  inputs: any = {}
): z.ZodTypeAny => {
  const schema: { [key: string]: z.ZodTypeAny } = {}
  for (const key in dataObject) {
    schema[key] = inferZodType(dataObject[key], inputs[key]?.type)
  }
  return z.object(schema)
}

// Example usage
const data = readYamlFile('../data/components.yml')
if (data) {
  const exampleSchema = createZodSchemaFromData(data, data._inputs)
  const fixture = createFixture(exampleSchema)
  console.log(fixture)
}
