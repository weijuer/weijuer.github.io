<template>
  <li class="menu-item">
    <a href="#" class="menu-link" @click="toggle">
      <i class="menu-icon"></i>
      <span class="menu-text">{{ item.name }}</span>
      <i class="menu-arrow" v-if="isfolder">[{{ isOpen ? '-' : '+' }}]</i>
    </a>
    <ul class="menu-submenu" v-show="isOpen" v-if="isfolder">
      <w-menu-item v-for="(child, index) in item.children" :key="index" :item="child"></w-menu-item>
    </ul>
  </li>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'w-menu-item',
  props: {
    item: Object
  },
  setup(props, context) {
    console.log(context)
    // 是否展开
    let isOpen = ref(false)
    // 是否有子集
    const isFolder = computed(() => props.item.children && props.item.children.length)

    // 子菜单展示/隐藏
    function toggle() {
      if (isFolder.value) {
        isOpen.value = !isOpen.value
      }
    }

    return { isOpen, isFolder, toggle }
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
    padding: 0;
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

    .menu-text
      display: flex;
      align-items: center;
      flex-grow: 1;
      padding: 0;
</style>
