<template>
  <main class="home-page">
    <div class="container">
      <div class="author">
        <div class="avatar shadow">
          <img class="avatar-img" src="/img/logo-new.png" alt="logo" />
        </div>
        <div class="nickname">Weijuer</div>
        <div class="description">Less talk more code!</div>
        <div class="links">
          <nav class="social-links">
            <ul class="nav">
              <li>
                <a href>
                  <svg class="icon svg-icon">
                    <use xlink:href="#icon-weixin"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href>
                  <svg class="icon svg-icon">
                    <use xlink:href="#icon-qq"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href>
                  <svg class="icon svg-icon">
                    <use xlink:href="#icon-weibo"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class Home extends Vue {
  @Action("INIT_DB") init_db!: () => void;

  created() {
    this.initDB();
  }

  async initDB() {
    await this.init_db();
  }
}
</script>

<style lang="stylus">
$bubble-color = #4cbf30

.author
  height: 100%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

  .avatar
    display: flex;
    justify-content: center;
    position: relative
    width: 8rem
    height: 8rem
    margin-bottom: 2rem

    &.shadow
      filter: url("#sticky")

      &:after
        content: ""
        display inline-block
        position: absolute
        top: 110%
        height: 10px
        width: 40%
        background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 80%)
        animation: shadowing-after 2s .5s ease-in-out infinite

    .avatar-img
      display: inline-block
      margin: 0 auto
      max-width: 100%
      height: auto
      background: radial-gradient(circle at 50% 55%, rgba(240, 245, 255, 0.9), rgba(240, 245, 255, 0.9) 40%, rgba(225, 238, 255, 0.8) 60%, rgba(43, 130, 255, 0.4))
      border-radius: 100%
      cursor: pointer
      transform: translate(0, -20px)
      animation: shadowing 2s .5s ease-in-out infinite

      &:before,
      &:after
        content: ""
        position: absolute
        display: none
        top: 5%
        left: 10%
        width: 80%
        height: 80%
        border-radius: 100%
        filter: blur(2px)
        z-index: 2
        transform: rotateZ(-30deg)

      &:before
        filter: blur(0)
        height: 80%
        width: 40%
        background: radial-gradient(circle at 130% 130%, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0) 46%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.8) 58%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0) 100%)
        transform: translateX(131%) translateY(58%) rotateZ(168deg) rotateX(10deg)

      &:after
        background: radial-gradient(circle at 50% 80%, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 74%, white 80%, white 84%, rgba(255, 255, 255, 0) 100%)

  .nickname
    margin-bottom: 1rem
    font-size: 2rem
    text-transform: uppercase
    -webkit-box-reflect: below -1rem -webkit-linear-gradient(top, transparent, transparent 40%, rgba(0, 0, 0, 0.4))

  .description
    text-transform: capitalize
    font-style: italic
    transition: all 0.3s ease-in-out

    &:hover
      animation: text-shadowing 0.3s 0.2s linear forwards

  .links
    .social-links
      .nav
        li
          a
            padding 0 6px

    .svg-icon
      width: 1.5rem
      height: 1.5rem
      vertical-align: middle
      fill: currentColor
      overflow: hidden

@keyframes text-shadowing
  from
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4)

  to
    text-shadow: 0 6px 2px rgba(0, 0, 0, 0.4)

@keyframes shadowing
  0%,
  100%
    transform: translate(0, -20px) scale(1, 1)

  60%
    transform: translate(0, 20px) scale(1.15, 0.95)

@keyframes shadowing-after
  0%,
  100%
    width: 40%

  50%
    width: 90%
</style>
