console.group('Método assign');

var dest = {
    quux: 0
}
var src1 = {
    foo: 1,
    bar: 2
}
var src2 = {
    foo: 3,
    baz: 4
}
Object.assign(dest, src1, src2)
console.log(dest);

console.groupEnd('Método assign');

console.group('Método find');

console.log([1, 3, 4, 2].find(x => x > 3));
console.log([1, 3, 4, 2].findIndex(x => x > 3));

console.groupEnd('Método find');

console.group('Método repeat');

console.log("*".repeat(4 * 10));
console.log("foo".repeat(3));

console.groupEnd('Método repeat');

console.group('Método startsEndInclude');

var cadena = "hola cara de bola";
console.log(cadena.startsWith("ola", 1));
console.log(cadena.endsWith("ola"));
console.log(cadena.includes("ola"));
console.log(cadena.includes("ola", 1));
console.log(cadena.includes("ola", 2));

console.groupEnd('Método startsEndInclude');

console.group('Método isNaN isFinite');

console.log(Number.isNaN(42));
console.log(Number.isNaN(NaN));

console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(123));

console.groupEnd('Método isNaN isFinite');

console.group('Método isSecuriteNumber');

console.log(Number.isSafeInteger(42));
console.log(Number.isSafeInteger(9007199254740991));
console.log(Number.isSafeInteger(9007199254740992));

console.groupEnd('Método isSecuriteNumber');

console.group('Método EPSILON');

console.log(0.1 + 0.2 === 0.3);
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON);

console.groupEnd('Método EPSILON');

console.group('Método trunc');

console.log(Math.trunc(42.7));
console.log(Math.trunc(0.1));
console.log(Math.trunc(-0.1));

console.groupEnd('Método trunc');

console.group('Método sign');

console.log(Math.sign(7));
console.log(Math.sign(0));
console.log(Math.sign(-0));
console.log(Math.sign(-7));
console.log(Math.sign(NaN));

console.groupEnd('Método sign');