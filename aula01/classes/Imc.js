class Imc {
    constructor(pesoParam,alturaParam){
        this.peso = pesoParam;
        this.altura = alturaParam;
    }
    massaCorporal = () => {
        return this.peso / ( this.altura * this.altura)
    }

    situacaoPeso = () => {
        let massaCorporal = this.massaCorporal();
        if( massaCorporal < 18.5){
            return ("Abaixo do Peso")
        }else if (massaCorporal >= 18.5 && massaCorporal < 24.9){
            return ("Peso Normal")
        }else if (massaCorporal >= 24.9){
            return ("Acima do Peso do Peso")
        }
    }
}

let imc = new Imc(72, 1.72);
console.log("IMC")
console.log("Altura: " + imc.altura)
console.log("Peso  : " + imc.peso)
console.log("IMC   : " + imc.massaCorporal())
console.log(imc.situacaoPeso());

console.log("")