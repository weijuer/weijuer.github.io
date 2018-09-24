import utils from '../utils/utils'

class Arrow {

  /**
   * 构造器
   * @param x x轴坐标
   * @param y y轴坐标
   * @param color arrow填充颜色
   * @param event 鼠标事件对象
   * @param canvas canvas元素对象
   */
  constructor(x, y, color, event, canvas) {
    this.x = x;
    this.y = y;
    // 初始填充色
    this.color = color || '#ff2637';
    this.event = event;
    this.canvas = canvas;
    // 初始旋转角度
    this.rotation = 0;
    // 获得canvas元素对象2D环境
    this.context = this.canvas.getContext('2d');
    // 打印鼠标位置信息
    //this.getMouseLocate();
  }

  /**
   * 绘制箭头
   */
  drawArrow() {
    // 清屏
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // 获取屏幕中心点
    let centerX = this.canvas.width / 2;
    let centerY = this.canvas.height / 2;

    // 获取dy, dx值
    let mouse = utils.getOffsetLocate(this.event);
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;

    // 设置旋转角度
    this.rotation = Math.atan2(dy, dx);

    this.context.save();
    // 将坐标移到x 和y
    this.context.translate(this.x , this.y);
    // 设置旋转角度
    this.context.rotate(this.rotation);
    // 设置线宽
    this.context.lineWidth = 5;
    // 设置填充色
    this.context.fillStyle = this.color;

    // 路径开始
    this.context.beginPath();
    this.context.moveTo(-50, -25);
    this.context.lineTo(0, -25);
    this.context.lineTo(0, -50);
    this.context.lineTo(50, 0);
    this.context.lineTo(0, 50);
    this.context.lineTo(0, 25);
    this.context.lineTo(-50, 25);
    // 路径闭合
    this.context.closePath();

    // 描边
    this.context.stroke();
    // 填充
    this.context.fill();
    this.context.restore();
  }

  /**
   * 打印鼠标位置
   */
  getMouseLocate() {
    // 清屏
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // 设置字体
    this.context.font = "18px 'Montserrat', sans-serif";
    let message = `x: ${this.x}, y: ${this.y}`;
    // 实心字
    // this.context.fillStyle = "red";
    // this.context.fillText(message, this.x, this.y);

    // 空心字
    this.context.strokeStyle = "red";
    this.context.beginPath();
    this.context.strokeText(message, 20, 20);
    // 路径闭合
    this.context.closePath();
  }

}

export default Arrow
