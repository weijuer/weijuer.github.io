<template>
  <svg class="svg-symbols hidden" version="1.1">
    <defs>
      <filter id="sticky">
        <feGaussianBlur
          in="SourceGraphic"
          stdDeviation="6"
          result="blur"
        ></feGaussianBlur>
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -6"
          result="weijuer"
        ></feColorMatrix>
        <feComposite
          in="SourceGraphic"
          in2="weijuer"
          operator="over"
        ></feComposite>
      </filter>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#01c790;"></stop>
        <stop offset="50%" style="stop-color:rgb(93,255,178);"></stop>
        <stop offset="100%" style="stop-color:#01c790;"></stop>
      </linearGradient>

      <radialGradient id="gr-radial" cx="50%" cy="50%" r="100%">
        <animate
          attributeName="r"
          values="0%;90%;90%;0%"
          dur="3s"
          repeatCount="indefinite"
        ></animate>
        <stop stop-color="#000" offset="0"></stop>
        <stop stop-color="#000" offset="60%"></stop>
        <stop offset="100%" style="stop-color:rgba(255,0,0,0.8);"></stop>
      </radialGradient>
    </defs>

    <symbol id="icon-logo@2x" viewBox="0 0 380 380">
      <title>logo@2x</title>
      <desc>logo@2x</desc>
      <defs>
        <linearGradient
          x1="3.13911684%"
          y1="83.6258178%"
          x2="20.1927996%"
          y2="80.6654496%"
          id="linearGradient-1"
        >
          <stop stop-color="#06672C" offset="0%"></stop>
          <stop stop-color="#01A64D" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="23.4282288%"
          y1="24.8585846%"
          x2="63.1397102%"
          y2="31.5889581%"
          id="linearGradient-2"
        >
          <stop stop-color="#066A2D" offset="0%"></stop>
          <stop stop-color="#00A34A" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="22.9931803%"
          y1="69.9337516%"
          x2="50%"
          y2="66.0256633%"
          id="linearGradient-3"
        >
          <stop stop-color="#04702E" offset="0%"></stop>
          <stop stop-color="#00A34D" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="90.3425076%"
          y1="-1.55303794%"
          x2="90.3425076%"
          y2="14.2781115%"
          id="linearGradient-4"
        >
          <stop stop-color="#026B29" offset="0%"></stop>
          <stop stop-color="#00A34A" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Desktop-HD" transform="translate(-791.000000, -360.000000)">
          <g id="global" transform="translate(814.000000, 382.000000)">
            <polygon
              id="path-4"
              fill="url(#linearGradient-1)"
              points="327.052734 94.9042969 239.1975 94.9042969 186.2 277.900391 164.4 217.154297 212 54.3085938 296 54.3085938"
            ></polygon>
            <polygon
              id="path-3"
              fill="url(#linearGradient-2)"
              points="148.459091 144.811646 186.2 277.982422 144.7 277.982422 123 204.816406"
            ></polygon>
            <polygon
              id="path-2"
              fill="url(#linearGradient-3)"
              points="106.896484 144.8125 148.464844 144.8125 110.586823 278.549561 86.03125 214.660156"
            ></polygon>
            <polygon
              id="path-1"
              fill="#00A34A"
              points="0.61328125 53.5351562 45.375 53.5351562 110.585937 278.548828 66.6738281 278.548828"
            ></polygon>
            <path
              d="M327.053253,94.8968353 L276.4,269.736328 C260.193988,307.640095 232.060655,330.040486 192,336.9375 C181.05661,336.9375 153.927052,336.9375 110.611328,336.9375 L123,292.177734 L186.2,292.177734 C204.899955,288.776378 220.192012,277.452159 232.076172,258.205078 C241.358724,238.769514 258.23763,184.274722 282.712891,94.7207031 L327.053253,94.8968353 Z"
              id="path-5"
              fill="url(#linearGradient-4)"
            ></path>
            <polygon
              id="path-6"
              fill="#00A64D"
              points="290.370117 0.333984375 279.397461 42.9404297 322.379883 42.9404297 334.702148 0.333984375"
            ></polygon>
          </g>
        </g>
      </g>
    </symbol>

    <symbol id="icon-menu" viewBox="0 0 1025 1024" width="28" height="28">
      <path
        d="M201.216 774.144c-21.504 0-38.912-17.408-38.912-38.912 0-21.504 17.408-38.912 38.912-38.912H819.2c10.24 0 20.48 4.096 27.648 11.264 7.168 7.168 11.264 17.408 11.264 27.648s-4.096 20.48-11.264 27.648c-7.168 7.168-17.408 11.264-27.648 11.264H201.216z m0-223.232c-21.504 0-38.912-17.408-38.912-38.912 0-21.504 17.408-38.912 38.912-38.912H819.2c10.24 0 20.48 4.096 27.648 11.264 7.168 7.168 11.264 17.408 11.264 27.648 0 10.24-4.096 20.48-11.264 27.648-7.168 7.168-17.408 11.264-27.648 11.264H201.216z m0-222.72c-21.504 0-38.912-17.408-38.912-38.912 0-21.504 17.408-38.912 38.912-38.912H819.2c21.504 0 38.912 17.408 38.912 38.912 0 21.504-17.408 38.912-38.912 38.912H201.216z"
        fill="#2C2C2C"
        p-id="2255"
      ></path>
    </symbol>

    <symbol id="icon-search" viewBox="0 0 1024 1024" width="28" height="28">
      <path
        d="M458.24 778.24c-158.72 0-289.28-130.56-289.28-289.28 0-158.72 130.56-289.28 289.28-289.28 158.72 0 289.28 130.56 289.28 289.28 0 158.72-130.56 289.28-289.28 289.28z m0-529.92c-130.56 0-238.08 107.52-238.08 238.08s107.52 238.08 238.08 238.08 238.08-107.52 238.08-238.08-107.52-238.08-238.08-238.08zM717.5168 733.5424l124.9024 124.928-36.224 36.1984-124.9024-124.928z"
        fill="#333333"
        p-id="6551"
      ></path>
    </symbol>
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class WSvg extends Vue {}
</script>

<style lang="stylus">
.svg-symbols
  #icon-logo
    width: 100%
    height: 100%

    .group
      fill: transparent
      stroke: #fff
      stroke-width: 4px
      stroke-miterlimit: 10
      stroke-linecap: round

      .logo-line
        stroke-dasharray: 1061
        stroke-dashoffset: 0
        animation: draw 1.5s linear forwards

      .logo-dot
        stroke-width: 2px
.tail
  fill: none;
  stroke: #fff;
  animation: heartbeat 1s infinite ease-in-out;
  stroke-dashoffset: 256;
  stroke-dasharray: 20, 256;
  stroke-width: 1;

@keyframes heartbeat
  to
    stroke-dashoffset: 0;

@keyframes draw
  from
    stroke-dashoffset: 1061

  to
    stroke-dashoffset: 0
</style>
