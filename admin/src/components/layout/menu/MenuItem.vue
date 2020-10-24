<template>
  <li class="menu-item" :class="{ active: isOpen }" :data-level="menuLevel">
    <a href="#" class="menu-link" :style="menuItemStyle()" @click="toggle">
      <i class="menu-icon"></i>
      <span class="menu-text">{{ item.name }}</span>
      <i class="menu-arrow" v-if="isFolder"></i>
    </a>
    <ul v-if="isFolder" class="menu-submenu" :class="{ active: isOpen }">
      <w-menu-item
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
        :level="level + 1"
      ></w-menu-item>
    </ul>
  </li>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'w-menu-item',
  props: {
    item: Object, // 菜单对象
    level: { type: Number, default: 0 }, // 菜单层级
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
        paddingLeft: `${menuLevel.value * 20 + 24}px`,
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

    .menu-arrow {
      position: relative

      &:after {
        content: "\27A4"
        font-style: normal
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
      }
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
        color: #3699FF
      }
    }
  }

  &.active {
    >.menu-link {
      .menu-arrow {
        &:after {
          transform: rotate(90deg)
        }
      }
    }
  }

  >.menu-submenu {
    padding: 0
    display: none
    transition: all 0.3s linear

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
