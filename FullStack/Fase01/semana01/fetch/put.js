// TU TAREA:
// Crea una función async "actualizarPost(id, datosNuevos)" que:
// 1. Haga fetch PUT a: https://jsonplaceholder.typicode.com/posts/{id}
// 2. Envíe headers Content-Type: application/json
// 3. Envíe en el body los datosNuevos con JSON.stringify
// 4. Verifique .ok, si no, lance error
// 5. Muestre el resultado en consola
//
// Pruébala así:
// actualizarPost(1, {
//     title: "Reparación actualizada",
//     body: "Se cambió la pantalla",
//     userId: 1
// });

// JSONPlaceholder te va a devolver el mismo objeto que enviaste + el id
// (no lo guarda de verdad, pero simula la respuesta correctamente)
async function actualizarPost(id, datosNuevos) {
    try {
        const actualizar = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datosNuevos)
        })

        if (!actualizar.ok) {
            throw new Error(`Error HTTP: ${actualizar.status}`)
        }

        const resultado = await actualizar.json()
        console.log(resultado)
    } catch (error) {
        console.log(`No se pudo actualizar los datos. ${error.message}`)
    }
}

actualizarPost(1, {
    title: "Reparación actualizada",
    body: "Se cambió la pantalla",
    userId: 1
});