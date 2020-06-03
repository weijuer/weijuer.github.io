<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <todo />
  </div>
</template>

<script>
import Todo from 'Widgets/Todo.vue'
export default {
  name: 'Home',
  components: {
    Todo
  }
}
</script>
