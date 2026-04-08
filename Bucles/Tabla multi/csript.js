let numero = Number(prompt("Ingrese el numero a multiplicar: "));
let rango = Number(prompt("Ingrese hasta qué numero quiere multiplicar: "));

if (numero > 0 && rango > 0) {

    for (let i = 1; i <= rango; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }

} else {
    console.log("Ingrese valores validos mayores a 0");
}