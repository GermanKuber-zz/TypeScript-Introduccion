//Playground
//parametros opcionales
//get y set
//static
class Point {
    x: number;
    y: number;
    constructor(x: number = 2, y: number = 9) {
        this.x = x;
        this.y = y;
    }
    get suma() {
        return this.x + this.y;
    }
    static InPoint = new Point(1,34);
}

var point = new Point(25, 76);

var result = point.suma;

Point.InPoint.x = 9;