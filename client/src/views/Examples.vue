<template>
  <div class="example-page">
    <aside>
      <nav>
        <router-link to="/virtualList">virtualList</router-link>|
        <router-link to="/books">books</router-link>|
        <router-link to="/videos">videos</router-link>
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
  name: 'examples',
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
