<script lang="ts">
  import CartUpdateButton from './CartUpdateButton.svelte'

  export let data: any
</script>

{#if data}
  <!-- content here -->
  <div class="py-size6 gap-size5 flex w-full">
    <div class="w-40">
      <img
        class="max-h-full object-contain"
        src={data.images[0].src}
        alt={data.images[0].alt}
      />
    </div>
    <div class="gap-size5 flex w-full flex-col">
      <h4 class="!normal-case">{data.title}</h4>
      <div class="gap-size5 flex items-center justify-between">
        <p class="text-hue12">€{data.price.toFixed(2)}</p>
        <CartUpdateButton {data}></CartUpdateButton>
      </div>
    </div>
  </div>
{/if}
