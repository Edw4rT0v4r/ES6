console.log("Generador de números");

function* rango(inicio, fin, incremento) {
    while (inicio <= fin) {
        yield inicio;
        inicio += incremento;
    }
}

for (let i of rango(0, 20, 2)) {
    console.log(i);
}

console.log("Generar el cuadrado de un número");

function* cuadrado() {
    var n = 1; // Comienza en 1
    while (true) {
        var c = n * n; // obtiene el cuadrado
        n++; // aumenta para la proxima iteración
        yield "El cuadrado de " + (n - 1) + " = " + c; // devuelve el valor actual
    }
}

var gen = cuadrado();
console.log(gen); //suspended
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);