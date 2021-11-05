<template>
  <section class="app-layout default">
    <Symbols />
    <Header />
    <Main />
    <Footer />
  </section>
</template>

<script>
import Symbols from './Symbols.vue'
import Header from './Header.vue'
import Main from './Main.vue'
import Footer from './Footer.vue'

export default {
  name: 'Layout',
  components: {
    Symbols,
    Header,
    Main,
    Footer,
  },
}
</script>

<style lang="stylus" src="@/assets/style/layout/app.styl" />
