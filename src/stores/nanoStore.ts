import { persistentAtom } from '@nanostores/persistent'
import type { CollectionEntry } from 'astro:content'
import { atom, computed } from 'nanostores'

type Item = CollectionEntry<'products'>['data'] & {
  quantity: number
}

export const cart = persistentAtom<Item[] | []>('cart', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
})

export const cartIsOpen = atom(false)

export const totalPrice = computed(cart, ($cart) =>
  $cart.reduce((a, b) => +a + b.price * b.quantity, 0)
)

export const totalQuantity = computed(cart, ($cart) =>
  $cart.reduce((a, b) => +a + b.quantity, 0)
)
