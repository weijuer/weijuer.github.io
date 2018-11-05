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

    // 全局合成操作
    // this.context.globalCompositeOperation = "source-over";

    // 起点
    this.startPoint = [];
    // 花朵终点X轴
    this.endPointX = [];
    // 花朵终点Y轴
    this.endPointY = [];
    // 花朵花瓣数目
    this.petals = [];
    // 花朵大小
    this.size = [];
    this.amp = [];
    // 颜色
    this.color = (color === undefined) ? "#4a8644" : color;
    // 数量
    this.num = (num === undefined) ? 10 : num;

    // 初始化
    this.init();
  }

  /**
   * 初始化四叶草信息
   */
  init() {
    for (let i = 0; i < this.num; i++) {
      this.startPoint[i] = (this.canvas.width / this.num) * i + utils.getRandNum(10, 80);
      this.endPointX[i] = this.startPoint[i];
      this.endPointY[i] = (this.canvas.height / 1.15) - utils.getRandNum(40, 100);
      this.petals[i] = utils.getRandNum(4, 6);
      this.size[i] = utils.getRandNum(20, 60);
      this.amp[i] = utils.getRandNum(30, 60);
    }
  }

  /**
   * 绘制四叶草Clover
   * @param t
   */
  draw(t) {

    this.context.save();

    // Math.sin的应用-摇摆幅度
    let loop = Math.sin(t);

    for (let i = 0; i < this.num; i++) {

      // 周期性改变水草的顶点X坐标
      this.endPointX[i] = this.startPoint[i] + loop * this.amp[i];

      // 绘制花茎
      this.draw_scape(this.startPoint[i], this.canvas.height, this.endPointX[i], this.endPointY[i]);

      // 绘制花朵
      this.draw_flower(this.size[i], this.petals[i] * 2, this.endPointX[i], this.endPointY[i]);
    }

    this.context.restore();
  }

  /**
   * 绘制花茎
   * @param startPointX
   * @param startPointY
   * @param x
   * @param y
   */
  draw_scape(startPointX, startPointY, x, y) {
    this.context.lineWidth = 2;
    this.context.lineCap = "round";
    this.context.shadowColor = '#a5a431';
    this.context.globalAlpha = 0.8;
    this.context.strokeStyle = this.color;

    this.context.beginPath();
    this.context.save();
    this.context.moveTo(startPointX, startPointY);
    this.context.quadraticCurveTo(startPointX, startPointY - 100, x, y);
    this.context.stroke();
    this.context.restore();
    this.context.closePath();
  }

  /**
   * 绘制花朵
   * @param rad 花瓣半径
   * @param petals 花瓣数量*2
   * @param x 花朵x轴位置
   * @param y 花朵y轴位置
   */
  draw_flower(rad, petals, x, y) {

    this.context.lineWidth = 2;
    this.context.shadowColor = '#42a518';
    this.context.shadowBlur = 50;
    this.context.fillStyle = '#5eb146';
    this.context.strokeStyle = '#4a8644';

    // 极坐标
    let pts = [];
    for (let i = 0; i <= petals; i++) {
      let angle = (360 / petals) * i;
      let ret = utils.P2L(rad, angle);
      pts.push({x: ret.x, y: ret.y});
    }

    for (let i = 1; i <= petals; i += 2) {
      let idx = i % petals;
      this.context.beginPath();
      this.context.save();
      this.context.moveTo(x, y);
      this.context.bezierCurveTo(x + pts[i - 1].x, y + pts[i - 1].y, x + pts[idx + 1].x, y + pts[idx + 1].y, x, y);
      this.context.stroke();
      this.context.fill();
      this.context.restore();
      this.context.closePath();
    }
  }

}

export default Clover
