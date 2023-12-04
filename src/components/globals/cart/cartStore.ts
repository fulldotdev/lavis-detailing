import { persisted } from 'svelte-persisted-store'
import { derived, writable, type Readable, type Writable } from 'svelte/store'

interface Product {
  quantity: number
  stripePriceId: string
  title: string
  price: number
  images: {
    src: string
    alt: string
  }[]
}

export const cartIsOpen: Writable<boolean> = writable(false)

export const cart: Writable<Product[]> = persisted('cart ', [])

// function storeCart() {
//   if (typeof window === 'undefined') return
//   localStorage.cart = JSON.stringify(cart)
//   console.log('storing cart', localStorage.cart)
// }

// function initCart() {
//   if (typeof window === 'undefined') return
//   if (!localStorage.cart) return
//   const storedCart = JSON.parse(localStorage.cart)
//   console.log('stored cart', storedCart)
//   // cart.set(JSON.parse(localStorage.cart))
// }

// cart.subscribe(() => storeCart())
// initCart()

// derived stores
export const totalPrice: Readable<number> = derived(cart, ($cart) =>
  $cart.reduce((a, b) => +a + b.price * b.quantity, 0)
)

export const totalItems: Readable<number> = derived(
  cart,
  ($cart) => $cart.length && $cart.reduce((sum, item) => sum + item.quantity, 0)
)
