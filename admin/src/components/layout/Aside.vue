<template>
  <aside class="aside aside-fixed" :class="[asideStyle]">
    <div class="brand">
      <div class="brand-logo">
        <a href>W.J</a>
      </div>
      <div class="brand-actions">
        <a @click="toggleMini()" class="icon-only" href="javascript:;">
          <w-icon name="dubble-arrow" />
        </a>
      </div>
    </div>
    <w-nav />
  </aside>
</template>

<script>
import { useStore } from 'vuex'
import { computed, onUpdated } from 'vue'
import { Core } from 'Widgets'
import Nav from './Nav'

export default {
  name: 'Aside',
  components: {
    [Nav.name]: Nav,
    [Core.Icon.name]: Core.Icon,
  },
  setup() {
    // 使用vuex
    const store = useStore()
    const isMini = computed(() => store.state.base.isMini)

    // toggle aside
    const toggleMini = () => {
      store.dispatch('base/toggleMini')
    }

    const asideStyle = computed(() => (isMini.value ? 'aside-mini' : ''))

    onUpdated(() => {
      console.log('onUpdated', isMini.value)
    })

    return { toggleMini, asideStyle }
  },
}
</script>

<style lang="stylus">
$aside-width = 265px

.aside {
  width: $aside-width
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

  &.aside-mini {
    width: 70px

    .brand {
      .brand-logo {
        display: none
      }
    }

    .aside-menu {
      .menu-nav {
        .menu-item {
          .menu-arrow,
          .menu-text {
            display: none
          }
        }
      }
    }

    + .app-layout {
      padding-left: 70px
    }
  }

  .brand {
    display: flex
    justify-content: space-between
    align-items: center
    flex-direction: row
    padding: 0 24px
    height: 65px
    background-color: #1a1a27

    .brand-logo {
      > a {
        font-size: 20px
        color: #fff
        text-decoration: none
      }
    }

    .brand-actions {
      .icon-only {
        color: #fff
      }
    }
  }

  .aside-menu {
    position: relative
    max-height: 90vh
  }
}

@media (max-width: 991.98px) {
  .aside {
    &.aside-fixed {
      left: -($aside-width)
    }
  }
}

@media (min-width: 992px) {
  .aside {
    &.aside-fixed {
      left: 0
    }
  }
}
</style>
