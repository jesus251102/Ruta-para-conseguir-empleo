// EJERCICIO 01
const celsiusAFahrenheit = (c) => {
    return (c * 9/5) + 32;
}
console.log(celsiusAFahrenheit(0));

console.log("================================");

// EJERCICIO 02
const ParOImpar = (n) => {
    if (n % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}
console.log(ParOImpar(5));

console.log("================================");

// EJERCICIO 03
const FizzBuzz = (n) => {
    for (let i = 0; i < n; i++) {
        if (n % 3 === 0 && n % 5 === 0) {
            return "FizzBuzz";
        } else if (n % 3 === 0){
            return "Fizz";
        } else if (n % 5 === 0) {
            return "Buzz";
        }
    }
}
console.log(FizzBuzz(100));

console.log("================================");

const invertir = (texto) => {
    let reverso = texto.split('').reverse().join('')
    return reverso  
} 
console.log(invertir("Hola"));

console.log("================================");

const contadorVocales = (texto) => {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
    for (let t = 0; t < texto.length; t++) {
        if (vocales.includes(texto[t])) {
            contador++;
        }
    }
    return contador;
}
console.log(contadorVocales("JavaScript"));

console.log("================================");

const numMayor = (arr) => {
    let mayor = [0];
    for (let n = 0; n < arr.length; n++) {
        if (arr[n] > mayor) {
            mayor = arr[n];
        }
    }
    return console.log(mayor)
}
numMayor([3, 5, 8, 1, 4, 0, 7]);

console.log("================================");

// EJERCICIO 07
const soloPares = (arr) => {
    const newArr = arr.filter(valor => valor % 2 === 0)     
    return console.log(newArr)
} 

soloPares([3, 5, 8, 1, 4, 0, 7]);

console.log("================================");

// EJERCICIO 08
let persona = {
    nombre: 'Gabriel',
    edad: 23,
    hobbies: ['programar', 'trabajar']
}

const presentarse = (pers) => {
    return `Hola, soy ${pers.nombre}, tengo ${pers.edad} y me gusta ${pers.hobbies.join(', ')}`
}
console.log(presentarse(persona));

console.log("================================");

// EJERCICIO 09
const factorial = (n) => {
    let num = 1;
    for (let i = n; i > 0; i--) {
        num *= i;
    }
    return num
}
console.log(factorial(10))

console.log("================================");

// EJERCICIO 10
const obtenerUsuario = (id) => {
    const promesa = new Promise((resolve, reject) => {
        if (id > 0) {
            setTimeout(() => {
                resolve({id, nombre: "Usuario " + id})
            }, 1000)
        } else {
            reject("ID invalido.")
        }
    })
    return promesa
}

obtenerUsuario(2)
    .then(usuario => console.log("Éxito:", usuario))
    .catch(error => console.log("Error:", error ))