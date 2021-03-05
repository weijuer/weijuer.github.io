<template>
  <div :class="{'open': isOpen}" class="envelope" ref="envelope">
    <article class="letter">
      <header>
        <div class="date"></div>
      </header>
      <main class="body">
        <slot>
          <h1 class="to">尊敬的春:</h1>
          <p>您好！</p>
          <p>盼望着，盼望着，东风来了，春天的脚步近了。一切都像刚睡醒的样子，欣欣然张开了眼。山朗润起来了，水长起来了，太阳的脸红起来了。小草偷偷地从土里钻出来，嫩嫩的，绿绿的。园子里，田野里，瞧去，一大片一大片满是的。坐着，躺着，打两个滚，踢几脚球，赛几趟跑，捉几回迷藏。风轻悄悄的，草绵软软的。</p>
          <p>桃树、杏树、梨树，你不让我，我不让你，都开满了花赶趟儿。红的像火，粉的像霞，白的像雪。花里带着甜味，闭了眼，树上仿佛已经满是桃儿、杏儿、梨儿！花下成千成百的蜜蜂嗡嗡地闹着，大小的蝴蝶飞来飞去。野花遍地是：杂样儿，有名字的，没名字的，散在草丛里，像眼睛，像星星，还眨呀眨的。</p>
        </slot>
      </main>
      <footer class="footer">
        <div class="greetings">
          <p class="best">此致，</p>
          <p class="regards">敬礼。</p>
        </div>
        <div class="sign">
          <div class="author">XXX</div>
          <div class="date">2021年03月08日</div>
        </div>
      </footer>
    </article>
    <div class="action">
      <div @click="toggle" class="heart"></div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
export default {
  name: 'w-letter',
  props: {
    target: String,
  },
  setup() {
    const isOpen = ref(false)
    const envelope = ref(null)

    // 状态切换
    function toggle() {
      isOpen.value = !isOpen.value
    }

    onMounted(() => {})

    return { isOpen, envelope, toggle }
  },
}
</script>

<style lang="stylus">
.envelope {
    --envelopeWidth: 400px;
    --envelopeMaxWidth: 400px;
    --envelopeHeight: 240px;
    position: relative;
    margin: 0 auto;
    width: 300px;
    height: 200px;
    max-width: 400px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    background-color: #00334c;
    box-shadow: 0 4px 20px rgb(0 0 0 / 20%);
    transition: transform 0.4s ease, z-index 0.6s;

    &::before, &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: 2;
    }

    &::before {
        border-style: solid;
        border-width: 140px 150px;
        border-color: #00334c transparent transparent;
        transform: rotateX(0deg);
        transform-origin: top;
        transition: transform 0.4s 0.6s ease, z-index 1s;
        z-index: 3;
    }

    &::after {
        border-style: solid;
        border-width: 90px 150px;
        border-color: transparent #0077B2 #006da3;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
    }

    .letter {
        margin: 0 auto;
        padding: 0 14px 40px;
        width: 96%;
        height: 90%;
        position: relative;
        top: 5%;
        border-radius: 6px;
        line-height: 32px;
        overflow: auto;
        // background: #ffd9b4 repeating-linear-gradient(#fbe4ce, #ffebd6 31px, #94ACD4 31px, #94ACD4 32px);
        background: #ffd9b4;
        // background: #fff url('~Assets/img/example/bg/bg_flowers.png') top / cover no-repeat;
        transform: translateY(0px);
        transition: transform 0.4s ease, z-index 1s;
        z-index: 1;

        h1, p {
            font-size: 16px;
            line-height: inherit;
        }

        p {
            margin-bottom: 0;
            text-indent: 2em;
        }

        .footer {
            .greetings {
                .best {
                    text-indent: 0;
                }
            }

            .sign {
                text-align: right;
            }
        }
    }

    &.open {
        &::before {
            transform: rotateX(180deg);
            transition: transform 0.4s ease, z-index 0.6s;
            z-index: 1;
        }

        .letter {
            height: 200%;
            transform: translateY(-90%);
            transition: transform 0.4s 0.6s ease, z-index 0.6s, height 0.4s 0.6s ease;
            z-index: 2;
        }
    }

    .action {
        width: 60px;
        height: 60px;
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 4;
    }
}

.heart {
    position: relative;
    width: 60px;
    height: 60px;

    &::before, &::after {
        position: absolute;
        content: '';
        left: 30px;
        top: 8px;
        width: 30px;
        height: 50px;
        background: red;
        border-radius: 20px 20px 0 0;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
    }

    &::after {
        left: 0;
        transform: rotate(45deg);
        transform-origin: 100% 100%;
    }
}
</style>