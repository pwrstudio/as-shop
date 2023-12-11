<script lang="ts">
  import { urlFor } from "$lib/modules/sanity"
  export let images: any[]

  let index = 0

  const nextSlide = () => {
    index = (index + 1) % images.length
  }
</script>

<div class="slideshow">
  {#each images as image, i}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="slide" class:active={index === i} on:click={nextSlide}>
      <img src={urlFor(image).height(800).url()} alt="" />
    </div>
  {/each}
</div>

<style lang="scss">
  .slideshow {
    cursor: pointer;

    .slide {
      display: none;
      width: 100%;

      &.active {
        display: flex;
      }

      img {
        height: 400px;
        width: auto;
        margin-bottom: 20px;

        @media screen and (max-width: 600px) {
          height: auto;
          width: 100%;
        }
      }
    }
  }
</style>
