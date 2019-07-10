<template>
  <main class="article-page">
    <div class="container">
      <transition name="slide-left" mode="out-in">
        <router-view class="article-body" />
      </transition>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class Article extends Vue {}
</script>

<style lang="stylus">
.normal-articles
  display: grid
  grid-template-columns: 30% minmax(0, 1fr)
  gap: 4rem

.article-body {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  transform: translate(0, 30px);
}

.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  transform: translate(0, -30px);
}

.fade-enter-active {
  transition: all 0.5s 0.3s;
}

@media (max-width: 768px)
  .normal-articles
    grid-template-columns auto
</style>
