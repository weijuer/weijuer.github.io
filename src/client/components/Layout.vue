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

    <pageHeader>header</pageHeader>
    <router-view class="app-content-view" keep-alive transition transition-mode="out-in" />
  </div>
</template>

<script>
  import pageHeader from '@/components/header'
  export default {
    name: 'layout',
    components: {
      pageHeader
    }
  }
</script>

<!--<style lang="less">
  @import "../assets/global/less/style";
</style>-->

