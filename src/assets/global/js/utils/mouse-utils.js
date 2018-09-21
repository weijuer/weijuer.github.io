'use strict'

// requestAnimationFrame的兼容问题
window.requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 6000 / 60);
    };
})();

const mouse = {

  /**
   * 获取当前鼠标相对于屏幕的左边距与上边距的位置坐标
   * @param event
   * @returns {{x: *, y: *}}
   */
  getScreenLocate(event) {
    let e = event || window.event;
    return {
      x: e.screenX,
      y: e.screenY
    }
  },

  /**
   * 获取当前鼠标相对于文档的左边距与上边距的位置坐标
   * @param event
   * @returns {{x: *, y: *}}
   */
  getClientLocate(event) {
    let e = event || window.event;
    // 屏幕滚动的坐标
    let scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    let scrollY = document.documentElement.scrollTop || document.body.scrollTop;

    // 获取当前鼠标的坐标，兼容处理
    return {
      x: e.pageX || e.clientX + scrollX,
      y: e.pageY || e.clientY + scrollY
    }
  },

  /**
   * 获取鼠标相对于元素的左边距与上边距的位置坐标
   * @param event
   * @returns {{x: number, y: number}}
   */
  getOffsetLocate(event) {
    let e = event || window.event;
    return {
      x: e.offsetX,
      y: e.offsetY
    }
  }

};

module.exports = mouse
