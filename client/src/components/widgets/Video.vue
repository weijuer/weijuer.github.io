<template>
  <video
    id="video"
    class="w-video video-js vjs-default-skin"
    controls
    preload="auto"
    width="400"
    height="auto"
  >
    <slot>
      <source :src="source" type="application/x-mpegURL" />
    </slot>
    <div>{{ message }}</div>
  </video>
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'
import { ref, computed, onMounted } from 'vue'

export default {
  name: 'w-video',
  props: {
    source: String,
  },
  setup() {
    const message = ref('暂不支持该格式')
    const type = computed(() => {})

    onMounted(() => {
      videojs('video', {
        withCredentials: true,
      })
    })

    return {
      message,
      type,
    }
  },
}
</script>

<style>
.w-video {
  height: 200px;
  max-width: 100%;
  object-fit: fill;
}
</style>
