<template>
  <div class="app home">
    <div class="welcome">
      <!--<h3 class="w-capitalize">Less coding, More fun!</h3>
      <h1 class="title">Weijuer's Blog</h1>
      <h3 class="w-uppercase">weijuer.github.io - 2018</h3>-->
      <canvas id="welcome-bg" class="welcome-bg"></canvas>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Arrow from '@/assets/global/js/plugins/Arrow'
  import Clover from "../../assets/global/js/plugins/Clover";
  import SadMan from "../../assets/global/js/plugins/SadMan";
  import Welcome from "../../assets/global/js/plugins/Welcome";
  import Pig from "../../assets/global/js/plugins/Pig";

  export default {
    name: 'home',
    data() {
      return {
        dbInit: false
      }
    },
    components: {},
    beforeCreate() {
      console.log('beforeCreate=====>')
    },
    created() {
      console.log('-----home created')
    },
    mounted() {
      console.log('-----mounted');
      //this.getWelcome();
      this.getPig();

      // 1.绑定页面监听resize事件
      window.addEventListener('resize', this.getPig);
    },
    methods: {
      getWelcome() {
        // 1.获取画布
        const canvas = document.getElementById('welcome-bg');

        if(canvas.getContext) {
          // 设置画布尺寸
          canvas.width = document.querySelector('.welcome').offsetWidth || document.documentElement.offsetWidth;
          canvas.height = document.querySelector('.welcome').offsetHeight || document.documentElement.offsetHeight;
          // 设置画布背景色
          canvas.style.backgroundColor = 'transparent';

          // 2.监听鼠标移动
          canvas.addEventListener('mousemove', (event) => {
            let arrow1 = new Arrow(100, 200, 'red', event, canvas);
            let arrow2 = new Arrow(120, 60, 'green', event, canvas);
            console.log(`X:===>${event.offsetX},Y:===>${event.offsetY}`);

            // 3.定时器
            window.requestAnimationFrame(() => {
              arrow1.drawArrow();
              arrow2.drawArrow();
            });

          });
        }
      },
      getClover() {
        // 1.获取画布
        const canvas = document.getElementById('welcome-bg');
        const context = canvas.getContext('2d');

        if(canvas.getContext) {
          // 设置画布尺寸
          canvas.width = document.querySelector('.welcome').offsetWidth || document.documentElement.offsetWidth;
          canvas.height = document.querySelector('.welcome').offsetHeight || document.documentElement.offsetHeight;
          // 设置画布背景色
          canvas.style.backgroundColor = 'transparent';

          let clover = new Clover(canvas);
          let sadMan = new SadMan(canvas);
          let welcome = new Welcome(canvas);
          let pig = new Pig(canvas);


          pig.getMouseLocation();

          // 3.定时器
          /* let tick = 0;
          (function drawClover() {
            // 清屏
            context.clearRect(0, 0, canvas.width, canvas.height);

            // 设置振幅
            tick += 0.03;

            //clover.draw(tick);
            //sadMan.draw(tick);
            //welcome.draw();
            pig.draw(tick);
            // 设置定时
            window.requestAnimationFrame(drawClover);
          })(); */

        }

      },
      getPig() {
        // 1.获取画布
        const canvas = document.getElementById('welcome-bg');
        const context = canvas.getContext('2d');

        if(canvas.getContext) {
          // 设置画布尺寸
          canvas.width = document.querySelector('.welcome').offsetWidth || document.documentElement.offsetWidth;
          canvas.height = document.querySelector('.welcome').offsetHeight || document.documentElement.offsetHeight;

          let pig = new Pig(canvas);
          // pig.getMouseLocation();
          // let tick = 0;
          // pig.draw(tick);

          // 3.定时器
          let tick = 0;
          (function drawClover() {
            // 设置振幅
            tick += 0.05;
            pig.draw(tick);
            // 设置定时
            window.requestAnimationFrame(drawClover);
          })();

        }

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
    background: url("../../assets/global/images/bg/bg-family.png") center center no-repeat;
    background-size: cover;
  }

}
</style>
