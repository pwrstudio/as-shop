import { loadData } from "$lib/modules/sanity"

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
    const productListDoc = await loadData("*[_id == 'product-list'][0] {..., products[]->{...}}", {})

    const productList = productListDoc.products

    return {
        productList,
    };
}