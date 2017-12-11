<template>
  <div id="app" class="wj-layout">
    <pageHeader></pageHeader>
    <pageContent></pageContent>
    <go2Top></go2Top>
  </div>
</template>

<script>
  // 引入公共布局组件
  import pageHeader from '@/components/header'
  import pageContent from '@/components/Content'
  import go2Top from '@/components/go2Top'

  export default {
    name: 'app',
    components: {
      pageHeader,
      pageContent,
      go2Top
    }
  }
</script>

