<script lang="ts">
  import { cart } from './cartStore'
  import CartRemoveButton from './CartRemoveButton.svelte'

  export let data: any

  $: index = $cart.findIndex(
    (item) => item?.stripePriceId == data.stripePriceId
  )

  let quantity: number = 0

  const createItem = () =>
    cart.update(($cart) => {
      $cart.push({ quantity: 1, ...data })
      quantity = 1
      return $cart
    })

  const updateQuantity = (newQuantity: number) =>
    cart.update(($cart) => {
      $cart[index].quantity = newQuantity
      quantity = $cart[index].quantity
      return $cart
    })
</script>

<button>click me</button>

cart: {JSON.stringify($cart)}
<br />
index: {JSON.stringify(index)}
<br />
quantity: {JSON.stringify(quantity)}

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
        on:click={() => quantity--}
      >
        <i class="icon:minus block"></i>
      </button>
    {/if}
    <input
      type="number"
      min="0"
      step="1"
      bind:value={quantity}
      class="input bg-hue3 hover:bg-hue4 active:bg-hue5 text-center focus:outline-none"
    />
    <button
      class="button look-soft hue-base hover:bg-hue4 active:bg-hue5 !scale-100"
      on:click={() => quantity++}><i class="icon:plus block"></i></button
    >
  </div>
{/if}
