const lines = prompt('Digite os valores de entrada').split(' ');

let raio = parseFloat(lines[0]);
const n = 3.14159;
area = n * (raio * raio);

console.log('A='+ area.toFixed(4));