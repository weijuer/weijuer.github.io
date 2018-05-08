<template>
  <div class="wj-layout-page">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>

    <pageHeader />
    <pageContent />
    <go2Top />
    <router-view class="app-content-view" keep-alive transition transition-mode="out-in" />
  </div>
</template>

<script>
  import pageHeader from './components/header'
  import pageContent from './components/content'
  import go2Top from './components/go2Top'
  export default {
    name: 'flex-layout',
    components: {
      pageHeader,
      pageContent,
      go2Top
    }
  }
</script>

<style lang="less">
  @import "@static/assets/global/less/app.flex";
  @import "@static/assets/global/less/components";
  @import "@static/assets/global/less/theme/default";
</style>

