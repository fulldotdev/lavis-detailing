<script>
  import { totalPrice } from '@stores/cartStore'
  import CartCheckoutButton from './CartCheckoutButton.svelte'
</script>

<div class="p-size5 gap-size5 border-hue6 mt-auto flex flex-col border-t">
  <div class="flex items-center justify-between">
    <span>Totaal:</span>
    <span class="text-hue12">€{$totalPrice.toFixed(2) || 0}</span>
  </div>
  <CartCheckoutButton />
  <p class="text-size1">Verzendkosten worden berekend bij het afrekenen</p>
</div>
