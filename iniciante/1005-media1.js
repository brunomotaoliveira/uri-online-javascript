const lines = prompt("Digite os valores").split(' ');

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);

let media = ((a * 3.5) + (b * 7.5))/11;

console.log("MEDIA = " + media.toFixed(5));

/**
 *  Média Aritmética Ponderada
    A média aritmética ponderada é calculada multiplicando cada valor do conjunto de dados pelo seu peso.
    Depois, encontra-se a soma desses valores que será dividida pela soma dos pesos.
 */