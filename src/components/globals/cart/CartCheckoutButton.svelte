<script>
   import { cart } from '@stores/cartStore'
  import Stripe from 'stripe'
  const stripe = new Stripe(
    'rk_test_51M1cdFAtGAMIOG90fmmPOJFnCxOuYRiR9RvwBemfjzVonniieNQ4GBWEwZrDkUhh6nXka5I8t346cTnRbSM7BWr800fszvOfir'
  )
  
  const handleOnclick = async () => {
    const lineItems = $cart.map((item) => {
      return {
        price: item._stripe_price_id,
        quantity: item.quantity,
      }
    })
    const checkoutSession = await stripe.checkout.sessions.create({
      success_url: 'http://localhost:4321/',
      line_items: lineItems,
      mode: 'payment',
    })
    window.location.replace(checkoutSession.url)
  }
</script>

<button
  on:click={handleOnclick}
  disabled={$cart.length <= 0}
  class="button-primary hue-brand look-solid size-medium mode-base"
>   Verder naar bestellen
<i class="icon:credit-card block"></i> 
</button>
