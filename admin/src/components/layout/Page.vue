<template>
  <SvgSymbols />
  <Aside />
  <Layout />
</template>

<script>
import Aside from './Aside.vue'
import Layout from './Layout.vue'
import SvgSymbols from './SvgSymbols.vue'

export default {
  name: 'Page',
  components: {
    Aside,
    Layout,
    SvgSymbols,
  },
}
</script>
