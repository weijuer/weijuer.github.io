<template>
  <div class="app home">
    <div class="welcome">
      <h3 class="w-capitalize">Less coding, More fun!</h3>
      <h1 class="title">Weijuer's Blog</h1>
      <h3 class="w-uppercase">weijuer.github.io - 2018</h3>
      <canvas id="welcome-bg" class="welcome-bg"></canvas>
    </div>
  </div>
</template>

<script>
  import panel from '@/components/panel'
  import welcome from '@/assets/global/js/plugins/welcome'

  export default {
    name: 'home',
    data() {
      return {
        dbInit: false
      }
    },
    components: {
      panel
    },
    beforeCreate() {
      console.log('beforeCreate=====>')
    },
    created() {
      console.log('-----home created')
    },
    mounted() {
      console.log('-----mounted')
      this.getMouse();
    },
    methods: {
      getMouse() {
        let canvas = document.getElementById('welcome-bg');
        let mouse = welcome.getLocation(canvas);
        console.log(mouse);
      }
    }
  }
</script>

<style lang="less">
.welcome {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  font-family: "Montserrat", sans-serif;

  .title {
    font-size: 60px;
    text-shadow: 0 0 30px #60c700;
  }

  .welcome-bg {
    flex: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

}
</style>
