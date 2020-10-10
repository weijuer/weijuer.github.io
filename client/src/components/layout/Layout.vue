<template>
  <section class="app-layout default">
    <svg-symbols />
    <Header />
    <Main />
    <Footer />
  </section>
</template>

<script>
import SvgSymbols from './SvgSymbols'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default {
  name: 'Layout',
  components: {
    SvgSymbols,
    Header,
    Main,
    Footer,
  },
}
</script>

<style lang="stylus" src="@/assets/style/layout/app.styl" />
