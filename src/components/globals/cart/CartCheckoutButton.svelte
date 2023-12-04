<script>
  import { cart } from './cartStore'

  async function checkout() {
    console.log('checkout')
    // if (customer.cart.items.length === 0) return
    const response = await fetch(process.env.PUBLIC_SERVER_URL + `/api/testa`, {
      method: 'POST',
      body: JSON.stringify({
        cart: $cart,
      }),
    })
    const data = await response.json()
    const url = data.url
    window.location.replace(url)
  }
</script>

{#if $cart}
  <button
    on:click={checkout}
    disabled={$cart?.items ? false : true}
    class="button mt-size3 hue-brand look-solid w-full !text-black"
    >Verder naar bestellen <i class="icon:credit-card block"></i></button
  >
{/if}