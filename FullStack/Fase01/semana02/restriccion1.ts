// 1. Crea una función genérica "obtenerPropiedad<T, K extends keyof T>(obj: T, clave: K)"
//    que devuelva obj[clave]
//    (esto es MUY común — te permite acceder de forma segura a cualquier propiedad)
//
// 2. Pruébala con un objeto Reparacion, pidiendo la propiedad "equipo"
//    y luego pidiendo la propiedad "precio"
//
// 3. Intenta pedir una propiedad que NO existe (ej: "marca")
//    y confirma que TypeScript te lo bloquea antes de compilar

interface Reparacionn
{
    equipo: string;
    detalle: string;
    precio: number
}

const reparacel: Reparacionn = {
    equipo: "Note 14 5G",
    detalle: "Cambio de pantalla",
    precio: 150
}

function obtenerPropiedad<T, K extends keyof T>(obj: T, clave: K)
{
    return obj[clave]
}

console.log(obtenerPropiedad(reparacel, "equipo"));
console.log(obtenerPropiedad(reparacel, "precio"));


