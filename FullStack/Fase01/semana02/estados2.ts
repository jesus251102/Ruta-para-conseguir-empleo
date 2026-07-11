// 1. Crea un type alias "EstadoReparacion" con los valores:
//    "pendiente" | "en_proceso" | "listo" | "cancelado"
//
// 2. Crea un type alias "ID" que sea number | string
//
// 3. Crea una función "cambiarEstado(id: ID, nuevoEstado: EstadoReparacion): string"
//    que devuelva: "Reparación 5 cambiada a: listo"
//
// 4. Pruébala con un id numérico (5) y con un id string ("REP-005")
//
// 5. Intenta llamarla con un estado que NO esté en la lista (ej: "reparando")
//    y confirma que TypeScript te marca el error antes de compilar

type EstadoReparacion = "pendiente" | "en_proceso" | "listo" | "canccelado";
type ID = number | string;

function cambiarEstado(id: ID, nuevoEstado: EstadoReparacion): string
{
    return `Reparación cambiado a: ${nuevoEstado}`
}

console.log(cambiarEstado(5, "en_proceso"));
console.log(cambiarEstado("REP-005", "listo"));
// console.log(cambiarEstado(10, "reparando"))

