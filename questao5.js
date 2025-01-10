// 5) Escreva um programa que inverta os caracteres de um string.
// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;


// Função para inverter a string
function inverterString(str) {
    let strInvertida = ''; // Inicializa uma string vazia para armazenar a string invertida
  
    // Loop para percorrer a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
      strInvertida += str[i]; // Adiciona cada caractere à string invertida
    }
  
    return strInvertida; // Retorna a string invertida
  }
  
  // Solicitar ao usuário para inserir uma string
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Entrada do usuário
  rl.question('Digite a string que você deseja inverter: ', (entrada) => {
    const stringInvertida = inverterString(entrada);
    console.log(`String invertida: ${stringInvertida}`);
    rl.close();
  });
  