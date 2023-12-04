import Stripe from 'stripe'
import { loadEnv } from 'vite'
import getProducts from './helpers/getProducts'
const { STRIPE_SECRET_KEY } = loadEnv(
  process.env.STRIPE_SECRET_KEY || '',
  process.cwd(),
  ''
)

export default {
  name: 'stripe-sync',
  hooks: {
    'astro:build:start': async () => {
      const stripe = new Stripe(STRIPE_SECRET_KEY || '')
      try {
        const products = getProducts

        products.forEach(async (product) => {
          const stripeProduct = await stripe.products.create({
            name: product.title,
            description: product.description,
          })
        })

        // console.log(`product ${product.name} created successfully.`)
      } catch (error) {
        console.error('Error creating Stripe product: ', error)
      }
    },
  },
}
