<template>
  <div id="app" class="app-page default">
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

  export default {
    name: 'app-layout',
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

