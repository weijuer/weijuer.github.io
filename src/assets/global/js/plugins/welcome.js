const mouse = require('@/assets/global/js/utils/mouse-utils')

class Welcome {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static getLocation(canvas) {
    // 为canvas元素绑定mousemove事件
    canvas.addEventListener('mousemove', function (event) {
      return mouse.default.getClientLocate(event);
    });
  }

}

export default Welcome
