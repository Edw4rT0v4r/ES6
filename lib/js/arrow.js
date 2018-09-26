console.log('Antes');
var x = function(a) {
    return a;
}
console.log(x('Hola'));

console.log('*/*/*/*/*/*/');

console.log('Fat arrow un parametro');
var x = a => a;
console.log(x('Hola'));

console.log('*/*/*/*/*/*/');

console.log('Fat arrow varios parametros');
var x = (a, b) => a + " " + b;
console.log(x('Hola', 'Mundo'));

console.log('*/*/*/*/*/*/');

console.log('Sin parametros');
var x = () => "Hola Mundo";
console.log(x());

console.log('*/*/*/*/*/*/');

console.log('Llamar una función desde otra función');
setTimeout(() => console.log('Hola Mundo desde ES6'), 1000);

console.log('*/*/*/*/*/*/');

console.log('Más de una instrucción');
var x = () => {
    a = "hola";
    b = "Mundo";
    console.log(a + " " + b);
}
x();