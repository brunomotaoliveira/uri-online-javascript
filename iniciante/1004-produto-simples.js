const lines = prompt("Digites os valores: ").split(' ');

let a = parseInt(lines[0]);//split retornar array de strings, o parseint converte a string para inteiro.
let b = parseInt(lines[1]);

prod = a * b;

console.log("PROD = "+ prod);