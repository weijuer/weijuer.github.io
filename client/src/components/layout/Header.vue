<template>
  <header class="app-header">
    <div class="container">
      <div class="app-header-content">
        <div class="app-header-logo">
          <a class="logo" href="/">
            <img class="logo-img" src="~@/assets/logo-letter.png" />
            <!-- <span class="text-magic" data-word="W.J">W.J</span> -->
          </a>
        </div>
        <nav class="nav">
          <ul class="menu-nav app-header-nav">
            <li>
              <router-link class="menu-link text-effect-1" to="/home" data-hover="Home"
                >Home</router-link
              >
            </li>
            <li>
              <router-link class="menu-link text-effect-1" to="/articles" data-hover="Article"
                >Article</router-link
              >
            </li>
            <li>
              <router-link class="menu-link text-effect-1" to="/examples" data-hover="Example"
                >Example</router-link
              >
            </li>
          </ul>
        </nav>
        <a href="https://github.com/weijuer" class="github-corner">
          <w-icon width="80" height="80" name="github" />
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import { Icon } from 'Widgets'

export default {
  name: 'Header',
  components: {
    [Icon.name]: Icon,
  },
}
</script>

<style lang="stylus">
.github-corner {
  width: 80px
  height: 80px
  position: absolute
  top: 0
  right: 0

  &:hover .octo-arm {
    animation: octocat-wave 560ms ease-in-out
  }
}

@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0)
  }

  20%,
  60% {
    transform: rotate(-25deg)
  }

  40%,
  80% {
    transform: rotate(10deg)
  }
}

@media (max-width: 720px) {
  .github-corner {
    display: none
  }
}
</style>
