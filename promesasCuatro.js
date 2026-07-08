const tecnicoss = [
    { id: 1, nombre: "Carlos" },
    { id: 2, nombre: "María" },
    { id: 3, nombre: "Pedro" },
    { id: 4, nombre: "Ana" },
    { id: 5, nombre: "Luis" },
];

function obtenerReparacionesTecnico(tecnico) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulamos que algunos técnicos tienen reparaciones y otros no
            const conReparaciones = [1, 3, 5]; // solo estos ids tienen reparaciones

            if (conReparaciones.includes(tecnico.id)) {
                resolve({
                    tecnico: tecnico.nombre,
                    reparaciones: tecnico.id * 3, // cantidad simulada
                });
            } else {
                reject(`${tecnico.nombre} no tiene reparaciones asignadas`);
            }
        }, 800);
    });
}

// Crea una función async "reporteGeneral(tecnicos)" que:
//
// 1. Use Promise.allSettled() + map para consultar TODOS los técnicos en PARALELO
//
// 2. Separe los resultados en:
//    - activos: array con los objetos { tecnico, reparaciones } de los que sí tienen
//    - sinAsignar: array con los mensajes de error de los que no tienen
//
// 3. Calcule el totalReparaciones sumando las reparaciones de los activos (usa reduce)
//
// 4. Muestre este reporte:
//    "Técnicos activos (3): Carlos, Pedro, Luis"
//    "Sin asignar (2): María no tiene..., Ana no tiene..."
//    "Total de reparaciones: 27"
//
// Tiempo esperado: ~800ms (todos en paralelo, no 5 x 800ms = 4000ms)

async function reporteGeneral(tecnicos) {
    try {
        const consultarTecnico = await Promise.allSettled(
            tecnicos.map(tec => obtenerReparacionesTecnico(tec))
        )

        const activos = consultarTecnico
            .filter(a => a.status === "fulfilled")
            .map(b => b.value)

        const sinAsignar = consultarTecnico
            .filter(a => a.status === "rejected")
            .map(b => b.reason)

        const totalReparaciones = activos
            .map(a => a.reparaciones)
            .reduce((acc, cur) => acc + cur, 0)

        console.log(`Técnicos activos (${activos.length}): ${activos.map(a => a.tecnico).join(", ")}`)
        console.log(`Sin asignar (${sinAsignar.length}): ${sinAsignar.join(", ")}`)
        console.log(`Total de reparaciones: ${totalReparaciones}`)

    } catch (error) {
        console.log(error)
    }
} 6

reporteGeneral(tecnicoss)