var readline = require('readline');
var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let legendas: string[] = ["seu Nome", "seu Salário", "sua Categoria"];
let dados: string[] = [];
let i: number = 0;

function perguntar() {
    leitor.question(`Informe ${legendas[i]}: `, function (answer: string) {
        dados[i] = answer;
        i++;
        if (i < 3) { // Corrigido para coletar todas as 3 entradas
            perguntar(); 
        } else {
            console.log("\n>>>>>>>>>>>>> Dados <<<<<<<<<<<<<\n");
            let perc = 0;

            switch((dados[2]).toUpperCase()) {
                case "A":
                case "C":
                case "F":
                case "H":
                    perc = 0.1;
                    break;
                case "B":
                case "D":
                case "E":
                case "I":
                case "J":
                case "T":
                    perc = 0.15;
                    break;
                case "K":
                case "R":
                    perc = 0.25;
                    break;
                case "L":
                case "M":
                case "N":
                case "O":
                case "P":
                case "Q":
                case "S":
                    perc = 0.35;
                    break;
                case "U":
                case "V":
                case "X":
                case "Y":
                case "W":
                case "Z":
                    perc = 0.5;
                    break;
                default:
                    console.log("Categoria inválida!");
                    leitor.close();
                    return; // Sai da função para não continuar com cálculos incorretos
            }

            let salario: number = parseFloat(dados[1]);
            let reajuste: number = salario * perc;
            let salarioReajustado: number = salario + reajuste;

            console.log(`Funcionário...........: ${dados[0]}`);
            console.log(`Percentual de reajuste: ${(perc * 100).toFixed(2)}%`);
            console.log(`Salário atual.........: R$ ${salario.toFixed(2)}`);
            console.log(`Reajuste..............: R$ ${reajuste.toFixed(2)}`);
            console.log(`Salário reajustado....: R$ ${salarioReajustado.toFixed(2)}`);

            leitor.close();
        }
    });
}

perguntar();

export {};
