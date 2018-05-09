<template>
  <div class="app-layout">
    <pageHeader />
    <router-view class="app-view" keep-alive transition transition-mode="out-in" />
  </div>
</template>

<script>
  import pageHeader from './Header'
  export default {
    name: 'app-layout',
    components: {
      pageHeader
    }
  }
</script>

<style lang="less">
  @import "~@assets/global/less/app-flex";
  @import "~@assets/global/less/theme/default";
</style>

