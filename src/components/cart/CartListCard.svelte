<script lang="ts">
  import AddToCartButton from './AddToCartButton.svelte'
  import CartTrashButton from './CartTrashButton.svelte'

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

<div class="py-size4 flex w-full flex-row">
  <div class="w-48">
    <img
      class="max-h-full object-contain"
      src={product.images[0].image.url}
      alt="Not found"
    />
  </div>
  <div class="ml-size3 w-full">
    <h4 class="subheading text-hue12">{product.title}</h4>
    <!-- <div class="text">Maat: XL, Groefdiepte: 38mm</div> // VARIANT CHOICES / OPTIONS -->
    <!-- Settings? -->
    <div class="text">€{product.price}</div>
    <!-- <p class="text y-center mt-auto flex">
      <i class="icon:check hue-accent text-hue9 mr-size1 block"></i>
      In voorraad
    </p> -->
  </div>
  <div class="gap-size3 flex flex-col">
    <!-- <button>
      <i class="icon:trash-x text-hue11 w-1.3em h-1.3em ml-auto block"></i>
    </button> -->
    <CartTrashButton productId={product.id} />
    <AddToCartButton
      {product}
      showQuantity={true}
    />
  </div>
</div>