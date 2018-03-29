<template>
  <div class="container">
    <div class="wj-page-title wj-pull-left">
      <h3 class="wj-font-uppercase wj-font-sbold">{{ subTitle }}</h3>
    </div>

    <ul class="wj-page-breadcrumbs wj-theme-nav wj-pull-right wj-fonts-regular">
      <li v-for="(item, index) in breadcrumbs" :class="{'wj-state_active': item.isActive}" :key="index">
        <router-link :to="item.path">{{ $t('nav.' + item.name) }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'breadcrumbs',
    created() {
      this.getBreadcrumb()
    },
    data() {
      return {
        subTitle: '', // 页面标题
        breadcrumbs: [] // 路由集合
      }
    },
    methods: {
      getBreadcrumb() {
        this.breadcrumbs = this.$route.matched
        this.$route.matched.forEach((item, index) => {
          // (item.name === 'home') ? item.path = '/' : (this.$route.path === item.path) ? this.subTitle = item.name : ''
        })
      }
    },
    watch: {
      $route() {
        this.getBreadcrumb()
      }
    }
  }
</script>

<style scoped>
  .wj-page-breadcrumbs-item {
    position: relative;
  }
  .wj-page-breadcrumbs-item:after {
    content: "\F105";
    font-family: 'FontAwesome';
    font-weight: 100;
    width: 20px;
    height: 20px;
    font-size: 16px;
    margin-left: 8px;
  }
</style>
