<script>
  import { cart } from './cartStore'

  async function checkout() {
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

<button
  on:click={checkout}
  disabled={$cart?.items.length < 1}
  class="button hue-brand look-solid mode-base size-medium w-full"
>
  Verder naar betalen
  <i class="icon:credit-card block"></i>
</button>
