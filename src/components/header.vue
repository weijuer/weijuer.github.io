<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Weijuer's Page</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li v-for="menu in menus" :class="{'active':menu.active}"><a href="#" v-text="menu.name"></a></li>
        </ul>
      </div>
    </div>
  </nav>
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
  .header {
    background: #f00;
    color: #fff;
  }
</style>
