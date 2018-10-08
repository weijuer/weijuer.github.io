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
    let dX = 0, dY = 0;
    let textX = 0, textY = 0;
    const origin = {x: 0, y: 0};
    let width = this.canvas.width;
    let height = this.canvas.height;

    this.context.lineWidth = 2;
    this.context.strokeStyle = "green";
    // 画布转换
    this.context.translate(30, 30);

    // 绘制x轴
    this.context.beginPath();
    this.context.moveTo(origin.x, origin.y);
    this.context.lineTo(width, origin.y + 1);
    this.context.stroke();
    this.context.closePath();

    // 绘制x轴刻度
    while (dX < width) {
      this.context.font = '8pt Arial';
      this.context.fillStyle = 'green';
      this.context.textBaseline = 'middle';
      this.context.textAlign = 'center';
      this.context.fillText(textY.toString(), dX, -10);

      // 绘制刻度线
      this.context.beginPath();
      this.context.fillStyle = "#000";
      this.context.arc(dX, 0, 2, 0, 2 * Math.PI, true);
      this.context.fill();
      this.context.closePath();

      textY += 50;
      dX += 50;
    }

    // 保存当前绘制状态
    this.context.save();

    // 绘制y轴
    this.context.beginPath();
    this.context.moveTo(origin.x, origin.y);
    this.context.lineTo(origin.x + 1, height);
    this.context.stroke();
    this.context.closePath();

    // 获取上次绘制状态
    this.context.restore();
    // 绘制y轴刻度
    while (dY < height) {
      this.context.beginPath();
      // 文字旋转待定
      // this.context.rotate(-90 * Math.PI / 180);
      this.context.fillText(textX.toString(), -16, dY);

      // 绘制刻度线
      this.context.fillStyle = "#000";
      this.context.arc(0, dY, 2, 0, 2 * Math.PI, true);
      this.context.fill();
      this.context.closePath();

      textX += 50;
      dY += 50;
    }


  }

  /**
   * 绘制带箭头
   * @param fromX 起点坐标（也可以换成p1，只不过它是一个数组）
   * @param fromY
   * @param toX 终点坐标 (也可以换成p2，只不过它是一个数组)
   * @param toY
   * @param theta 三角斜边一直线夹角
   * @param headlen 三角斜边长度
   * @param width 箭头长度
   * @param color 箭头颜色
   */
  drawArray(fromX, fromY, toX, toY, theta = 30, headlen = 10, width = 1, color = '#000') {

    // 计算各角度和对应的P2,P3坐标
    let angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI,
      angle1 = (angle + theta) * Math.PI / 180,
      angle2 = (angle - theta) * Math.PI / 180,
      topX = headlen * Math.cos(angle1),
      topY = headlen * Math.sin(angle1),
      botX = headlen * Math.cos(angle2),
      botY = headlen * Math.sin(angle2);

    this.context.save();
    this.context.beginPath();

    let arrowX = fromX - topX,
      arrowY = fromY - topY;

    this.context.moveTo(arrowX, arrowY);
    this.context.moveTo(fromX, fromY);
    this.context.lineTo(toX, toY);

    arrowX = toX + topX;
    arrowY = toY + topY;
    this.context.moveTo(arrowX, arrowY);
    this.context.lineTo(toX, toY);

    arrowX = toX + botX;
    arrowY = toY + botY;
    this.context.lineTo(arrowX, arrowY);
    this.context.strokeStyle = color;
    this.context.lineWidth = width;
    this.context.stroke();
    this.context.restore();
  }


  /**
   * 头
   * @param t
   */
  drawHead(t) {
    // this.context.translate(0, Math.sin(t) * 4);

    this.context.save();

    this.context.lineWidth = 2;

    // 鼻子
    this.context.beginPath();
    this.context.fillStyle = '#ffbce4';
    this.context.strokeStyle = '#eca1cf';
    this.context.arc(120, 120, 20, 0, 2 * Math.PI, true);
    this.context.stroke();
    this.context.fill();
    this.context.closePath();

    this.context.strokeStyle = '#da7db4';
    this.context.fillStyle = '#da7db4';

    // 左鼻孔
    this.context.beginPath();
    this.context.arc(110, 120, 5, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.fill();
    this.context.closePath();

    // 右鼻孔
    this.context.beginPath();
    this.context.arc(130, 120, 5, 0, 2 * Math.PI, true);
    this.context.stroke();
    this.context.fill();
    this.context.closePath();


    // 脸部
    this.context.setLineDash([]);
    this.context.beginPath();
    // 倾斜45°角
    this.context.ellipse(90, 165, 60, 80, 55 * Math.PI / 180, 0, 1.35 * Math.PI, false);
    this.context.stroke();
    this.context.closePath();

    this.context.beginPath();
    this.context.ellipse(75, 200, 40, 50, 45 * Math.PI / 180, 0, 1.5 * Math.PI, true);
    this.context.stroke();
    this.context.closePath();

    this.context.restore();
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
   * 绘制椭圆
   * @param x
   * @param y
   * @param a
   * @param b
   */
  drawEllipse(x, y, a, b) {
    this.context.save();
    // 选择a、b中的较大者作为arc方法的半径参数
    let r = (a > b) ? a : b;
    // 横轴缩放比率
    let ratioX = a / r;
    // 纵轴缩放比率
    let ratioY = b / r;
    // 进行缩放（均匀压缩）
    this.context.scale(ratioX, ratioY);
    this.context.beginPath();
    // 从椭圆的左端点开始逆时针绘制
    this.context.moveTo((x + a) / ratioX, y / ratioY);
    this.context.arc(x / ratioX, y / ratioY, r, 0, 2 * Math.PI);
    this.context.closePath();
    this.context.stroke();
    this.context.restore();
  }

  /**
   * 绘制sad man
   * @param t
   */
  draw(t) {
    t = t % Math.PI * 2;
    this.context.fillStyle = this.color;
    this.context.save();
    // this.context.translate(this.canvas.width / 2 - 300, this.canvas.height / 2 + 120);
    // this.context.translate(30, 30);

    this.drawAxis();
    this.drawHead(t);
    //this.drawBody(t);
    //this.drawFeet(t);
    //this.drawShadow(t);
    this.context.restore();
  }
}

export default Pig
