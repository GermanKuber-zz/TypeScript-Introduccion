//Constructor
//Parametros opcionales
module Workshop {
    interface IPersona {
        nombre: string;
        apellido: string;
        edad: number;
    }

    export class Persona implements IPersona {
        nombre: string;
        apellido: string;
        edad: number;
        constructor(nombre: string, apellido: string, edad?: number) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
        }
    }

    export function procesar(param: IPersona) {
        param.nombre = "Primer Nombre";
        var calc = param.edad + param.edad;
        console.log(calc);
        return calc;
    }
}

var resultado = Workshop.procesar(new Workshop.Persona("Nombre", "Apellido", 29));
var resultado2 = Workshop.procesar(new Workshop.Persona("Nombre", "Apellido"));
