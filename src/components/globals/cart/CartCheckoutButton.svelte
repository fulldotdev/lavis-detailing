<script>
  import { cart } from './cartStore'
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
  disabled={$cart.length <= 0}

  on:click={handleOnclick}
  class="button hue-brand look-solid size-medium mode-base w-full !text-black"
>
  Verder naar bestellen
  <i class="icon:credit-card block"></i>
</button>
