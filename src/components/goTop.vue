
<template>
  <div class="wj-go-top">
    <i class="fa fa-arrow-up"></i>
  </div>
</template>

<script>
  export default {
    name: 'go-top',
    data () {
      return {
        top: '去顶部'
      }
    }
  }
</script>

<style scoped>
  .wj-go-top {
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 40px;
    right: 20px;
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
    display: none;
    padding-top: 9px;
    z-index: 110;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
  }

  .wj-go-top {
    background: #fff;
    -webkit-box-shadow: 0px 0px 15px 1px rgba(113, 106, 202, 0.2);
    -moz-box-shadow: 0px 0px 15px 1px rgba(113, 106, 202, 0.2);
    box-shadow: 0px 0px 15px 1px rgba(113, 106, 202, 0.2);
  }
</style>
