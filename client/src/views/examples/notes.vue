<template>
  <div class="notes">
    <w-note></w-note>
  </div>
</template>

<script>
import { Note } from 'Widgets'

export default {
  name: 'notes',
  components: {
    [Note.name]: Note,
  },
}
</script>

<style lang="stylus">
.notes {
  background: #ffc600;
}
</style>
