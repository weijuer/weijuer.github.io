<template>
  <div class="wj-layout-page">
    <div class="wj-layout-breadcrumbs-1 wj-fonts-uppercase wj-fonts-bold wj-bordered wj-bordered-both">
      <div class="container">
        <div class="wj-page-title wj-pull-left">
          <h3 class="wj-font-uppercase wj-font-sbold">Blog Grid View</h3>
        </div>

        <ul class="wj-page-breadcrumbs wj-theme-nav wj-pull-right wj-fonts-regular">
          <li><a href="#">Pages</a></li>
          <li>/</li>
          <li><a href="page-blog-grid.html">Blog Grid View</a></li>
          <li>/</li>
          <li class="wj-state_active">Jango Components</li>
        </ul>
      </div>
    </div>

    <div class="wj-content-box wj-size-md">
      <div class="container">
        <router-view class="app-content-view" keep-alive transition transition-mode="out-in"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'content',
  data () {
    return {
      msg: 'vue-project测试'
    }
  }
}
</script>

<style scoped>
</style>
