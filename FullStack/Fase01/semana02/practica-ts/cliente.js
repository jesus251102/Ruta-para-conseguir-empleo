"use strict";
const contact = {
    telefono: "987654321",
    email: "jesus@gmail.com"
};
const client = {
    nombre: "Jesus",
    contacto: contact,
    reparaciones: ["Samsung A12", "Honor X7a", "Redmi Note 11"]
};
function totalReparaciones(cliente) {
    return cliente.reparaciones.length;
}
console.log(`${client.nombre} tiene ${totalReparaciones(client)} reparaciones registradas`);
