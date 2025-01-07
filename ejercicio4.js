let totalCompra = parseFloat(prompt("Introduce el total de tu compra:"));
let codigoDescuento = prompt("Introduce el código de descuento (si tienes):");
let descuento = 0;

if (codigoDescuento === "DESCUENTO10") {
    descuento = totalCompra * 0.10;
} else if (codigoDescuento === "DESCUENTO20") {
    descuento = totalCompra * 0.20;
} else if (codigoDescuento) {
    console.log("El código ingresado no es válido.");
}


let totalConDescuento = totalCompra - descuento;

console.log(`El total después de aplicar el descuento es: $${totalConDescuento}`);