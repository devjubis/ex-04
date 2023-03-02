const SP = 67836.43;
const RJ = 36678.66;
const MG = 29229.88;
const ES = 27165.48;
const Outros = 19849.53;

const Total = SP + RJ + MG + ES + Outros;

const percentualSP = (SP / Total) * 100;
const percentualRJ = (RJ / Total) * 100;
const percentualMG = (MG / Total) * 100;
const percentualES = (ES / Total) * 100;
const percentualOutros = (Outros / Total) * 100;

console.log(`Percentual de representação de SP: ${percentualSP.toFixed(2)}%`);
console.log(`Percentual de representação de RJ: ${percentualRJ.toFixed(2)}%`);
console.log(`Percentual de representação de MG: ${percentualMG.toFixed(2)}%`);
console.log(`Percentual de representação de ES: ${percentualES.toFixed(2)}%`);
console.log(`Percentual de representação de Outros: ${percentualOutros.toFixed(2)}%`);