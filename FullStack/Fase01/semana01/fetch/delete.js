// TU TAREA:
// Crea una función async "eliminarPost(id)" que:
// 1. Haga fetch DELETE a: https://jsonplaceholder.typicode.com/posts/{id}
// 2. Verifique .ok, si no, lance error
// 3. Si tuvo éxito, muestre: "Post " + id + " eliminado correctamente"
// 4. Maneje errores con try/catch

async function eliminarPost(id) {
    try {
        const eliminar = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE"
        })

        if (!eliminar.ok) {
            throw new Error(`Error HTTP: ${eliminar.status}`)
        }

        console.log(eliminar)
    } catch (error) {
        console.log(`No se pudo eliminar el post con ${id}. ${error.message}`)
    }
}

eliminarPost(1)