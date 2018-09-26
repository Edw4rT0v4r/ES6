console.group('Valores por default en Argumentos');

console.group('Default');
// ES5
console.log('ES5');

function multiplicar(a, b) {
    b = typeof b !== 'undefined' ? b : 1;
    return a * b;
}
console.log(multiplicar(5));

// ES6
console.log('ES6');

function multiplicar(a, b = 1) {
    return a * b;
}
console.log(multiplicar(5));

console.groupEnd('Default');

console.group('Tipo primitivos');

function f(x, y = 7, z = 42) {
    return x + y + z;
}
console.log(f(1));

console.groupEnd('Tipo primitivos');

console.group('Tipo primitivo Valor por default');

function cambiaFondo(elemento, color = 'rgb(51, 19, 159)') {
    var cuadrado = document.getElementById(elemento);
    cuadro.style.backgroundColor = color;
}

console.log("Cambia el color");
cambiaFondo('cuadro', 'rgb(230, 11, 47)');

console.groupEnd('Tipo primitivo Valor por default');

console.group('Arreglos');

function agregar(valor, arreglo = []) {
    arreglo.push(valor);
    return arreglo;
}

console.log(agregar(1));
console.log(agregar(4, [1, 2, 3]));

console.groupEnd('Arreglos');

console.group('Funciones');

function llamarAlgo(cosa = algo()) {
    return cosa;
}

function algo() {
    return "Hola mundo";
}
console.log(llamarAlgo());

console.groupEnd('Funciones');

console.group('Sin Validación');

function f(x, y = 2) {
    return [x, y];
}
console.log(f());

console.groupEnd('Sin Validación');

console.groupEnd('Valores por default en Argumentos');