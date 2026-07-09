"use strict";
// Crea una función "obtenerColorEstado(estado: string): string" pero usando
// un union type específico en vez de "string" genérico:
//
// function obtenerColorEstado(estado: "pendiente" | "en_proceso" | "listo"): string {
// según el estado, retorna:
// "pendiente" → "amarillo"
// "en_proceso" → "azul"
// "listo" → "verde"
// }
//
// Pruébala con los 3 casos válidos
// Luego intenta llamarla con obtenerColorEstado("cancelado")
// y observa el error que TypeScript te muestra ANTES de ejecutar nada
function obtenerColorEstado(estado) {
    switch (estado) {
        case "pendiente":
            return "Amarillo";
        case "en_proceso":
            return "Azul";
        case "listo":
            return "Verde";
        default:
            return "Estado equivocado";
    }
}
console.log(obtenerColorEstado("pendiente"));
console.log(obtenerColorEstado("en_proceso"));
console.log(obtenerColorEstado("listo"));
