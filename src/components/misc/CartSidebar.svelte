<script lang="ts">
  import CartList from './CartList.svelte'
  import CartCheckoutButton from './CartCheckoutButton.svelte'
  import { cartIsOpen, cart } from '@stores/cartStore'
  import CartSummary from './CartSummary.svelte'

  function toggleCart() {
    $cartIsOpen = !$cartIsOpen
  }
</script>

{#if $cartIsOpen}
  <div
    class="z-100 mode-compact size-medium bg-hue2 border-hue6 fixed bottom-0 right-0 top-0 flex h-full h-full max-h-screen w-full max-w-lg flex-col border-l"
  >
    <header
      class="border-b-1 border-hue6 x-between px-size5 py-size4 flex items-center justify-between"
    >
      <h4 class="text-hue11 !normal-case">Winkelwagen</h4>
      <button
        class="button look-soft p-size2"
        on:click={toggleCart}
      >
        <i class="icon:x h-6 w-6"> </i>
      </button>
    </header>

    <CartList />
    <CartSummary />
  </div>
{/if}
