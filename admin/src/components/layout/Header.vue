<template>
  <header class="app-header is-fixed">
    <div class="container">
      <div class="app-header-content">
        <nav class="app-header--menu">
          <ul class="menu">
            <li class="menu-item">
              <router-link class="menu-link" to="/">Dashboard</router-link>
            </li>
          </ul>
        </nav>
        <div class="app-header--topbar">
          <div class="topbar-item">
            <w-icon style="fill: #fff" name="search" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { Core } from 'Widgets'

export default {
  name: 'w-header',
  components: {
    [Core.Icon.name]: Core.Icon,
  },
}
</script>

<style lang="stylus">
.app-header {
  background-color: #1e1e2d

  &.is-fixed {
    height: 65px
    position: fixed
    top: 0
    right: 0
    left: 0
    z-index: 2016
  }

  .app-header-content {
    height: 100%
    display: flex
    justify-content: space-between
    align-items: center

    .app-header--menu {
      .menu {
        padding: 0
        margin: 0
        list-style: none

        .menu-item {
          position: relative

          .menu-link {
            padding: 8px 14px
            display: flex
            justify-content: center
            align-items: center
            color: #6e7899
            border-radius: 4px

            &.router-link-active {
              color: #3699FF
              background-color: #282f48
            }
          }
        }
      }
    }
  }
}
</style>
