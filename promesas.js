function buscarProducto(nombre) {
    return new Promise((resolve) => {
        const tiempoSimulado = Math.random() * 4000; // entre 0 y 4 segundos, aleatorio
        setTimeout(() => {
            resolve(`Producto "${nombre}" encontrado`);
        }, tiempoSimulado);
    });
}

// TU TAREA:
// 1. Crea la función "crearLimiteDeTiempo(ms)" — devuelve una promesa que SOLO rechaza
//    después de "ms" milisegundos, con el mensaje "Búsqueda demasiado lenta"
// 2. Crea "buscarConLimite(nombre, ms)" que use Promise.race() entre:
//    - buscarProducto(nombre)
//    - crearLimiteDeTiempo(ms)
// 3. Pruébala 3 veces con buscarConLimite("pantalla", 2000)
//    (como el tiempo es aleatorio, a veces ganará la búsqueda, a veces el límite — ¡eso es lo correcto!)
function crearLimiteDeTiempo(ms) {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Busqueda demasiado lenta")
        }, ms);
    })
}

async function buscarConLimite(nombre, ms) {
    const prodEncontrado = buscarProducto(nombre)
    const tiempoLimite = crearLimiteDeTiempo(ms)
    try {
        const resultado = await Promise.race([prodEncontrado, tiempoLimite])
        return resultado
    } catch (error) {
        throw error
    }
}

buscarConLimite("pantalla", 2000)
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

// ---------------------------- //

function consultarServidor(id) {
    return new Promise((resolve, reject) => {
        const falla = Math.random() > 0.5; // 50% de probabilidad de fallar
        setTimeout(() => {
            if (falla) {
                reject(`Servidor no respondió para id ${id}`);
            } else {
                resolve(`Datos del id ${id} obtenidos`);
            }
        }, 500);
    });
}

// TU TAREA:
// Crea "consultarConReintentos(id, intentosMaximos)" que:
// 1. Intente consultarServidor(id)
// 2. Si falla, reintente hasta intentosMaximos veces
// 3. Cada intento debe tener un límite de 800ms usando Promise.race()
//    (combina lo del ejercicio 1 y el ejercicio 2 en una sola función)
// 4. Si tiene éxito en cualquier intento → return el resultado y detente
// 5. Si se agotan los intentos → return "No se pudo obtener el id " + id
function consultarConReintentos(id, intentosMaximos) {

}
