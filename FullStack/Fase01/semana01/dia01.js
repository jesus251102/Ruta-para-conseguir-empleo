// 1️⃣ Fortalecer map, filter y reduce
// 2️⃣ Ejercicios para ponerlos a prueba
// 3️⃣ Luego pasamos a Promesas

//MAP -- Transformar datos
// Se encarga de recorrer un array y transformar sus elementos por una acción dada y devuelve un array nuevo sin modificar el original.
const precios = [100, 200, 300, 400];
const precioConIGV = precios.map((precio) => precio * 1.18);
console.log(precioConIGV);

//FILTER -- Filtrar datos
// Reccorre un array y conserva los elementos que cumpla una condición
const reparacionesUno = [
  { id: 1, equipo: "iPhone 12", estado: "listo" },
  { id: 2, equipo: "Samsung S21", estado: "pendiente" },
  { id: 3, equipo: "Xiaomi", estado: "listo" },
  { id: 4, equipo: "Huawei", estado: "en_proceso" },
];
const reparacionesListas = reparacionesUno.filter(
  (listo) => listo.estado === "listo",
);
console.log(reparacionesListas);

//REDUCE -- Acumular datos
// Se encarga de recorrer un array y lo convierte en un único valor.
// Reduce puede devolver cualquier cosa — un número, un string, un objeto, un array.
const ventas = [150, 200, 350, 100, 400];
const total = ventas.reduce((acc, cur) => acc + cur, 0);
console.log(total);

// EJERCICIO 01
const reparacionesDos = [
  { id: 1, equipo: "iPhone 12", estado: "listo", precio: 150 },
  { id: 2, equipo: "Samsung S21", estado: "pendiente", precio: 200 },
  { id: 3, equipo: "Xiaomi", estado: "listo", precio: 80 },
  { id: 4, equipo: "Huawei", estado: "en_proceso", precio: 120 },
  { id: 5, equipo: "iPhone 11", estado: "listo", precio: 130 },
];
// ¿Cuánto dinero generaron SOLO las reparaciones listas?
const listos = reparacionesDos.filter((ok) => ok.estado === "listo");
const totalidad = listos.reduce((acc, cur) => acc + cur.precio, 0);
console.log(totalidad);

// EJERCICIO 02
const estudiantes = [
  { nombre: "Gabriel", nota: 14 },
  { nombre: "Luis", nota: 18 },
  { nombre: "María", nota: 12 },
  { nombre: "Ana", nota: 16 },
];
// Agrega a cada estudiante una propiedad "aprobado"
// aprobado = true si nota >= 13, false si no
estudiantes.map((a) =>
  a.nota >= 13 ? (a.aprobado = true) : (a.aprobado = false),
);
console.log(estudiantes);

// EJERCICIO 03
const productos = [
  { nombre: "Pantalla iPhone", stock: 0, precio: 250 },
  { nombre: "Batería Samsung", stock: 5, precio: 80 },
  { nombre: "Cargador USB-C", stock: 0, precio: 30 },
  { nombre: "Modulo cámara", stock: 2, precio: 180 },
];
// Filtra solo los productos que tienen stock
// Y que cuesten menos de 100 soles
const stock = productos.filter(s => s.stock >= 1 && s.precio < 100)
console.log(stock);

// EJERCICIO 04
const empleados = [
  { nombre: "Carlos", departamento: "tecnico", salario: 2500 },
  { nombre: "Rosa", departamento: "ventas", salario: 1800 },
  { nombre: "Pedro", departamento: "tecnico", salario: 3000 },
  { nombre: "Julia", departamento: "ventas", salario: 2100 },
  { nombre: "Miguel", departamento: "tecnico", salario: 2800 },
];

// ¿Cuál es el salario promedio del departamento "tecnico"?
const tecnicos = empleados.filter(a => a.departamento === "tecnico")
const salarioProm = tecnicos.reduce((total, cur) => total + cur.salario, 0) / tecnicos.length
console.log(salarioProm.toFixed(2));

// RONDA 2
// EJERCICIO 05
const inventario = [
  { producto: "Pantalla iPhone 13", precioCompra: 180, margen: 0.40 },
  { producto: "Batería Samsung A52", precioCompra: 45, margen: 0.60 },
  { producto: "Modulo cámara Xiaomi", precioCompra: 90, margen: 0.50 },
  { producto: "Puerto carga USB-C", precioCompra: 20, margen: 0.80 },
];
// Genera un nuevo array donde cada producto tenga:
// - precioVenta: precioCompra + (precioCompra * margen)
// - ganancia: precioVenta - precioCompra
// - precioVenta redondeado a 2 decimales
const inve1 = inventario.map(a => ({
  ...a,
  precioVenta: a.precioCompra + (a.precioCompra * a.margen),
}))
const inve2 = inve1.map(b => ({
  ...b,
  ganancia: (b.precioVenta - b.precioCompra).toFixed(2)
}))
console.log(inve2)

// EJERCICIO 06
const clientes = [
  { nombre: "Carlos Rios", deuda: 0, reparaciones: 5, ciudad: "Lima" },
  { nombre: "Ana Torres", deuda: 150, reparaciones: 2, ciudad: "Ica" },
  { nombre: "Pedro Soto", deuda: 0, reparaciones: 8, ciudad: "Lima" },
  { nombre: "María Luz", deuda: 80, reparaciones: 1, ciudad: "Ica" },
  { nombre: "Luis Paz", deuda: 0, reparaciones: 12, ciudad: "Lima" },
];
// Obtén solo los clientes de Lima SIN deuda
// Y devuelve solo su nombre y cantidad de reparaciones
// Ordénalos de mayor a menor reparaciones
const lugar = clientes
  .filter(a => a.ciudad === "Lima")
  .map(b => ({
    nombre: b.nombre,
    reparaciones: b.reparaciones
  }))
  .sort((a, b) => b.reparaciones - a.reparaciones)
console.log(lugar)

// EJERCICIO 07
const movimientos = [
  { tipo: "ingreso", concepto: "Reparación iPhone", monto: 150 },
  { tipo: "egreso", concepto: "Compra repuestos", monto: 80 },
  { tipo: "ingreso", concepto: "Reparación Samsung", monto: 200 },
  { tipo: "egreso", concepto: "Alquiler local", monto: 500 },
  { tipo: "ingreso", concepto: "Reparación Xiaomi", monto: 90 },
  { tipo: "egreso", concepto: "Servicios", monto: 120 },
  { tipo: "ingreso", concepto: "Venta accesorio", monto: 60 },
];
// Con UN SOLO reduce obtén un objeto resumen con:
// - totalIngresos
// - totalEgresos
// - balance (ingresos - egresos)
let total1 = movimientos.reduce((acc, cur) => {
  if (cur.tipo === "ingreso") {
    acc.totalIngresos += cur.monto
  } else if (cur.tipo === "egreso") {
    acc.totalEgresos += cur.monto
  }

  acc.balance = acc.totalIngresos - acc.totalEgresos
  return acc;
}, { totalIngresos: 0, totalEgresos: 0, balance: 0 })
console.log(total1)

// EJERCICIO 08
const reparaciones = [
  { id: 1, tecnico: "Carlos", equipo: "iPhone 12", estado: "listo", precio: 150, garantia: true },
  { id: 2, tecnico: "María", equipo: "Samsung S21", estado: "pendiente", precio: 200, garantia: false },
  { id: 3, tecnico: "Carlos", equipo: "Xiaomi Redmi", estado: "listo", precio: 80, garantia: false },
  { id: 4, tecnico: "Pedro", equipo: "Huawei P30", estado: "listo", precio: 120, garantia: true },
  { id: 5, tecnico: "María", equipo: "iPhone 11", estado: "listo", precio: 130, garantia: false },
  { id: 6, tecnico: "Pedro", equipo: "Motorola G9", estado: "cancelado", precio: 90, garantia: false },
  { id: 7, tecnico: "Carlos", equipo: "Samsung A52", estado: "listo", precio: 95, garantia: true },
  { id: 8, tecnico: "María", equipo: "iPhone SE", estado: "pendiente", precio: 110, garantia: false },
  { id: 9, tecnico: "Pedro", equipo: "Xiaomi 12", estado: "listo", precio: 175, garantia: false },
  { id: 10, tecnico: "Carlos", equipo: "Huawei Y9", estado: "cancelado", precio: 60, garantia: false },
];

//Reparaciones listas
const listas = reparaciones
  .filter(a => a.estado === "listo")
  .map(b => ({
    ...b,
    precioFinal: b.garantia === true ? b.precio * 0.80 : b.precio
  }))

//Reparación más cara
const reparacionCara = listas.toSorted((a, b) => b.precioFinal - a.precioFinal)

//Reporte técnico
const reporteTec = listas
  .reduce((acc, cur) => {
    acc[cur.tecnico] ??= { cantidad: 0, total: 0 };
    acc[cur.tecnico].cantidad++;
    acc[cur.tecnico].total += cur.precioFinal
    return acc
  }, {})



const reporte = {

  // 1️⃣ Solo las reparaciones completadas (estado "listo")
  //    Con una propiedad extra "precioFinal":
  //    Si tiene garantia → precioFinal = precio * 0.80 (20% descuento)
  //    Si no tiene garantia → precioFinal = precio
  reparacionesListas: listas,

  // 2️⃣ Total recaudado (suma de precioFinal de las listas)
  totalRecaudado: listas.reduce((acc, cur) => acc + cur.precioFinal, 0),

  // 3️⃣ La reparación más cara (objeto completo) de las listas
  reparacionMasCara: reparacionCara[0],

  // 4️⃣ Reporte por técnico — solo los que tienen reparaciones listas
  //    Ejemplo:
  //    { Carlos: { cantidad: 3, total: 280 }, María: { cantidad: 1, total: 130 } }
  reportePorTecnico: reporteTec,
}
console.log(reporte)