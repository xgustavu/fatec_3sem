const salario:number = 2000;
const reajuste:number = 5;

const salarioReajustado:number = ((salario * reajuste) / 100) + salario;

console.log(`Salário R$ ${salario}`);
console.log(`Reajuste ${reajuste}%`);
console.log(`Salario reajustado R$ ${salarioReajustado}`)

export{};