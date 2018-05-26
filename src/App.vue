<template>
  <div id="app" class="app-page default">
    <pageHeader />
    <pageMain />
    <pageFooter />
  </div>
</template>

<script>
  import pageHeader from './components/flex/Header'
  import pageMain from './components/flex/Main'
  import pageFooter from './components/flex/Footer'

  export default {
    name: 'app',
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
