<template>
  <main class="error-page">
    <h1 class="error-code">404</h1>
    <p class="error-desc">OOPS! Something went wrong here.</p>
  </main>
</template>

<style scoped lang="stylus">
.error-page
  flex-direction: column
  justify-content: center
  align-items: center

  .error-code
    font-size: 150px
    font-weight: bold
    color: #595d6e

  .error-desc
    font-size: 1.5rem
    color: #74788d
</style>
