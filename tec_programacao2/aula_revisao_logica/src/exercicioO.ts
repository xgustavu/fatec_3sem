class Pessoa { 
    nome:string; 
    email:string; 
    nasc:string;

    constructor(nome:string,email:string,nasc:string){ 
        this.nome = nome; 
        this.email = email; 
        this.nasc = nasc; 
    } 
 
    imprimir():void { 
        console.log("Nome: "+this.nome); 
        console.log("e-Mail: "+this.email); 
        console.log("Data Nasc.: "+this.nasc); 
        console.log("Idade: "+this.idade(this.nasc)+" anos"); 
    } 
 
    public idade(nasc: any): number { 
        const hoje = new Date(); 
        const ano:number = parseInt(nasc.substring(6,10)); 
        const mes:number = parseInt(nasc.substring(3,5))-1; 
        const dia:number = parseInt(nasc.substring(0,2));  
        const datan = new Date(ano,mes,dia); 
        let idade:number = hoje.getFullYear() - datan.getFullYear(); 
        const m:number = hoje.getMonth() - datan.getMonth(); 
 
        if (m < 0 || (m === 0 && hoje.getDate() < datan.getDate())) { 
          idade--; 
        } 
     
        return idade; 
      } 

      
} 

const cliente = new Pessoa("Gustavo Carvalho","gustavocarvalho@gmail.com","17/10/1999");

cliente.imprimir();