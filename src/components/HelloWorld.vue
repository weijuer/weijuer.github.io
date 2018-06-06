<template>
  <div class="box-container">
    <ul class="box menu">
      <li v-for="menu of menus" class="item"><a href="javascript:;" v-text="menu"></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      menus: ['主页','博文','关于']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu {
  height: 2rem;
}
.item {

}
</style>
