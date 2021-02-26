class Retangulo {
    constructor(alturaParam, larguraParam){
        this.altura = alturaParam;
        this.largura = larguraParam;
    }

    calcularAreaRetangulo = () => {
        return this.altura * this.largura
    }
}


let retangulo = new Retangulo(4,5);
console.log("Área de um Retângulo")
console.log("Lado: " + retangulo.altura)
console.log("Lado: " + retangulo.largura)
console.log("Área: " + retangulo.calcularAreaRetangulo())
