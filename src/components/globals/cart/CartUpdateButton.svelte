<script lang="ts">
  import { cart } from './cartStore'
  import CartRemoveButton from './CartRemoveButton.svelte'

  export let data: any

  $: index = $cart.findIndex(
    (item) => item?.stripePriceId == data?.stripePriceId
  )

  $: quantity = $cart[index]?.quantity

  $: if (quantity <= 0) removeItem()

  const createItem = () => {
    if (index !== -1) return
    cart.set([...$cart, { ...data, quantity: 1 }])
  }

  const removeItem = () => {
    const cartCopy = [...$cart]
    cartCopy.splice(index, 1)
    cart.set(cartCopy)
    index = -1
  }

  const changeQuantity = (number: number) => {
    const cartCopy = [...$cart]
    let currentQuantity = cartCopy[index]?.quantity
    cartCopy[index] = { ...data, quantity: (currentQuantity += number) }
    cart.set(cartCopy)
  }

  const setQuantity = (newQuantity: number) => {
    const cartCopy = [...$cart]
    cartCopy[index] = { ...data, quantity: newQuantity }
    cart.set(cartCopy)
  }

  const handleInput = (e: any) => {
    const inputValue = e.target ? +e.target.value : 0
    setQuantity(Math.max(inputValue, 1))
  }
</script>

{#if !quantity || quantity <= 0}
  <button
    class="button hue-brand look-solid !text-black"
    on:click={createItem}
  >
    <i class="icon:shopping-cart block"></i>
    Toevoegen aan winkelwagen
  </button>
{:else}
  <div class="hue-base bg-hue3 mt-auto flex grow-0 rounded py-0">
    {#if quantity <= 1}
      <CartRemoveButton {data} />
    {:else}
      <button
        class="button look-soft hue-base hover:bg-hue4 active:bg-hue5 !scale-100"
        on:click={() => changeQuantity(-1)}
      >
        <i class="icon:minus block"></i>
      </button>
    {/if}
    <input
      type="number"
      min="1"
      step="1"
      value={quantity}
      on:input={handleInput}
      class="input max-w-30 bg-hue3 hover:bg-hue4 active:bg-hue5 !appearance-none text-center focus:outline-none"
    />
    <button
      class="button look-soft hue-base hover:bg-hue4 active:bg-hue5 !scale-100"
      on:click={() => changeQuantity(1)}><i class="icon:plus block"></i></button
    >
  </div>
{/if}
