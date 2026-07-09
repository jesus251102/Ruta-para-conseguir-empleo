// INTEFACE
// ❌ Sin interface — tipar el objeto "en línea" cada vez que lo usas
function mostrarReparacion1(reparacion: { id: number; equipo: string; precio: number })
{
    console.log(reparacion.equipo);
}

// ✅ Con interface — defines el "molde" una vez
interface Reparacion
{
    id: number;
    equipo: string;
    precio: number;
}

function mostrarReparacion2(reparacion: Reparacion)
{
    console.log(reparacion.equipo);
}

// Interface básica aplicada
interface Cliente
{
    nombre: string;
    telefono: string;
    deuda: number;
}

const cliente1: Cliente = {
    nombre: "Gabriel",
    telefono: "987654321",
    deuda: 0,
};

// Si te falta una propiedad, o el tipo no coincide → error inmediato
const cliente2: Cliente = {
    nombre: "Ana",
    telefono: "111222333",
    // ❌ Error: falta la propiedad "deuda"
};

// Propiedades opcionales en interfaces
interface Cliente
{
    nombre: string;
    telefono: string;
    deuda: number;
    email?: string; // opcional — puede existir o no
}

const cliente3: Cliente = {
    nombre: "Gabriel",
    telefono: "987654321",
    deuda: 0,
    // sin email — está bien, porque es opcional
};

// READPONLY
// Útil para datos que no deberían cambiar después de creados — como un ID:
interface Reparacion2
{
    readonly id: number;
    equipo: string;
    precio: number;
}

const rep: Reparacion2 = { id: 1, equipo: "iPhone", precio: 150 };

rep.equipo = "Samsung"; // ✅ permitido
rep.id = 2;             // ❌ Error — id es readonly, no se puede reasignar

// Interfaces anidadas — un objeto dentro de otro
interface Direccion
{
    ciudad: string;
    calle: string;
}

interface Cliente4
{
    nombre: string;
    direccion: Direccion; // ← usa otra interface como tipo
}

const cliente: Cliente4 = {
    nombre: "Gabriel",
    direccion: {
        ciudad: "Ica",
        calle: "Av. Principal 123",
    },
};

// Interfaces con array
interface Tecnico
{
    nombre: string;
    reparaciones: string[]; // array de strings
}

const tecnico: Tecnico = {
    nombre: "Carlos",
    reparaciones: ["iPhone 12", "Samsung S21"],
};

// array de objetos que siguen una interface:
interface Reparacion3
{
    id: number;
    equipo: string;
}

const reparaciones: Reparacion3[] = [
    { id: 1, equipo: "iPhone 12" },
    { id: 2, equipo: "Samsung S21" },
];

