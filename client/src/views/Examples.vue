<template>
  <div class="example-page">
    <aside>
      <nav>
        <router-link to="/example/virtualList">virtualList</router-link>|
        <router-link to="/example/books">books</router-link>|
        <router-link to="/example/videos">videos</router-link>
      </nav>
    </aside>
    <article>
      <router-view />
    </article>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'

export default {
  name: 'Examples',
  setup() {
    onMounted(() => {
      console.log(`onMounted`)
    })

    onUnmounted(() => {
      console.log(`onUnmounted`)
    })

    return {}
  },
}
</script>

<style lang="stylus" scoped>
.example-page {
  display: grid
  grid-template-columns: 30% minmax(0, 1fr)
  gap: 2rem
}
</style>
