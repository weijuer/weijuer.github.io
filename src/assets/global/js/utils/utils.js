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

const utils = {

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
  },

  /**
   * 获取区间随机数
   * @param min
   * @param max
   * @returns {number}
   */
  getRandNum(min, max){
    return Math.round(Math.random() * (max - min) + min);
  },


  /**
   * 极坐标系转换
   * 理论：弧度 = 角度 × π / 180
   * 三角函数，获取两条直角边
   * @param r 斜边
   * @param angle 角度
   * @returns {{x: number, y: number}} 两条直角边
   * @constructor
   */
  P2L(r, angle) {
    let ret = {x: 0, y: 0};
    let radian = angle * (Math.PI / 180);
    ret.x = Math.cos(radian) * r;
    ret.y = Math.sin(radian) * r;
    return (ret);
  },

   /**
    * 获取任意一点到原点与X轴的夹角
    * @param {*} pointA 任意点
    * @param {*} origin 原点
    */
  getAngleToOrigin(pointA, origin = { x: 0, y: 0 }) {
    let dx = pointA.x - origin.x;
    let dy = pointA.y - origin.y;
    let angle = Math.atan2(dy, dx);
    return angle;
  },

   /**
    * 利用勾股定理获取任意两点间的距离
    * @param {*} pointA 
    * @param {*} pointB 
    */
  getTwoPointsDistance(pointA, pointB) {
    let dx = Math.abs(pointA.x - pointB.x);
    let dy = Math.abs(pointA.y - pointB.y);
    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  }

};

export default utils
