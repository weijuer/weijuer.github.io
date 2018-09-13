<template>
  <div class="panel">
    <div class="panel-header">
      <slot name="header">title</slot>
    </div>
    <div class="panel-body">
      <slot name="main">main</slot>
    </div>
    <div class="panel-footer">
      <slot name="footer">footer</slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        title: '标题'
      }
    }
  }
</script>

<style scoped>

</style>
