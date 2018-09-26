import utils from '../utils/utils'

class Clover {

  /**
   * 构造器
   * @param canvas
   * @param color
   * @param num
   */
  constructor(canvas, color, num) {
    this.canvas = canvas;

    // 获取2D环境
    this.context = canvas.getContext('2d');

    // 起点
    this.startPoint = [];
    // 花朵终点X轴
    this.endPointX = [];
    // 花朵终点Y轴
    this.endPointY = [];
    // 花朵花瓣数目
    this.petals = [];
    this.size = [];
    this.amp = [];
    this.beta = 0.0012;
    // 颜色
    this.color = (color === undefined) ? "#4a8644" : color;
    // 数量
    this.num = (num === undefined) ? 10 : num;
  }

  /**
   * 初始化四叶草信息
   */
  init() {
    for (let i = 0; i < this.num; i++) {
      this.startPoint[i] = (this.canvas.width / this.num) * i + utils.getRandNum(10, 80);
      this.endPointX[i] = this.startPoint[i];
      this.endPointY[i] = (this.canvas.height / 1.5) - utils.getRandNum(10, 80);
      this.petals[i] = utils.getRandNum(4, 6);
      this.size[i] = utils.getRandNum(40, 60);
      this.amp[i] = utils.getRandNum(30, 60);
    }
  }

  /**
   * 绘制四叶草Clover
   */
  draw() {
    // 获得2D环境
    const ctx = this.context;

    // 清屏
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.save();

    // Math.sin的应用-摇摆幅度
    this.beta += 12 * 0.0012;
    let loop = Math.sin(this.beta);

    for (let i = 0; i < this.num; i++) {

      // 周期性改变水草的顶点X坐标
      this.endPointX[i] = this.startPoint[i] + loop * this.amp[i];

      // 绘制花茎
      this.draw_scape(this.startPoint[i], this.canvas.height, this.endPointX[i], this.endPointY[i]);

      // 绘制花朵
      this.draw_flower(this.size[i], this.petals[i] * 2, this.endPointX[i], this.endPointY[i]);
    }

    ctx.restore();
  }

  /**
   * 绘制花茎
   * @param startPointX
   * @param startPointY
   * @param x
   * @param y
   */
  draw_scape(startPointX, startPointY, x, y) {

    // 获得2D环境
    const ctx = this.context;

    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.shadowColor = '#a5a431';
    ctx.globalAlpha = 0.8;
    ctx.strokeStyle = this.color;

    ctx.beginPath();
    ctx.moveTo(startPointX, startPointY);
    ctx.quadraticCurveTo(startPointX, startPointY - 100, x, y);
    ctx.stroke();
    ctx.closePath();
  }

  /**
   * 绘制花朵
   * @param rad 花朵大小
   * @param petals 花瓣数量*2
   * @param x 花朵x轴位置
   * @param y 花朵y轴位置
   */
  draw_flower(rad, petals, x, y) {

    // 获得2D环境
    const ctx = this.context;

    ctx.lineWidth = 2;
    ctx.shadowColor = '#42a518';
    ctx.shadowBlur = 50;
    ctx.fillStyle = '#5eb146';
    ctx.strokeStyle = '#4a8644';

    let pts = [];
    for (let i = 0; i <= petals; i++) {
      let angle = (360 / petals) * i;
      let ret = utils.P2L(rad, angle);
      pts.push({x: ret.x, y: ret.y});
    }

    for (let i = 1; i <= petals; i += 2) {
      let idx = i % petals;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.bezierCurveTo(x + pts[i - 1].x, y + pts[i - 1].y, x + pts[idx + 1].x, y + pts[idx + 1].y, x, y);
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
    }
  }

}

export default Clover
