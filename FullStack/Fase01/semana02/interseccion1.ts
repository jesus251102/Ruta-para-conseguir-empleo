// 1. Crea un type "ConTimestamp" = { creadoEn: string }
//
// 2. Crea un type "Producto" = { nombre: string; precio: number }
//
// 3. Crea un type "ProductoConFecha" que combine AMBOS con &
//
// 4. Crea un objeto que cumpla ProductoConFecha con sus 3 propiedades
//
// 5. Muéstralo con console.log
type ConTimestamp = {
    creadoEn: string;
}

type Producto = {
    nombre: string;
    precio: number
}

type ProductoConFecha = ConTimestamp & Producto;

const objeto: ProductoConFecha = {
    creadoEn: "11 de julio",
    nombre: "Pantalla",
    precio: 90
}

console.log(objeto)