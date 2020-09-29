<template>
  <article class="example tabs-communication">
    <h1>Cross Tabs Communication</h1>
    <div>
      This page shows the ways to share or sync messages between tabs which have the same origin.
    </div>

    <w-card title="Broadcast Channel">
      <div class="form">
        <input type="text" />
        <w-button type="button">send message</w-button>
      </div>
      <p>[send]</p>
    </w-card>
  </article>
</template>

<script>
import { Button, Card } from 'Widgets'

export default {
  name: 'tabs-communication',
  components: {
    [Button.name]: Button,
    [Card.name]: Card,
  },
}
</script>

<style lang="stylus">
.tabs-communication .w-card {
  columns: 20px 3
}
</style>
