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

export const totalPrice: Readable<number> = derived(cart, ($cart) =>
  $cart.reduce((a, b) => +a + b.price * b.quantity, 0)
)

export const totalItems: Readable<number> = derived(
  cart,
  ($cart) => $cart.length && $cart.reduce((sum, item) => sum + item.quantity, 0)
)
