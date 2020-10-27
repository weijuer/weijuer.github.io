<template>
  <article class="app-layout">
    <w-header />
    <main class="app-main">
      <router-view />
    </main>
    <w-footer />
  </article>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Layout',
  components: {
    [Header.name]: Header,
    [Footer.name]: Footer,
  },
}
</script>

<style lang="stylus" scoped>
.app-layout {
  display: flex
  flex-direction: column
  flex: 1 auto
  min-width: 0
  transition: all 0.2s linear

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

    .app-header {
      display: flex
      justify-content: space-between
      height: 65px
      position: relative
      z-index: 2

      &.header-fixed {
        position: fixed
        top: 0
        right: 0
        left: 0
        z-index: 97
      }
    }
  }
}
</style>
