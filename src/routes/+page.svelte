<script lang="ts">
  import type { ProductType } from "$lib/types"
  import Product from "$lib/components/Product.svelte"
  export let data: any
  const { productList }: { productList: ProductType[] } = data
</script>

<!-- <Hero /> -->

{#each productList as product}
  <Product {product} />
{/each}
