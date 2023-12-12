<script lang="ts">
  enum State {
    Normal,
    Invert,
    Strobe,
  }

  let state = State.Normal

  // Normal => Invert => Strobe => Normal => ...
  const switchColor = () => {
    const root = document.documentElement
    const body = document.body
    body.classList.remove("strobe")
    if (state === State.Normal) {
      root.style.setProperty("--foreground", "var(--white)")
      root.style.setProperty("--background", "var(--black)")
      state = State.Invert
    } else if (state === State.Invert) {
      body.classList.add("strobe")
      state = State.Strobe
    } else if (state === State.Strobe) {
      root.style.setProperty("--foreground", "var(--black)")
      root.style.setProperty("--background", "var(--white)")
      state = State.Normal
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
