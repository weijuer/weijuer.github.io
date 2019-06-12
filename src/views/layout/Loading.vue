<template>
  <div class="app-loading" v-show="!isLoading">
    <svg
      style="width: 60px; height: 60px;vertical-align: middle;fill: currentColor;overflow: hidden;"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enable-background="new 0 0 100 100"
      xml:space="preserve"
    >
      <circle
        fill="none"
        stroke="#fff"
        stroke-width="4"
        stroke-miterlimit="10"
        cx="50"
        cy="50"
        r="48"
      ></circle>
      <line
        fill="none"
        stroke-linecap="round"
        stroke="#fff"
        stroke-width="4"
        stroke-miterlimit="10"
        x1="50"
        y1="50"
        x2="85"
        y2="50.5"
        transform="rotate(158.994 50 50)"
      >
        <animateTransform
          attributeName="transform"
          dur="2s"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        ></animateTransform>
      </line>
      <line
        fill="none"
        stroke-linecap="round"
        stroke="#fff"
        stroke-width="4"
        stroke-miterlimit="10"
        x1="50"
        y1="50"
        x2="49.5"
        y2="74"
        transform="rotate(333.199 50 50)"
      >
        <animateTransform
          attributeName="transform"
          dur="15s"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        ></animateTransform>
      </line>
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class Loading extends Vue {
  @Getter isLoading?: boolean;
}
</script>

<style lang="stylus">
.app-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(52, 73, 94, 0.8);
  perspective: 1000px;
}
</style>
