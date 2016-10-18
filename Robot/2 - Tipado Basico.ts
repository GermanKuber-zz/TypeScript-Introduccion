interface IRobotPart{
    status:string;
    name:string;
    valor:number;
}
function Scan(param: IRobotPart) {
    param.status = "Escaneado";
    var removeValue = ((param.valor * 10) / 100);
    param.valor = param.valor - removeValue;
    console.log("Se escaneo : " + param.name + " El valor actual es : " + param.valor);
    return param;
}
var armadura = Scan({status : "Error", name:"Armadura", valor:80});