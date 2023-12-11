<script lang="ts">
  import { onMount } from "svelte"
  import type { ProductType } from "$lib/types"
  // import Client from "shopify-buy"
  export let data: any
  const { post }: { post: ProductType } = data

  console.log("product", post)

  onMount(() => {
    // var client = Client.buildClient({
    //   domain: "bingomerch.myshopify.com",
    //   storefrontAccessToken: "90a12c5cdb1c447183d70c3f8539d10d",
    // })
    // console.log(client)
    // const PRODUCT_ID = btoa("gid://shopify/Product/" + post.shopifyId)
    // client.product
    //   .fetch(PRODUCT_ID)
    //   .then(product => {
    //     // Do something with the product
    //     console.log(product)
    //   })
    //   .catch(error => {
    //     // Handle any errors
    //     console.error(error)
    //   })
  })
</script>

<div class="product">
  <div id="product-component-1698142082502"></div>
</div>
