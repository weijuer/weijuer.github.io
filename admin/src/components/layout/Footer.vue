<template>
  <footer class="app-footer">
    <div class="container">
      <div class="app-foonter-inner">
        <div class="copyright">2020 @</div>
        <a href="https://github.com/weijuer" target="_blank">W.J</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'w-footer',
}
</script>

<style lang="stylus">
.app-footer {
  display: flex

  .app-foonter-inner {
    display: flex
    justify-content: center
    align-items: center
  }
}
</style>
