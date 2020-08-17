<template>
  <li class="menu-item" :style="menuItemStyle">
    <a href="#" class="menu-link" @click="toggle">
      <i class="menu-icon"></i>
      <span class="menu-text">{{ item.name }}</span>
      <i class="menu-arrow" v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</i>
    </a>
    <ul class="menu-submenu" v-show="isOpen" v-if="isFolder">
      <w-menu-item v-for="(child, index) in item.children" :key="index" :item="child"></w-menu-item>
    </ul>
  </li>
</template>

<script>
import { ref, computed } from 'vue'

// 递归次数
let count = 0

export default {
  name: 'w-menu-item',
  props: {
    item: Object
  },
  setup(props, context) {
    console.log(context, props)
    // 递归次数
    // let count = ref(1)
    // 是否展开
    let isOpen = ref(false)
    // 是否有子集
    const isFolder = computed(() => props.item.children && props.item.children.length)

    // 递归次数增加
    count++
    console.log(`count: ===>${count}`)

    // 子菜单展示/隐藏
    function toggle() {
      if (isFolder.value) {
        isOpen.value = !isOpen.value
      }
    }

    function menuItemStyle() {
      return {
        'padding-left': `${count * 20}px`
      }
    }

    return { isOpen, isFolder, toggle, menuItemStyle }
  }
}
</script>

<style lang="stylus">
.menu-item
  position: relative
  margin: 0
  padding: 0
  display: flex
  flex-direction: column
  flex-grow: 1
  transition: background-color .3s;

  .menu-link
    display: flex;
    flex-grow: 1;
    align-items: stretch;
    margin: 0;
    padding: 9px 25px;
    min-height: 44px;
    position: relative;
    text-decoration: none;
    outline: none;
    cursor: pointer;

    .menu-arrow,
    .menu-icon
      display: flex;
      align-items: center;
      line-height: 0;
      color: #5c5e81;

    .menu-text
      display: flex;
      align-items: center;
      flex-grow: 1;
      padding: 0;
      color: #a2a3b7;

  &:hover
    >.menu-link
      background-color: #1b1b28;

      >.menu-text
        color #fff

  .menu-submenu
    padding 0

    >.menu-item
      >.menu-link
        padding 0 24px
</style>
