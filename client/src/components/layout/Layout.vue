<template>
  <section class="app-layout default">
    <Symbols />
    <Header />
    <Main />
    <Footer />
  </section>
</template>

<script>
import Symbols from './Symbols'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

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
