<template>
  <div class="wj-layout-page">
    <div class="wj-layout-breadcrumbs-1 wj-fonts-uppercase wj-fonts-bold wj-bordered wj-bordered-both">
      <div class="container">
        <div class="wj-page-title wj-pull-left">
          <h3 class="wj-font-uppercase wj-font-sbold">{{ subTitle }}</h3>
        </div>

        <breadcrumbs></breadcrumbs>
      </div>
    </div>

    <div class="wj-content-box wj-size-md">
        <router-view class="app-content-view" keep-alive transition transition-mode="slide"></router-view>
    </div>
  </div>
</template>

<script>
import breadcrumbs from '@/components/breadcrumbs'

export default {
  name: 'content',
  data () {
    return {
      subTitle: 'index'
    }
  },
  components: {
    breadcrumbs
  }
}
</script>
