// TU TAREA:
// Crea una variable global "controllerActivo" (empieza en null)
// Crea "buscarTarea(id)" que:
// 1. Si controllerActivo existe, cancélalo con .abort()
// 2. Cree un nuevo AbortController y lo guarde en controllerActivo
// 3. Haga fetch a /todos/{id} con la signal
// 4. Maneje el AbortError diferenciándolo de otros errores
//
// Pruébala llamando 3 veces SEGUIDAS sin esperar (simulando que el usuario
// escribe rápido y cambia de idea):
// buscarTarea(1);
// buscarTarea(2);
// buscarTarea(3);
//
// Resultado esperado: las primeras 2 deberían cancelarse,
// solo la búsqueda del id=3 debería completarse
let controllerActivo = null;

async function buscarTarea(id) {
    if (controllerActivo) {
        controllerActivo.abort();
    }

    controllerActivo = new AbortController()
    try {
        const getDatos = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            signal: controllerActivo.signal
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
buscarTarea(1);
buscarTarea(2);
buscarTarea(3);