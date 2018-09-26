// Nos permite abreviar el envío de los parametros
function f(x, y, z) {
    console.log(x + y + z);
}
var numeros = [2, 1, 2];
f(...numeros);

function g(q, w, e, r, t) {
    console.log(t);
}
var num = [0, 1];
g(-1, ...num, 2, ...[3]);

console.group('Spreads arreglos');

var num1 = [0, 1, 2];
var num2 = [3, 4, 5];

num1.push(...num2);
for (var i = 0; i < num1.length; i++) {
    console.log(num1[i]);
    document.write(`<p>${num1[i]}</p>`);
}

console.groupEnd('Spreads arreglos');

console.group('Spread objeto');

function f1(...numeros) {
    console.log(numeros.length);
}
f1();
f1(5);
f1(5, 6, 7);

console.groupEnd('Spread objeto');

console.group('Spread funciones');

function multi(mult, ...numeros) {
    return numeros.map(function(elemento) {
        return mult * elemento;
    });
}

var salida = multi(2, 6, 4, 8);
console.log(salida);

function ordena(...numero) {
    var salida = numero.sort();
    return salida;
}
console.log(ordena(5, 8, 9, 3, 4, 1, 6, 7));

console.groupEnd('Spread funciones');