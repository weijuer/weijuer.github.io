<template>
  <div class="notepad">
    <div class="top"></div>
    <div class="paper">
      <h1>《春》</h1>
      <p>盼望着，盼望着，东风来了，春天的脚步近了。一切都像刚睡醒的样子，欣欣然张开了眼。山朗润起来了，水长起来了，太阳的脸红起来了。小草偷偷地从土里钻出来，嫩嫩的，绿绿的。园子里，田野里，瞧去，一大片一大片满是的。坐着，躺着，打两个滚，踢几脚球，赛几趟跑，捉几回迷藏。风轻悄悄的，草绵软软的。</p>
      <p>桃树、杏树、梨树，你不让我，我不让你，都开满了花赶趟儿。红的像火，粉的像霞，白的像雪。花里带着甜味，闭了眼，树上仿佛已经满是桃儿、杏儿、梨儿！花下成千成百的蜜蜂嗡嗡地闹着，大小的蝴蝶飞来飞去。野花遍地是：杂样儿，有名字的，没名字的，散在草丛里，像眼睛，像星星，还眨呀眨的。</p>
    </div>
  </div>
  <div id="wrap">
    <h1>SEND A MESSAGE</h1>
    <div id="form-wrap">
      <form>
        <p>HELLO JOE,</p>
        <label for="email">Your Message:</label>
        <textarea id="message" name="message" value="Your Message"></textarea>

        <p>BEST,</p>
        <label for="name">Name:</label>
        <input id="name" name="name" type="text" value />

        <label for="email">Email:</label>
        <input id="email" name="email" type="text" value />

        <input name="submit" type="submit" value="NOW, I SEND THANKS!" />
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'w-letter',
  props: {
    value: Boolean,
  },
}
</script>
<style lang="stylus">
body, div, h1, h2, form, fieldset, input, textarea, footer, p {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
}

body {
    background: #F5F5F5;
    color: gray;
    font-family: tahoma;
}

p {
    font-family: tahoma;
    font-size: 24px;
    color: #757575;
}

#wrap {
    width: 530px;
    margin: 20px auto 0;
    height: 1000px;
}

h1 {
    margin-bottom: 20px;
    text-align: center;
    font-size: 35px;
    font-family: tahoma;
    color: black;
}

#form-wrap {
    overflow: hidden;
    height: 447px;
    position: relative;
    top: 0px;
    transition: all 1s ease-in-out 0.3s;
}

#form-wrap:before {
    content: '';
    position: absolute;
    bottom: 128px;
    left: 0px;
    background: url('~Assets/img/example/before.png');
    width: 530px;
    height: 317px;
}

#form-wrap:after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    background: url('~Assets/img/example/after.png');
    width: 530px;
    height: 259px;
}

#form-wrap.hide:after, #form-wrap.hide:before {
    display: none;
}

#form-wrap:hover {
    height: 777px;
    top: -200px;
}

form {
    background: url('~Assets/img/example/letter_bg.png');
    position: relative;
    top: 200px;
    overflow: hidden;
    height: 200px;
    width: 400px;
    margin: 0px auto;
    padding: 20px;
    border: 1px solid white;
    border-right: 3px;
    transition: all 1s ease-in-out 0.3s;
}

#form-wrap:hover form {
    height: 530px;
}

lable {
    margin: 11px 20px 0 0;
    font-size: 15px;
    color: gray;
    text-transform: uppercase;
}

input[type=text], textarea {
    font: 14px normal uppercase, arial, serif;
    color: dimgray;
    background: none;
    width: 380px;
    height: 37px;
    padding: 0px 10px;
    margin: 0 0 10px 0;
    border: 1px solid #BDBDBD;
    border-radius: 5px;
}

textarea {
    height: 80px;
    padding-top: 14px;
}

textarea:focus, input[type=text]:focus {
    background: url('~Assets/img/example/letter_bg.png');
}

#form-wrap input[type=submit] {
    position: relative;
    font-family: tahoma;
    font-size: 24px;
    color: gray;
    width: 300px;
    text-align: center;
    opacity: 0;
    background: none;
    cursor: pointer;
    border-radius: 3px;
    transition: opacity 0.7s ease-in-out 0s;
}

#form-wrap:hover input[type=submit] {
    z-index: 1;
    opacity: 1;
    transition: opacity 0.5s ease-in-out 1.3s;
}

.notepad {
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