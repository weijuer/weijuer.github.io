<template>
  <ul class="menu-nav">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'w-menu'
}
</script>

<style lang="stylus">
.menu-nav
  margin: 0
  list-style: none
  padding: 15px 0
</style>
