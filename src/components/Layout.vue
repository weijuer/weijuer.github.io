<template>
  <div class="wj-layout">
    <pageHeader></pageHeader>
    <router-view class="app-view" keep-alive transition transition-mode="out-in" />
  </div>
</template>

<script>
  import pageHeader from '@/components/header'
  import index from '@/pages/index'
  export default {
    name: 'layout',
    components: {
      pageHeader,
      index
    }
  }
</script>

<style lang="less">
  @import "../assets/global/less/style";
</style>

