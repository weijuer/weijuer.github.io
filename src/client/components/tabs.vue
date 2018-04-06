<template>
  <div class="tab">
    <ul class="tab-nav">
      <li class="active"><a href="#tab_1" data-toggle="tab">tab-1</a></li>
      <li><a href="#tab_2" data-toggle="tab">tab-1</a></li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane active">tab-1 内容</div>
      <div class="tab-pane">tab-2 内容</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabs',
    data() {
      return {
        activeTab: 'tab_1'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style lang="less" scoped>

</style>
