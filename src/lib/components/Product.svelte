<script lang="ts">
  import { onMount } from "svelte"
  import type { ProductType } from "$lib/types"
  // import Client from "shopify-buy"
  import { urlFor } from "$lib/modules/sanity"
  import Slideshow from "./Slideshow.svelte"

  export let product: ProductType

  let embedEl: HTMLDivElement

  onMount(() => {
    var scriptURL =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js"
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit()
      } else {
        loadScript()
      }
    } else {
      loadScript()
    }

    function loadScript() {
      var script = document.createElement("script")
      script.async = true
      script.src = scriptURL
      ;(
        document.getElementsByTagName("head")[0] ||
        document.getElementsByTagName("body")[0]
      ).appendChild(script)
      script.onload = ShopifyBuyInit
    }

    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: "bingomerch.myshopify.com",
        storefrontAccessToken: "90a12c5cdb1c447183d70c3f8539d10d",
      })

      if (product.shopifyId) {
        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent("product", {
            id: product.shopifyId,
            node: embedEl,
            moneyFormat: "%E2%82%AC%7B%7Bamount%7D%7D",
            options: {
              product: {
                iframe: false,
              },
            },
          })
        })
      }
    }
  })
</script>

<div class="product">
  {#if product.images?.length > 0}
    <Slideshow images={product.images} />
  {:else if product.featuredImage}
    <img
      class:out={!product.inStock}
      src={urlFor(product.featuredImage).height(600).quality(100).url()}
      alt={product.title}
    />
  {/if}
  <div bind:this={embedEl} />

  {#if !product.inStock}
    <div class="sold-out">Sold Out</div>
  {/if}
</div>

<style lang="scss">
  :global(.shopify-buy__product-img-wrapper) {
    display: none !important;
  }

  :global(.shopify-buy__select-icon) {
    display: none;
  }

  :global(.visuallyhidden) {
    display: none;
  }

  .product {
    width: 100%;
    // height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
    position: relative;
    padding-bottom: 100px;
    border-bottom: 1px solid grey;

    img {
      height: 400px;
      width: auto;
      margin-bottom: 20px;

      &.out {
        opacity: 0.7;
      }

      @media screen and (max-width: 600px) {
        height: auto;
        width: 100%;
      }
    }

    div {
      text-align: center;
    }
  }

  .sold-out {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    background: black;
    color: white;
    padding: 20px;
    font-size: 2em;
  }

  :global(.swiper) {
    height: 100%;
    --swiper-theme-color: black;
  }

  :global(.inner img) {
    max-width: 100%;
    max-height: 80vh;
  }
</style>
