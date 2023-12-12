// import fs from 'fs'
// import path, { dirname } from 'path'
// import Stripe from 'stripe'
// import { fileURLToPath } from 'url'
// import { loadEnv } from 'vite'
// import getProducts from '../'
// import { readFrontmatter, writeFrontmatter } from '../utils'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)

// const dirPath = path.resolve(__dirname, '../src/content/products')

// const { STRIPE_SECRET_KEY } = loadEnv(
//   process.env.STRIPE_SECRET_KEY || '',
//   process.cwd(),
//   ''
// )

// const stripe = new Stripe(STRIPE_SECRET_KEY || '')

// const findProd = async (id: string) => {
//   try {
//     const product = await stripe.products.retrieve(id)
//     return product
//   } catch (e) {
//     return null
//   }
// }

// type addId = {
//   file: string
//   idKey: string
//   updateId: string
// }

// const addId = ({ file, idKey, updateId }: addId) => {
//   try {
//     fs.readFile(`${dirPath}/${file}`, 'utf-8', function (err: any, data: any) {
//       const frontMatter: any = readFrontmatter(`${dirPath}/${file}`)
//       frontMatter[idKey] = updateId

//       writeFrontmatter(`${dirPath}/${file}`, frontMatter)
//     })
//   } catch (e) {
//     console.error('could not write to ' + file)
//     console.error(e)
//   }
// }

// export default {
//   name: 'stripe-sync',
//   hooks: {
//     'astro:build:start': async () => {
//       try {
//         const products = getProducts
//         for (const product of products) {
//           // this is to see if the product already has a valid stripeId
//           let foundProduct: any = null
//           if (product['_stripe_product_id']) {
//             foundProduct = await findProd(product['_stripe_product_id'])
//           }

//           // the product is only if it doesn't exist on stripe
//           if (!foundProduct) {
//             const stripeProduct = await stripe.products.create({
//               name: product.title,
//               description: product.description,
//             })
//             const price = await stripe.prices.create({
//               currency: 'eur',
//               unit_amount: product.price,
//               product: stripeProduct.id,
//             })

//             await stripe.products.update(stripeProduct.id, {
//               default_price: price.id,
//             })

//             addId({
//               idKey: '_stripe_product_id',
//               updateId: stripeProduct.id,
//               file: product.file,
//             })
//             addId({
//               idKey: '_stripe_price_id',
//               updateId: price.id,
//               file: product.file,
//             })
//           } else {
//             // and where the existing products get updated
//             await stripe.products.update(foundProduct.id, {
//               name: product.title,
//               description: product.description,
//             })

//             // checking if the unit amount of the price in stripe is the same as the one in cloudCannon if not, changing it
//             if (foundProduct.default_price) {
//               let currentDefault = null
//               try {
//                 currentDefault = await stripe.prices.retrieve(
//                   foundProduct.default_price
//                 )
//               } catch (e) {}

//               if (currentDefault?.unit_amount != product.price) {
//                 const newPrice = await stripe.prices.create({
//                   unit_amount: product.price,
//                   currency: 'eur',
//                   product: foundProduct.id,
//                 })

//                 // making it the new default price
//                 await stripe.products.update(foundProduct.id, {
//                   default_price: newPrice.id,
//                 })

//                 await stripe.prices.update(currentDefault.id, {
//                   active: false,
//                 })
//               }
//             }
//           }
//         }
//       } catch (error) {
//         console.error('Error creating Stripe product: ', error)
//       }
//     },
//   },
// }
