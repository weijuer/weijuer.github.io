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
    this.vx = 1;
    this.vy = 1;
    this.target = {x: 0, y: 0};
    this.mouse = {x: 0, y: 0};
    // 地面小花
    this.flowers = [];
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
    let grounWidth = this.canvas.width;
    let grounHeight = this.canvas.height - 100;
    rectangle.rect(0, this.canvas.height - 100, this.canvas.width, 100);
    this.context.fillStyle = "rgba(115, 234, 120, 0.56)";
    this.context.fill(rectangle);
    this.context.closePath();
    this.context.restore();

    // 绘制小花
    this.context.save();
    
    let size = 3;
    // 1.随机生成小花位置
    for (let index = 0; index < size; index++) {
      let flowers = {
        x: utils.getRandNum(20, grounWidth),
        y: utils.getRandNum(20, grounHeight)
      };
      
      this.flowers.push(flowers);
    }
    // 2.绘制小花
    this.context.beginPath();
    for (let index = 0; index < size; index++) {
      this.context.moveTo(this.flowers[index].x, this.flowers[index].y);
      this.context.lineTo(this.flowers[index].x, this.flowers[index].y + 20);
    }
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
    // 设置异次元原点
    // this.context.translate(473 , 403);
    // 设置旋转角度
    // this.context.rotate(rotation);

    // 动画频率
    // this.context.translate(28, 32);
    this.context.translate(0, Math.sin(t) * 4);
    
    this.context.lineWidth = 4;
    this.context.fillStyle = '#ffbce4';
    this.context.strokeStyle = '#f39ecf';


    // 吹风机
    this.context.save();
    this.context.beginPath();
    this.context.moveTo(518, 336);
    this.context.bezierCurveTo(388, 342, 378, 502, 498, 467);
    this.context.quadraticCurveTo(548, 442, 512, 400);
    this.context.quadraticCurveTo(538, 382, 542, 377);
    this.context.fill();
    this.context.stroke();
    this.context.closePath();
    this.context.restore();


    // 鼻子
    this.context.save();
    this.context.beginPath();
    this.context.moveTo(546, 347);
    this.context.ellipse(530, 357, 18, 23, -35 * Math.PI / 180, 0, 2 * Math.PI, true);
    this.context.fill();
    this.context.stroke();
    this.context.closePath();
    this.context.restore();


    // 鼻孔
    this.context.save();
    this.context.beginPath();
    this.context.strokeStyle = 'transparent';
    this.context.fillStyle = '#d779b3';
    // 左鼻孔
    this.context.moveTo(528, 357);
    this.context.arc(524, 357, 5, 0, 2 * Math.PI);
    // 右鼻孔
    this.context.moveTo(543, 352);
    this.context.arc(537, 352, 5, 0, 2 * Math.PI, true);
    this.context.fill();
    this.context.closePath();
    this.context.restore();


    // 耳朵
    this.context.save();
    this.context.beginPath();
    this.context.moveTo(456, 360);
    this.context.bezierCurveTo(408, 332, 458, 292, 468, 355);
    this.context.moveTo(434, 380);
    this.context.bezierCurveTo(393, 377, 408, 317, 444, 370);
    this.context.fill();
    this.context.stroke();
    this.context.closePath();
    this.context.restore();


    // 眼眶
    this.context.save();
    this.context.beginPath();
    this.context.strokeStyle = '#da7db4';
    this.context.fillStyle = '#fff';
    // 左
    this.context.moveTo(461, 375);
    this.context.arc(461, 375, 8, 0, 2 * Math.PI);
    // 右
    this.context.moveTo(487, 361);
    this.context.arc(487, 361, 8, 0, 2 * Math.PI, true);
    this.context.stroke();
    this.context.fill();
    this.context.closePath();
    this.context.restore();


    // 眼睛
    this.context.save();
    // 设置异次元原点
    this.context.translate(461, 375);

    // 眼珠圆咕隆滴转, 获取的是斜边与X轴正方向的夹角
    let leftEyeAngle = utils.getAngleToOrigin(this.mouse,  {x: 461, y:375});
    let leftEyeX = 6 * Math.cos(leftEyeAngle);
    let leftEyeY = 6 * Math.sin(leftEyeAngle);

    // 左眼珠
    this.context.beginPath();
    this.context.fillStyle = '#000';
    this.context.moveTo(0, 0);
    this.context.arc(leftEyeX, leftEyeY, 4, 0, 2 * Math.PI);
    this.context.fill();
    this.context.closePath();
    this.context.restore();


    this.context.save();
    this.context.fillStyle = '#000';
    // 设置异次元原点
    this.context.translate(487, 361);
    // 眼珠圆咕隆滴转
    let rightEyeAngle = utils.getAngleToOrigin(this.mouse, {x: 487, y:361});
    let rightEyeX = 6 * Math.cos(rightEyeAngle);
    let rightEyeY = 6 * Math.sin(rightEyeAngle);

    // 右眼珠
    this.context.beginPath();
    this.context.moveTo(0, 0);
    this.context.arc(rightEyeX, rightEyeY, 4, 0, 2 * Math.PI, true);
    this.context.fill();
    this.context.closePath();
    this.context.restore();


    // 腮红
    this.context.save();
    this.context.beginPath();
    this.context.fillStyle = '#da7db4';
    this.context.ellipse(440, 422, 14, 16, -35 * Math.PI / 180, 0, 2 * Math.PI, true);
    this.context.fill();
    this.context.closePath();
    this.context.restore();


    // 嘴巴
    this.context.save();
    this.context.beginPath();
    this.context.lineWidth = 4;
    this.context.arc(488, 432, 20, -45 * Math.PI / 180, 1 * Math.PI, false);
    this.context.stroke();
    this.context.closePath();
    this.context.restore();


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
    // 跟随身体上下动
    this.context.translate(0, Math.sin(t) * 4);

    // 胳膊
    this.context.lineWidth = 4;
    this.context.strokeStyle = '#ffbce4';
    
    // 手臂摆动弧度
    let rotation = Math.sin(t) * 25 * Math.PI / 180;

    // 设置手坐标
    let pointA = utils.P2L(40, 45);
    let pointO = utils.P2L(28, 45);
    let pointB = utils.P2L(12, 90);
    let pointC = utils.P2L(12, 0);

    // 左边
    this.context.save();
    // 设置异次元原点
    this.context.translate(422, 473);
    // 动画-设置围绕异次元原点旋转特点角度
    this.context.rotate(rotation);

    this.context.beginPath();
    this.context.moveTo(0, 0);
    this.context.lineTo(-pointA.x, pointA.y);
    this.context.moveTo(-pointO.x, pointO.y);
    this.context.lineTo(pointB.x - pointO.x, pointB.y + pointO.y);
    this.context.moveTo(-pointO.x, pointO.y);
    this.context.lineTo(-pointC.x - pointO.x, pointC.y + pointO.y);
    this.context.stroke();
    this.context.closePath();
    this.context.restore();

    // 右边
    this.context.save();
    // 设置异次元原点
    this.context.translate(526, 468);
    // 动画-设置围绕异次元原点旋转特点角度
    this.context.rotate(rotation);

    this.context.beginPath();
    this.context.moveTo(0, 0);
    this.context.lineTo(pointA.x, pointA.y);
    this.context.moveTo(pointO.x, pointO.y);
    this.context.lineTo(pointB.x + pointO.x, pointB.y + pointO.y);
    this.context.moveTo(pointO.x, pointO.y);
    this.context.lineTo(pointC.x + pointO.x, pointC.y + pointO.y);
    this.context.stroke();
    this.context.closePath();
    this.context.restore();

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
  drawBoard() {
    this.context.save();
    // 路径开始
    this.context.beginPath();
    // 绘制黑板
    let message = `Mouse:[x: ${this.mouse.x}, y: ${this.mouse.y}]`;
    let rectangle = new Path2D();
    let boardWidth = 260;
    let boardHeight = 60;
    rectangle.rect(this.canvas.width - boardWidth - 10, 10, boardWidth, boardHeight);
    this.context.fillStyle = "rgba(0,0,0,0.6)";
    this.context.fill(rectangle);

    // 绘制鼠标位置
    this.context.font = "18px 'Montserrat', sans-serif";
    this.context.fillStyle = "#fff";
    this.context.fillText(message, this.canvas.width - boardWidth + 30, boardHeight - 15);
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
      // 超过草地高度返回
      let grounHeight = this.canvas.height - 100;
      if(mouse.y < grounHeight) {
         return false;
      }
      _pig.target = mouse;
      console.log(message);
    });

    // 2.监听鼠标移动
    this.canvas.addEventListener('mousemove', (event) => {
      let mouse = utils.getOffsetLocate(event);
      let message = `Mouse:[x: ${mouse.x}, y: ${mouse.y}]`;
      _pig.mouse = mouse;
      // console.log(message);
    });

  }

  /**
   * 小猪移动距离
   */
  getPigPosition() {
    let moveAngle = utils.getAngleToOrigin(this.target, {x: 475, y: 552});
    
    this.x += this.vx; 
    this.y += this.vy; 

    let moveX = this.x * Math.sin(moveAngle);
    let moveY = this.y * Math.cos(moveAngle);
    
    if (moveX + this.vx > this.canvas.width || moveX + this.vx < 0) {
      this.vx = -this.vx;
    }
    if (moveY + this.vy > this.canvas.height || moveY + this.vy < 0) {
      this.vy = -this.vy;
    }

    this.context.translate(moveX, moveY);
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
    // 鼠标位置显示展板
    this.drawBoard();
    // this.drawTarget(t);
    // 草地
    this.drawGround();

    // 小猪移动
    this.getPigPosition();

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