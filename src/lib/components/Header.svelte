<script lang="ts">
  import type { PageType } from "$lib/types"
  export let pageList: PageType[]
  console.log("pageList", pageList)
</script>

<header>
  <h1>AMNESIA SCANNER</h1>
  <!-- <div class="menu">
    {#each pageList as page}
      <a href={"/page/" + page.slug.current}>{page.title}</a>
    {/each}
  </div> -->
</header>

<style lang="scss">
  header {
    text-align: center;
    border-bottom: 1px solid black;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 10rem;
    }

    .menu {
      a {
        margin-right: 10px;
      }
    }
  }
</style>
