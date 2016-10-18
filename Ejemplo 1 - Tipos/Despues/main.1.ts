interface IPersona {
    nombre: string;
    apellido: string;
    edad: number;
}

class Persona implements IPersona {
    nombre: string;
    apellido: string;
    edad: number;
}

function procesar(param: IPersona) {
    param.nombre = "Primer Nombre";
    var calc = param.edad + param.edad;
    console.log(calc);
    return calc;
}

var persona = new Persona();
persona.apellido = "Apellido";
persona.nombre = "Nombre";
persona.edad = 28;
var resultado = procesar(persona);
