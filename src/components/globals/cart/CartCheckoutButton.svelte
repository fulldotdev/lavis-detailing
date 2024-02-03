<script>
  import { cart } from '@stores/cartStore'
  import Stripe from 'stripe'
  const stripe = new Stripe(
   import.meta.env.PUBLIC_STRIPE_CHECKOUT_KEY
  )

  const handleOnclick = async () => {
    const lineItems = $cart.map((item) => {
      const productData = {
        name: item.title,
        description: item.description,
      }
      return {
        price_data: {
          currency: 'eur',
          product_data: productData,
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      }
    })

    const checkoutSession = await stripe.checkout.sessions.create({
      success_url: `${import.meta.env.PUBLIC_APP_URL}/bestelling-ontvangen`,
      line_items: lineItems,
      mode: 'payment',
      "customer_creation": "always",
      shipping_address_collection: {
        allowed_countries: ['NL'],
    }   ,  
      shipping_options: [{
        shipping_rate: 'shr_1Ofh0UA46xQDCsGFCdg3rwfz'
      }],
    })
    window.location.replace(checkoutSession.url)
  }
</script>

<button
  on:click={handleOnclick}
  disabled={$cart.length <= 0}
  class="button-primary hue-brand look-solid size-medium mode-base"
>
  Verder naar bestellen
  <i class="icon:credit-card block"></i>
</button>
