/* Escreva um script que solicite a um funcionário o valor do seu salário mensal atual. Calcule o salário atualizado 
desse funcionário, depois do reajuste, seguindo a regra: Se o salário for inferior ou igual a R$ 650,00, o reajuste 
será de 10%. Caso o salário seja maior que R$ 650,00,  o reajuste será de apenas 5%. Mostre  no console o 
salário original, o percentual de reajuste e o valor final do salário reajustado. */

var receber = require('readline'); 
var salario = ""; 
 
var leitor = receber.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 
 
leitor.question("Digite seu salário: ", function(answer:string) { 
    var salario = parseFloat(answer); 
    let reajuste = 0; 

    if(salario <= 650){
        reajuste = (salario * 0.1) + salario;
        console.log(`\n Reajuste de 10%: R$ ${reajuste}`);
    } else {
        reajuste = (salario * 0.05) + salario;
        console.log(`\n Reajuste de 5%: R$ ${reajuste}`);
    } ;

    leitor.close(); 
});

export{};