<template>
  <header class="wj-header">
    <div class="wj-header-pre">
      <div class="wj-container wj-page-container">

      </div>
    </div>
    <div class="wj-header-content">
      <div class="wj-container wj-page-container wj-container--full-height">
        <div class="wj-stack wj-stack-desktop wj-stack-ver">
          <div class="wj-stack-item">
            <div class="wj-header-menu">
              <ul class="wj-menu-nav">
                <li v-for="menu in menus" class="wj-menu-item" :class="{'active':menu.active}"><a class="wj-menu-link" href="#"><span class="wj-menu-link-text" v-text="menu.name"></span></a></li>
              </ul>
            </div>
          </div>
        </div>
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
