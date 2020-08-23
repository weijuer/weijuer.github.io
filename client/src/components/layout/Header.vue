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
              <router-link class="menu-link text-effect-1" to="/" data-hover="Home">Home</router-link>
            </li>
            <li>
              <router-link
                class="menu-link text-effect-1"
                to="/articles"
                data-hover="Article"
              >Article</router-link>
            </li>
            <li>
              <router-link
                class="menu-link text-effect-1"
                to="/example"
                data-hover="Example"
              >Example</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>
