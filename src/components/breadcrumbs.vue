<template>
  <ul class="wj-page-breadcrumbs wj-theme-nav wj-pull-right wj-fonts-regular">
    <li v-for="item in breadcrumbs" :class="{'wj-state_active': item.isActive}">
      <a :href="item.url" v-if="!item.isActive" v-text="item.name"></a>
      {{ item.name }}
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

</style>
