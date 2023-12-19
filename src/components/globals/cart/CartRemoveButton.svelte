<script lang="ts">
  import { cart } from '@stores/nanoStore'

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
  class="button-secondary hue-base !scale-100"
  on:click={trash}><i class="icon:trash block"></i></button
>
