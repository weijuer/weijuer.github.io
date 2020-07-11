<template>
  <header class="app-header">
    <div class="container">
      <div class="app-header-content">
        <div class="app-header-logo">
          <a class="logo" href="/">
            <img class="logo-img" src="~@/assets/logo-letter.png" />
          </a>
        </div>
        <nav class="nav">
          <ul class="menu-nav app-header-nav">
            <li>
              <router-link class="menu-link" to="/">Home</router-link>
            </li>
            <li>
              <router-link class="menu-link" to="/articles">Article</router-link>
            </li>
            <li>
              <router-link class="menu-link" to="/example">Example</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
</style>
