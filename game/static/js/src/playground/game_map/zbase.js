class GameMap extends AcGameObject
{
    constructor(playground)
    {
        super(); // 调用基类的构造函数

        this.playground = playground; // 这个Map是属于这个playground的
        this.$canvas = $(`<canvas></canvas>`); // canvas是画布
        this.ctx = this.$canvas[0].getContext('2d'); // 用ctx操作画布canvas

        this.ctx.canvas.width = this.playground.width; // 设置画布的宽度
        this.ctx.canvas.height = this.playground.height; // 设置画布的高度

        this.playground.$playground.append(this.$canvas); // 将这个画布加入到这个playground
    }

    render()
    {
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.2)"; // 填充颜色设置为透明的黑色
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height); // 画上给定的坐标的矩形
    }

    start()
    {

    }

    update()
    {
        this.render(); // 这个地图要一直画一直画（动画的基本原理）
    }

}