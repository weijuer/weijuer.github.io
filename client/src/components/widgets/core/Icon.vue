<template>
  <svg class="w-icon" v-bind="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'w-icon',
  props: {
    name: String,
  },
  setup(props) {
    const iconName = computed(() => (props.name ? `#icon-${props.name}` : '#'))

    return { iconName }
  },
}
</script>

<style lang="stylus" scoped>
.w-icon {
  width: 1em
  max-width: 100%
  height: 1em
  vertical-align: middle
  fill: currentColor
  overflow: hidden
}
</style>
