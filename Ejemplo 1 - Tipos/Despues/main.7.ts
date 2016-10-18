//Playground
class Tracker {
    count = 0;
    start() {
        // window.onmousemove = function (e) {
        window.onmousemove = e => {
            //Borrar en vivo y ver como desaparece la refencia a _this
            this.count++;
            console.log(this.count);
        }
    }
}
var t = new Tracker();
t.start();