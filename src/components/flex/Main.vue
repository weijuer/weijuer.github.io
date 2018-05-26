<template>
  <main class="app-main">
    <router-view class="app-content" keep-alive transition transition-mode="out-in" />
  </main>
</template>

<script>
  export default {
    name: 'page-main',
    components: {
    }
  }
</script>


