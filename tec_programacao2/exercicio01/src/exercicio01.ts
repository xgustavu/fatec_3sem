let peso:number, altura:number, imc:number;

peso = 82;
altura = 1.63;
imc = peso / Math.pow(altura, 2);

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