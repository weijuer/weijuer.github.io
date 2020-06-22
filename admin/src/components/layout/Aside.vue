<template>
  <aside class="aside">
    <div class="brand">
      <div class="brand-logo">
        <a href>W.J</a>
      </div>
      <div class="brand-actions">
        <button>《</button>
      </div>
    </div>
    <nav class="aside-menu">
      <ul class="menu-nav">
        <li class="menu-item">
          <a href="###" class="menu-link">
            <i class="menu-icon"></i>
            <span class="menu-text"></span>
            <i class="menu-arrow"></i>
          </a>
          <ul class="menu-submenu"></ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Aside'
}
</script>

<style lang="stylus" scoped>
.aside
  width: 265px

  &.aside-fixed
    position: fixed
    top: 0
    bottom: 0
    left: 0
    z-index: 98

  .brand
    display: flex
    justify-content: space-between
    align-items: center
    flex-direction: row
    padding: 0 25px
    height: 65px

  .aside-menu
    position: relative

    .menu-nav
      margin: 0
      list-style: none
      padding: 15px 0

      >.menu-item
        position: relative
        margin: 0
        padding: 0
        display: flex
        flex-direction: column
        flex-grow: 1
</style>
