<template>
  <div :class="{'open': isOpen}" @click="toggle" class="envelope">
    <div class="letter">
      <h1>《春》</h1>
      <p>盼望着，盼望着，东风来了，春天的脚步近了。一切都像刚睡醒的样子，欣欣然张开了眼。山朗润起来了，水长起来了，太阳的脸红起来了。小草偷偷地从土里钻出来，嫩嫩的，绿绿的。园子里，田野里，瞧去，一大片一大片满是的。坐着，躺着，打两个滚，踢几脚球，赛几趟跑，捉几回迷藏。风轻悄悄的，草绵软软的。</p>
      <p>桃树、杏树、梨树，你不让我，我不让你，都开满了花赶趟儿。红的像火，粉的像霞，白的像雪。花里带着甜味，闭了眼，树上仿佛已经满是桃儿、杏儿、梨儿！花下成千成百的蜜蜂嗡嗡地闹着，大小的蝴蝶飞来飞去。野花遍地是：杂样儿，有名字的，没名字的，散在草丛里，像眼睛，像星星，还眨呀眨的。</p>
    </div>
    <div class="notepad">
      <div class="top"></div>
      <div class="paper">
        <h1>《春》</h1>
        <p>盼望着，盼望着，东风来了，春天的脚步近了。一切都像刚睡醒的样子，欣欣然张开了眼。山朗润起来了，水长起来了，太阳的脸红起来了。小草偷偷地从土里钻出来，嫩嫩的，绿绿的。园子里，田野里，瞧去，一大片一大片满是的。坐着，躺着，打两个滚，踢几脚球，赛几趟跑，捉几回迷藏。风轻悄悄的，草绵软软的。</p>
        <p>桃树、杏树、梨树，你不让我，我不让你，都开满了花赶趟儿。红的像火，粉的像霞，白的像雪。花里带着甜味，闭了眼，树上仿佛已经满是桃儿、杏儿、梨儿！花下成千成百的蜜蜂嗡嗡地闹着，大小的蝴蝶飞来飞去。野花遍地是：杂样儿，有名字的，没名字的，散在草丛里，像眼睛，像星星，还眨呀眨的。</p>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'w-letter',
  props: {
    value: Boolean,
  },
  setup() {
    const isOpen = ref(false)

    // 状态切换
    function toggle() {
      isOpen.value = !isOpen.value
    }

    return { isOpen, toggle }
  },
}
</script>
<style lang="stylus">
envelopeWidth = 400;
envelopeHeight = 300;
envelopeBorderWidth = (envelopeWidth / 2) * 1px;
envelopeBorderHeight = (envelopeHeight / 2) * 1px;

.envelope {
    position: relative;
    margin: 0 auto;
    max-width: envelopeWidth * 1px;
    height: envelopeHeight * 1px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    background-color: #00334c;
    box-shadow: 0 4px 20px rgb(0 0 0 / 20%);
    overflow: hidden;

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
        border-left: envelopeBorderWidth solid transparent;
        border-right: envelopeBorderWidth solid transparent;
        border-bottom: 82px solid transparent;
        border-top: 140px solid #00334c;
        transform-origin: top;
        transition: transform 0.4s ease, z-index 0.6s;
    }

    &::after {
        border-left: envelopeBorderWidth solid #0077B2;
        border-right: envelopeBorderWidth solid #0077B2;
        border-bottom: envelopeBorderHeight solid #006da3;
        border-top: envelopeBorderHeight solid transparent;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
    }

    .letter {
        position: relative;
        width: 90%;
        margin: 0 auto;
        top: 5%;
        border-radius: 6px;
        line-height: 32px;
        background: #fff repeating-linear-gradient(#F1EDE9, #F1EDE9 31px, #94ACD4 31px, #94ACD4 32px);
        box-shadow: 0 2px 26px rgb(0 0 0 / 12%);
        transition: transform 0.4s 0.6s ease, z-index 0.6s;
    }

    &.open {
        &::before {
            transform: rotateX(180deg);
            transition: transform 0.4s ease, z-index 0.6s;
            z-index: 1;
        }

        .letter {
            transform: translateY(-160px);
            transition: transform 0.4s 0.6s ease, z-index 0.6s;
            z-index: 2;
        }
    }
}

.notepad {
    display: none;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    height: 400px;
    box-shadow: 10px 10px 40px rgb(0 0 0 / 15%);
    border-radius: 0 0 10px 10px;
    overflow: hidden;

    .top {
        width: 100%;
        height: 50px;
        background: #333;
        border-radius: 5px 5px 0 0;
    }

    .paper {
        width: 100%;
        height: 100%;
        padding: 0 20px;
        background: repeating-linear-gradient(#F1EDE9, #F1EDE9 31px, #94ACD4 31px, #94ACD4 32px);
        font-family: 'Shadows Into Light', cursive;
        font-size: 22px;
        line-height: 32px;
        outline: 0;

        h1, p {
            font-size: 16px;
            line-height: inherit;
        }

        p {
            margin-bottom: 0;
            text-indent: 2em;
        }
    }
}
</style>