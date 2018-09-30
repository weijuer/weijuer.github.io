/**
 * 欢迎页文字效果
 */
class Welcome {
  constructor(canvas, color = "#000") {
    this.canvas = canvas;
    // 获取2D环境
    this.context = canvas.getContext('2d');
    // 颜色
    this.color = color;
  }

  /**
   * 绘制文字
   * @param color
   */
  draw(color) {
    this.context.font = 'normal 30px Microsoft YaHei';
    this.context.fillStyle = this.color;
    this.context.textAlign = "center";
    this.context.shadowColor = '#a5a431';
    this.context.globalAlpha = 0.8;
    // 保存当前默认绘画状态
    this.context.save();

    this.drawTop();
    this.drawMiddle();
    this.drawBottom();
  }

  drawTop() {
    this.context.fillText('Less coding, More fun!', this.canvas.width / 2, this.canvas.height / 2 - 80);
  }

  drawMiddle() {
    this.context.font = 'normal 60px Microsoft YaHei';
    // 创建渐变
    let gradient = this.context.createLinearGradient(0, 0, this.canvas.width, 0);
    gradient.addColorStop(0, "#00ff96");
    gradient.addColorStop(0.5, "#04ff3b");
    gradient.addColorStop(1.0, "#80ff05");
    // 用渐变填色
    this.context.fillStyle = gradient;

    this.context.fillText(`Weijuer 's Blog`, this.canvas.width / 2, this.canvas.height / 2);
  }

  drawBottom() {
    this.context.restore();
    this.context.fillText('weijuer.github.io - 2018', this.canvas.width / 2, this.canvas.height / 2 + 60);
  }

}

export default Welcome
