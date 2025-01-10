// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Valores de faturamento por estado
const faturamentoSP = 67836.43;
const faturamentoRJ = 36678.66;
const faturamentoMG = 29229.88;
const faturamentoES = 27165.48;
const faturamentoOutros = 19849.53;

// Cálculo do faturamento total
const faturamentoTotal = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros;

// Cálculo do percentual de representação de cada estado
const percentualSP = (faturamentoSP / faturamentoTotal) * 100;
const percentualRJ = (faturamentoRJ / faturamentoTotal) * 100;
const percentualMG = (faturamentoMG / faturamentoTotal) * 100;
const percentualES = (faturamentoES / faturamentoTotal) * 100;
const percentualOutros = (faturamentoOutros / faturamentoTotal) * 100;

// Exibindo os resultados
console.log(`Percentual de SP: ${percentualSP.toFixed(2)}%`);
console.log(`Percentual de RJ: ${percentualRJ.toFixed(2)}%`);
console.log(`Percentual de MG: ${percentualMG.toFixed(2)}%`);
console.log(`Percentual de ES: ${percentualES.toFixed(2)}%`);
console.log(`Percentual de Outros: ${percentualOutros.toFixed(2)}%`);
