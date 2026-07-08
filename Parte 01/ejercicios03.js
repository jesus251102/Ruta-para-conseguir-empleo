// --- DATOS DE PRUEBA GLOBALES ---
const reparacionesDia = [
  {
    id: 1,
    modelo: "iPhone 13",
    falla: "Batería",
    precio: 150,
    entregado: true,
    garantiaAnulada: false,
  },
  {
    id: 2,
    modelo: "Xiaomi Poco X5",
    falla: "Placa",
    precio: 280,
    entregado: false,
    garantiaAnulada: true,
  },
  {
    id: 3,
    modelo: "Samsung S23",
    falla: "Pantalla",
    precio: 400,
    entregado: true,
    garantiaAnulada: false,
  },
  {
    id: 4,
    modelo: "Motorola G32",
    falla: "Software",
    precio: 50,
    entregado: false,
    garantiaAnulada: false,
  },
];

const puertosEscaneados = [22, 80, 8080, 443, 21];
const cajaInicial = 100;
const configuracionRouter = {
  ip: "192.168.1.1",
  mac: "00:1A:2B:3C:4D",
  firewallActivo: true,
};

// EJERCICIO 01
// Crea una función analizarRed que reciba un arreglo de puertos (números).
// Usa un for...of para recorrerlo. Dentro del ciclo, usa un switch para imprimir qué servicio corre en cada puerto:
// Si es 22: imprime "Puerto 22 abierto: Posible acceso SSH."
// Si es 80 o 8080: imprime "Puerto HTTP detectado: Tráfico web sin cifrar."
// Si es 443: imprime "Puerto HTTPS: Tráfico seguro."
// Default: imprime "Puerto [numero] desconocido."
const analizarRed = (n) => {
  for (const puerto of puertosEscaneados) {
    switch (n) {
      case 22:
        return "Puerto 22 abierto: Posible acceso SSH";
        break;
      case (80, 8080):
        return "Puerto HTTP detectado: Tráfico web sin cifrar";
        break;
      case 443:
        return "Puerto HTTPS: TRáfico seguro";
        break;
      default:
        return `Puerto ${n} desconocido`;
        break;
    }
  }
};
console.log(analizarRed(8080));

// EJERCICIO 02
// Crea una función flecha validarGarantia que reciba un objeto de reparación.
// Debe retornar true SOLO SI: el precio de la reparación es mayor a 100 Y además la garantía NO está anulada (!garantiaAnulada).
const validarGarantia = (obj) => {
  const p = reparacionesDia[obj].precio;
  const g = reparacionesDia[obj].garantiaAnulada;
  if (p > 100 && !g) {
    return true;
  }
};
console.log(validarGarantia(0));

// EJERCICIO 03
// Crea una función formatearEquipo que reciba el nombre de un equipo.
// Adentro, crea una variable progreso = 0.
// Usa un ciclo do-while que sume 25 al progreso en cada vuelta e imprima "Formateando [equipo]... [progreso]%".
// El ciclo debe continuar mientras el progreso sea menor a 100. Al salir del ciclo, retorna "Wipe Data completado".
const formatearEquipo = (equipo) => {
  let progreso = 0;
  do {
    progreso += 25;
    console.log(`Formateando ${equipo}... ${progreso}%`);
  } while (progreso < 100);
  return "Wipe Data completado";
};
console.log(formatearEquipo("Note 14 5G"));

// EJERCICIO 04
// Crea una función detectarFallasGraves que reciba el arreglo de reparaciones.
// Encadena métodos: primero usa .filter() para quedarte solo con los equipos cuya falla sea exactamente "Placa". Luego usa .map() para retornar un nuevo arreglo con el texto: "CRÍTICO: El equipo [modelo] requiere intervención en placa."
const detectarFallasGraves = (r) => {
  const failed = r.filter((f) => f.falla === "Placa");
  const newArr = failed.map(
    (n) => `CRITICO: El equipo ${n.modelo} requiere intervención en placa`,
  );
  return newArr;
};
console.log(detectarFallasGraves(reparacionesDia));

// EJERCICIO 05
// Crea una función cerrarCaja que reciba el arreglo de reparaciones y un número de cajaBase.
// Usa el método .reduce() para sumar el precio de los equipos, pero solo si el equipo ya fue entregado (entregado === true).
// Retorna el monto total sumado al monto de la cajaBase. (Pista: Dentro del reduce, usa un if para decidir si sumas el precio al acumulador o si devuelves el acumulador intacto).
const cerrarCaja = (r, n) => {
  return r.reduce((acc, cur) => {
    return cur.entregado === true ? acc + cur.precio : acc;
  }, n);
};
console.log(cerrarCaja(reparacionesDia, 0));

// EJERCICIO 06
// Crea una función imprimirConfiguracion que reciba un objeto (como configuracionRouter).
// Usa un ciclo for...in para recorrerlo. En cada vuelta, imprime: "Parámetro [llave] configurado como: [valor]".
const imprimirConfiguracion = (configuracion) => {
  for (const conf in configuracion) {
    return `Parámetro ${conf} configurado como: ${conf}`;
  }
};
console.log(imprimirConfiguracion(configuracionRouter));

// EJERCICIO 07
// 7. El Auditor de Seguridad (every o some + if/else)
// Crea una función auditarInventario que reciba el arreglo de reparaciones.
// Usa .some() para verificar si existe algún equipo no entregado (entregado === false) cuya reparación cueste más de 300 soles.
// Si el resultado es true, retorna "Alerta: Hay equipos de alto valor pendientes en el taller". Si es false, retorna "Taller asegurado".
const auditarInventario = (r) => {
  if (r.some((e) => e.entregado === false && e.precio > 300)) {
    return "Alerta: Hay equipos de alto valor pendientes en el taller";
  } else return "Taller asegurado";
};
console.log(auditarInventario(reparacionesDia));

// EJERCICIO 09
// Crea una función entregarYLimpiar que reciba el arreglo de reparaciones y un idBuscado.
// Paso 1: Usa .find() para encontrar el objeto con ese ID.
// Paso 2: Cambia su propiedad entregado a true.
// Paso 3: Usa el operador delete para borrar la propiedad garantiaAnulada de ese objeto (para limpiar datos sensibles).
// Retorna el objeto modificado.
const entregarYLimpiar = (r, idBuscado) => {
  let searchId = r.find((i) => i.id === idBuscado);
  // searchId.entregado = true;
  delete searchId.garantiaAnulada;
  return searchId;
};
console.log(entregarYLimpiar(reparacionesDia, 2));

// EJERCICIO 10
// Crea una función llamada generarDashboard que reciba tu arreglo de reparacionesDia.
// La función debe crear y retornar un único objeto literal estructurado exactamente de esta manera:
// Estructura que debes retornar dinámicamente:
// {
//     totalEquipos: 4,
//     equiposPendientes: ["Xiaomi Poco X5", "Motorola G32"],
//     ingresoProyectado: 880,
//     estadoGeneral: "Operativo"
// }
const generarDashboard = (r) => {
  let obj = {
    totalEquipos: 0,
    equiposPendientes: [],
    ingresoProyectado: 0,
    estadoGeneral: "",
  };

  //Total de equipos
  const t = r.length;
  obj.totalEquipos = t;

  //Equipos pendientes
  const ep = r.filter((e) => e.entregado === false);
  const newArr = ep.map((e) => e.modelo);
  obj.equiposPendientes = newArr;

  //Ingresos proyectados
  let total = 0;
  const ip = r.reduce((acc, cur) => {
    total += cur.precio;
    total + acc;
  }, 0);
  obj.ingresoProyectado = total;

  //Estado General
  obj.ingresoProyectado > 500
    ? (obj.estadoGeneral = "Rentable")
    : (obj.estadoGeneral = "Operativo");

  //Retornar objecto literal
  return obj;
};
console.log(generarDashboard(reparacionesDia));
