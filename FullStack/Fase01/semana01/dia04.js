async function obtenerUsuario(id) {
    try {
        // Paso 1 — hacer la petición
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        // Paso 2 — verificar que fue exitosa
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        // Paso 3 — extraer el JSON
        const usuario = await respuesta.json();

        console.log(`Nombre: ${usuario.name}`);
        console.log(`Email: ${usuario.email}`);
        console.log(`Ciudad: ${usuario.address.city}`);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

obtenerUsuario(1);

// ------- Los 4 métodos HTTP principales ---------- //
// GET — obtener datos (el más común, lo que acabamos de ver)
fetch("https://api.com/usuarios")

// POST — crear un nuevo recurso
fetch("https://api.com/usuarios", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre: "Gabriel", edad: 22 })
})

// PUT — actualizar un recurso completo
fetch("https://api.com/usuarios/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre: "Gabriel", edad: 23 })
})

// DELETE — eliminar un recurso
fetch("https://api.com/usuarios/1", {
    method: "DELETE"
})