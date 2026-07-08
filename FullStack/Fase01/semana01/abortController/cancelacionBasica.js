// TU TAREA:
// Crea "obtenerConCancelacion(id, msParaCancelar)" que:
// 1. Cree un AbortController
// 2. Programe un setTimeout que llame a controller.abort() después de msParaCancelar
// 3. Haga fetch a https://jsonplaceholder.typicode.com/todos/{id} con la signal
// 4. Si tiene éxito, muestre el título de la tarea
// 5. Si fue cancelado (error.name === "AbortError"), muestre "Cancelado a tiempo"
// 6. Si fue otro error, muestre el mensaje real
//
// Pruébala así:
// obtenerConCancelacion(1, 5)     ← 5ms es tan rápido que debería cancelar
// obtenerConCancelacion(1, 5000)  ← 5 segundos es tan lento que el fetch debería ganar

async function obtenerConCancelacion(id, msParaCancelar) {
    const controller = new AbortController();
    setTimeout(() => {
        controller.abort()
    }, msParaCancelar);

    try {
        const getDatos = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            signal: controller.signal
        });

        if (!getDatos.ok) {
            throw new Error(`Error: ${getDatos.status}`)
        }

        const datos = await getDatos.json()
        console.log(`Titulo de la tarea: ${datos.title}`)

    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Cancelado a tiempo")
        } else {
            console.log(error.message)
        }
    }
}
obtenerConCancelacion(1, 5);
obtenerConCancelacion(1, 5000);