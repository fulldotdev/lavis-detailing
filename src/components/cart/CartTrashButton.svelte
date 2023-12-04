<script>
  import { cart } from './cartStore'

  export let productId

  async function getItem() {
    return $cart?.items?.find((item) => item?.id == productId)
  }

  async function trash() {
    const item = await getItem()

    const newCartItems = $cart.items.filter((cartItem) => {
      if (cartItem?.id !== item?.id) {
        return true
      }
      return false
    })

    cart.set({ items: newCartItems })
  }
</script>

<button
  class="button look-soft hue-base hover:bg-hue4 active:bg-hue5 ml-auto w-fit !scale-100"
  on:click={trash}><i class="icon:trash block"></i></button
>