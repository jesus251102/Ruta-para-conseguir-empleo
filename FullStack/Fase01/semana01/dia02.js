// PROMESAS
// Hay operaciones que toman tiempo (pedir datos a un servidor, leer un archivo). Si JS se "congelara" esperando, tu app se trabaría completamente.

// Estados: pending, fulfilled, rejected

// EJEMPLO
const promesa = new Promise((resolve, reject) => {
    const exito = true;

    exito ? resolve("¡Datos obtenidos correctamente!") : reject("Hubo un error")
})
promesa
    .then(resultado => console.log("Exito:", resultado))
    .catch(error => console.log("Error:", error))

// EJERCICIO 01 : Simular una llamada API
function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
        console.log("Buscando usuario...");

        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, nombre: "Gabriel", rol: "Tecnico" })
            } else
                reject("Usuario no encontrado")
        }, 2000);
    })
}
obtenerUsuario(1)
    .then(resultado => console.log("Exito:", resultado))
    .catch(error => console.log("Error:", error))

// EJERCICIO 02
// Crea una función llamada verificarStock(producto) que devuelva una Promesa
// Simula una espera de 1.5 segundos con setTimeout
//
// Productos disponibles: "pantalla", "bateria", "cargador"
//
// Si el producto está en la lista → resolve con el mensaje:
//   "✅ Stock disponible para: " + producto
//
// Si NO está en la lista → reject con el mensaje:
//   "❌ Producto no encontrado: " + producto
//
// Pruébala llamándola 2 veces:
// 1. Con un producto que SÍ existe
// 2. Con un producto que NO existe
// Usa .then() y .catch() para mostrar el resultado
const verificarStock = (producto) => {
    return new Promise((resolve, reject) => {
        const productos = ["pantalla", "bateria", "cargador"]

        setTimeout(() => {
            if (productos.includes(producto)) {
                resolve("Stock disponible para: " + producto)
            } else
                reject("Producto no encontrado: " + producto)
        }, 1500);
    })
}

verificarStock("bateria")
    .then(resultado => console.log("Éxito:", resultado))
    .catch(error => console.log("Error: ", error))

// EJERCICIO 03
function obtenerPrecio(producto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const precios = {
                pantalla: 250,
                bateria: 80,
                cargador: 30
            };

            if (precios[producto] !== undefined) {
                resolve(precios[producto]);
            } else {
                reject("Producto sin precio registrado: " + producto);
            }
        }, 1000);
    });
}

// TU TAREA:
// 1. Llama a obtenerPrecio("pantalla")
// 2. En el primer .then(), recibe el precio y agrégale el IGV (18%)
//    y RETORNA ese nuevo valor (esto es clave para encadenar)
// 3. En un SEGUNDO .then(), recibe el precio con IGV y muéstralo:
//    "Precio final: " + precio
// 4. Agrega un .catch() para el error
obtenerPrecio("pantalla")
    .then(precio => { return precio += precio * 0.18 })
    .then(resultado => console.log("Precio final:", resultado))
    .catch(error => console.log("Error:", error))

// EJERCICIO 03
function procesarReparacion(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Reparación ${id} procesada`);
            resolve(id);
        }, 1000);
    });
}

// TU TAREA:
// Llama a procesarReparacion(1), y CUANDO TERMINE,
// llama a procesarReparacion(2), y CUANDO TERMINE,
// llama a procesarReparacion(3)
//
// Resultado esperado en consola (con 1 segundo entre cada uno):
// Reparación 1 procesada
// Reparación 2 procesada
// Reparación 3 procesada

procesarReparacion(1)
    .then(a => procesarReparacion(2))
    .then(b => procesarReparacion(3))

// EJERCICIO 04
function validarCliente(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nombre.length >= 3) {
                resolve(nombre);
            } else {
                reject("Nombre demasiado corto: " + nombre);
            }
        }, 800);
    });
}

function registrarCliente(nombre) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Cliente registrado: " + nombre);
        }, 800);
    });
}

// TU TAREA:
// 1. Llama a validarCliente("Gabriel")
// 2. Si pasa, llama a registrarCliente() con el mismo nombre
// 3. Muestra el resultado final
// 4. Agrega .catch() para manejar el error
//
// Luego prueba TAMBIÉN con un nombre corto, ej: validarCliente("Al")
// y observa que el .catch() lo intercepta SIN llegar a registrarCliente()

validarCliente("Gabriel")
    .then(nombreValido => { return registrarCliente(nombreValido) })
    .then(resultado => console.log(resultado))
    .catch(e => console.log(e))


