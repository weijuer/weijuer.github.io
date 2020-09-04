<template>
  <aside class="aside">
    <div class="brand">
      <div class="brand-logo">
        <a href>W.J</a>
      </div>
      <div class="brand-actions">
        <i class="w-icon w-icon-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
          >
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <polygon points="0 0 24 0 24 24 0 24" />
              <path
                d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z"
                fill="#000000"
                fill-rule="nonzero"
                transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999)"
              />
              <path
                d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z"
                fill="#000000"
                fill-rule="nonzero"
                opacity="0.3"
                transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999)"
              />
            </g>
          </svg>
        </i>
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
          children: [{ name: 'hello' }, { name: 'wat' }],
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'wat' }],
        },
      ],
    },
  ],
}

export default {
  name: 'Aside',
  components: {
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
  },
  setup() {
    const menuData = ref(MenuData)

    return { menuData }
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

  &:hover {
    svg {
      g [fill] {
        transition: fill 0.3s ease
        fill: #3699FF
      }
    }
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
