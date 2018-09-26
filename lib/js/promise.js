console.group('Promise-bases');

let miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Todo bien");
    }, 1000);

    setTimeout(() => {
        reject("Todo mal");
    }, 1500);
})

miPromesa.then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});

console.groupEnd('Promise-bases');

console.group('Promise-bases 2');

let miPromesa2 = new Promise(function(todoBien, todoMal) {
    let resultado = true;

    if (resultado) {
        todoBien("listo");
    } else {
        todoMal("algo falló");
    }
});

miPromesa2.then(function(resultado) {
        console.log("El resultado es " + resultado);
    })
    .catch(function(resultado) {
        console.log("El resultado es " + resultado);
    });

console.groupEnd('Promise-bases 2');

console.group('Promise-Multi');

let promesaPrimera = function() {
    return new Promise(function(resolve, reject) {
        resolve('Primer Promesa');
    });
};

let promesaSegunda = function(msg) {
    return new Promise(function(resolve, reject) {
        resolve(msg + ' Segunda Promesa');
    });
};

let promesaTercera = function(msg) {
    return new Promise(function(resolve, reject) {
        resolve(msg + ' Tercera Promesa');
    });
};

promesaPrimera().then(function(resultado) {
    return promesaSegunda(resultado);
}).then(function(resultado) {
    return promesaTercera(resultado);
}).then(function(resultado) {
    console.log('Final ' + resultado);
})

console.groupEnd('Promise-Multi');

console.group('Promise-Multi 2');

let miPrimeraPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa1 - Todo bien");
    }, 1000);
})

let miSegundaPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promesa2 - Todo bien")
    }, 500);
});

Promise.all([miPrimeraPromesa, miSegundaPromesa])
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

console.groupEnd('Promise-Multi 2');

console.group('Promise-All');

let promesaPrimera1 = function() {
    return new Promise(function(resolve, reject) {
        resolve('Primera promesa lista');
    });
};

let promesaSegunda2 = function() {
    return new Promise(function(resolve, reject) {
        resolve('Segunda promesa lista');
    });
};

let promesaTercera3 = function() {
    return new Promise(function(resolve, reject) {
        resolve('Tercer promesa lista');
    });
};

Promise.all([promesaPrimera1(), promesaSegunda2(), promesaTercera3()]).then(function(respuestas) {
    respuestas.forEach(function(msg) {
        console.log(msg)
    });
});

console.groupEnd('Promise-All');