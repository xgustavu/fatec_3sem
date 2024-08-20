/* Faça um script que solicite ao usuário que digite um número que represente um determinado mês do ano. Após 
a leitura escreva por extenso qual o mês lido. Caso o número digitado não esteja na faixa de 1 <= 12 escreva 
uma mensagem no console informando ao usuário do erro na digitação. */

var receber = require('readline'); 
var mes = ""; 
 
var leitor = receber.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 
 
function solicitarMes() {
    leitor.question("\nDigite um mês (numérico): ", function(answer: string) {
        var mes = parseInt(answer);

        switch (mes) {
            case 1:
                console.log(`\nO mês ${mes} é o mês de Janeiro.`);
                break;
            case 2:
                console.log(`\nO mês ${mes} é o mês de Fevereiro.`);
                break;
            case 3:
                console.log(`\nO mês ${mes} é o mês de Março.`);
                break;
            case 4:
                console.log(`\nO mês ${mes} é o mês de Abril.`);
                break;
            case 5:
                console.log(`\nO mês ${mes} é o mês de Maio.`);
                break;
            case 6:
                console.log(`\nO mês ${mes} é o mês de Junho.`);
                break;
            case 7:
                console.log(`\nO mês ${mes} é o mês de Julho.`);
                break;
            case 8:
                console.log(`\nO mês ${mes} é o mês de Agosto.`);
                break;
            case 9:
                console.log(`\nO mês ${mes} é o mês de Setembro.`);
                break;
            case 10:
                console.log(`\nO mês ${mes} é o mês de Outubro.`);
                break;
            case 11:
                console.log(`\nO mês ${mes} é o mês de Novembro.`);
                break;
            case 12:
                console.log(`\nO mês ${mes} é o mês de Dezembro.`);
                break;
            default:
                console.log(`\nO mês "${mes}" não existe!`);
                solicitarMes();
                return;
        }
        leitor.close();
    });
}

solicitarMes();

export{};