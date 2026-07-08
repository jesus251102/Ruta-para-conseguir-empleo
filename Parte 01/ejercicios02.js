// EJERCICIO 01
const sumarDigitos = (n) => {
    const letra = n.toString();
    let suma = 0;
    for (let i = 0; i < letra.length; i++) {
        suma += Number(letra[i]);
    }
    return suma;
}
console.log(sumarDigitos(4567));

// for (let index = 0; index < 5; index++) {
//     console.log(index)
// }

// EJERCICIO 02
const esPalindromo = (texto) => {
    let newText = texto.toLowerCase();
    let arr = '';
    for (let i = newText.length - 1; i >= 0; i--) {
        arr += newText[i];
    }
    if (newText === arr) {
        return true;
    } else return false;
}
console.log(esPalindromo('Reconocer'))

// let l = 'Anita lava la tina';
// let newT = '';
// let arr = [];
// for (let i = l.length -1; i >= 0; i--) {
//     newT += l[i];
// }
// arr.push(newT)
// console.log(arr)

// EJERCICIO 03
const tablaMultiplicar = (n) => {
    let arr = [];
    for (let i = 0; i <= 10; i++) {
        let multiply = n * i
        arr.push(multiply)
    }
    return arr;
}
console.log(tablaMultiplicar(5));

// EJERCICIO 04
const promedio = (notas) => {
    let suma = 0;
    let promedio = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    promedio = (suma / 4).toFixed(2);
    return promedio;
}
console.log(promedio([15, 18, 12, 20]));

// EJERCICIO 05
const sinDuplicados = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i ++) {
        if (newArr.at(-1) !== arr[i]) {
            newArr.push(arr[i])
        }
    }
    return newArr;
} 
console.log(sinDuplicados([1, 2, 2, 3, 4, 4, 5]));

// EJERCICIO 06
const contarPalabras = (frase) => {
    const arr = frase.split(' ');
    const newArr = arr.filter(n => n !== '')
    return newArr.length;
}
console.log(contarPalabras("Hola mundo desde JavaScript    "));

// EJERCICIO 07
const productos = [
    { id: 1, nombre: "Laptop", precio: 3500 },
    { id: 2, nombre: "Mouse", precio: 50 },
    { id: 3, nombre: "Teclado", precio: 120 },
    { id: 4, nombre: "Monitor", precio: 900 }
];

const buscarPorId = (productos, id) => {
    if (productos.filter(i => i.id)) {
        return productos[id - 1];
    } else return null;
}
console.log(buscarPorId(productos, 4))

// EJERCICIO 08
const clasificarEdad = (edad) => {
    if (edad < 0) {
        return "Edad inválida"
    } else if (edad <= 12) {
        return "Niño"
    } else if (edad <= 17){
        return "Adolescente"
    } else if (edad <= 59){
        return "Adulto"
    } else edad >= 60
        return "Adulto mayor"
}
console.log(clasificarEdad(25))

// EJERCICIO 09
const finobacci = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            arr.push(0);
        } else if (i === 1) {
            arr.push(1);
        } else {
            arr.push((i -1) + (i - 2))
        }
    }
    return arr;
}
console.log(finobacci(7));

// EJERCICIO 10
const carritos = [
    { producto: "Pan", precio: 3.50, cantidad: 4 },
    { producto: "Leche", precio: 5.20, cantidad: 2 },
    { producto: "Huevos", precio: 12.00, cantidad: 1 }
];

// const calcularTotal = () => {
//     let total = 0
//     for (const carr of carritos) {
//         total += carr.precio * carr.cantidad
//     }
//     return total;
// }
// console.log(calcularTotal())

const calcularTotal = () => {
    let total = 0;
    carritos.reduce((acc, cur) => {
        total += cur.precio * cur.cantidad
        acc + total;
    }, 0)
    return total
}
console.log(calcularTotal())