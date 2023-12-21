<script>
  import { cartIsOpen, totalQuantity } from '@stores/cartStore'

  function onClick() {
    cartIsOpen.set(true)
  }
</script>

<button
  class="button-secondary hue-base"
  on:click={onClick}
>
  {#if $totalQuantity}
    <p
      class="text-size1 hue-brand bg-hue3 absolute right-3/4 top-4 z-10 rounded-full bg-opacity-50 p-1"
    >
      {$totalQuantity > 9 ? '9+' : $totalQuantity}
    </p>
  {/if}
  <i class="icon:shopping-cart text-size2 h-1.4em w-1.4em z-0 block"></i>
</button>
