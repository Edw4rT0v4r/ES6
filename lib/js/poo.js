class rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcArea() {
        return this.base * this.altura;
    }
}

var r = new rectangulo(10, 20);
console.log(r.calcArea());