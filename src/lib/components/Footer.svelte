<script lang="ts">
  import type { PageType } from "$lib/types"
  export let pageList: PageType[]
  console.log("pageList", pageList)
</script>

<footer>
  <div>© 2023</div>
</footer>

<style lang="scss">
  footer {
    text-align: center;
    border-top: 1px solid grey;
    padding-top: 50px;
    padding-bottom: 50px;
  }
</style>
