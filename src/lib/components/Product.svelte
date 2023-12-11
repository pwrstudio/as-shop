<script lang="ts">
  import { onMount } from "svelte"
  import type { ProductType } from "$lib/types"
  import Client from "shopify-buy"
  import { urlFor } from "$lib/modules/sanity"

  export let product: ProductType

  console.log("product", product)

  onMount(() => {
    var client = Client.buildClient({
      domain: "bingomerch.myshopify.com",
      storefrontAccessToken: "90a12c5cdb1c447183d70c3f8539d10d",
    })

    console.log(client)

    const PRODUCT_ID = btoa("gid://shopify/Product/8313714049290")

    //   client.product
    //     .fetch(PRODUCT_ID)
    //     .then(product => {
    //       // Do something with the product
    //       console.log(product)
    //     })
    //     .catch(error => {
    //       // Handle any errors
    //       console.error(error)
    //     })
  })
</script>

<div class="product">
  <a href="/product/{product.slug.current}">
    {#if product.featuredImage}
      <img
        src={urlFor(product.featuredImage).height(600).quality(100).url()}
        alt={product.title}
      />
    {/if}
    <div>{product.title}</div>
  </a>
</div>

<style lang="scss">
  .product {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      height: 400px;
      width: auto;
    }

    div {
      text-align: center;
    }
  }
</style>
