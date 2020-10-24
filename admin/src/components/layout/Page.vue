<template>
  <SvgSymbols />
  <Aside />
  <Layout />
</template>

<script>
import Aside from './Aside'
import Layout from './Layout'
import SvgSymbols from './SvgSymbols'

export default {
  name: 'Page',
  components: {
    Aside,
    Layout,
    SvgSymbols,
  },
}
</script>
