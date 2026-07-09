// APRENDIENDO TYPESCRIPTS PASO A PASO
let edad: number = 25;
let nombre: string = "Gabriel";
let activo: boolean = true;
let lista: number[] = [1, 2, 3]; // array de números
let nombres: string[] = ["Ana", "Luis"]; // array de strings
let cualquierCosa: any = "esto puede ser lo que sea"; // evita usarlo, rompe el propósito de TS

// union types — una variable que puede ser de más de un tipo
let id: number | string;
id = 101; // ✅ válido
id = "ABC101"; // ✅ también válido
// id = true;     // ❌ Error — boolean no está permitido

// tuple — un array con tipos y cantidad fijos
let coordenada: [number, number] = [10, 20]; // exactamente 2 números
let usuario: [string, number] = ["Gabriel", 25]; // string y luego number, en ese orden

// Funciones tipadas — parámetros y retorno
function sumar(a: number, b: number): number {
  return a + b;
}

// Si el retorno no coincide con lo declarado, error inmediato:
// function sumarMal(a: number, b: number): number {
//   return "esto no es un número"; // ❌ Error de tipo
// }

// Parametros opcionales
// El ? después del nombre del parámetro indica que es opcional.
function saludar(nombre: string, apellido?: string): string {
  if (apellido) {
    return `Hola ${nombre} ${apellido}`;
  }
  return `Hola ${nombre}`;
}

saludar("Gabriel"); // ✅ válido, apellido es opcional
saludar("Gabriel", "López"); // ✅ también válido
