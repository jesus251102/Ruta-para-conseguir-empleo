// GENERICOS <T>
// El problema que resuelven
// Imagina que necesitas una función que devuelva el primer elemento de un array.Sin genéricos, tendrías que escribir una función por cada tipo

// ❌ Repetitivo — una función por tipo
function primerNumero(lista: number[]): number
{
    return lista[0];
}

function primerString(lista: string[]): string
{
    return lista[0];
}

// Con genéricos, escribes una sola función que funciona con cualquier tipo:
// ✅ Una función que sirve para CUALQUIER tipo
function primero<T>(lista: T[]): T
{
    return lista[0];
}

primero<number>([1, 2, 3]);           // T = number
primero<string>(["a", "b"]);          // T = string
// primero<Cliente>([cliente1, cliente2]); // T = Cliente

// Genéricos con múltiples tipos
function combinarDatos<T, U>(dato1: T, dato2: U): [T, U]
{
    return [dato1, dato2];
}

combinarDatos("Gabriel", 25); // → ["Gabriel", 25], T=string, U=number

// Genéricos en interfaces
interface Respuesta<T>
{
    exito: boolean;
    datos: T;
}

const respuestaCliente: Respuesta<Cliente> = {
    exito: true,
    datos: { nombre: "Gabriel", telefono: "999888777" },
};

const respuestaNumero: Respuesta<number> = {
    exito: true,
    datos: 42,
};