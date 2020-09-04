<template>
  <article class="app-layout">
    <header class="app-header">
      <div class="container">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>|
        <router-link to="/example">Example</router-link>
      </div>
    </header>
    <main class="app-main">
      <router-view />
    </main>
    <footer class="app-footer">@copyright W.J</footer>
  </article>
</template>

<script>
export default {
  name: 'Layout',
}
</script>

<style lang="stylus" scoped>
.app-layout {
  display: flex
  flex-direction: column
  flex: 1 auto
  min-width: 0

  .app-header {
    display: flex
  }

  .app-main {
    flex: auto
  }

  .app-footer {
    flex-shrink: 0
  }
}

@media (min-width: 992px) {
  .app-layout {
    padding-left: 265px
  }
}
</style>
