<template>
  <ul class="tree-nav">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'w-tree',
}
</script>

<style lang="stylus">
.tree-nav {
  margin: 0
  list-style: none
  padding: 15px 0
}
</style>
