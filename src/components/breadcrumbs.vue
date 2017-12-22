<template>
  <ul class="wj-page-breadcrumbs wj-theme-nav wj-pull-right wj-fonts-regular">
    <li v-for="(item, index) in breadcrumbs" :class="{'wj-state_active': item.isActive}">
      <a class="wj-page-breadcrumbs-item" :href="item.url" v-if="!item.isActive" v-text="item.name"></a>
      <span v-else v-text="item.name"></span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'breadcrumbs',
    data () {
      return {
        breadcrumbs: [
          {name: 'Home', url: 'javascript:;', isActive: false},
          {name: 'Blog', url: 'blog', isActive: false},
          {name: 'Blog View', url: 'javascript:;', isActive: true}
        ]
      }
    },
    methods: {

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
