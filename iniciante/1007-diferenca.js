const lines = prompt("Digite os valores: ").split(' ');

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let c = parseInt(lines[2]);
let d = parseInt(lines[3]);

let diferenca = ((a * b) - (c * d));

console.log("DIFERENCA = " + diferenca);