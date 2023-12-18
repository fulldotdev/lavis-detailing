<script lang="ts">
  import { cart } from '@stores/cartStore'

  export let data: any

  async function trash() {
    const index = $cart.findIndex(
      (item) => item?.stripePriceId == data.stripePriceId
    )
    const cartCopy = [...$cart]
    cartCopy.splice(index, 1)
    cart.set(cartCopy)
  }
</script>

<button
  class="button look-soft hue-base hover:bg-hue4 active:bg-hue5 ml-auto w-fit !scale-100"
  on:click={trash}><i class="icon:trash block"></i></button
>
