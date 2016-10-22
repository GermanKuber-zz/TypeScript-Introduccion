//Playground
//parametros opcionales
//get y set
//static
class Point {

    constructor(public x: number = 2, public y: number = 9) {

    }
    get suma() {
        return this.x + this.y;
    }
    static InPoint = new Point(1,34);
}

var point = new Point(25, 76);

var result = point.suma;

Point.InPoint.x = 9;