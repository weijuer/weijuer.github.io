<template>
  <div class="books">
    <w-book theme="green">
      <h3>ES6 语法大全</h3>
      <p>本书主要介绍ES6全新语法知识点...</p>
    </w-book>
  </div>
</template>

<script>
import { Book } from 'Widgets'

export default {
  name: 'books',
  components: {
    [Book.name]: Book,
  },
}
</script>

<style>
</style>
