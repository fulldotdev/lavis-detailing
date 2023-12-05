<script>
  import { cart } from './cartStore'

  async function checkout() {
    // const response = await fetch(process.env.PUBLIC_SERVER_URL + `/api/testa`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     cart: $cart,
    //   }),
    // })
    // const data = await response.json()
    // const url = data.url
    // window.location.replace(url)
  }
</script>

<button
  on:click={checkout}
  disabled={$cart.length <= 0}
  class="button hue-brand look-solid size-large w-full !text-black"
>
  Verder naar bestellen
  <i class="icon:credit-card block"></i>
</button>
