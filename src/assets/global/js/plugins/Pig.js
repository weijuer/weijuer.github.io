class Pig {

  /**
   * Pig构造函数
   * @param canvas canvas元素
   * @param color 填充颜色
   */
  constructor(canvas, color) {
    this.canvas = canvas;

    // 获取2D环境
    this.context = canvas.getContext('2d');
    // 全局合成操作
    this.context.globalCompositeOperation = "source-over";

    // 颜色
    this.color = (color === undefined) ? "#fff" : color;
  }

  /**
   * 绘制坐标系
   */
  drawAxis() {
    let dX = 0, dY =0;
    let textX = 0, textY = 0;
    const origin = {x:0, y:0};
    let width = this.canvas.width;
    let height = this.canvas.height;

    this.context.lineWidth = 2;
    this.context.strokeStyle = "green";

    // 绘制x轴
    this.context.beginPath();
    this.context.moveTo(origin.x, origin.y);
    this.context.lineTo(width, origin.y);
    this.context.stroke();

    // 绘制x轴刻度
    while (dX < width) {
      this.context.font = '12pt Arial';
      this.context.fillStyle = 'red';
      this.context.fillText(textY, dX, 0);
      textY += 50;
      dX += 50;
    }

    // 绘制y轴
    this.context.moveTo(origin.x, origin.y);
    this.context.lineTo(origin.x, height);
    this.context.stroke();

    // 绘制y轴刻度
    while (dY < height) {
      this.context.font = '12pt Arial';
      this.context.fillStyle = 'red';
      this.context.fillText(textX, -30, dY);
      textX += 50;
      dY += 50;
    }
  }

  /**
   * 头
   * @param t
   */
  drawHead(t) {
    this.context.translate(0, Math.sin(t) * 4);

    // 鼻子
    this.context.beginPath();
    this.context.arc(0, 0, 20, 0, 2 * Math.PI, true);
    this.context.stroke();

    // 鼻孔
    this.context.beginPath();
    this.context.arc(0, 20, 6, 0, 2 * Math.PI);
    this.context.stroke();

    this.context.beginPath();
    this.context.arc(0, 80, 6, 0, 2 * Math.PI, true);
    this.context.stroke();

    this.context.stroke();
    // this.context.fill();
    this.context.closePath();
  }

  /**
   * 身体
   * @param t
   */
  drawBody(t) {
    this.context.beginPath();
    this.context.save();
    this.context.rotate(Math.sin(t) * Math.PI / 180 * -1);
    this.context.translate(0, Math.sin(t) * 4);
    this.context.scale(0.5, 0.5);
    // Path2D路径写法
    // const body = new Path2D('M125,284 L1,284 C0.33333333,94.6666667 35,0 105,0 C115.666667,4 122.333333,20.6666667 125,50 L125,284 Z')
    // this.context.fill(body);

    // 简单路径
    // 新建一条path
    this.context.beginPath();
    this.context.moveTo(125, 284);
    this.context.lineTo(1, 284);
    //this.context.quadraticCurveTo(100, 100, 105, 0);
    //this.context.quadraticCurveTo(200, 200, 200, 200);

    //this.context.bezierCurveTo(125, 160, 300, 60, 340, 300);
    //this.context.closePath();

    this.context.stroke();
    this.context.fill();

    this.context.restore();

  }

  /**
   * 双腿
   * @param t
   */
  drawLegs(t) {

  }

  /**
   * 双脚
   * @param t
   */
  drawFeet(t) {
    t = t / 2;
    this.context.save();
    this.context.scale(0.5, 0.5);
    this.context.translate(0, 460);
    const foot = new Path2D('M23,0 C67,0 80,16 80,22 C80,26 78.6666667,28 76,28 C29.3333333,28 6,28 6,28 C6,28 -1.34111707e-14,30 0,17 C1.42108547e-14,4 10,1.9505735e-16 13,0 C16,0 13,0 23,0 Z');

    this.context.save();
    this.context.translate(Math.cos(t) * -50, Math.sin(t) > 0 ? Math.sin(t) * -35 : 0);
    if (t < Math.PI) {
      this.context.rotate(Math.sin(t) * Math.PI / 180 * -5);
    }
    this.context.fill(foot);
    this.context.restore();

    this.context.save();
    this.context.translate(Math.cos(t + Math.PI) * -50, Math.sin(t + Math.PI) > 0 ? Math.sin(t + Math.PI) * -35 : 0);
    if (t > Math.PI) {
      this.context.rotate(Math.sin(t + Math.PI) * Math.PI / 180 * -5);
    }
    this.context.fill(foot);
    this.context.restore();

    this.context.restore()
  }

  /**
   * 阴影
   * @param t
   */
  drawShadow(t) {
    this.context.beginPath();
    this.context.save();
    this.context.scale(0.5, 0.5);
    this.context.translate(45, 490);
    this.context.fillStyle = 'rgba(0, 0, 0, 0.1)';
    this.context.ellipse(0, 0, 120 + Math.sin(t) * 10, 8, 0, 0, 2 * Math.PI);
    this.context.fill();
    this.context.restore();
    this.context.closePath()
  }

  /**
   * 绘制sad man
   * @param t
   */
  draw(t) {
    t = t % Math.PI * 2;
    this.context.fillStyle = this.color;
    this.context.save();
    //this.context.translate(this.canvas.width / 2 - 300, this.canvas.height / 2 + 120);

    this.drawAxis();
    this.drawHead(t);
    //this.drawBody(t);
    //this.drawFeet(t);
    //this.drawShadow(t);
    this.context.restore();
  }
}

export default Pig
