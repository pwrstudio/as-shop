import { loadData } from "$lib/modules/sanity"

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const post = await loadData("*[slug.current == $slug][0]", { slug: params.slug })

    return {
        post
    };
}