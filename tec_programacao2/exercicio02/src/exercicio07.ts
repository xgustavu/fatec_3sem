/* Dado três valores X, Y, Z, verificar se eles podem ser os comprimentos dos lados de um triângulo, e se forem, 
verificar se é um triângulo equilátero, isósceles ou escaleno. Se eles não formarem um triângulo, escrever
uma mensagem  no  console  informando  isso.  Antes  da  elaboração  do  script,  torna-se  necessária  a  revisão  
de algumas propriedades e definições: */

/* Propriedade – Para que seja possível formar um triângulo, o comprimento de cada lado deve ser menor do 
que a soma dos comprimentos dos outros dois lados. 

    Definição 1 - Chama-se triângulo equilátero os que tem os comprimentos dos três lados iguais;  
    Definição 2 - Chama-se triângulo isósceles o triângulo que tem os comprimentos de dois lados iguais; 
    Definição 3 - Chama-se triângulo escaleno ao triângulo que tem os comprimentos dos três lados diferentes. */

var readline = require('readline');
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let legendas: string[] = ["1", "2", "3"];
let lados: number[] = [];
let i: number = 0;

function perguntar() {
    leitor.question(`Informe o lado ${legendas[i]}: `, function (answer: string) {
        lados[i] = parseInt(answer);
        i++;
        if (i < 3) {
            perguntar(); 
        } else {
            console.log("\n>>> Triangulo <<<");
            
            if(lados[0] < (lados[1] + lados[2]) && lados[1] < (lados[0] + lados[2]) && lados[2] < (lados[0] + lados[1]) ){
                if(lados[0] == lados[1] && lados[0] == lados[2]){
                    console.log("\n É um triangulo Equilátero!");
                } else if(lados[0] == lados[1] || lados[0] == lados[2] || lados[1] == lados[2]){
                    console.log("\n É um triangulo Isósceles!");
                } else {
                    console.log("\n É um triangulo Escaleno");
                }

            } else{
                console.log("\n Não é um triangulo!");
            }

            leitor.close();
        }
    });
}

perguntar();
export {};