<template>
  <nav class="aside-menu">
    <w-menu :menus="menuData"></w-menu>
  </nav>
</template>

<script>
import { ref } from 'vue'
import { Menu, MenuItem } from './menu'

const MenuData = [
  {
    name: '菜单1',
    children: [
      {
        name: '菜单1-1',
        children: [
          { name: '菜单1-1-1', level: 2 },
          { name: '菜单1-1-2', level: 2 },
        ],
      },
    ],
  },
  {
    name: '菜单2',
    children: [
      { name: '菜单2-1', level: 1 },
      { name: '菜单2-2', level: 1 },
    ],
  },
]

export default {
  name: 'w-nav',
  components: {
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
  },
  setup() {
    const menuData = ref(MenuData)

    return { menuData }
  },
}
</script>

<style>
</style>
