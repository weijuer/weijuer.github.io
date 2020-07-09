<template>
  <figure class="w-book" :class="bookClass">
    <!-- front -->
    <ul class="cover front-cover">
      <li>
        <span class="ribbon">New</span>
      </li>
      <li></li>
    </ul>

    <!-- pages -->
    <ul class="papers">
      <li></li>
      <li>
        <slot />
      </li>
      <li></li>
      <li></li>
      <li></li>
    </ul>

    <!-- back -->
    <ul class="cover back-cover">
      <li></li>
      <li></li>
    </ul>
    <figcaption>
      <slot />
    </figcaption>
  </figure>
</template>

<script>
import { reactive, computed, toRefs } from 'vue'

export default {
  name: 'w-book',
  props: {
    theme: String
  },
  setup(props) {
    const state = reactive({
      message: 'book',
      bookClass: computed(() => props.theme)
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="stylus" scoped>
ul
  list-style: none

.ribbon
  background: #c0392b
  color: #fff
  display: block
  font-size: 0.7em
  position: absolute
  top: 11px
  right: 1px
  width: 40px
  height: 20px
  line-height: 20px
  letter-spacing: 0.15em
  text-align: center
  transform: rotateZ(45deg) translateZ(1px)
  backface-visibility: hidden
  z-index: 10

  &:before,
  &:after
    content: ""
    position: absolute
    top: 0
    border: 10px solid #c0392b

  &:before
    left: -20px

  &:after
    right: -20px

.w-book
  margin: 0
  position: relative
  width: 140px
  height: 180px
  perspective: 1000px
  transform-style: preserve-3d

  &:hover
    .cover
      &.front-cover
        transform: rotateY(-125deg) translateZ(0px)
        z-index: 0

    .papers
      li
        &:nth-child(1)
          transform: rotateY(-30deg)
          transition-duration: 1.5s

        &:nth-child(2)
          transform: rotateY(-35deg)
          transition-duration: 1.8s

        &:nth-child(3)
          transform: rotateY(-110deg)
          transition-duration: 2.2s

        &:nth-child(4)
          transform: rotateY(-115deg)
          transition-duration: 1.8s

        &:nth-child(5)
          transform: rotateY(-120deg)
          transition-duration: 1.2s

  &.green
    .cover
      &.front-cover
        background-color: #2ecc71

      &.back-cover
        background-color: #2ecc71

  .cover
    position: absolute
    top: 0
    left: 0px
    width: 100%
    height: 100%
    border-radius: 2px 8px 8px 2px
    transition: all 0.5s ease, z-index 0.6s
    transform-style: preserve-3d
    transform-origin: 0% 100%

    &.front-cover
      transform: rotateY(-38deg) translateZ(0px)
      z-index: 100
      background-color: #000
      overflow: hidden

      &:after
        content: ""
        background-image: -webkit-linear-gradient(-135deg, rgba(255, 255, 255, 0.45) 0%, transparent 100%)
        background-image: linear-gradient(-135deg, rgba(255, 255, 255, 0.45) 0%, transparent 100%)
        position: absolute
        top: 0
        left: 0
        bottom: 0
        right: 0

    &.back-cover
      transform: rotateY(-25deg)
      background-color: #333

  .papers
    position: absolute
    width: 98%
    height: 98%
    top: 1%
    left: 0
    z-index: 10
    transform-style: preserve-3d

    li
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background-color: #fff
      background-image: -webkit-linear-gradient(rgba(200, 200, 200, 0.1) 0.1em, transparent 0.1em), -webkit-linear-gradient(left, #e1ddd8 0%, #fffbf6 100%)
      // background-image: linear-gradient(rgba(200, 200, 200, 0.1) 0.1em, transparent 0.1em), linear-gradient(left, #e1ddd8 0%, #fffbf6 100%)
      background-size: 100% 0.6em
      box-shadow: inset 0px -1px 2px rgba(50, 50, 50, 0.1), inset -1px 0px 1px rgba(150, 150, 150, 0.2)
      border-radius: 0px 10px 10px 0px
      transition: transform 0.6s ease
      transform-origin: left center
      transform-style: preserve-3d

      &:nth-child(1)
        transition-duration: 0.6s
        transform: rotateY(-27deg)

      &:nth-child(2)
        transition-duration: 0.6s
        transform: rotateY(-29deg)

      &:nth-child(3)
        transition-duration: 0.4s
        transform: rotateY(-31deg)

      &:nth-child(4)
        transition-duration: 0.5s
        transform: rotateY(-33deg)

      &:nth-child(5)
        transition-duration: 0.5s
        transform: rotateY(-35deg)

  figcaption
    padding-left: 40px
    text-align: left
    position: absolute
    top: 0%
    left: 160px
    width: 310px
    -webkit-backface-visibility: hidden
</style>
