import { persisted } from 'svelte-persisted-store'
import { writable } from 'svelte/store'

export type CartProduct = {
  id: string
  quantity: number
  title: string
  price: number
  images?: any
  stripePriceId: string
}

interface Cart {
  items: CartProduct[]
}

export const cart = persisted('cart', {
  items: [],
})

const cartIsOpen: any = writable(false)

export { cartIsOpen }
