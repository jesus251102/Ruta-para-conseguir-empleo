// ASYNC / AWAIT
function obtenerPrecio(producto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const precios = { pantalla: 250, bateria: 80, cargador: 30 };
            if (precios[producto] !== undefined) {
                resolve(precios[producto]);
            } else {
                reject("Producto sin precio registrado: " + producto);
            }
        }, 1000);
    });
}

// TU TAREA — crea una función async llamada "mostrarPrecioFinal"
// que reciba un producto, y haga lo siguiente:
// 1. Obtenga el precio con await
// 2. Le agregue el 18% de IGV
// 3. Muestre: "Precio final: " + precioConIGV
// 4. Maneje el error con try/catch si el producto no existe
//
// Pruébala con "pantalla" (debe funcionar)
// Pruébala con "funda" (debe mostrar el error)
async function mostrarPrecioFinal(producto) {
    try {
        const precio = await obtenerPrecio(producto)
        const precioFinal = precio + (precio * 0.18)
        console.log("Precio Final:", precioFinal)
    } catch (error) {
        console.log(error)
    }
}
mostrarPrecioFinal("pantalla");
mostrarPrecioFinal("funda");


// Usando obtenerPrecio() que ya tienes:
// Crea una función async "calcularTotalCompra" que:
// 1. Use Promise.all() para pedir el precio de "pantalla", "bateria" y "cargador" EN PARALELO
// 2. Sume los 3 precios
// 3. Muestre: "Total de la compra: " + total
// 4. Maneje el error con try/catch
async function calcularTotalCompra() {
    try {
        const [p1, p2, p3] = await Promise.all([
            obtenerPrecio("pantalla"),
            obtenerPrecio("bateria"),
            obtenerPrecio("cargador")
        ]);
        const sumaTotal = p1 + p2 + p3
        console.log("Total de la compra", sumaTotal);
    } catch (error) {
        console.log(error)
    }
}
calcularTotalCompra()

// EJERCICIO 01
const reparacionesPendientes = [
    { id: 1, equipo: "iPhone 12", tecnico: "Carlos", precio: 150 },
    { id: 2, equipo: "Samsung S21", tecnico: "María", precio: 200 },
    { id: 3, equipo: "Xiaomi Redmi", tecnico: "Pedro", precio: 80 },
    { id: 4, equipo: "Huawei P30", tecnico: "Carlos", precio: 120 },
    { id: 5, equipo: "iPhone 11", tecnico: "María", precio: 130 },
];

// Esta función simula verificar UNA reparación contra un "servidor"
function verificarReparacion(reparacion) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulamos que el servidor aprueba reparaciones de más de 100 soles
            if (reparacion.precio > 100) {
                resolve({ ...reparacion, verificado: true });
            } else {
                reject(`Reparación ${reparacion.id} rechazada: precio muy bajo`);
            }
        }, 500);
    });
}
// Paso 1 — Verificación en paralelo con manejo de errores individuales
// Verifica todas las reparaciones en paralelo, pero el reto es: si una falla, no debe tumbar a las demás.Necesitas que cada una se intente individualmente y sepas cuál falló y cuál no.
async function verificarReparacionIndivual(reparacion) {
    try {
        const promesas = reparacion.map(a => verificarReparacion(a))
        const verificar = await Promise.allSettled(promesas)
        const aprobadas = verificar
            .filter(a => a.status === "fulfilled")
            .map(b => b.value)
        const rechazadas = verificar
            .filter(a => a.status === "rejected")
            .map(b => b.reason)

        const sumaPrecioAprobados = aprobadas
            .reduce((acc, cur) => acc + cur.precio, 0)
        const tecnicosAprobados = aprobadas
            .reduce((acc, cur) => {
                acc[cur.tecnico] ??= 0;
                acc[cur.tecnico]++;
                return acc;
            }, {})
        const reporteFinal = {
            aprobadas: aprobadas,

            rechazadas: rechazadas,

            totalAprobado: sumaPrecioAprobados,

            porTecnico: tecnicosAprobados
        }
        console.log(reporteFinal)
    } catch (error) {
        console.log(error)
    }
}

// verificarReparacionIndivual(reparacionesPendientes)

// EJERCICIO 01
function intentarConexion() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.7; // 30% de probabilidad de éxito
            if (exito) {
                resolve("Conexión exitosa");
            } else {
                reject("Falló la conexión");
            }
        }, 500);
    });
}

// TU TAREA:
// Crea una función async "conectarConReintentos(intentosMaximos)" que:
// 1. Intente llamar a intentarConexion()
// 2. Si falla, lo intente de nuevo (hasta intentosMaximos veces)
// 3. Si tiene éxito en cualquier intento, muestre: "Éxito en el intento N: " + resultado
// 4. Si agota todos los intentos sin éxito, muestre: "Se agotaron los intentos"
// Pista: necesitas un bucle (for) que use await adentro, y un try/catch en cada intento
async function conectarConReintentos(intentosMaximos) {
    for (let i = 0; i < intentosMaximos; i++) {
        try {
            const resultado = await intentarConexion()
            console.log(`Éxito en el intento N: ${i}: ${resultado}`)
            return resultado
        } catch (error) {
            console.log(`Intento ${i} falló: ${error}`)
        }
    }
    console.log("Se agotaron los intentos")
}

conectarConReintentos(10)
    .then(resultado => console.log(resultado))
    .catch(e => console.log(e))


// EJERCICIO 02
function operacionLenta() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Operación completada");
        }, 3000); // tarda 3 segundos
    });
}

// TU TAREA:
// Crea una función "conTimeout(promesa, tiempoLimite)" que:
// 1. Reciba una promesa y un tiempo límite en milisegundos
// 2. Si la promesa se resuelve ANTES del tiempo límite → resuelve con su resultado
// 3. Si el tiempo límite se cumple PRIMERO → rechaza con "Tiempo de espera agotado"
//
// Pista clave: usa Promise.race() — investiga qué hace antes de resolverlo.
// Necesitarás crear una segunda promesa que rechace usando setTimeout
//
// Pruébala así:
// conTimeout(operacionLenta(), 1500)
//   .then(resultado => console.log(resultado))
//   .catch(error => console.log(error))
// (debe fallar, porque la operación tarda 3000ms y el límite es 1500ms)
function conTiempoLimite(ms) {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Tiempo de espera agotado")
        }, ms);
    })
}
async function conTimeout(promesa, tiempoLimite) {
    const promesaTimeOut = conTiempoLimite(tiempoLimite)
    try {
        const resultado = await Promise.race([promesa, promesaTimeOut])
        return resultado
    } catch (error) {
        console.log(error)
    }

}

conTimeout(operacionLenta(), 1500)
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

// EJERCICIO 3
const reparacionesPrecio = [
    { id: 1, precio: 150 },
    { id: 2, precio: 200 },
    { id: 3, precio: 80 },
    { id: 4, precio: 120 },
];

function cobrarReparacion(reparacion) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(reparacion.precio);
        }, 300);
    });
}

// TU TAREA:
// Crea una función async "cobrarTodoSecuencial(reparaciones)" que:
// 1. Recorra el array SIN usar map/filter/reduce (usa un for...of)
// 2. Para cada reparación, espere (await) a que se cobre
// 3. Vaya acumulando el total
// 4. Muestre en consola cada cobro a medida que ocurre:
//    "Cobrado reparación 1: 150. Acumulado: 150"
//    "Cobrado reparación 2: 200. Acumulado: 350"
//    etc.
// 5. Al final, devuelva (return) el total acumulado
async function cobrarTodoSecuencial(reparaciones) {
    try {
        let acumulado = 0;
        for (let reparacion of reparaciones) {
            let cobro = await cobrarReparacion(reparacion)
            console.log(`Cobrando reparación ${reparacion.id}: ${reparacion.precio}. Acumulado ${acumulado += cobro}`)
        }
        return acumulado
    } catch (error) {
        console.log(error)
    }
}
cobrarTodoSecuencial(reparacionesPrecio)
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))