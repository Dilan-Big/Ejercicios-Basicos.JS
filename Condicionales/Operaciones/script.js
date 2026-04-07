// Solicitar dos numeros y pregutar que operacion aritmetica va a hacer

let operaciones = Number(prompt(`Ingrese la operacion que quiere realizar: 
1 = suma 
2 = resta
3 = multiplicacion 
4 = division`));

let num1 = Number(prompt("Ingrese el primer numero: "));
let num2 = Number(prompt("Ingrese el segundo numero: "));

let resultado;

if (operaciones == 1) {
    resultado = num1 + num2;
} else if (operaciones == 2) {
    resultado = num1 - num2;
} else if (operaciones == 3) {
    resultado = num1 * num2;
} else if (operaciones == 4) {
    if (num2 != 0) {
        resultado = num1 / num2;
    } else {
        console.log("Error: no se puede dividir entre 0");
    }
} else {
    console.log("Opcion no valida");
}

if (resultado !== undefined) {
    console.log("Resultado:", resultado);
}