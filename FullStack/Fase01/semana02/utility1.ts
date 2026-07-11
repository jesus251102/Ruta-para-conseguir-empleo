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

interface Reparacionn4
{
    id: string;
    equipo: string;
    precio: number;
    garantia: boolean;
}

type NuevaReparacion = Omit<Reparacionn4, "id">;

const cambios1: NuevaReparacion = {
    equipo: "Note 14 5G", precio: 200, garantia: true
}

function crearReparacion(datos: NuevaReparacion): Reparacionn4
{
    return {
        id: "1",
        ...datos
    }
}

type ActualizacionReparacion = Partial<Reparacionn4>;

function actualizarReparacion(actual: Reparacionn4, cambios: ActualizacionReparacion): Reparacionn4
{
    return {
        ...actual,
        ...cambios
    }
}

console.log(crearReparacion(cambios1));
console.log(actualizarReparacion(crearReparacion(cambios1), { precio: 350 }))