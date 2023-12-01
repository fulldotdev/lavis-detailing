import { exec } from 'child_process'
import fs from 'fs'
import yaml from 'js-yaml'
import { promisify } from 'util'
import { ZodAny, ZodNumber, ZodString } from 'zod'
import { Fixture, Generator } from 'zod-fixture'

const execAsync = promisify(exec)

async function generateSchemas(collection) {
  if (!collection) return
  try {
    // Run the 'ts-to-zod' command synchronously

    await execAsync(
      `yarn ts-to-zod ./schemas/collections/${collection}/${collection}Schema.d.ts ./schemas/collections/${collection}/${collection}Schema.ts`
    ).then(() => console.log('Successfully generated Zod schema'))

    // Import the generated Zod schema
    const zodSchema = await import(
      `./collections/${collection}/${collection}Schema.ts`
    )

    const schema = zodSchema[collection + 'Schema']

    // Custom generator for nullable strings
    const stringGenerator = Generator({
      schema: ZodString,
      output: () => null,
    })

    // Custom generator for any
    const anyGenerator = Generator({
      schema: ZodAny,
      output: () => null,
    })

    // Custom generator for any
    const numberGenerator = Generator({
      schema: ZodNumber,
      output: () => null,
    })

    // Create a fixture with the custom generator
    const fixture = new Fixture({
      seed: 1,
      array: {
        min: 1,
        max: 1,
      },
    }).extend([stringGenerator, anyGenerator, numberGenerator])
    const fixtureSchema = fixture.fromSchema(schema)

    // Convert to YAML
    const yamlFixture = yaml.dump(fixtureSchema)

    // Write to Markdown file
    fs.writeFileSync(
      `./schemas/collections/${collection}/${collection}Schema.md`,
      `---\n${yamlFixture}---`
    )
    console.log('Successfully generated markdown schema')
  } catch (error) {
    console.error('Error in schema generation and conversion:', error)
  }
}

const collections = [
  'brands',
  'categories',
  'employees',
  'pages',
  'policies',
  'posts',
  'products',
  'reviews',
  'services',
]

collections.forEach((collection) => generateSchemas(collection))
