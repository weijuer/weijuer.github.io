<template>
  <main class="example-page">
    <aside>
      <nav>
        <router-link to="/example/virtualList">virtualList</router-link>|
        <router-link to="/example/books">books</router-link>
      </nav>
    </aside>
    <article>
      <transition name="page-view">
        <router-view />
      </transition>
    </article>
  </main>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'

export default {
  name: 'example',
  setup() {
    onMounted(() => {
      console.log(`onMounted`)
    })

    onUnmounted(() => {
      console.log(`onUnmounted`)
    })

    return {}
  }
}
</script>

<style lang="stylus" scoped>
.example-page
  display: grid
  grid-template-columns: 30% minmax(0, 1fr)
  gap: 2rem

// 页面切换动画
.page-view-enter-active
  transition: all 0.2s ease-in 0.25s

.page-view-leave-active
  transition: all 0.2s ease-out 0s

.page-view-enter,
.page-view-leave-to
  opacity: 0
</style>
