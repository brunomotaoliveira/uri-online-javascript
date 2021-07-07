//prompt -> Alert para inserir os valores, e o split aloca cada valor em array de string. Usando o espaço ' ' como separador. A variavel "lines" é para simular o ambiente do URI ONLINE. 
let lines = prompt("Digite os valores").split(' ');


let codigoPeca1 = parseInt(lines[0]);
let numeroDePecas1 = parseInt(lines[1]);
let valorUnitarioPeca1 = parseFloat(lines[2]);

let codigoPeca2 = parseInt(lines[3]);
let numeroDePecas2 = parseInt(lines[4]);
let valorUnitarioPeca2 = parseFloat(lines[5]);

let valorAPagar = ((numeroDePecas1 * valorUnitarioPeca1) + (numeroDePecas2 * valorUnitarioPeca2));

console.log("VALOR A PAGAR: R$ " + valorAPagar.toFixed(2));