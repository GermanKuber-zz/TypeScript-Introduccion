interface IPersona {
    nombre: string;
    apellido: string;
    edad: number;
}

class Persona implements IPersona {
    nombre: string;
    apellido: string;
    edad: number;
    constructor(nombre: string, apellido: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

function procesar(param: IPersona) {
    param.nombre = "Primer Nombre";
    var calc = param.edad + param.edad;
    console.log(calc);
    return calc;
}


var resultado = procesar(new Persona("Nombre","Apellido",29));
