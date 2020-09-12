<template>
  <header class="app-header">
    <div class="container">
      <div class="app-header-wrapper">
        <div class="app-header--menu">
          <router-link to="/">Home</router-link>|
          <router-link to="/about">About</router-link>|
          <router-link to="/example">Example</router-link>
        </div>
        <div class="app-header--control"></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'w-header',
}
</script>

<style>
</style>
