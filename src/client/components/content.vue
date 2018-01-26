<template>
  <div class="wj-layout-page">
    <!--<div class="wj-layout-breadcrumbs-1 wj-fonts-uppercase wj-fonts-bold wj-bordered wj-bordered-both">
      <breadcrumbs></breadcrumbs>
    </div>-->

    <div class="wj-content-box wj-size-md">
        <router-view class="app-content-view" keep-alive transition transition-mode="slide" />
    </div>
  </div>
</template>

<script>
import breadcrumbs from './breadcrumbs'

export default {
  name: 'page-content',
  components: {
    breadcrumbs
  }
}
</script>
