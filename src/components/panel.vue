<template>
  <div class="panel">
    <header>
      <slot name="header">title</slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
    <footer>
      <slot name="footer">footer</slot>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        menus: ['主页', '博文', '关于']
      }
    }
  }
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }

  ul, li {
    list-style: none;
  }

  ul {
    width: 500px;
    height: 300px;
    border: 2px solid black;
  }

  li {
    width: 80px;
    height: 50px;
    border: 1px solid black;
    background-color: red;
    font-size: 30px;
    text-align: center;
  }

  article {
    align-self: center;
  }
  .box {
    display: flex;
  }

  .item {

  }
</style>
