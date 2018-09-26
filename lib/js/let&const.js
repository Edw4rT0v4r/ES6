// let es una variable propia o mejor dicho local
function prueba() {
    if (true) {
        let x = 10;
        console.log(x);
    }
    // console.log(x);
}

prueba();

// una const es unica
const z = 12;
console.log(z);
z = 1;
console.log(z);