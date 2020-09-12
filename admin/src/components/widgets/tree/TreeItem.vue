<template>
  <li class="tree-item" :style="treeItemStyle">
    <a href="#" class="tree-link" @click="toggle">
      <i class="tree-icon"></i>
      <span class="tree-text">{{ item.name }}</span>
      <i class="tree-arrow" v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</i>
    </a>
    <ul class="tree-subtree" v-show="isOpen" v-if="isFolder">
      <w-tree-item v-for="(child, index) in item.children" :key="index" :item="child"></w-tree-item>
    </ul>
  </li>
</template>

<script>
import { ref, computed } from 'vue'

// 递归次数
let count = 0

export default {
  name: 'w-tree-item',
  props: {
    item: Object,
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

    function treeItemStyle() {
      return {
        'padding-left': `${count * 20}px`,
      }
    }

    return { isOpen, isFolder, toggle, treeItemStyle }
  },
}
</script>

<style lang="stylus">
.tree-item {
  position: relative
  margin: 0
  padding: 0
  display: flex
  flex-direction: column
  flex-grow: 1
  transition: background-color 0.3s

  .tree-link {
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

    .tree-arrow,
    .tree-icon {
      display: flex
      align-items: center
      line-height: 0
      color: #5c5e81
    }

    .tree-text {
      display: flex
      align-items: center
      flex-grow: 1
      padding: 0
      color: #a2a3b7
    }
  }

  &:hover {
    >.tree-link {
      background-color: #1b1b28

      >.tree-text {
        color: #fff
      }
    }
  }

  .tree-subtree {
    padding: 0

    >.tree-item {
      >.tree-link {
        padding: 0 24px
      }
    }
  }
}
</style>
