<template>
  <header>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link to="/example">Example</router-link>
  </header>
  <main>
    <router-view />
  </main>
  <footer></footer>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style>
</style>
