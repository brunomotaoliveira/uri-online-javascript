const lines = prompt("Digite os valores").split(' ');

let numeroDoFuncionario = parseInt(lines[0]);
let numeroDeHorasTrabalhadas = parseInt(lines[1]);
let valorPorHora = parseFloat(lines[2]);


let salario = parseFloat(numeroDeHorasTrabalhadas * valorPorHora);


console.log("NUMBER = " + numeroDoFuncionario);
console.log("SALARY = U$ " + salario.toFixed(2));