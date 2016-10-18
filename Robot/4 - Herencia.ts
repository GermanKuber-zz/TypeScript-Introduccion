module RobotSpace.Component {
    interface IRobotPart {
        status: string;
        name: string;
        valor: number;
    }
    export class Robot {
        Scan(param: IRobotPart) {
            param.status = "Escaneado";
            var removeValue = ((param.valor * 10) / 100);
            param.valor = param.valor - removeValue;
            console.log("Se escaneo : " + param.name + " El valor actual es : " + param.valor);
            return param;
        }
    }
    export class RobotEnergy {
        Scan(param: IRobotPart) {
            var addValue = ((param.valor * 5) / 100);
            param.valor = param.valor + addValue;
            return param;
        }
    }
}
var robot = new RobotSpace.Component.Robot();
var armadura = robot.Scan({ status: "Error", name: "Armadura", valor: 80 });