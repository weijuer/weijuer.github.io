<template>
  <div class="w-phone">
    <div class="screen">
      <ul class="chat-messages">
        <li class="chat-message">test</li>
        <li class="chat-message">test</li>
      </ul>

      <div class="chat-bar">
        <button class="chat-control-btn">
          <w-icon name="circle-plus" />
        </button>
        <div class="chat-input" contenteditable></div>
        <button class="chat-send-btn">
          <w-icon name="send" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from 'Widgets'

export default {
  name: 'w-phone',
  components: {
    [Icon.name]: Icon,
  },
}
</script>

<style lang="stylus" scoped>
.w-phone {
  position: relative
  width: 320px
  height: 568px
  margin: 0 auto
  font-family: "Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif
  border: 0px solid #36383a
  border-width: 40px 16px 60px
  border-radius: 20px
  color: #474c57

  &:before {
    content: ""
    display: block
    width: 60px
    height: 6px
    position: absolute
    left: 50%
    background: #2d2d2d
    border-radius: 6px
    box-shadow: 0 0 1px 2px #868686
    transform: translate(-50%, -22px)
  }

  &:after {
    content: ""
    display: block
    width: 40px
    height: 40px
    position: absolute
    left: 50%
    background: #ffffff
    border-radius: 50%
    box-shadow: 0 0 1px 3px #b5b7b9
    transform: translate(-50%, 10px)
  }

  .screen {
    width: 100%
    height: 100%
    position: relative
    background: #BEE4F9

    .chat-messages {
      margin: 0
      padding: 12px 8px
      overflow-x: hidden
      overflow-y: auto
      list-style: none

      &:after {
        content: ""
        display: block
        clear: both
      }

      .chat-message {
        position: relative
        clear: both
        display: inline-block
        padding: 12px 18px
        margin: 0 0 20px 0
        font: 16px / 20px "Noto Sans", sans-serif
        border-radius: 10px
        background-color: rgba(25, 147, 147, 0.2)

        &:before {
          content: ""
          position: absolute
          top: 0
          width: 50px
          height: 50px
          border-radius: 50px
        }

        &:after {
          position: absolute
          top: 15px
          content: ""
          width: 0
          height: 0
          border-top: 15px solid rgba(25, 147, 147, 0.2)
        }

        &.chat-message-me {
          margin-right: 80px
          float: right
          color: #0AD5C1
          animation: show-chat-odd 0.15s 1 ease-in

          &:before {
            right: -80px
            background: green
          }

          &:after {
            border-right: 15px solid transparent
            right: -15px
          }
        }

        &.chat-message-friend {
          margin-left: 80px
          float: left
          color: #0EC879
          animation: show-chat-even 0.15s 1 ease-in

          &:before {
            left: -80px
            background: #ff0
          }

          &:after {
            border-left: 15px solid transparent
            left: -15px
          }
        }
      }
    }

    .chat-bar {
      display: flex
      position: absolute
      left: 0
      bottom: 0
      width: 100%
      height: 40px
      background: #32a8e6

      .chat-input {
        padding: 10px 6px
        flex: 1
        overflow: hidden
        font-size: 14px
        color: #fff
        resize: none
        outline: none
        cursor: text
      }
    }
  }

  button {
    -webkit-tap-highlight-color: transparent
    border: none
    outline: none
  }
}
</style>
