<template>
  <div id="app" :class="['wj-app-page', 'wj-layout-header-fixed', 'wj-layout-header-topbar', {'wj-page-on-scroll': $store.state.isPageScroll}]">
    <pageHeader />
    <pageContent />
    <go2Top />
  </div>
</template>

<script>
  // 引入公共布局组件
  import pageHeader from './components/header'
  import pageContent from './components/content'
  import go2Top from './components/go2Top'

  export default {
    name: 'app',
    components: {
      pageHeader,
      pageContent,
      go2Top
    }
  }
</script>

<style lang="less">
  @import "static/assets/global/less/app.flex";
  @import "static/assets/global/less/components";
  @import "static/assets/global/less/theme/default";
</style>
