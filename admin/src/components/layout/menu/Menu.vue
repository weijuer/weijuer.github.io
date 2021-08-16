<template>
  <ul class="menu-nav">
    <slot v-if="menus">
      <w-menu-item v-for="item in menus" :key="item.name" :item="item" />
    </slot>
  </ul>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
  name: 'w-menu',
  props: {
    menus: Array,
  },
  components: {
    [MenuItem.name]: MenuItem,
  },
}
</script>

<style lang="stylus">
.menu-nav {
  margin: 0;
  list-style: none;
  padding: 15px 0;
}
</style>
