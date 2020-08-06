<template>
  <article class="layout">
    <header>
      <router-link to="/">Home</router-link>| <router-link to="/about">About</router-link>|
      <router-link to="/example">Example</router-link>
    </header>
    <main>
      <router-view />
    </main>
    <footer>@copyright W.J</footer>
  </article>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style lang="stylus" scoped>
.layout
  display flex
  flex-direction column
  min-width 0
  flex  1 auto

@media (min-width 992px)
  .layout
    padding-left 265px
</style>
