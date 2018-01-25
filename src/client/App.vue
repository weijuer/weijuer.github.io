<template>
  <div id="app" :class="['wj-app-page', {'wj-app-page-header-fixed': isPageScroll}]">
    <pageHeader />
    <pageContent />
    <go2Top :isScroll="isPageScroll" @pageScroll="pageScrolled" />
  </div>
</template>

<script>
  // 引入公共布局组件
  import pageHeader from '@/components/header'
  import pageContent from '@/components/Content'
  import go2Top from '@/components/go2Top'

  export default {
    name: 'app',
    data () {
      return {
        isPageScroll: false
      }
    },
    props: ['isScroll'],
    components: {
      pageHeader,
      pageContent,
      go2Top
    },
    methods: {
      pageScrolled () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        let offsetTop = document.querySelector('.wj-navbar').offsetTop
        this.isPageScroll = scrollTop > offsetTop
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "static/assets/global/less/app";
  @import "static/assets/global/less/components";
</style>
