interface Reparacion
{
    readonly id: number,
    equipo: string,
    precio: number,
    garantia: boolean,
    notas?: string
}

const reparaciones: Reparacion[] = [
    { id: 1, equipo: "Samsung", precio: 120, garantia: true, notas: "Poner mica" },
    { id: 2, equipo: "Honor", precio: 80, garantia: false, notas: "Cargar la bateria" },
    { id: 3, equipo: "Motorola", precio: 55, garantia: true },
]

function mostrarResumen(reparacion: Reparacion): string
{
    return `Equipo: ${reparacion.equipo} - Precio: ${reparacion.precio} - Garantia: ${reparacion.garantia ? "Si" : "No"}`
}

for (const repara of reparaciones)
{
    console.log(mostrarResumen(repara))
}