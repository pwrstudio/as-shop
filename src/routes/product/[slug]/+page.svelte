<script type="ts">
  import { onMount } from "svelte"
  import Client from "shopify-buy"

  onMount(() => {
    var client = Client.buildClient({
      domain: "bingomerch.myshopify.com",
      storefrontAccessToken: "90a12c5cdb1c447183d70c3f8539d10d",
    })

    console.log(client)

    const PRODUCT_ID = btoa("gid://shopify/Product/8313714049290")

    client.product
      .fetch(PRODUCT_ID)
      .then(product => {
        // Do something with the product
        console.log(product)
      })
      .catch(error => {
        // Handle any errors
        console.error(error)
      })

    // ShopifyBuy.UI.onReady(client).then(function (ui) {
    //   ui.createComponent("product", {
    //     id: "8313714049290",
    //     node: document.getElementById("product-component-1698142082502"),
    //     moneyFormat: "%E2%82%AC%7B%7Bamount%7D%7D",
    //     options: {
    //       product: {
    //         styles: {
    //           product: {
    //             "@media (min-width: 601px)": {
    //               "max-width": "calc(25% - 20px)",
    //               "margin-left": "20px",
    //               "margin-bottom": "50px",
    //             },
    //             "carousel-button": {
    //               display: "none",
    //             },
    //           },
    //           button: {
    //             "font-size": "14px",
    //             "padding-top": "15px",
    //             "padding-bottom": "15px",
    //             ":hover": {
    //               "background-color": "#000000",
    //             },
    //             "background-color": "#000000",
    //             ":focus": {
    //               "background-color": "#000000",
    //             },
    //             "border-radius": "0px",
    //             "padding-left": "45px",
    //             "padding-right": "45px",
    //           },
    //           quantityInput: {
    //             "font-size": "14px",
    //             "padding-top": "15px",
    //             "padding-bottom": "15px",
    //           },
    //         },
    //         contents: {
    //           img: false,
    //           imgWithCarousel: true,
    //         },
    //         text: {
    //           button: "Add to cart",
    //         },
    //       },
    //       productSet: {
    //         styles: {
    //           products: {
    //             "@media (min-width: 601px)": {
    //               "margin-left": "-20px",
    //             },
    //           },
    //         },
    //       },
    //       modalProduct: {
    //         contents: {
    //           img: false,
    //           imgWithCarousel: true,
    //           button: false,
    //           buttonWithQuantity: true,
    //         },
    //         styles: {
    //           product: {
    //             "@media (min-width: 601px)": {
    //               "max-width": "100%",
    //               "margin-left": "0px",
    //               "margin-bottom": "0px",
    //             },
    //           },
    //           button: {
    //             "font-size": "14px",
    //             "padding-top": "15px",
    //             "padding-bottom": "15px",
    //             ":hover": {
    //               "background-color": "#000000",
    //             },
    //             "background-color": "#000000",
    //             ":focus": {
    //               "background-color": "#000000",
    //             },
    //             "border-radius": "0px",
    //             "padding-left": "45px",
    //             "padding-right": "45px",
    //           },
    //           quantityInput: {
    //             "font-size": "14px",
    //             "padding-top": "15px",
    //             "padding-bottom": "15px",
    //           },
    //         },
    //         text: {
    //           button: "Add to cart",
    //         },
    //       },
    //       option: {},
    //       cart: {
    //         styles: {
    //           button: {
    //             "font-size": "14px",
    //             "padding-top": "15px",
    //             "padding-bottom": "15px",
    //             ":hover": {
    //               "background-color": "#000000",
    //             },
    //             "background-color": "#000000",
    //             ":focus": {
    //               "background-color": "#000000",
    //             },
    //             "border-radius": "0px",
    //           },
    //           title: {
    //             color: "#e82421",
    //           },
    //           header: {
    //             color: "#e82421",
    //           },
    //           lineItems: {
    //             color: "#e82421",
    //           },
    //           subtotalText: {
    //             color: "#e82421",
    //           },
    //           subtotal: {
    //             color: "#e82421",
    //           },
    //           notice: {
    //             color: "#e82421",
    //           },
    //           currency: {
    //             color: "#e82421",
    //           },
    //           close: {
    //             color: "#e82421",
    //             ":hover": {
    //               color: "#e82421",
    //             },
    //           },
    //           empty: {
    //             color: "#e82421",
    //           },
    //           noteDescription: {
    //             color: "#e82421",
    //           },
    //           discountText: {
    //             color: "#e82421",
    //           },
    //           discountIcon: {
    //             fill: "#e82421",
    //           },
    //           discountAmount: {
    //             color: "#e82421",
    //           },
    //         },
    //         text: {
    //           total: "Subtotal",
    //           button: "Checkout",
    //         },
    //       },
    //       toggle: {
    //         styles: {
    //           toggle: {
    //             "background-color": "#000000",
    //             ":hover": {
    //               "background-color": "#000000",
    //             },
    //             ":focus": {
    //               "background-color": "#000000",
    //             },
    //           },
    //           count: {
    //             "font-size": "14px",
    //           },
    //         },
    //       },
    //       lineItem: {
    //         styles: {
    //           variantTitle: {
    //             color: "#e82421",
    //           },
    //           title: {
    //             color: "#e82421",
    //           },
    //           price: {
    //             color: "#e82421",
    //           },
    //           fullPrice: {
    //             color: "#e82421",
    //           },
    //           discount: {
    //             color: "#e82421",
    //           },
    //           discountIcon: {
    //             fill: "#e82421",
    //           },
    //           quantity: {
    //             color: "#e82421",
    //           },
    //           quantityIncrement: {
    //             color: "#e82421",
    //             "border-color": "#e82421",
    //           },
    //           quantityDecrement: {
    //             color: "#e82421",
    //             "border-color": "#e82421",
    //           },
    //           quantityInput: {
    //             color: "#e82421",
    //             "border-color": "#e82421",
    //           },
    //         },
    //       },
    //     },
    //   })
    // })
  })
</script>

PRODUCT PAGE
