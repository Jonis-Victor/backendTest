///2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function isFibonacci(num) {
    if (num < 0) return false;

    let a = 0, b = 1;
    while (a <= num) {
        if (a === num) return true;
        [a, b] = [b, a + b]; // Avança na sequência de Fibonacci
    }
    return false;
}

// Número a ser verificado (pode ser substituído por entrada do usuário)
const num = 6;

// Verificação e saída
if (isFibonacci(num)) {
    console.log(`O número ${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
}
