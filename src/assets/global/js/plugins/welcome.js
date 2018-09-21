const Mouse = require('@/assets/global/js/utils/mouse-utils')

class Welcome {

  /**
   * 构造器
   * @param x
   * @param y
   * @param canvas
   */
  constructor(x, y, canvas) {
    this.x = x;
    this.y = y;
    this.canvas = canvas;
  }

  /**
   * 绘制四叶草Clover
   */
  draw() {
    // 获得2D环境
    const ctx = this.canvas.getContext('2d');

    // 清屏
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(this.x, this.y);
    // 线宽
    ctx.lineWidth = 5;
    // 颜色
    ctx.strokeStyle = '#dd88ff';
    ctx.stroke();
    ctx.closePath();


    // 矩形
    for (let i=0;i<20;i++) {
      ctx.beginPath();
      ctx.rect(100+i*10, 100+i*10, 100-i*10, 100-i*10);

      // 线宽
      ctx.lineWidth = 5;
      // 颜色
      ctx.strokeStyle = '#000';
      ctx.stroke();
    }
  }

  /**
   * 打印鼠标位置
   */
  render() {
    // 获得2D环境
    const ctx = this.canvas.getContext('2d');

    // 清屏
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // 设置字体
    ctx.font = " 18px 'Montserrat', sans-serif";
    let message = `x: ${this.x}, y: ${this.y}`;
    // 实心字
    // ctx.fillStyle = "red";
    // ctx.fillText(message, this.x, this.y);

    // 空心字
    ctx.strokeStyle = "red";
    ctx.strokeText(message, this.x, this.y);
  }

  static getLocation(event) {
    return Mouse.getOffsetLocate(event);
  }
}

export default Welcome
