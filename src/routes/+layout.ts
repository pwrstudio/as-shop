import { loadData } from "$lib/modules/sanity"

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
    const pageListDoc = await loadData("*[_id == 'page-list'][0] {..., pages[]->{...}}", {})

    const pageList = pageListDoc.pages

    return {
        pageList
    };
}