import Stripe from 'stripe'
import { loadEnv } from 'vite'
import getProducts from './helpers/getProducts'
import fs from 'fs'
import fm from 'front-matter'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import yaml from 'js-yaml'
import { readFrontmatter } from '../src/utils'
import { writeFrontmatter } from '../src/utils'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const dirPath = path.resolve(__dirname, '../src/content/products')

const { STRIPE_SECRET_KEY } = loadEnv(
  process.env.STRIPE_SECRET_KEY || '',
  process.cwd(),
  ''
)

const stripe = new Stripe(STRIPE_SECRET_KEY || '')

const findProd = async (id: string) => {
  try {
    const product = await stripe.products.retrieve(id)
    return product
  } catch (e) {
    return null
  }
}

const addIds = (file: string, priceId: string, productId: string) => {
  try {
    fs.readFile(`${dirPath}/${file}`, 'utf-8', function (err: any, data: any) {
      const frontMatter: any = readFrontmatter('../src/content/products')
      frontMatter['_stripe_product_id'] = productId
      frontMatter['_stripe_price_id'] = priceId

      writeFrontmatter('../src/content/products', frontMatter)

      console.log(frontMatter)
    })
  } catch (e) {
    console.error('could not write to ' + file)
    console.error(e)
  }
}

export default {
  name: 'stripe-sync',
  hooks: {
    'astro:build:start': async () => {
      try {
        const products = getProducts

        for (const product of products) {
          //   const stripeProduct = await stripe.products.create({
          //     name: product.title,
          //     description: product.description,
          //   })
          //   const price = await stripe.prices.create({
          //     currency: 'eur',
          //     unit_amount: product.price,
          //     product: stripeProduct.id,
          //   })
          addIds(product.file, 'id1', 'id2')
        }
      } catch (error) {
        console.error('Error creating Stripe product: ', error)
      }
    },
  },
}
