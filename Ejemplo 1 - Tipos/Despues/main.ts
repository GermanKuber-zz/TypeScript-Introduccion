interface IPersona {
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

var resultado = procesar(<IPersona>{
    nombre: "Nombre",
    apellido: "Apellido",
    edad: 28
});

var resultado2 = procesar(<IPersona>{
    nombre: "Nombre",
    apellido: "Apellido",
    edad: 28
});