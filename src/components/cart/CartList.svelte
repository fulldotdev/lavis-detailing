<script lang="ts">
  import CartListCard from './CartListCard.svelte'
  import { cart } from './cartStore'
</script>

{#await $cart}
  <p>Loading...</p>
{:then cart}
  {#if cart?.items && cart.items.length > 0}
    <div class="h-full">
      {#each cart.items as item}
        <CartListCard product={item} />
      {/each}
    </div>
  {:else}
    <p class="text py-size3">Uw winkelmandje is leeg...</p>
  {/if}
{:catch error}
  <p>{error}</p>
{/await}