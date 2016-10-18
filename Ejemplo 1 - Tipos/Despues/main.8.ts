//Playground
// module Utilidades.Prueba.Internas {
     module Utilidades {
    //class Tracker {
    export class Tracker {
        count = 0;
        start() {
            window.onmousemove = e => {
                this.count++;
                console.log(this.count);
            }
        }
    }
}
module Utilidades{
    export var saludo = "Hola desde TypeScript!!";
}
var t = new Utilidades.Tracker();
// var t = new Utilidades.Prueba.Internas.Tracker();

Utilidades.saludo