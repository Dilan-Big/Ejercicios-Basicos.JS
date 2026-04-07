// let productos = [];

// let pro1 = prompt("Ingrese un dato1: ");
// let pro2 = prompt("Ingrese un dato2: ");
// let pro3 = prompt("Ingrese un dato3: ");

// productos.push(pro1);
// productos.push(pro2);
// productos.push(pro3);

// console.log(productos);

let notas = [];

let nota1 = prompt(("Ingresa la primera nota: "));
let nota2 = prompt(("Ingresa la segunda nota: "));
let nota3 = prompt(("Ingresa la tercera nota: "));

notas.push(nota1);
notas.push(nota2);
notas.push(nota3);

console.log(notas);

let promedio = (notas[0] + notas[1] + notas[2]) / notas.length;

console.log ("El promedio es de: " + promedio);


