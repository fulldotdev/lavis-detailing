<script>
  import Stripe from 'stripe'
  import { onMount } from 'svelte'

  const stripe = new Stripe('rk_test_51M1cdFAtGAMIOG90fmmPOJFnCxOuYRiR9RvwBemfjzVonniieNQ4GBWEwZrDkUhh6nXka5I8t346cTnRbSM7BWr800fszvOfir')

  onMount(async () => {
    const checkoutSession = await stripe.checkout.sessions.create({
      success_url: 'http://localhost:4321/',
      line_items: [
        {
          price: 'price_1OJxwPAtGAMIOG90qN5tIZMh',
          quantity: 2,
        },
      ],
      mode: 'payment',
    })

    window.location.replace(checkoutSession.url)
  })
</script>

aaa