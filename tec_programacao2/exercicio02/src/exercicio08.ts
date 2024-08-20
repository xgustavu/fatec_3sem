var receber = require('readline'); 
var letra = ""; 
 
var leitor = receber.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 
 
leitor.question("Digite uma letra: ", function(answer:string) { 
    var letra = (answer).toUpperCase(); 
    
    switch (letra) { 
        case "A": 
        case "E": 
        case "I": 
        case "O": 
        case "U": 
            console.log(`\nA letra "${letra}" é uma vogal!`); 
            break; 
        default: 
            console.log(`\nA letra "${letra}" é uma consoante!`);
    }

    leitor.close(); 
});

