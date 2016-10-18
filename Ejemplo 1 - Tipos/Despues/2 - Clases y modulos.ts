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
    }

    export function procesar(param: IPersona) {
        param.nombre = "Primer Nombre";
        var calc = param.edad + param.edad;
        console.log(calc);
        return calc;
    }
}
var persona = new Workshop.Persona();
persona.apellido = "Apellido";
persona.nombre = "Nombre";
persona.edad = 28;
var resultado = Workshop.procesar(persona);
