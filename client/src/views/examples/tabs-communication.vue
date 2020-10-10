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
  setup() {
    function init() {
      broadcastChannel()
    }

    // init
    // init()

    function broadcastChannel() {
      const bc = new BroadcastChannel('Weijuer')
      const $container = document.getElementById('broadcast-channel')
      const $input = $container.querySelector('input')
      const $btn = $container.querySelector('button')
      const $info = $container.querySelector('p')

      bc.onmessage = function (e) {
        const data = e.data
        const text = '[receive] ' + data.msg + ' —— tab ' + data.from
        console.log('[BroadcastChannel] receive message:', text)
        $info.textContent = text
      }

      bc.onmessageerror = function (e) {
        console.error(e)
      }

      $btn.addEventListener('click', function () {
        const tab = document.getElementById('js-header').dataset.tab
        const val = $input.value
        $input.value = ''
        $info.textContent = '[send] ' + val
        bc.postMessage({
          from: tab,
          msg: val,
        })
      })
    }

    return { init }
  },
}
</script>

<style lang="stylus">
.tabs-communication {
  // background: linear-gradient(-45deg, #183850 0, #183850 25%, #192c46 50%, #22254c 75%, #22254c 100%)
  background-repeat: no-repeat
  background-attachment: fixed
}

.tabs-communication section {
  columns: 20px 3
}
</style>
