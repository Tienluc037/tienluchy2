class Rectangle {
    x;
    y;
    width;
    height;
    color;

    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getHeight() {
        return this.height;
    }
    setHeight() {
        return this.height;
    }
    render(canvas) {

        let rect = new Rectangle(200, 100,this.color);
        let HCN = document.getElementById("HCN");
        let pen = HCN.getContext("2d");
        pen.beginPath();
        pen.rect(10,10,this.width,this.height);
        pen.stroke();
        pen.closePath();
    }
}