let importe = parseFloat(prompt("Ingrese el importe de su compra:"));
let tipoIVA = prompt("Ingrese el tipo de IVA (basico, reducido, superreducido):");
let porcentajeIVA =0;

if (tipoIVA === "basico") {
    porcentajeIVA=0.10; 
} else if (tipoIVA === "reducido") {
    porcentajeIVA=0.05; 
} else if (tipoIVA === "superreducido") {
    porcentajeIVA=0.02; 
} else {
    console.log("El tipo de IVA ingresado no es válido.");
}

if (porcentajeIVA>0) {
    let totalConIVA = importe * (1+porcentajeIVA);
    console.log(`El importe total con IVA ${tipoIVA} es: ${totalConIVA}`);
}