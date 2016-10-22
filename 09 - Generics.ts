class GenericMethods<T>{
    getAll<T>(param : T):T{
        return param;
    }
}

var generic = new GenericMethods();

var str = generic.getAll<string>("Valor");

var str2 = generic.getAll("Valor");


var str3 = generic.getAll(new Array<string>());