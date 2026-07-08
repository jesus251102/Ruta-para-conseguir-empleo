// Crea una función llamada "saludar(nombre)" que devuelva una promesa.
// La promesa debe esperar 1 segundo (setTimeout de 1000ms) y luego:
// - Si el nombre tiene 3 o más letras → resolve con "Hola, " + nombre
// - Si el nombre tiene menos de 3 letras → reject con "Nombre muy corto"
//
// Pruébala con:
// saludar("Gabriel") → debe imprimir "Hola, Gabriel"
// saludar("Al")      → debe imprimir "Nombre muy corto"
function saludar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            nombre.length >= 3 ?
                resolve(`Hola ${nombre}`) :
                reject(`Nombre muy corto`)
        }, 1000);
    })
}

saludar("Al")
    .then(r => console.log(r))
    .catch(e => console.log("Error: " + e))