var receber = require('readline'); 
var idade = ""; 
 
var leitor = receber.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 
 
leitor.question("Digite sua idade: ", function(answer:number) { 
    var idade = answer; 
    
    if(idade < 10){
        console.log("\n Criança");
    } else if(idade <= 13){
        console.log("\n Pré-adolescente");
    } else if(idade <= 17){
        console.log("\n Adolescente");
    } else if(idade <= 59){
        console.log("\n Adulto");
    } else if(idade >= 60){
        console.log("\n Idoso");
    };

    leitor.close(); 
});