console.group('Declarar un Symbol');

var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");

console.log(sym2 === sym3);
console.log("No son iguales a pesar de tener todo igual un Symbol es unico");

console.groupEnd('Declarar un Symbol');

console.group('TypeOf');

var sym = Symbol("foo");
console.log(typeof sym);
var symObj = Object(sym);
console.log(typeof symObj);

console.groupEnd('TypeOf');

console.group('Const');

const symb = Symbol("foo");
const symb2 = Symbol("var");
console.log(typeof symb);
console.log(typeof symb2);

console.groupEnd('Const');

console.group('JSON');

const foo = Symbol();
const vars = Symbol();
let obj = {};
obj[foo] = "foo";
obj[vars] = "vars";
console.log(JSON.stringify(obj));
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));

console.groupEnd('JSON');