<template>
  <div id="app" :class="['wj-app-page', {'wj-page-on-scroll': $store.state.isPageScroll}]">
    <flex-layout />
  </div>
</template>

<script>
  // 引入公共布局组件
  import FlexLayout from './components/flex/Layout';

  export default {
    name: 'app-flex',
    components: {
      FlexLayout
    }
  }
</script>
