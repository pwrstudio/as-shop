<script lang="ts">
  import type { PageType } from "$lib/types"
  export let pageList: PageType[]
  console.log("pageList", pageList)
</script>

<header>
  <h1>AMNESIA SCANNER</h1>
  <div class="menu">
    {#each pageList as page}
      <a href={"/page/" + page.slug.current}>{page.title}</a>
    {/each}
  </div>
</header>

<style lang="scss">
  header {
    text-align: center;

    .menu {
      a {
        margin-right: 10px;
      }
    }
  }
</style>
