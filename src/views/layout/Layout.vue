<template>
  <div id="app" :class="['app-page', 'default', isSideMenuActive ? 'app-side-menu-active' : '']">
    <pageHeader />
    <pageMain />
    <pageFooter />
    <backToTop />
  </div>
</template>

<script>
  import pageHeader from './Header';
  import pageMain from './Main';
  import pageFooter from './Footer';
  import backToTop from '@comps/backToTop';
  import {mapState} from 'vuex'

  export default {
    name: 'app-layout',
    computed: {
      ...mapState([
        'isSideMenuActive'
      ])
    },
    components: {
      pageHeader,
      pageMain,
      pageFooter,
      backToTop
    }
  }
</script>

<style lang="less">
  @import "~@assets/global/less/app";
  @import "~@assets/global/less/theme/default";
</style>

