<template>
  <div class="letter-example">
    <w-letter></w-letter>
  </div>
</template>

<script>
import { Letter } from 'Widgets'

export default {
  name: 'letter-example',
  components: {
    [Letter.name]: Letter,
  },
}
</script>