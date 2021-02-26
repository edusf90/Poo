// class Quadrado {
//     constructor(){
//         this.lado = 1;
//     }
//     calcularArea(){
//         return this.lado * this.lado;
//     }
// }
// calcularArea()

class Quadrado {
    constructor(ladoParam){
        this.lado = ladoParam;
    }

    calcularArea = () => {
        return this.lado * this.lado
    }
}

let quadrado = new Quadrado(4);
console.log("Área de um Quadrado")
console.log("Lado: " + quadrado.lado)
console.log("Área: " + quadrado.calcularArea())
console.log("")