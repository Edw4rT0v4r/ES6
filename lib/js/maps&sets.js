console.group('sets');
var s = new Set();

s.add('cadena1').add('cadena2').add('cadena1');

console.log(s);
console.log(s.size === 2);

console.log(s.has('hola'));
console.groupEnd('sets');

console.group('maps');
var m = new Map();
// Añade valores a la llave inicial
m.set('hola', 42);
m.set('edad', 34);
console.log(m);
console.log(m.get('edad'));
console.log(m.get('hola'));

console.groupEnd('maps');