<template>
  <div id="app" class="app-page default">
    <pageHeader />
    <pageMain />
    <pageFooter />
  </div>
</template>

<script>
  import pageHeader from './Header';
  import pageMain from './Main';
  import pageFooter from './Footer';

  export default {
    name: 'app-layout',
    components: {
      pageHeader,
      pageMain,
      pageFooter
    }
  }
</script>

<style lang="less">
  @import "~@assets/global/less/app-flex";
  @import "~@assets/global/less/theme/default";
</style>

