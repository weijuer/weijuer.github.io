<template>
  <div class="w-note" contenteditable></div>
</template>
<script>
export default {
  name: 'w-note',
}
</script>
<style lang="stylus">
.w-note {
  max-width: 500px;
  margin: 50px auto;
  background: white;
  border-radius: 5px;
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem 1rem 3rem;
  background: -webkit-gradient(linear, 0 0, 0 100%, from(#d9eaf3), color-stop(4%, #fff)) 0 4px;
  background-size: 100% 3rem;
  position: relative;
  line-height: 3rem;
  outline: none;

  &::before {
    content: '';
    position: absolute;
    width: 4px;
    top: 0;
    left: 30px;
    bottom: 0;
    border: 1px solid;
    border-color: transparent #efe4e4;
  }

  &.active {
    border: 2px solid purple;
  }
}
</style>