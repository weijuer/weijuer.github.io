<template>
  <video class="w-video" controls preload="auto" width="400" height="auto">
    <slot>
      <source :src="source" type="application/x-mpegURL" />
    </slot>
    <div>{{ message }}</div>
  </video>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'w-video',
  props: {
    source: String,
  },
  setup() {
    const message = ref('暂不支持该格式')
    const type = computed(() => {})

    return {
      message,
      type,
    }
  },
}
</script>

<style>
.w-video {
  height: auto;
  max-width: 100%;
  object-fit: fill;
}
</style>
