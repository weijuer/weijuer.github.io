<template>
  <div class="app">
    <panel>
      <div slot="header">标题</div>
      <div slot="main">内容</div>
      <div slot="footer">底部</div>
    </panel>
  </div>
</template>

<script>
  import panel from '@/components/panel'

  export default {
    name: 'home',
    data() {
      return {
        dbInit: false
      }
    },
    components: {
      panel
    },
    beforeCreate() {
      console.log('beforeCreate=====>')
    },
    created() {
      console.log('-----home created')
    },
    mounted() {
      console.log('-----mounted')
    },
    methods: {}
  }
</script>

<style lang="less" scoped>

</style>
