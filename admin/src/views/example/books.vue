<template>
  <div class="books">
    <w-book theme="green" />
  </div>
</template>

<script>
import { Book } from 'Widgets'

export default {
  name: 'v-books',
  components: {
    [Book.name]: Book
  }
}
</script>

<style>
</style>
