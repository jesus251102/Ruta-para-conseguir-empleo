// POST : Es para crear datos

// TU TAREA:
// Crea una función async "crearReparacion(datos)" que:
// 1. Haga un fetch POST a: https://jsonplaceholder.typicode.com/posts
// 2. Envíe estos headers: { "Content-Type": "application/json" }
// 3. Envíe en el body (con JSON.stringify) el objeto "datos" que recibe como parámetro
// 4. Verifique respuesta.ok, si no, lance error
// 5. Extraiga el JSON de la respuesta y lo muestre en consola
// 6. Maneje errores con try/catch
//
// Pruébala así:
// crearReparacion({
//     equipo: "iPhone 13",
//     cliente: "Gabriel",
//     precio: 250
// });

// NOTA: JSONPlaceholder es una API falsa para practicar —
// no guarda datos de verdad, pero SIMULA la respuesta como si lo hiciera
// (te devuelve lo mismo que enviaste + un "id" nuevo)

async function crearReparacion(datos) {
    try {
        const reparacion = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datos)
        })

        if (!reparacion.ok) {
            throw new Error(`Error HTTP: ${reparacion.status}`);
        }

        const resultado = await reparacion.json();

        console.log(resultado)
    } catch (error) {
        console.log("Error:", error.message)
    }
}
crearReparacion({
    equipo: "iPhone 13",
    cliente: "Gabriel",
    precio: 250
});
