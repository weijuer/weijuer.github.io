<template>
  <div id="app" class="wj-layout">
    <pageHeader></pageHeader>
    <pageContent></pageContent>
  </div>
</template>

<script>
  // 引入公共布局组件
  import pageHeader from '@/components/header'
  import pageContent from '@/components/Content'

  export default {
    name: 'app',
    components: {
      pageHeader,
      pageContent
    }
  }
</script>

