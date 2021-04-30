<template>
  <div class="w-phone">
    <div class="front-camera"></div>
    <div class="screen">
      <ul ref="chatMessages" class="chat-messages">
        <li
          v-for="(message, index) of messages"
          :key="'message' + index"
          :class="[chatMessageClass(message)]"
          class="chat-message"
        >
          {{ message.msg }}
        </li>
      </ul>
      <!-- <div class="chat-effect-container" style="filter: none">
        <div class="chat-effect-bar"></div>
      </div> -->
      <div class="chat-bar">
        <button class="chat-btn chat-control-btn">
          <w-icon name="circle-plus" />
        </button>
        <div ref="message" class="chat-input" contenteditable></div>
        <button @click="sendMessage()" class="chat-btn chat-send-btn">
          <w-icon name="send" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, watch, ref } from 'vue'
import { Icon } from 'Widgets'

export default {
  name: 'w-phone',
  components: {
    [Icon.name]: Icon,
  },
  setup() {
    // input element
    const message = ref()
    // messages data
    const messages = ref([])
    // chat-messages element
    const chatMessages = ref()

    // new BroadcastChannel
    const channel = new BroadcastChannel('BroadcastChannel')

    function broadcastChannel() {
      channel.onmessage = function (e) {
        const data = e.data
        const text = '[receive] ' + data.msg + ' —— ' + data.from
        console.log('[BroadcastChannel] receive message:', text)
        messages.value.push({
          uid: messages.value.length + 1,
          from: 'BroadcastChannel',
          source: 'receive',
          msg: data.msg,
        })
      }

      channel.onmessageerror = function (e) {
        console.error(e)
      }
    }

    // send message
    function sendMessage() {
      if (!message.value.textContent) {
        return false
      }

      const current = {
        uid: messages.value.length + 1,
        from: 'BroadcastChannel',
        source: 'send',
        msg: message.value.textContent,
      }
      // post
      channel.postMessage(current)
      // store
      messages.value.push(current)
      // clear
      message.value.textContent = ''
      // scroll
      chatMessages.value.scrollIntoView()
    }

    function chatMessageClass(message) {
      return `chat-message-${message.source}`
    }

    // init
    function init() {
      broadcastChannel()
      console.log('init')
    }

    // init
    init()

    onMounted(() => {
      console.log('onMounted')
    })

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })

    onUpdated(() => {
      console.log('onUpdated')
    })

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
      // close
      channel.close()
    })

    watch(messages.value, (newValue, oldValue) => {
      console.log(newValue, oldValue)
      console.log('The new messages value is: ' + messages.value)
    })

    return { message, messages, chatMessages, sendMessage, chatMessageClass }
  },
}
</script>

<style lang="stylus" scoped>
.w-phone {
  position: relative;
  width: 307px;
  height: 633px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: 'Avenir Next', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #474c57;
  background: rgb(239, 221, 197);
  border-radius: 46px;
  border: solid 2px rgb(76, 100, 117);
  box-shadow: inset #000 0 0 0 10px;
  transform-style: preserve-3d;

  .front-camera {
    position: absolute;
    top: 0;
    width: 50%;
    height: 32px;
    background: #111;
    border-radius: 0 0 18px 18px / 15px;
    z-index: 1000;

    &::before {
      position: absolute;
      left: 20%;
      bottom: 10px;
      width: 50%;
      height: 8px;
      background: #333;
      content: '';
      border-radius: 4px;
    }

    &::after {
      position: absolute;
      right: 20%;
      width: 10px;
      height: 10px;
      content: '';
      background: radial-gradient(#444 1px, rgb(0, 54, 161) 2px, rgb(14, 27, 29) 5px);
      bottom: 9px;
      border-radius: 50%;
    }
  }

  &::before1 {
    content: '';
    display: block;
    width: 60px;
    height: 6px;
    position: absolute;
    left: 50%;
    background: #2d2d2d;
    border-radius: 6px;
    box-shadow: 0 0 1px 2px #868686;
    transform: translate(-50%, -22px);
  }

  &::after1 {
    content: '';
    display: block;
    width: 40px;
    height: 40px;
    position: absolute;
    left: 50%;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0 0 1px 3px #b5b7b9;
    transform: translate(-50%, 10px);
  }

  .screen {
    padding-top: 22px;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    position: relative;
    overflow: hidden;
    border-radius: 34px;

    .chat-messages {
      margin: 0;
      padding: 12px 8px;
      max-height: 567px;
      overflow-x: hidden;
      overflow-y: auto;
      list-style: none;

      &:after {
        content: '';
        display: block;
        clear: both;
      }

      .chat-message {
        position: relative;
        clear: both;
        display: inline-block;
        margin: 0 0 20px 0;
        padding: 12px 18px;
        font-size: 14px;
        line-height: 1.5;
        word-break: break-word;
        border-radius: 10px;
        background-color: rgba(25, 147, 147, 0.2);

        &:before {
          content: '';
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0;
          width: 40px;
          height: 40px;
          font-size: 26px;
          color: #fff;
          border-radius: 50px;
        }

        &:after {
          position: absolute;
          top: 15px;
          content: '';
          width: 0;
          height: 0;
          border-top: 15px solid rgba(25, 147, 147, 0.2);
        }

        &.chat-message-send {
          margin-right: 60px;
          float: right;
          color: #0AD5C1;
          animation: show-chat-odd 0.15s 1 ease-in;

          &:before {
            content: 'S';
            right: -60px;
            background: green;
          }

          &:after {
            border-right: 15px solid transparent;
            right: -15px;
          }
        }

        &.chat-message-receive {
          margin-left: 60px;
          float: left;
          color: #0EC879;
          animation: show-chat-even 0.15s 1 ease-in;

          &:before {
            content: 'R';
            left: -60px;
            background: #f85365;
          }

          &:after {
            border-left: 15px solid transparent;
            left: -15px;
          }
        }
      }
    }

    .chat-bar {
      display: flex;
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      background: #32a8e6;

      .chat-input {
        padding: 10px 6px;
        min-height: 40px;
        flex: 1;
        overflow: hidden;
        font-size: 14px;
        color: #fff;
        resize: none;
        outline: none;
        cursor: text;

        &:empty {
          &:before {
            content: 'Write something...';
            color: #2B8EC2;
          }

          +.chat-send-btn {
            color: #2B8EC2;
            cursor: not-allowed;
          }
        }
      }

      .chat-btn {
        color: #fff;
        cursor: pointer;
        background: transparent;
      }
    }
  }

  button {
    border: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }
}
</style>
