<template>
  <div class="videos">
    <w-video
      v-for="video in 13"
      :key="video"
      theme="green"
      :source="`/live/cctv${video}_2/index.m3u8`"
    ></w-video>
  </div>
</template>

<script>
import { Video } from 'Widgets'

export default {
  name: 'videos',
  components: {
    [Video.name]: Video,
  },
}
</script>

<style lang="stylus">
.videos {
  display: grid
  grid-template-columns: repeat(3, 1fr)
  grid-gap: 10px

  .w-video {
    border-radius: 6px
  }
}

@media (max-width: 992px) {
  .videos {
    grid-template-columns: repeat(2, 1fr)
  }
}
</style>
