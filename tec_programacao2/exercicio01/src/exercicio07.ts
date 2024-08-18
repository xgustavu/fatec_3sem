/* Escreva um script que receba valores constantes para o número total de eleitores de um
município, o número de votos brancos, nulos e válidos. Calcular e mostrar no console o
percentual que cada um desses números representa em relação ao total de eleitores. */

const nroTotalEleitores:number = 1000;
const nroBrancos:number = 100;
const nroNulos:number = 50;
const nroValidos:number = 850;

const percentualBrancos:number = (100 * nroBrancos) / nroTotalEleitores;
const percentualNulos:number = (100 * nroNulos) / nroTotalEleitores;
const percentualValidos:number = (100 * nroValidos) / nroTotalEleitores;

console.log(`Percentual de votos Brancos: ${percentualBrancos}%`);
console.log(`Percentual de votos Nulos: ${percentualNulos}%`);
console.log(`Percentual de votos Validos: ${percentualValidos}%`);

export{};