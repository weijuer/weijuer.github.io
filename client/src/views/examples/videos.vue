<template>
  <div class="videos">
    <w-video theme="green" source="/live/cctv4_2/index.m3u8"></w-video>
    <w-video theme="green" source="/live/cctv5_2/index.m3u8"></w-video>
    <w-video theme="green" source="/live/cctv6_2/index.m3u8"></w-video>
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

<style>
</style>
