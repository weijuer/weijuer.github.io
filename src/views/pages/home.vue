<template>
  <div class="app">
    <div class="row">
      <div class="col-8">
        <panel>
          <div slot="header" class="panel-header">
            <div class="caption">
              <div class="panel-header--title">
                <h3 class="panel-header--title-text">标题</h3>
              </div>
            </div>
          </div>
          <div slot="main" class="panel-body">内容</div>
        </panel>

        <panel>
          <div slot="header" class="panel-header">
            <div class="caption">
              <div class="panel-header--title">
                <h3 class="panel-header--title-text">标题</h3>
              </div>
            </div>
          </div>
          <div slot="main" class="panel-body">内容</div>
        </panel>
        <panel>
          <div slot="header" class="panel-header">
            <div class="caption">
              <div class="panel-header--title">
                <h3 class="panel-header--title-text">标题</h3>
              </div>
            </div>
          </div>
          <div slot="main" class="panel-body">内容</div>
        </panel>
      </div>
      <div class="col-4">
        <panel>
          <div slot="header" class="panel-header">
            <div class="caption">
              <div class="panel-header--title">
                <h3 class="panel-header--title-text">标题</h3>
              </div>
            </div>
          </div>
          <div slot="main" class="panel-body">内容</div>
        </panel>
      </div>
    </div>

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

<style lang="less">

</style>
