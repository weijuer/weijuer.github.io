<template>
  <div class="">
    <section class="header">
      <page-Header></page-Header>
    </section>
    <section class="container">
      <index></index>
    </section>
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

