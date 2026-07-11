"use strict";
// 1. Usa la interface Reparacion (id, equipo, precio, garantia)
// 2. Crea un type "NuevaReparacion" usando Omit — SIN la propiedad "id"
//    (porque simula que la base de datos genera el id al crear)
// 3. Crea una función "crearReparacion(datos: NuevaReparacion): Reparacion"
//    que reciba los datos SIN id, y devuelva el objeto completo
//    agregando un id fijo (por ejemplo, 1) usando spread (...)
// 4. Crea un type "ActualizacionReparacion" usando Partial
// 5. Crea una función "actualizarReparacion(actual: Reparacion, cambios: ActualizacionReparacion): Reparacion"
//    que devuelva el objeto actual combinado con los cambios (usa spread: { ...actual, ...cambios })
// 6. Pruébala: crea una reparación, luego actualiza SOLO el precio
const cambios1 = {
    equipo: "Note 14 5G", precio: 200, garantia: true
};
function crearReparacion(datos) {
    return {
        id: "1",
        ...datos
    };
}
function actualizarReparacion(actual, cambios) {
    return {
        ...actual,
        ...cambios
    };
}
console.log(crearReparacion(cambios1));
console.log(actualizarReparacion(crearReparacion(cambios1), { precio: 350 }));
