<template>
  <div :class="{'open': isOpen}" @click="toggle" class="envelope" ref="envelope">
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
          <p>此致，</p>
          <p>敬礼。</p>
        </div>
        <div class="sign">
          <div class="author">XXX</div>
          <div class="date">2021年03月08日</div>
        </div>
      </footer>
    </article>
    <div @click="toggle" class="action"></div>
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
    width: 340px;
    height: 240px;
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
        z-index: 1;
    }

    &::before {
        border-style: solid;
        border-width: 110px 170px;
        border-color: #00334c transparent transparent;
        transform-origin: top;
        transition: transform 0.4s ease, z-index 0.6s;
    }

    &::after {
        border-style: solid;
        border-width: 120px 170px;
        border-color: transparent #0077B2 #006da3;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        z-index: 3;
    }

    .letter {
        margin: 0 auto;
        padding: 0 16px;
        width: 90%;
        height: 90%;
        position: relative;
        top: 5%;
        border-radius: 6px;
        line-height: 32px;
        overflow: auto;
        background: #fff repeating-linear-gradient(#F1EDE9, #F1EDE9 31px, #94ACD4 31px, #94ACD4 32px);
        background-attachment: scroll;
        box-shadow: 0 2px 26px rgb(0 0 0 / 12%);
        transition: transform 0.4s 0.6s linear, z-index 0.6s;

        h1, p {
            font-size: 16px;
            line-height: inherit;
        }

        p {
            margin-bottom: 0;
            text-indent: 2em;
        }
    }

    &.open {
        transform: translateY(240px);

        &::before {
            transform: rotateX(180deg);
        }

        .letter {
            transform: translateY(-100%);
            z-index: 2;
        }
    }
}
</style>