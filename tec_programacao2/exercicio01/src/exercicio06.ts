const diaAnv: number = 17;
const mesAnv: number = 10;
const anoAnv: number = 1999;

const diasPorMes = 30;
const mesesPorAno = 12;
const dataAtual = new Date();

const anoAtual = dataAtual.getFullYear();
const mesAtual = dataAtual.getMonth() + 1; // getMonth() retorna o mês de 0 (Jan) a 11 (Dez)
const diaAtual = dataAtual.getDate();

let anos = anoAtual - anoAnv;
let meses = mesAtual - mesAnv;
let dias = diaAtual - diaAnv;

if (dias < 0) {
    dias += diasPorMes;
    meses -= 1;
}

if (meses < 0) {
    meses += mesesPorAno;
    anos -= 1;
}

console.log(`Você tem ${anos} anos, ${meses} meses e ${dias} dias.`);

export {};