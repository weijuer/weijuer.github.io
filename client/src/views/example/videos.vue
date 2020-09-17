<template>
  <div class="videos">
    <w-video theme="green" source="http://39.134.157.205/PLTV/88888888/224/3221225591/index.m3u8"></w-video>
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
