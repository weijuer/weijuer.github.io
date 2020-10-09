<template>
  <video ref="video" class="w-video video-js vjs-default-skin" controls preload="auto">
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
    const video = ref(null)

    onMounted(() => {
      videojs(video.value, {
        withCredentials: true,
      })
    })

    return {
      message,
      type,
      video,
    }
  },
}
</script>

<style lang="stylus">
.w-video {
  width: 100%
  height: 200px
  object-fit: fill

  .vjs-big-play-button {
    top: 50%
    left: 50%
    width: 1.5em
    height: 1.5em
    border-radius: 50%
    transform: translate(-50%, -50%)
  }
}
</style>
