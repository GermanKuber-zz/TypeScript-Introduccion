// "sourceMap": true,
// "outDir": "js",
// "watch": true
function procesar(param){
    param.nombe = "Primer Nombre";
    var calc = param + param;
    console.log(calc);
    return calc;
}

procesar("Mensaje");