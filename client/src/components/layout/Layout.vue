<template>
  <section class="app-layout default">
    <Header />
    <Main />
    <Footer />
  </section>
</template>

<script>
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default {
  name: 'Layout',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style lang="stylus" src="@/assets/style/layout/app.styl" />
