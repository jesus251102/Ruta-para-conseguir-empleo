// --- DATOS DE PRUEBA ---
const historialReparaciones = [
  { cliente: "Carlos", falla: "Pantalla", costo: 120 },
  { cliente: "Ana", falla: "Batería", costo: 80 },
  { cliente: "Carlos", falla: "Pin de carga", costo: 40 },
  { cliente: "Luis", falla: "Pantalla", costo: 150 },
  { cliente: "Ana", falla: "Software", costo: 50 },
  { cliente: "Miguel", falla: "Pantalla", costo: 90 },
];

const inventarioActual = [
  "Batería iPhone 13",
  "Pantalla S23",
  "Pin carga G32",
  "Cautín",
  "Estaño",
];
const repuestosRequeridos = [
  "Pantalla S23",
  "Batería Poco X5",
  "Pin carga G32",
  "Pegamento T7000",
];

const logsServidor = [
  "192.168.1.15 - SUCCESS",
  "10.0.0.5 - FAILED",
  "192.168.1.15 - FAILED",
  "10.0.0.5 - FAILED",
  "10.0.0.5 - SUCCESS",
  "192.168.1.88 - FAILED",
];

const ingresosSucios = ["$150.00", 40, "S/ 120", 80.5, "90 soles", "Error"];

// EJERCICIO 01
// Escribe una función que reciba el arreglo historialReparaciones. Debe calcular y devolver únicamente el nombre del cliente que ha gastado la mayor cantidad de dinero en total sumando todas sus visitas al taller.
// const clienteVIP = (arr) => {};
// console.log(clienteVIP(historialReparaciones));

// EJERCICIO 02
// Escribe una función que reciba dos arreglos: inventarioActual y repuestosRequeridos. Debe comparar ambas listas y devolver un nuevo arreglo que contenga únicamente los artículos que faltan (los que están en requeridos pero no existen en el inventario actual).

// EJERCICIO 03
// Escribe una función que reciba una contraseña (texto). Debe devolver true si es una contraseña segura, o false si no lo es.
// Reglas de seguridad: Debe tener al menos 8 caracteres de longitud, debe contener al menos un número, y no debe contener ningún espacio en blanco.
const password = (t) => {
  const long = t.length >= 8;
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let arr = [];
  const space = " ";

  // for (let i = 1; i < t.length; i++) {
  //   arr.push(t[i]);
  // }

  return num.indexOf(t) ? true : false;
};
console.log(password("gabrielmartinez"));
