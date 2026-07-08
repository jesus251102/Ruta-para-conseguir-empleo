// Usa esta API pública gratuita: https://jsonplaceholder.typicode.com
// Documentación: tiene /users, /posts, /todos, /comments

// TU TAREA:
// Crea una función async "obtenerPosts(userId)" que:
// 1. Haga fetch a: https://jsonplaceholder.typicode.com/posts?userId=1
//    (el ?userId=1 filtra solo los posts del usuario 1)
// 2. Verifique que respuesta.ok sea true, si no lanza un error
// 3. Extraiga el JSON
// 4. Muestre cuántos posts tiene ese usuario: "El usuario 1 tiene X posts"
// 5. Muestre el título del primer post: "Primer post: " + titulo
// 6. Maneje errores con try/catch
//
// Llámala con userId = 1

async function obtenerPosts(userId) {
    try {
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`)
        }

        const post = await respuesta.json()

        console.log(`El usuario ${userId} tiene ${post.length} post`)
        console.log(`Primer post: ${post[0].title}`)

    } catch (error) {
        console.log("Error: ", error.message)
    }
}
obtenerPosts(1)