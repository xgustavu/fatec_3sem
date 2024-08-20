
const peso:number = 82;
const altura:number = 1.63;
const imc:number = peso / Math.pow(altura, 2);

if(imc <= 18.5){
    console.log("Abaixo do peso ideal.");
} else if (imc <= 24.9){
    console.log("Dentro do peso ideal.");
} else if (imc <= 29.9){
    console.log("Acima do peso ideal.");
} else if (imc <= 34.9){
    console.log("Obesidade Grau I.");
} else if (imc <= 39.9){
    console.log("Obesidade Grau I.");
} else if (imc >= 40){
    console.log("Obesidade Grau I.");
}

export {}