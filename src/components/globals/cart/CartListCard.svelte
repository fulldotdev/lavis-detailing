<script lang="ts">
  import CartUpdateButton from './CartUpdateButton.svelte'
  import CartRemoveButton from './CartRemoveButton.svelte'

  // COMPONENT ISN'T FULLY FUNCTIONAL WITH VARIANTS YET, (price, variantlabel & name does not get imported well yet)

  interface ProductExport {
    id: string
    quantity: number
    title: string
    price: number
    images?: any
    stripeDefaultPrice: string
  }

  export let product: ProductExport
</script>

<div class="py-size5 gap-size5 flex w-full">
  <div class="w-40">
    <img
      class="max-h-full object-contain"
      src={product.images[0].image.url}
      alt="Not found"
    />
  </div>
  <div class="w-full">
    <h4 class="!normal-case">{product.title}</h4>
    <!-- <div class="text">Maat: XL, Groefdiepte: 38mm</div> // VARIANT CHOICES / OPTIONS -->
    <!-- Settings? -->
    <!-- <p class="text y-center mt-auto flex">
      <i class="icon:check hue-accent text-hue9 mr-size1 block"></i>
      In voorraad
    </p> -->
    <div class="gap-size5 flex items-center justify-between">
      <p>€{product.price}</p>
      <CartUpdateButton
        {product}
        showQuantity={true}
      ></CartUpdateButton>
    </div>
  </div>
  <div class="gap-size3 flex flex-col">
    <!-- <button>
      <i class="icon:trash-x text-hue11 w-1.3em h-1.3em ml-auto block"></i>
    </button> -->
    <!-- <CartRemoveButton productId={product.id} />
    <CartUpdateButton
      {product}
      showQuantity={true}
    /> -->
  </div>
</div>
