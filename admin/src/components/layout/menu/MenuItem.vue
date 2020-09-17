<template>
  <li class="menu-item" :class="{'active': isOpen}" :data-level="menuLevel">
    <a href="#" class="menu-link" :style="menuItemStyle()" @click="toggle">
      <i class="menu-icon"></i>
      <span class="menu-text">{{ item.name }}</span>
      <i class="menu-arrow" v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</i>
    </a>
    <ul v-if="isFolder" class="menu-submenu" :class="{'active': isOpen}">
      <w-menu-item
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
        :level="item.level"
      ></w-menu-item>
    </ul>
  </li>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'w-menu-item',
  props: {
    item: Object,
    level: Number,
  },
  setup(props, context) {
    console.log(context, props)
    // 菜单层级
    const menuLevel = computed(() => props.level)

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

    // 子菜单样式
    function menuItemStyle() {
      return {
        paddingLeft: `${(menuLevel.value + 1) * 20 + 24}px`,
      }
    }

    return { menuLevel, isOpen, isFolder, toggle, menuItemStyle }
  },
}
</script>

<style lang="stylus">
.menu-item {
  position: relative
  margin: 0
  padding: 0
  display: flex
  flex-direction: column
  flex-grow: 1
  transition: background-color 0.2s

  .menu-link {
    display: flex
    flex-grow: 1
    align-items: stretch
    margin: 0
    padding: 9px 25px
    min-height: 44px
    position: relative
    text-decoration: none
    outline: none
    cursor: pointer
    transition: all 0.2s

    .menu-arrow,
    .menu-icon {
      display: flex
      align-items: center
      line-height: 0
      color: #5c5e81
    }

    .menu-text {
      display: flex
      align-items: center
      flex-grow: 1
      padding: 0
      color: #a2a3b7
    }
  }

  &.active,
  &:hover {
    >.menu-link {
      background-color: #1b1b28

      .menu-arrow,
      .menu-icon,
      .menu-text {
        color: #fff
      }
    }
  }

  .menu-submenu {
    padding: 0
    display: none
    transition: transform 0.3s

    >.menu-item {
      >.menu-link {
        padding-left: 40px
      }
    }

    &.active {
      display: block
      transform: translateY(0%)
    }
  }
}
</style>
