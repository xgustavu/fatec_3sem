var receber = require('readline'); 
var palavra = ""; 
 
var leitor = receber.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 
 
leitor.question("Digite uma palavra: ", function(answer:string) { 
    var palavra = answer.toUpperCase(); 
    var i = 0;
    var vogais:number = 0;
    var consoantes:number = 0;

    while(i<palavra.length){
        switch (palavra[i]) { 
            case "A": 
            case "E": 
            case "I": 
            case "O": 
            case "U": 
                vogais++;
                break;
            default: 
                consoantes++;
                break;
        }
        i++
    }
    console.log(vogais);
    console.log(consoantes);

    leitor.close(); 
});

export{};