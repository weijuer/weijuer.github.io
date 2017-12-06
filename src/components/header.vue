<template>
  <header class="wj-header">
    <div class="wj-header--pre">
      <div class="wj-container">

      </div>
    </div>
    <div class="wj-header--content">
      <div class="wj-container">
        <ul class="nav navbar-nav">
          <li v-for="menu in menus" :class="{'active':menu.active}"><a href="#" v-text="menu.name"></a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        menus: [
          {name: '首页', path: '/', active: true},
          {name: '学术', path: '/', active: false},
          {name: '关于', path: '/', active: false}
        ]
      }
    }
  }
</script>

<style scoped>
  .wj-header {
    height: 80px;
    background-color: #fff;
  }
</style>
