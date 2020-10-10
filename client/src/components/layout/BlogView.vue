<template>
  <article class="u-view u-blog-view">
    <header>
      <h1 class="title">{{ title }}</h1>
      <div class="desc">{{ desc }}</div>
      <div class="author">
        by
        <a href="">{{ author }}</a>
      </div>
    </header>

    <div class="content">
      <slot />
    </div>
  </article>
</template>

<script>
export default {
  name: 'u-blog-view',
  props: {
    title: String,
    desc: String,
    author: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="stylus" scoped>
.u-view {
}
</style>
