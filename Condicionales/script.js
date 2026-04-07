// 1 cuanto costo el produco 
// 2 si el producto  cueta - 100 aumento del 10% por el envio
// entr 100  a 200 descuento de 10% si cuenta mas de 200 25% de descuento 

let precio = Number(prompt("Ingrese el precio del producto: "));
let total = 0;

if (precio < 100) {
    total = precio + (precio * 0.10);
} else if (precio >= 100 && precio <= 200) {
    total = precio - (precio * 0.10);
} else {
    total = precio - (precio * 0.25);
}

console.log("Precio final:", total);