<script>
  import { cartIsOpen, totalItems, totalPrice } from './cartStore'

  function click() {
    $cartIsOpen = !$cartIsOpen
  }

  // let cartAmount = 0

  // async function calcAmount() {
  //   let count = 0
  //   if ($cart?.items) {
  //     $cart.items.forEach((element) => {
  //       count += element.quantity
  //     })
  //   }
  //   cartAmount = count
  // }

  // onMount(async () => {
  //   await calcAmount()
  // })

  // $: {
  //   if ($cart) {
  //     calcAmount()
  //   }
  // }
</script>

<button
  class="button look-soft relative"
  on:click={click}
>
  {#if $totalItems}
    <p
      class="text-size1 hue-brand bg-hue3 absolute right-3/4 top-4 z-10 rounded-full bg-opacity-50 p-1"
    >
      {$totalItems > 9 ? '9+' : $totalItems}
    </p>
  {/if}
  <i class="icon:shopping-cart text-size2 h-1.4em w-1.4em z-0 block"></i>
</button>
