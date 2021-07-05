const lines = prompt('Digite os valores de entrada').split(' ');

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);

let resultado = a + b;

console.log('X = '+ resultado);

// O método split() divide uma string em um array de strings de acordo com algum separador; por exemplo, o espaço em branco ou algo determinado por uma expressão regular. Além disso, o caractere separador é removido das substrings resultantes no array.
