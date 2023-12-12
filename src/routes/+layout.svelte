<script lang="ts">
  import Footer from "$lib/components/Footer.svelte"
  import Header from "$lib/components/Header.svelte"
  import type { PageType } from "$lib/types"

  export let data: any
  const { pageList }: { pageList: PageType[] } = data
</script>

<Header />

<main>
  <slot />
</main>

<Footer />
