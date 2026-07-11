"use strict";
// 1. Crea una interface "Persona" con: nombre (string), edad (number)
//
// 2. Crea una interface "Tecnico" que EXTIENDA de Persona, y agregue:
//    especialidad (string), añosExperiencia (number)
//
// 3. Crea un objeto "tecnico1" que cumpla la interface completa
//
// 4. Crea una función "presentarTecnico(t: Tecnico): string" que devuelva:
//    "Carlos (28 años) - Especialista en pantallas - 5 años de experiencia"
const tecnico1 = {
    nombre: "Gabriel",
    edad: 23,
    especialidad: "pantallas",
    añosExperiencia: 5
};
function presentarTecnico(t) {
    return `${t.nombre} (${t.edad} años) - especialista en ${t.especialidad} - ${t.añosExperiencia} de experiencia`;
}
console.log(presentarTecnico);
