// 1. Crea una interface genérica "ResultadoBusqueda<T>" con:
//    - encontrado: boolean
//    - resultado: T
//
// 2. Crea una función "buscarPorId<T>(lista: T[], id: number, propiedadId: keyof T): ResultadoBusqueda<T>"
//    (NO te preocupes por "keyof T" todavía, solo escribe la función así tal cual)
//    que busque en la lista un elemento donde esa propiedad coincida con el id
//    y devuelva { encontrado: true/false, resultado: el objeto o undefined }
//
// PISTA para el cuerpo de la función:
// const item = lista.find(elemento => elemento[propiedadId] === id);
// return { encontrado: item !== undefined, resultado: item };
//
// 3. Pruébala buscando una Reparacion por su "id" dentro de un array de reparaciones

interface ResultadoBusqueda<T>
{
    encontrado: boolean;
    resultado: T | undefined;
}

function buscarPorId<T>(lista: T[], id: number, propiedadId: keyof T): ResultadoBusqueda<T>
{
    const item = lista.find(elemento => elemento[propiedadId] === id);
    return {
        encontrado: item !== undefined,
        resultado: item
    };
}

interface Reparacion01
{
    id: number;
    equipo: string;
}

const reparaciones: Reparacion01[] = [
    { id: 1, equipo: "iPhone 12" },
    { id: 2, equipo: "Samsung S21" },
];

const busqueda = buscarPorId(reparaciones, 2, "id");
console.log(busqueda)