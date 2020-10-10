<template>
  <div class="modal">
    <slot></slot>
    <button @click="$emit('close')">Dismiss</button>
  </div>
</template>

<script>
export default {
  name: 'w-modal',
  props: {
    value: Boolean,
  },
  emits: ['close'],
}
</script>

<style lang="stylus" scoped>
.w-modal {
  position: relative

  // 样式插槽内容
  ::v-slotted(p) {
    font-style: italic
  }
}
</style>
