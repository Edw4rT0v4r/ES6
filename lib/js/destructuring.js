console.group('Destructuring valores');

let foo = ['uno', 'dos', 'tres'];
let [one, two, three] = foo;
console.log(foo);
console.log(one);

console.groupEnd('Destructuring valores');

console.group('Destructuring métodos');

let modulo = {
    cuadrado(lon) {
        console.log(lon * lon);
    },
    circulo(radio) {
        console.log(radio * Math.PI);
    },
    texto(text) {
        console.log(text);
    }
}
let {
    cuadrado,
    texto,
    circulo
} = modulo;

cuadrado(5);
texto('Hola Mundo');
circulo(10);

console.groupEnd('Destructuring métodos');

console.group('Destructuring objetos');

let Juana = {
    nombre: 'Juana',
    paterno: 'Pérez'
};

let Juan = {
    nombre: 'Juan',
    paterno: 'López',
    materno: 'Pérez'
};

function nombreCompleto({
    nombre,
    paterno,
    materno = 'N/A'
}) {
    console.log(`Hola ${nombre} ${paterno} ${materno}`);
}

nombreCompleto(Juana);
nombreCompleto(Juan);

console.groupEnd('Destructuring objetos');