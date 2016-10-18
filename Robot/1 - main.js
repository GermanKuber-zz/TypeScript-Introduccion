function Scan(param) {
    param.status = "Escaneado";
    var removeValue = ((param.valor * 10) / 100);
    param.valor = param.Valor - removeValue;
    console.log("Se escaneo : " + param.name + " El valor actual es : " + para.valor);
    return param;
}
Scan("Mensaje");