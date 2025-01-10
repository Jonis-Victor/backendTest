// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

// Inicializando as variáveis
let indice = 13;
let soma = 0;
let k = 0;

// Enquanto K for menor que o valor de INDICE
while (k < indice) {
    k = k + 1;     // Incrementa K
    soma = soma + k;  // Soma K a SOMA
}

// Imprime o resultado final
console.log(soma);