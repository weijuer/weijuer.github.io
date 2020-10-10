<template>
  <article class="example tabs-communication">
    <header>
      <h1 class="title">Cross Tabs Communication</h1>
      <div class="author">by Weijuer</div>
    </header>

    <div class="content">
      <w-phone />
    </div>

    <footer>
      <a class="w-link-btn" href="#/tabs-communication?tab=1" target="_blank"
        >Open a new tab (same origin) >></a
      >
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
  header {
    text-align: center
    margin-bottom: 18px

    .title {
      margin: 0
      line-height: 1
      font-weight: 100
      color: #6fafdd
    }

    .author {
      padding: 10px 0
      color: #a8a8a8
    }
  }

  footer {
    margin: 14px 16px
    text-align: center
  }
}

.w-link-btn {
  position: relative
  color: #999

  &:before {
    content: ""
    width: 0
    height: 1px
    position: absolute
    left: 0
    bottom: 0
    background: #6265fe
    transition: width 0.5s
  }

  &:hover {
    color: #6265fe

    &:before {
      width: 100%
    }
  }
}
</style>
