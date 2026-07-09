interface Contacto
{
    telefono: string,
    email?: string
}

interface Cliente
{
    nombre: string,
    contacto: Contacto,
    reparaciones: string[]
}

const contact: Contacto =
{
    telefono: "987654321",
    email: "jesus@gmail.com"
}

const client: Cliente = {
    nombre: "Jesus",
    contacto: contact,
    reparaciones: ["Samsung A12", "Honor X7a", "Redmi Note 11"]
}

function totalReparaciones(cliente: Cliente): number
{
    return cliente.reparaciones.length
}
console.log(`${client.nombre} tiene ${totalReparaciones(client)} reparaciones registradas`)