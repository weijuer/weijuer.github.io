<template>
  <div class="letters">
    <w-letter></w-letter>
  </div>
</template>

<script>
import { Letter } from 'Widgets'

export default {
  name: 'letters',
  components: {
    [Letter.name]: Letter,
  },
}
</script>
