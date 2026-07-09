// Crea una función async "gestionarTarea(id)" que haga, EN SECUENCIA:
//
// 1. GET a https://jsonplaceholder.typicode.com/todos/{id}
//    - Verifica .ok, si no existe (404), lanza error y detente ahí
//    - Muestra la tarea completa: "Tarea encontrada: " + title
//
// 2. PUT a la MISMA url, cambiando "completed" a true
//    (usa el id real que TE PASARON como parámetro, no uno inventado)
//    - Verifica .ok
//    - Muestra: "Tarea actualizada — completed: " + resultado.completed
//
// 3. DELETE a la misma url
//    - Verifica .ok
//    - Muestra: "Tarea eliminada correctamente"
//
// Pruébala DOS veces:
// gestionarTarea(5)     ← debe completar los 3 pasos sin error
// gestionarTarea(9999)  ← debe fallar en el paso 1 (GET) y NO seguir a los pasos 2 y 3
async function gestionarTarea(id)
{
    try
    {

        // PARA OBTENER DATOS
        const obtenerDatos = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)

        if (!obtenerDatos.ok)
        {
            throw new Error(`Error: ${obtenerDatos.status}`)
        }

        const respuesta = await obtenerDatos.json()
        console.log(`Tarea encontrada: ${respuesta.title}`)

        // PARA ACTUALIZAR DATOS
        const putDatos = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: id,
                title: respuesta.title,
                completed: true
            })
        })

        if (!putDatos.ok)
        {
            throw new Error(`Error: ${putDatos.status}`)
        }

        const datosActualizados = await putDatos.json()
        console.log(`Tarea actualizada - Completado: ${datosActualizados.completed}`)

        const deleteDatos = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "DELETE"
        })

        if (!deleteDatos.ok)
        {
            throw new Error(`Error: ${deleteDatos.status}`)
        }

        console.log(`Tarea eliminada correctamente con id: ${id}`)

    } catch (error)
    {
        console.log(`Error: ${error.message}`)
    }
}
gestionarTarea(5)