<script lang="ts">
  import CartList from './CartList.svelte'
  import CartCheckoutButton from './CartCheckoutButton.svelte'
  import { cartIsOpen } from '@stores/nanoStore'
  import CartSummary from './CartSummary.svelte'
</script>

{#if $cartIsOpen}
  <!-- Shadow -->
  <button
    class="fixed absolute inset-0 z-20 h-full w-full bg-black/50"
    on:click={() => cartIsOpen.set(!$cartIsOpen)}
  />

  <!-- Cart -->
  <aside
    class="z-100 mode-compact size-medium bg-hue2 border-hue6 fixed bottom-0 right-0 top-0 flex h-full h-full max-h-screen w-full max-w-lg flex-col border-l"
  >
    <header
      class="border-b-1 border-hue6 x-between px-size5 py-size4 flex items-center justify-between"
    >
      <h4 class="text-hue11 !normal-case">Winkelwagen</h4>
      <button
        class="button look-soft p-size2"
        on:click={() => cartIsOpen.set(!$cartIsOpen)}
      >
        <i class="icon:x h-6 w-6">close</i>
      </button>
    </header>
    <CartList />
    <CartSummary />
  </aside>
{/if}
