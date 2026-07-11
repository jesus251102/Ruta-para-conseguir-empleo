"use strict";
// 1. Crea una función genérica "ultimo<T>(lista: T[]): T"
//    que devuelva el ÚLTIMO elemento del array (pista: lista[lista.length - 1])
//
// 2. Pruébala con:
//    - un array de números
//    - un array de strings
//    - un array de objetos Reparacion (usa la interface del ejercicio anterior)
//
// 3. Muestra los 3 resultados con console.log
const respuestaClientes = {
    exito: true,
    datos: { nombre: "Gabriel", telefono: "999888777" },
};
function ultimo(lista) {
    return lista[lista.length - 1];
}
console.log(ultimo([1, 3, 5, 6, 2, 8, 7]));
console.log(ultimo(["hola", "gabriel", "typescript"]));
console.log(ultimo([respuestaClientes]));
