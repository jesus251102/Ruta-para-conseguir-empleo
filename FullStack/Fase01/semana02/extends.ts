// EXTENS
// Cuando dos interfaces comparten propiedades, puedes evitar repetirlas

interface Persona
{
    nombre: string;
    telefono: string;
}

// "Cliente" hereda TODO lo de Persona, y agrega lo suyo
interface Cliente extends Persona
{
    deuda: number;
}

const cliente: Cliente = {
    nombre: "Gabriel",   // viene de Persona
    telefono: "999888777", // viene de Persona
    deuda: 0,             // propio de Cliente
};

// También puedes extender de varias interfaces a la vez:
interface ConId
{
    id: number;
}

interface ConFecha
{
    fechaCreacion: string;
}

interface Reparacion extends ConId, ConFecha
{
    equipo: string;
}
// Reparacion ahora exige: id, fechaCreacion, Y equipo

// Tipo intersección (&)
// Es el equivalente de extends, pero usando type en vez de interface:
type Persona1 = {
    nombre: string;
    telefono: string;
};

type Cliente1 = Persona & {
    deuda: number;
};
// Cliente ahora tiene: nombre, telefono, Y deuda

// Genéricos con restricciones (extends en genéricos)
// A veces quieres que un genérico no acepte cualquier cosa, sino solo tipos que cumplan cierta condición:
// ❌ Sin restricción — T puede ser CUALQUIER cosa, incluso algo sin ".length"
function mostrarLargo1<T>(item: T)
{
    console.log(item.length); // ❌ Error — T podría no tener .length
}

// ✅ Con restricción — T debe tener una propiedad "length"
function mostrarLargo2<T extends { length: number }>(item: T)
{
    console.log(item.length); // ✅ Ahora sí, TypeScript sabe que SIEMPRE existe
}

mostrarLargo2("hola");        // ✅ los strings tienen .length
mostrarLargo2([1, 2, 3]);      // ✅ los arrays tienen .length
// mostrarLargo2(42);             // ❌ Error — los números no tienen .length

// Utility Types básicos (Partial, Pick, Omit)
// TypeScript trae "tipos ayudantes" ya construidos para transformar interfaces existentes sin reescribirlas.
interface Reparacion
{
    id: number;
    equipo: string;
    precio: number;
    garantia: boolean;
}

// Partial<T> — hace TODAS las propiedades opcionales
// Útil para "actualizar parcialmente" un registro (como un PATCH)
type ReparacionParcial = Partial<Reparacion>;
const cambios: ReparacionParcial = { precio: 100 }; // ✅ válido, no necesitas TODAS las propiedades

// Pick<T, "prop1" | "prop2"> — toma SOLO algunas propiedades
type ResumenReparacion = Pick<Reparacion, "id" | "equipo">;
const resumen: ResumenReparacion = { id: 1, equipo: "iPhone" }; // solo estas 2

// Omit<T, "prop1"> — toma TODAS las propiedades MENOS las que indiques
type ReparacionSinId = Omit<Reparacion, "id" | "fechaCreacion">;
const nuevaReparacion: ReparacionSinId = { equipo: "iPhone", precio: 150, garantia: true };
// (sin "id" porque, por ejemplo, lo genera la base de datos automáticamente)