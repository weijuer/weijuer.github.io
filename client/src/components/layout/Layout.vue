<template>
  <section class="app-layout default">
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
                <router-link class="menu-link" to="/about">About</router-link>
              </li>
              <li>
                <router-link class="menu-link" to="/example">Example</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <main class="app-main">
      <router-view />
    </main>
    <footer class="app-footer">
      <div class="container">
        <div class="app-footer-content">
          <div class="app-footer-logo">
            <span class="copyright">2020©</span>
            <a class="logo-letter" href>W.J</a>
          </div>
          <div class="app-footer-nav">
            <ul class="menu-nav">
              <li>
                <a class="menu-link" href>Contact</a>
              </li>
              <li>
                <a class="menu-link" href>Me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style lang="stylus" src="@/assets/style/layout/app.styl" />
