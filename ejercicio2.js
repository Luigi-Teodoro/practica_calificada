let edad=parseFloat(prompt("Ingrese su edad:"));
let ingresos=parseFloat(prompt("Ingrese sus igresos mensuales:"));

if(edad>18 && ingresos>=500 && ingresos<=2000){
    console.log("Cumple para el subsidio")
}else{
    console.log("No cumple para el subsidio")
}
