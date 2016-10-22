// "sourceMap": true,
// "outDir": "js",
// "watch": true
function procesar(param) {
    param.name = "Primer Nombre";
    var calc = param + param;
    console.log(calc);
    return calc;
}
procesar("Mensaje");