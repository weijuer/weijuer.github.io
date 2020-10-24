<template>
  <aside class="aside">
    <div class="brand">
      <div class="brand-logo">
        <a href>W.J</a>
      </div>
      <div class="brand-actions">
        <i class="w-icon w-icon-arrow">
          <w-icon name="dubble-arrow" />
        </i>
      </div>
    </div>
    <w-nav />
  </aside>
</template>

<script>
import { Core } from 'Widgets'
import Nav from './Nav'

export default {
  name: 'Aside',
  components: {
    [Nav.name]: Nav,
    [Core.Icon.name]: Core.Icon,
  },
}
</script>

<style lang="stylus">
.aside {
  width: 265px
  display: flex
  flex: 0 0 auto
  flex-direction: column
  background-color: #1e1e2d
  transition: all 0.2s linear

  &.aside-fixed {
    position: fixed
    top: 0
    bottom: 0
    left: 0
    z-index: 98
  }

  .brand {
    display: flex
    justify-content: space-between
    align-items: center
    flex-direction: row
    padding: 0 25px
    height: 65px
    background-color: #1a1a27

    .brand-logo {
      > a {
        font-size: 20px
        color: #fff
        text-decoration: none
      }
    }
  }

  .aside-menu {
    position: relative
    max-height: 90vh
  }
}

.w-icon {
  display: inline-block
  width: 24px
  height: 24px
  cursor: pointer
}

.w-icon-arrow {
  &:before,
  &:after {
    content: ""
    display: flex
  }
}

@media (max-width: 991.98px) {
  .aside {
    z-index: 1001
    position: fixed
    top: 0
    bottom: 0
    left: -295px
    width: 275px
  }
}

@media (min-width: 992px) {
  .aside {
    position: fixed
    top: 0
    bottom: 0
    left: 0
    z-index: 98
  }
}
</style>
