<script lang="ts">
  import type { HTMLAttributes, VariantProps } from '@types'
  import { cva } from 'cva'
  import { size as sizeVariant } from '@variants'
  import { onMount } from 'svelte'

  let wrapper
  let carousel

  let isLeft = true
  let isRight = true

  function checkScroll() {
    isLeft = carousel.scrollLeft <= 0
    isRight = carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth
  }

  function scroll(direction) {
    carousel.scroll({
      left: carousel.scrollLeft + wrapper.clientWidth * direction * 0.8,
      behavior: 'smooth',
    })
  }
  onMount(() => {
    checkScroll()
  })

  interface $$Props extends VariantProps<typeof variant> {}

  // export interface Props
  //   extends VariantProps<typeof variant>,
  //     HTMLAttributes<'div'> {}

  // Define component styles
  const variant = cva({
    base: 'area-list mode-compact',
    variants: {
      size: sizeVariant,
    },
  })

  export let size: $$Props['size'] = 'medium'
  let className = ''
  export { className as class }
</script>

<div
  class="area-list mode-compact group relative w-full {variant({
    size,
    className,
  })}"
  bind:this={wrapper}
>
  <button
    class="md:button button look-surface hue-brand top-25 hover:bg-hue3 active:bg-hue4 absolute absolute left-0 z-40 hidden -translate-y-1/2 shadow-lg backdrop-blur-lg"
    class:hidden={isLeft}
    on:click={() => scroll(-1)}
  >
    <i class="icon:arrow-narrow-left">scroll</i>
  </button>
  <div
    class="px-wrapper -mx-wrapper pb-size3 max-w-100vw [&_.card]:(shrink-0 text-size2) size-small:[&_.card]:(w-18em max-w-46%) gap-size5 [&_.card]:(w-20em max-w-68%) size-large:[&_.card]:(w-26em max-w-90%) relative flex flex grow-0 snap-x snap-center flex-row items-start justify-start overflow-hidden overflow-x-auto scroll-smooth"
    bind:this={carousel}
    on:scroll={checkScroll}
  >
    <slot />
  </div>
  <button
    class="md:button look-surface hue-brand top-25 hover:bg-hue3 active:bg-hue4 absolute absolute right-0 z-40 hidden -translate-y-1/2 shadow-lg backdrop-blur-lg"
    class:hidden={isRight}
    on:click={() => scroll(+1)}
  >
    <i class="icon:arrow-narrow-right">scroll</i>
  </button>
</div>

<!-- <style>
  .layout-carousel::-webkit-scrollbar {
    display: none;
  }
</style> -->
