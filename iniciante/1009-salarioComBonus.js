let lines = prompt("Digite os valores").split(' ');

let nomeVendedor = lines[0];
let salarioFixo = parseFloat(lines[1]);
let totalDeVendasMes = parseFloat(lines[2]);
let comissao = parseFloat(15 / 100);


let total = salarioFixo + (totalDeVendasMes * comissao );


console.log("TOTAL = R$ " + total.toFixed(2));