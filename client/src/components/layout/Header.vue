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
        <div class="settings">
          <a href="javascript:;" @click="toggleTheme">
            <w-icon :name="theme" />
          </a>
        </div>
        <a href="https://github.com/weijuer" class="github-corner">
          <w-icon style="width: 80px; height: 80px; fill: #151513; color: #fff" name="github" />
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'
import { Icon } from 'Widgets'

export default {
  name: 'Header',
  components: {
    [Icon.name]: Icon,
  },
  setup() {
    const theme = ref('moon')

    // 切换暗黑模式
    function toggleTheme() {
      theme.value = theme.value === 'moon' ? 'sun' : 'moon'
      document.body.classList.toggle('dark-mode')
    }

    return { theme, toggleTheme }
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
}

@media (max-width: 720px) {
  .github-corner {
    display: none
  }
}
</style>
