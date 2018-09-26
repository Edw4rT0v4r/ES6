console.group('Lista de colección');
// Ordenamiento
var lista = ['ä', 'a', 'z'];
var l10nDE = new Intl.Collator('de');
var l10nSV = new Intl.Collator('sv');

console.log(l10nDE.compare('ä', 'z'));
console.log(l10nSV.compare('ä', 'z'));
console.log(lista.sort(l10nDE.compare));
console.log(lista.sort(l10nSV.compare));

console.groupEnd('Lista de colección');

console.group('Formato numerico por pais');

var l10nEN = new Intl.NumberFormat('en-US');
var l10nDE = new Intl.NumberFormat('de-DE');

console.log(l10nEN.format(1234567.89));
console.log(l10nDE.format(1234567.89));

console.groupEnd('Formato numerico por pais');

console.group('Formato de monedas');

var l10nUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});
var l10nGBP = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
});
var l10nEUR = new Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR'
});
var l10nCOP = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
});

console.log(l10nUSD.format(1234567.89));
console.log(l10nGBP.format(1234567.89));
console.log(l10nEUR.format(1234567.89));
console.log(l10nCOP.format(1234567.89));

console.groupEnd('Formato de monedas');

console.group('Formato de fecha');

var l10nEN = new Intl.DateTimeFormat('en-US');
var l10nCO = new Intl.DateTimeFormat('es-CO');
var l10nDE = new Intl.DateTimeFormat('de-DE');

console.log(l10nEN.format(new Date()));
console.log(l10nCO.format(new Date()));
console.log(l10nDE.format(new Date()));

console.groupEnd('Formato de fecha');