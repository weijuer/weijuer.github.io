<template>
  <nav class="aside-menu">
    <w-menu :menus="menuData"></w-menu>
  </nav>
</template>

<script>
import { ref } from 'vue'
import { Menu, MenuItem } from './menu'

const MenuData = [
  { name: '文章管理' },
  { name: '账号管理' },
  { name: '设置' },
  {
    name: 'child folder',
    children: [{ name: 'hello' }, { name: 'wat' }],
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
