<script lang="ts">
  import type { PageType } from "$lib/types"
  export let pageList: PageType[]

  let inverted = false

  const switchColor = () => {
    const root = document.documentElement
    if (inverted) {
      root.style.setProperty("--foreground", "var(--black)")
      root.style.setProperty("--background", "var(--white)")
      inverted = false
    } else {
      root.style.setProperty("--foreground", "var(--white)")
      root.style.setProperty("--background", "var(--black)")
      inverted = true
    }
  }
</script>

<header>
  <button on:click={switchColor}>AS SHOP</button>
</header>

<style lang="scss">
  header {
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;
    border-bottom: 1px solid grey;

    button {
      font-size: var(--font-size);
      padding: 20px;
    }
  }
</style>
