console.group('Sintaxis corta');

var x = 10,
    y = 20;
// Antes
obj = {
    x: x,
    y: y
};
console.log(obj);

// Ahora
objA = {
    x,
    y
};

console.log(objA);

console.groupEnd('Sintaxis corta');

console.group('Sintaxis corta métodos');

objM = {
    suma(a, b) {
        return a + b
    },
    multi(x, y) {
        return x * y
    }
}

console.log(objM.suma(2, 3));
console.log(objM.multi(2, 3));

console.groupEnd('Sintaxis corta métodos');

console.group('Nombre propiedad calculada');

let objN = {
    foo: 'bar',
    ['id' + num()]: 4, // asi se define
    // 'id' + num(): 5 Esto no funciona
}

console.log(objN);

function num() {
    return Math.floor(Math.random() * 10);
}

console.groupEnd('Nombre propiedad calculada');

console.group('Método assign');

var o1 = {
    a: 1
};
var o2 = {
    b: 2
};
var o3 = {
    c: 3
};

var objA = Object.assign({}, o1, o2, o3);
console.log(objA);

console.groupEnd('Método assign');