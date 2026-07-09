"use strict";
// Una función "calcularPrecioFinal(precio: number, tieneDescuento: boolean): number" que devuelva precio * 0.8 si tieneDescuento es true, o precio si es false
function calcularPrecioFinal(precio, tieneDescuento) {
    return tieneDescuento === true ? precio * 0.8 : precio;
}
console.log(calcularPrecioFinal(100, true));
//  Una función "formatearCliente(nombre: string, telefono?: string): string"
//    que devuelva:
//    - "Cliente: Gabriel - Tel: 999888777" (si hay teléfono)
//    - "Cliente: Gabriel" (si no hay teléfono)
function formatearCliente(nombre, telefono) {
    return `Cliente ${nombre} - Tel: ${telefono}`;
}
console.log(formatearCliente("Gabriel", "987654321"));
console.log(formatearCliente("Jesus"));
//
