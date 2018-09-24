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

    this.startPoint = [];
    this.endPointX = [];
    this.endPointY = [];
    // 花朵花瓣数目
    this.petals = [];
    this.amp = [];
    this.beta = 0;
    // 颜色
    this.color = (color === undefined) ? "#4a8644" : color;
    // 数量
    this.num = (num === undefined) ? 6 : num;
  }

  /**
   * 初始化四叶草信息
   */
  init() {
    for (let i = 0; i < this.num; i++) {
      this.startPoint[i] = Math.random() * 100 + i * 100;
      this.endPointX[i] = this.startPoint[i];
      this.endPointY[i] = (this.canvas.height / 1.5) - Math.random() * 40;
      this.petals[i] = utils.getRandNum(4, 6);
      this.amp[i] = Math.random() * 10 + 40;
    }
  }

  /**
   * 绘制四叶草Clover
   */
  draw() {
    // 获得2D环境
    const ctx = this.canvas.getContext('2d');

    // 清屏
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.save();

    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.globalAlpha = 0.8;
    ctx.strokeStyle = this.color;

    // Math.sin的应用-摇摆幅度
    this.beta += 20 * 0.0012;
    let loop = Math.sin(this.beta);

    for (let i = 0; i < this.num; i++) {
      ctx.beginPath();
      ctx.moveTo(this.startPoint[i], this.canvas.height);

      // 周期性改变水草的顶点X坐标
      this.endPointX[i] = this.startPoint[i] + loop * this.amp[i];

      ctx.quadraticCurveTo(this.startPoint[i], this.canvas.height - 120, this.endPointX[i], this.endPointY[i]);
      ctx.stroke();
      ctx.closePath();

      // 绘制花朵
      this.draw_flower(60, this.petals[i]*2, this.endPointX[i], this.endPointY[i]);
    }

    ctx.restore();
  }

  /**
   *
   * @param _rad 花朵大小
   * @param _petals 花瓣数量*2
   * @param _x 花朵x轴位置
   * @param _y 花朵y轴位置
   */
  draw_flower(_rad, _petals, _x, _y) {

    // 获得2D环境
    const ctx = this.canvas.getContext('2d');

    ctx.shadowBlur = 50;
    ctx.lineWidth = 2;
    //ctx.shadowColor = '#77a571';
    ctx.fillStyle = '#5eb146';
    ctx.strokeStyle = '#4a8644';

    let pts = [];
    for (let i = 0; i <= _petals; i++) {
      let angle = (360 / _petals) * i;
      let ret = utils.P2L(_rad, angle);
      pts.push({x: ret.x, y: ret.y});
    }

    for (let i = 1; i <= _petals; i += 2) {
      let idx = i % _petals;
      ctx.beginPath();
      ctx.moveTo(_x, _y);
      ctx.bezierCurveTo(_x + pts[i - 1].x, _y + pts[i - 1].y, _x + pts[idx + 1].x, _y + pts[idx + 1].y, _x, _y);
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
    }
  }

}

export default Clover
