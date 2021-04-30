<template>
  <div class="example-page">
    <article>
      <router-view />
    </article>
    <aside>
      <nav>
        <router-link to="/virtual-list">virtual-list</router-link>|
        <router-link to="/books">books</router-link>|
        <router-link to="/videos">videos</router-link>|
        <router-link to="/tabs-communication">tabs-communication</router-link>|
        <router-link to="/letter-example">letter</router-link>
      </nav>
    </aside>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'examples',
  setup() {
    // 使用vue-router
    const router = useRouter()

    console.log(router.getRoutes())

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
    display: grid;
    grid-template-columns: 30% minmax(0, 1fr);
    gap: 2rem;
}
</style>
