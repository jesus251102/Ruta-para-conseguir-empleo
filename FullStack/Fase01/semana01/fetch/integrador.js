// TU TAREA — simula el flujo real de phoneCell:
// Crea una función async "flujoCompleto()" que en secuencia:
//
// 1. Cree un post nuevo con POST (título: "Reparación iPhone", body: "Pantalla rota", userId: 1)
// 2. Muestre el id que le asignó el servidor
// 3. Actualice ESE MISMO post con PUT (cambia el title a "Reparación completada")
// 4. Muestre el resultado actualizado
// 5. Elimine ese post con DELETE
// 6. Muestre "Proceso completo finalizado"
//
// Cada paso debe esperar (await) al anterior — es secuencial, no paralelo,
// porque cada paso depende del id que generó el paso anterior
async function flujoCompleto() {
    try {
        const crear = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: "Reparación iPhone",
                body: "Pantalla rota",
                userId: 1
            })
        })

        if (!crear.ok) {
            throw new Error(`Error HTTP: ${crear.status}`)
        }

        const resultadoCrear = await crear.json()
        console.log(resultadoCrear)

        const idCreado = crear.id

        const actualizar = await fetch(`https://jsonplaceholder.typicode.com/posts/${idCreado}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: "Reparación completada",
                body: "Pantalla rota",
                userId: 1
            })
        })

        if (!actualizar.ok) {
            throw new Error(`Error HTTP: ${actualizar.status}`)
        }

        const resultadoActualizar = await actualizar.json()
        console.log(resultadoActualizar)

        const eliminar = await fetch(`https://jsonplaceholder.typicode.com/posts/${idCreado}`, {
            method: "DELETE",
        })

        if (!eliminar.ok) {
            throw new Error(`Error HTTP: ${eliminar.status}`)
        }

        console.log("Proceso completo finalizado")

    } catch (error) {
        console.log(`No se pudo crear la reparación. ${error.message}`)
    }
}
flujoCompleto()