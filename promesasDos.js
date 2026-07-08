function obtenerProducto(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productos = {
                1: { id: 1, nombre: "Pantalla iPhone", precio: 250 },
                2: { id: 2, nombre: "Batería Samsung", precio: 80 },
            };
            if (productos[id]) {
                resolve(productos[id]);
            } else {
                reject("Producto no encontrado");
            }
        }, 800);
    });
}

function aplicarDescuento(producto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ...producto,
                precioFinal: producto.precio * 0.9  // 10% de descuento
            });
        }, 500);
    });
}

// TU TAREA:
// 1. Llama a obtenerProducto(1)
// 2. Cuando resuelva, pasa el resultado a aplicarDescuento()
// 3. Cuando resuelva, muestra en consola:
//    "Producto: Pantalla iPhone — Precio final: 225"
// 4. Agrega .catch() para manejar errores
// 5. Pruébalo también con obtenerProducto(99) → debe caer en el catch
//
// REGLA: No anidar .then() dentro de otro .then()
// Usa return para pasar el resultado al siguiente eslabón

// Con .then / .catch
obtenerProducto(1)
    .then(ide => { return aplicarDescuento(ide) })
    .then(prod => console.log(`Producto: ${prod.nombre} - Precio final: ${prod.precioFinal}`))
    .catch(e => console.log(e))

// Usa las mismas funciones obtenerProducto() y aplicarDescuento()
// Crea una función async llamada "mostrarProductoConDescuento(id)"
// Pruébala con id=2 (Batería Samsung) y con id=99 (error)

// Con async / await
async function mostrarProductoConDescuento(id) {
    try {
        const producto = await obtenerProducto(id)
        const descuento = await aplicarDescuento(producto)
        console.log(`Producto: ${descuento.nombre} - Precio final: ${descuento.precioFinal}`)
    } catch (error) {
        console.log(error)
    }
}
mostrarProductoConDescuento(2)
mostrarProductoConDescuento(99)
