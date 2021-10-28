class rect {
    x;
    y;
    color;
    speed;
   // radius; // kích cỡ
    constructor(x,y,color,speed) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.speed = speed;
    }
    render(canvas) { // render :hiển thị
        let pen = canvas.getContext("2d");
        pen.beginPath();
        pen.rect(this.x, this.y,100,80);
        pen.fillStyle = this.color;
        pen.fill();
        pen.closePath();
    }
}