import { exec } from 'child_process'
import fs from 'fs'
import yaml from 'js-yaml'
import { promisify } from 'util'
import { ZodString } from 'zod'
import { Fixture, Generator } from 'zod-fixture'

const execAsync = promisify(exec)

// const collections = [
//   'brands',
//   'categories',
//   'employees',
//   'pages',
//   'policies',
//   'posts',
//   'products',
//   'reviews',
//   'services',
// ]

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
    const nullableStringGenerator = Generator({
      schema: ZodString,
      output: () => '',
    })

    // Create a fixture with the custom generator
    const fixture = new Fixture().extend([nullableStringGenerator])
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

generateSchemas()
