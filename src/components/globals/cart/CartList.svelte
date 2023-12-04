<script lang="ts">
  import CartListCard from './CartListCard.svelte'
  import { cartIsOpen, cart } from './cartStore'

  function toggleCart() {
    $cartIsOpen = !$cartIsOpen
  }
</script>

<div class="divide-hue6 px-size5 divide-y overflow-y-auto">
  {#if $cart.items.length > 0}
    {#each $cart.items as item}
      <CartListCard product={item} />
    {/each}
  {:else}
    <div class="py-100px px-size5 gap-size5 flex flex-col items-center">
      <i class="icon:shopping-cart h-2em w-2em rotate-45"></i>
      <p class="text">Uw winkelwagen is leeg...</p>
      <button
        class="button look-soft"
        on:click={toggleCart}>Verder winkelen</button
      >
    </div>
  {/if}
</div>
