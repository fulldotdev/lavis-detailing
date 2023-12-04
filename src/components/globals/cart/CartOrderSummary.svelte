<script>
  import { cart } from 'src/modules/cart/cartStore'
  import CartCheckoutButton from './CartCheckoutButton.svelte'

  let className = ''
  export { className as class }
</script>

<div class="mode-compact size-medium {className}">
  <div class="divide-hue6 divide-y">
    <h4 class="pb-size3 heading-secondary">Overzicht</h4>
    {#if $cart}
      <div class="size-medium py-size3 flex justify-between">
        <span class="text-primary">Subtotaal</span>
        <!-- <span class="text-primary">€{$cart.total ? $cart.total : '0'}</span> -->
      </div>
      <div class="size-medium py-size3 flex justify-between">
        <span class="text-primary">BTW</span>
        <!-- <span class="text-primary"
          >€{$cart.total ? ($cart.total / 100) * 21 : '0'}</span
        > -->
      </div>
      <div class="size-medium py-size3 flex justify-between">
        <span class="text-primary">Totaalbedrag incl. BTW</span>
        <!-- <span class="text-primary"
          >€{$cart.total ? $cart.total + ($cart.total / 100) * 21 : '0'}</span
        > -->
      </div>
    {/if}
  </div>
  <CartCheckoutButton />
</div>