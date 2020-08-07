<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
*, :after, :before
  box-sizing: border-box;

body,
html
  height: 100%
  margin: 0
  padding: 0
  font-size: 14px
  font-weight: 400
  font-family: Poppins, Helvetica, "sans-serif"
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

  body
    display: flex;
    flex-direction: column;
    background: #eef0f8;
    color: #3f4254;

#app
  display flex
  flex 1 0 auto
</style>
