"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// APRENDIENDO TYPESCRIPTS PASO A PASO
let edad = 25;
let nombre = "Gabriel";
let activo = true;
let lista = [1, 2, 3]; // array de números
let nombres = ["Ana", "Luis"]; // array de strings
let cualquierCosa = "esto puede ser lo que sea"; // evita usarlo, rompe el propósito de TS
// union types — una variable que puede ser de más de un tipo
let id;
id = 101; // ✅ válido
id = "ABC101"; // ✅ también válido
// id = true;     // ❌ Error — boolean no está permitido
// tuple — un array con tipos y cantidad fijos
let coordenada = [10, 20]; // exactamente 2 números
let usuario = ["Gabriel", 25]; // string y luego number, en ese orden
// Funciones tipadas — parámetros y retorno
function sumar(a, b) {
    return a + b;
}
// Si el retorno no coincide con lo declarado, error inmediato:
// function sumarMal(a: number, b: number): number {
//   return "esto no es un número"; // ❌ Error de tipo
// }
// Parametros opcionales
// El ? después del nombre del parámetro indica que es opcional.
function saludar(nombre, apellido) {
    if (apellido) {
        return `Hola ${nombre} ${apellido}`;
    }
    return `Hola ${nombre}`;
}
saludar("Gabriel"); // ✅ válido, apellido es opcional
saludar("Gabriel", "López"); // ✅ también válido
//# sourceMappingURL=app.js.map