<template>
  <article class="example tabs-communication">
    <header>
      <h1 class="title">Cross Tabs Communication</h1>
      <div class="desc">
        This page shows the ways to share or sync messages between tabs which have the same origin.
      </div>
      <div class="author">by Weijuer</div>
    </header>

    <div class="content">
      <w-phone />
    </div>

    <footer>
      <a href="#/tabs-communication?tab=1" target="_blank">Open a new tab (same origin) >></a>
    </footer>
  </article>
</template>

<script>
import { Button, Card, Phone } from 'Widgets'

export default {
  name: 'tabs-communication',
  components: {
    [Button.name]: Button,
    [Card.name]: Card,
    [Phone.name]: Phone,
  },
  setup() {},
}
</script>

<style lang="stylus">
.tabs-communication {
  font-family: "Raleway", "Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif

  header {
    text-align: center

    .title {
      margin: 0
      line-height: 1
      font-weight: 100
      color: #6fafdd
    }

    .desc {
      color: #999
    }

    .author {
      padding: 10px 0 30px
      color: #a8a8a8
    }
  }
}
</style>
