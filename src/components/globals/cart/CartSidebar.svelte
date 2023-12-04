<script lang="ts">
  import CartList from './CartList.svelte'
  import CartCheckoutButton from './CartCheckoutButton.svelte'
  import { cartIsOpen, cart } from './cartStore'

  function click() {
    $cartIsOpen = !$cartIsOpen
  }
</script>

<section
  class="z-100 mode-compact size-small bg-hue1 border-hue6 border-l-1 fixed right-0 top-0 h-full h-full max-h-screen w-full max-w-md flex-col overflow-hidden"
  class:hidden={!$cartIsOpen}
  class:flex={$cartIsOpen}
>
  <div
    class="border-b-1 border-hue6 x-between flex items-center justify-between p-4"
  >
    <h2 class="heading-secondary">Winkelmandje</h2>
    <button
      class="button m-0 p-0"
      on:click={click}><i class="icon:x w-1.3em h-1.3em"></i></button
    >
  </div>
  <div class="divide-hue6 h-full divide-y overflow-y-scroll p-4">
    <CartList />
  </div>
  <div
    class="border-t-1 mode-base size-small border-hue6 p-4 shadow-[0_-10px_30px_0px_rgba(0,0,0,0.4)]"
  >
    <div class=" y-size3 flex justify-between">
      <span class="text-hue12">Subtotaal</span>
      <!-- Create "Money" component in the future for this \/ & Order Summary / more -->
      {#await $cart}
        <p>Loading...</p>
      {:then cart}
        {#if cart}
          <p class="text">€{cart.total || 0}</p>
        {/if}
      {/await}
    </div>
    <div class="mode-base size-small">
      <CartCheckoutButton />
      <a
        class="button hue-brand text-hue11 mt-size3 w-full"
        on:click={click}
        href="/cart"
        >Bekijk winkelmandje<i class="icon:arrow-narrow-right block"></i></a
      >
    </div>
  </div>
</section>