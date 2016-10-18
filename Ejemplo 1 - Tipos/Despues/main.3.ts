interface IPersona {
    nombre: string;
    apellido: string;
    edad: number;
    saludar: (mensaje: string) => void;
}

class Persona implements IPersona {

    constructor(public nombre: string,
                public apellido: string, 
                public edad: number) {
    }
    public saludar(mensaje):void{
        console.log(`${this.nombre} - ${mensaje}`)
    }
}


function procesar(param: IPersona) {
    param.nombre = "Primer Nombre";
    var calc = param.edad + param.edad;
    console.log(calc);
    return calc;
}

var persona = new Persona("Germán","Küber",28);
persona.saludar("Saludos desde TypeScript!!");
