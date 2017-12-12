<template>
  <div id="app" class="wj-layout-header-fixed wj-layout-header-mobile-fixed wj-layout-header-topbar wj-layout-header-topbar-collapse" :class="{'wj-page-on-scroll': isPageScroll}">
    <pageHeader></pageHeader>
    <pageContent></pageContent>
    <go2Top :isScroll="isPageScroll" @pageScroll="pageScrolled"></go2Top>
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

