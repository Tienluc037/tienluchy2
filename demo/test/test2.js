class Rect {
    x;
    y;
    color;
    speed;
    size;
   // direction; // hướng di chuyển
    constructor(x,y,color,speed,size) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.speed = speed;
        this.size = size;
     // this.direction = "";
    }

    render (canvas) {
        let pen = canvas.getContext("2d");
        pen.beginPath();
        pen.rect(this.x,this.y,this.size,this.size);
        pen.fillStyle = this.color;
        pen.fill();

        pen.closePath();
    }

    // move () {
    //     switch ( this.direction)  {
    //         case "left":
    //             this.x -= this.speed;
    //             break;
    //         case "right":
    //             this.x += this.speed;
    //            break;
    //     }
    // }
}