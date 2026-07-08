function obtenerPrecio(producto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const precios = {
                pantalla: 250,
                bateria: 80,
                cargador: 35,
            };
            if (precios[producto] !== undefined) {
                resolve(precios[producto]);
            } else {
                reject("Producto no encontrado: " + producto);
            }
        }, 1000);
    });
}

// TU TAREA:
// Crea una función async "calcularTotalCarrito()" que:
// 1. Use Promise.all() para pedir el precio de "pantalla", "bateria" y "cargador" en PARALELO
// 2. Sume los 3 precios
// 3. Muestre: "Total del carrito: " + total
// 4. Maneje errores con try/catch
//
// BONUS: pruébala también con un producto que no existe ("auricular")
// y observa qué pasa cuando UNA sola promesa falla dentro del Promise.all()

// async function calcularTotalCarrito() {
//     try {
//         const [p1, p2, p3] = await Promise.all([
//             obtenerPrecio("pantalla"),
//             obtenerPrecio("bateria"),
//             obtenerPrecio("cargador")
//         ])
//         const total = p1 + p2 + p3
//         console.log(`Total de carrito: ${total}`)
//     } catch (error) {
//         console.log(error)
//     }
// }
// calcularTotalCarrito()

// TU TAREA:
// Crea una función async "verificarCarrito(productos)" que reciba un array de nombres:
// ["pantalla", "auricular", "cargador", "bateria", "funda"]
//
// 1. Use Promise.allSettled() para verificar TODOS en paralelo
// 2. Separe los resultados en dos grupos usando filter + map:
//    - encontrados: array con los precios que SÍ resolvieron (solo el valor, no el objeto completo)
//    - noEncontrados: array con los mensajes de error (solo el reason)
// 3. Muestre:
//    "Encontrados (3): [250, 35, 80]"
//    "No encontrados (2): ['Producto no encontrado: auricular', 'Producto no encontrado: funda']"
//
// Llámala así:
// verificarCarrito(["pantalla", "auricular", "cargador", "bateria", "funda"])
async function verificarCarrito(productos) {
    try {
        const resultado = await Promise.allSettled(
            productos.map(p => obtenerPrecio(p))
        )

        const encontrados = resultado
            .filter(a => a.status === "fulfilled")
            .map(b => b.value)

        const noEncontrados = resultado
            .filter(a => a.status === "rejected")
            .map(b => b.reason)

        console.log(`Encontrados (${encontrados.length}): [${encontrados}]`)
        console.log(`No encontrados (${noEncontrados.length}): [${noEncontrados}]`)

    } catch (error) {
        console.log(error)
    }
}
verificarCarrito(["pantalla", "auricular", "cargador", "bateria", "funda"])