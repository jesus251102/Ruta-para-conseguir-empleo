// TU TAREA:
// Crea una función async "buscarUsuarioInexistente()" que:
// 1. Haga fetch a: https://jsonplaceholder.typicode.com/users/9999
//    (el usuario 9999 NO existe, esto SIEMPRE da 404)
// 2. Verifique respuesta.ok — como será false, debe lanzar el error
// 3. En el catch, muestre: "No se pudo encontrar el usuario: " + mensaje de error
//
// El objetivo de este ejercicio es que veas con tus propios ojos
// que fetch() NO lanza error automáticamente en un 404 —
// tú tienes que detectarlo con `if (!respuesta.ok)`

async function buscarUsuarioInexistente() {
    try {
        const noUser = await fetch(`https://jsonplaceholder.typicode.com/users/9999`)

        if (!noUser.ok) {
            throw new Error(`Error HTTP: ${noUser.status}`)
        }

        const resultado = await noUser.json()
        console.log(resultado)

    } catch (error) {
        console.log("No se pudo encontrar el usuario:", error.message)
    }
}

buscarUsuarioInexistente()