import utils from "../utils/utils";

class Pig {

  /**
   * Pig构造函数
   * @param canvas canvas元素
   */
  constructor(canvas) {
    this.canvas = canvas;
    // 获取2D环境
    this.context = canvas.getContext('2d');
    this.context.lineCap = 'round';
    this.x = 0;
    this.y = 0;
    this.vx = 5;
    this.vy = 1;
    this.target = {x: -10, y: -10};
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

    this.context.save();
    this.context.lineWidth = 2;
    this.context.strokeStyle = "green";
    // 画布转换
    // this.context.translate(30, 30);

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
   * 绘制地面
   */
  drawGround() {
    this.context.save();
    this.context.beginPath();
    // 绘制矩形
    let rectangle = new Path2D();
    rectangle.rect(0, this.canvas.height - 100, this.canvas.width,100);
    this.context.fillStyle = "rgba(115, 234, 120, 0.56)";
    this.context.fill(rectangle);
    this.context.closePath();
    this.context.restore();
  }

  /**
   * 头
   * @param t
   */
  drawHead(t) {

    this.context.save();

    let dx = this.target.x - this.x;
    let dy = this.target.y - this.y;

    // 设置旋转角度
    let rotation = Math.atan2(dy, dx);
    // 将坐标移到x 和y
    // this.context.translate(477 , 411);
    // 设置旋转角度
    // this.context.rotate(rotation);

    // 动画频率
    // this.context.translate(28, 32);
    this.context.translate(0, Math.sin(t) * 4);
    
    this.context.lineWidth = 4;
    this.context.fillStyle = '#ffbce4';
    this.context.strokeStyle = '#f39ecf';
    // A处
    this.context.save();

    // 吹风机
    this.context.beginPath();
    this.context.moveTo(490, 305);
    this.context.bezierCurveTo(360, 310, 350, 470, 470, 435);
    this.context.quadraticCurveTo(520, 410, 484, 368);
    this.context.quadraticCurveTo(510, 350, 514, 345);
    this.context.fill();
    this.context.stroke();
    this.context.closePath();

    // 鼻子
    this.context.beginPath();
    this.context.moveTo(518, 315);
    this.context.ellipse(502, 325, 18, 23, -35 * Math.PI / 180, 0, 2 * Math.PI, true);
    this.context.fill();
    this.context.stroke();
    this.context.closePath();

    // 鼻孔
    this.context.beginPath();
    this.context.strokeStyle = 'transparent';
    this.context.fillStyle = '#d779b3';
    // 左鼻孔
    this.context.moveTo(500, 325);
    this.context.arc(496, 325, 5, 0, 2 * Math.PI);
    // 右鼻孔
    this.context.moveTo(515, 320);
    this.context.arc(509, 320, 5, 0, 2 * Math.PI, true);
    this.context.fill();
    this.context.closePath();

    // 耳朵
    // 取A处存储的状态
    this.context.restore();
    this.context.beginPath();
    this.context.moveTo(428, 328);
    this.context.bezierCurveTo(380, 300, 430, 260, 440, 323);
    this.context.moveTo(406, 348);
    this.context.bezierCurveTo(365, 345, 380, 285, 416, 338);
    this.context.fill();
    this.context.stroke();
    this.context.closePath();

    // 眼眶
    this.context.beginPath();
    this.context.strokeStyle = '#da7db4';
    this.context.fillStyle = '#fff';
    // 左
    this.context.moveTo(433, 343);
    this.context.arc(433, 343, 8, 0, 2 * Math.PI);
    // 右
    this.context.moveTo(459, 329);
    this.context.arc(459, 329, 8, 0, 2 * Math.PI, true);
    this.context.stroke();
    this.context.fill();
    this.context.closePath();

    // 眼睛
    this.context.beginPath();
    this.context.fillStyle = '#000';
    // 左
    this.context.moveTo(463, 328);
    this.context.arc(437, 342, 4, 0, 2 * Math.PI);
    // 右
    this.context.moveTo(463, 328);
    this.context.arc(463, 328, 4, 0, 2 * Math.PI, true);
    this.context.fill();
    this.context.closePath();

    // 腮红
    this.context.beginPath();
    this.context.fillStyle = '#da7db4';
    this.context.ellipse(412, 390, 14, 16, -35 * Math.PI / 180, 0, 2 * Math.PI, true);
    this.context.fill();
    this.context.closePath();

    // 嘴巴
    this.context.beginPath();
    this.context.lineWidth = 4;
    this.context.arc(460, 400, 20, -45 * Math.PI / 180, 1 * Math.PI, false);
    this.context.stroke();
    this.context.closePath();

    this.context.restore();
  }

  /**
   * 身体
   * @param t
   */
  drawBody(t) {
    this.context.save();
    this.context.lineWidth = 4;
    this.context.strokeStyle = '#e24650';
    this.context.fillStyle = '#ee6971';

    // 动画
    // this.context.rotate(Math.sin(t) * Math.PI / 180 * -1);
    this.context.translate(0, Math.sin(t) * 4);
    // this.context.scale(0.5, 0.5);

    // 裙子
    this.context.beginPath();
    this.context.moveTo(430, 460);
    this.context.quadraticCurveTo(418, 475, 410, 542);  
    this.context.lineTo(542, 542);
    this.context.quadraticCurveTo(541, 499, 519, 456);
    this.context.fill();
    this.context.stroke();
    this.context.closePath();
    this.context.restore();
  }

  /**
   * 上肢
   * @param t
   */
  drawArms(t) {
    this.context.save();
    
    // 胳膊
    this.context.lineWidth = 4;
    this.context.strokeStyle = '#ffbce4';
    // 左边
    this.context.beginPath();
    // 动画
    this.context.translate(0, 0);
    this.context.rotate(Math.sin(t) * Math.PI / 180 * -1);
    this.context.moveTo(422, 473);
    this.context.lineTo(384, 496);
    this.context.moveTo(396, 487);
    this.context.lineTo(386, 482);
    this.context.moveTo(396, 487);
    this.context.lineTo(396, 499);
    this.context.stroke();
    this.context.closePath();
    // 右边
    this.context.beginPath();
    this.context.translate(0, 0);
    this.context.rotate(Math.sin(t) * Math.PI / 180 * -1);
    this.context.moveTo(529, 472);
    this.context.lineTo(564, 502);
    this.context.moveTo(551, 491);
    this.context.lineTo(567, 489);
    this.context.moveTo(551, 491);
    this.context.lineTo(551, 503);
    this.context.stroke();
    this.context.closePath();
    this.context.restore();
  }

  /**
   * 下肢
   * @param t
   */
  drawLegs(t) {
    this.context.save();
    // 动画
    this.context.translate(0, Math.sin(t) * 4);
    // 双腿
    this.context.lineWidth = 5;
    this.context.strokeStyle = '#ffbce4';
    // 左腿
    this.context.beginPath();
    this.context.moveTo(441, 545);
    this.context.lineTo(441, 570);
    this.context.stroke();
    this.context.closePath();
    // 右腿
    this.context.beginPath();
    this.context.moveTo(499, 545);
    this.context.lineTo(499, 570);
    this.context.stroke();
    this.context.closePath();

    // 脚
    this.context.lineWidth = 4;
    this.context.strokeStyle = '#000';
    this.context.fillStyle = '#000';
    // 左
    this.context.beginPath();
    // 动画
    /* this.context.translate(Math.cos(t) * -50, Math.sin(t) > 0 ? Math.sin(t) * -35 : 0);
    if (t < Math.PI) {
      this.context.rotate(Math.sin(t) * Math.PI / 180 * -5);
    } */
    this.context.ellipse(448, 570, 2, 13, 90 * Math.PI / 180, 0, 2 * Math.PI, true);
    this.context.stroke();
    this.context.closePath();
    // 右
    this.context.beginPath();
    // 动画
    /* this.context.translate(Math.cos(t + Math.PI) * -50, Math.sin(t + Math.PI) > 0 ? Math.sin(t + Math.PI) * -35 : 0);
    if (t > Math.PI) {
      this.context.rotate(Math.sin(t + Math.PI) * Math.PI / 180 * -5);
    } */
    this.context.ellipse(506, 570, 2, 13, 90 * Math.PI / 180, 0, 2 * Math.PI, true);
    this.context.stroke();
    this.context.closePath();
    this.context.restore();
  }

  /**
   * 绘制尾巴
   */
  drawTail(t) {
    this.context.save();
    // 动画
    this.context.translate(0, Math.sin(t) * 4);
    // 双腿
    this.context.lineWidth = 4;
    this.context.strokeStyle = '#ffbce4';
    // 左腿
    this.context.beginPath();
    this.context.moveTo(409, 520);
    this.context.quadraticCurveTo(390, 514, 398, 506);
    this.context.quadraticCurveTo(416, 530, 384, 514);
    this.context.stroke();
    this.context.closePath();
    this.context.restore();
  }

  /**
   * 阴影
   * @param t
   */
  drawShadow(t) {
    this.context.save();
    this.context.beginPath();
    this.context.fillStyle = 'rgba(0, 0, 0, 0.2)';
    this.context.ellipse(477, 570, 70 + Math.sin(t) * 10, 14, 0, 0, 2 * Math.PI);
    this.context.fill();
    this.context.closePath()
    this.context.restore();
  }

  drawTarget(t) {
    this.context.save();
    // 绘制位置信息
    this.context.beginPath();
    this.context.arc(this.target.x, this.target.y, 5, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.closePath();
    this.context.restore();
  }

  /**
   * 绘制鼠标坐标
   */
  drawMouseLocation() {
    this.context.save();
    // 路径开始
    this.context.beginPath();
    // 绘制黑板
    let message = `Mouse:[x: ${this.target.x}, y: ${this.target.y}]`;
    let rectangle = new Path2D();
    rectangle.rect(this.canvas.width - 270, 10, 260, 60);
    this.context.fillStyle = "rgba(0,0,0,0.6)";
    this.context.fill(rectangle);

    // 绘制鼠标位置
    this.context.font = "18px 'Montserrat', sans-serif";
    this.context.fillStyle = "#fff";
    this.context.fillText(message, this.canvas.width - 230, 45);
    this.context.closePath();
    this.context.restore();
  }

  /**
   * 获取鼠标点击位置
   */
  getTargetLocation() {
    let _pig = this;
    // 1.监听鼠标点击
    this.canvas.addEventListener('click', (event) => {
      let mouse = utils.getOffsetLocate(event);
      let message = `Mouse:[x: ${mouse.x}, y: ${mouse.y}]`;
      _pig.target = mouse;
      console.log(message);
    });

    // 2.监听鼠标移动
    this.canvas.addEventListener('mousemove', (event) => {
      let mouse = utils.getOffsetLocate(event);
      let message = `Mouse:[x: ${mouse.x}, y: ${mouse.y}]`;
      _pig.target = mouse;
      console.log(message);
    });

  }

  /**
   * 小猪移动距离
   */
  getPigPosition() {
    this.x += this.vx; 
    this.y += this.vy; 
    
    if (this.y + this.vy > this.canvas.height || this.y + this.vy < 0) {
      this.vy = -this.vy;
    }
    if (this.x + this.vx > this.canvas.width || this.x + this.vx < 0) {
      this.vx = -this.vx;
    }

    this.context.translate(this.x, this.y);
  }

  /**
   * 绘制小猪
   * @param t
   */
  draw(t) {
    this.context.save();
    // 动画频率
    t = t % Math.PI * 2;

    // 清屏
    // this.context.fillStyle = 'rgba(255,255,255,0.3)';
    // this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.drawMouseLocation();
    this.drawTarget(t);
    this.drawGround();

    // 将坐标移到x 和y
    this.context.translate(this.x , this.y);

    // 绘制小猪
    this.drawBody(t);
    this.drawHead(t);
    this.drawArms(t);
    this.drawLegs(t);
    this.drawTail(t);
    this.drawShadow(t);
    this.context.restore();
  }
}

export default Pig