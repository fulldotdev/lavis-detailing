<script lang="ts">
  import { onMount } from 'svelte'
  import { cart } from './cartStore'
  import CartTrashButton from './CartTrashButton.svelte'
  import type { CartProduct } from './cartStore'

  export let product: CartProduct
  export let showQuantity: boolean = false
  let productQuantity: number = 1
  let clicked = false
  let loading = false

  $: {
    if ($cart) {
      updateButton()
    }
  }

  $: productQuantity = product.quantity

  async function updateButton() {
    const item = getItem($cart)
    if (item) {
      productQuantity = item?.quantity
      if (item.quantity < 1) clicked = false
    } else {
      clicked = false
    }
  }

  onMount(async () => {
    const item = getItem($cart)
    if (!item) return
    if (item?.quantity > 0) {
      clicked = true
      productQuantity = item.quantity
    }
  })

  function getItem(customerCart) {
    return customerCart.items?.find((item) => item?.id == product.id)
  }

  function getIndex() {
    return $cart?.items?.findIndex((item) => item?.id == product.id)
  }

  function addItem(newItem: CartProduct) {
    cart.set({ items: [...$cart.items, newItem] })
  }

  function updateQuantity(item: CartProduct, newItem: CartProduct) {
    const newCartItems = $cart.items.filter((cartItem) => {
      if (cartItem?.id !== item?.id) {
        return true
      }
      return false
    })

    if (newCartItems[0] !== undefined) {
      $cart.items[getIndex()] = newItem
    } else {
      cart.set({ items: [newItem] })
    }

    productQuantity = newItem.quantity
  }

  async function action(quantityToAdd: number) {
    clicked = true
    loading = true
    const item = getItem($cart)

    const newItem: CartProduct = {
      id: item?.id || product.id,
      quantity: item?.quantity || 1,
      title: item?.title || product.title,
      price: item?.price || product.price,
      stripePriceId: item?.stripePriceId || product.stripePriceId,
      images: item?.images || product.images,
    }

    if (!item) addItem(newItem)
    if (item) {
      if (quantityToAdd > 1) {
        newItem.quantity = quantityToAdd
      } else {
        newItem.quantity += quantityToAdd
      }

      updateQuantity(item, newItem)
    }
    loading = false
  }

  const minus = () => action(-1)
  const plus = () => action(1)
  const update = () => action(productQuantity)
</script>

{#if showQuantity || clicked}
  <div class="hue-base bg-hue3 mt-auto flex rounded py-0">
    {#if productQuantity == 1}
      <CartTrashButton productId={product.id} />
    {:else}
      <button
        disabled={loading}
        class="button look-soft hue-base hover:bg-hue4 active:bg-hue5 !scale-100"
        on:click={minus}><i class="icon:minus block"></i></button
      >
    {/if}
    <input
      type="number"
      disabled={loading}
      min="1"
      step="1"
      name="amount"
      bind:value={productQuantity}
      on:input={update}
      id={product.id}
      class="input bg-hue3 hover:bg-hue4 active:bg-hue5 w-full text-center focus:outline-none"
    />
    <button
      disabled={loading}
      class="button look-soft hue-base hover:bg-hue4 active:bg-hue5 !scale-100"
      on:click={plus}><i class="icon:plus block"></i></button
    >
  </div>
{:else}
  <button
    type="button"
    disabled={loading}
    class="button hue-brand look-solid !text-black"
    on:click={plus}
    ><i class="icon:shopping-cart block"></i>Toevoegen aan winkelwagen</button
  >
{/if}

<style>
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
</style>