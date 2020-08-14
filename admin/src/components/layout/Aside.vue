<template>
  <aside class="aside">
    <div class="brand">
      <div class="brand-logo">
        <a href>W.J</a>
      </div>
      <div class="brand-actions">
        <button>
          <i class="w-icon w-icon-arrow"></i>
        </button>
      </div>
    </div>
    <nav class="aside-menu">
      <w-menu>
        <w-menu-item :item="menuData"></w-menu-item>
      </w-menu>
    </nav>
  </aside>
</template>

<script>
import { ref } from 'vue'
import Menu from './Menu'
import MenuItem from './MenuItem'

// demo data
var MenuData = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'wat' }]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'wat' }]
        }
      ]
    }
  ]
}

export default {
  name: 'Aside',
  components: {
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem
  },
  setup() {
    const menuData = ref(MenuData)

    return { menuData }
  }
}
</script>

<style lang="stylus">
.aside
  width: 265px
  display flex
  flex 0 0 auto
  flex-direction column
  background-color: #1e1e2d;

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

    .brand-logo
      > a
        font-size: 20px;
        color: #fff;
        text-decoration: none;

  .aside-menu
    position: relative
    max-height 90vh

    .menu-nav
      .menu-item
        .menu-link
          padding: 9px 25px;

@media (max-width: 991.98px)
  .aside
    z-index: 1001;
    position: fixed;
    top: 0;
    bottom: 0;
    left: -295px;
    width: 275px;


@media (min-width: 992px)
  .aside
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 98;
</style>
