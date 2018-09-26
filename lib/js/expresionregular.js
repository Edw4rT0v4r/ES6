console.group('Verificar Expresiones Regulares en el navegador');

var sticky;
try {
    RegExp('', 'y');
    sticky = true;
} catch (e) {
    sticky = false;
}
console.log(sticky);

console.groupEnd('Verificar Expresiones Regulares en el navegador');

console.group('Expresion regular');

var str = "Primera línea\nSegunda línea";
var regex = /(\S+) línea\n?/y;

var match = regex.exec(str);
console.log(match);
console.log(regex.lastIndex);

var match2 = regex.exec(str);
console.log(match2);
console.log(regex.lastIndex);

var match3 = regex.exec(str);
console.log(match3);

console.groupEnd('Expresion regular');