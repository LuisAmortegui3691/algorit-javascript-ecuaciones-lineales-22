const coeficientes = [
    [8, 3],
    [-12, -2]
];

const terminosIndependientes = [
    [4],
    [2]
];

function calcularMatrizAdjunta(matriz) {
    return [
        [ matriz[1][1], -matriz[0][1]],
        [-matriz[1][0],  matriz[0][0]]
    ];
}
   
const matrizAdjunta = calcularMatrizAdjunta(coeficientes);

function calcularDeterminante(matriz) {

    let resulDeterminante = (matriz[0][0] * matriz[1][1]) - (matriz[0][1] * matriz[1][0]);

    return resulDeterminante;
}

const determinante = calcularDeterminante(coeficientes);

function calcularMatrizInversa(matrizAdjunta, determinante) {
    
    let laMatrizInversa = [
        [matrizAdjunta[0][0] / determinante, matrizAdjunta[0][1] / determinante],
        [matrizAdjunta[1][0] / determinante, matrizAdjunta[1][1] / determinante]
    ];

    return laMatrizInversa;
}

const matrizInversa = calcularMatrizInversa(matrizAdjunta, determinante);

function multiplicarMatrizPorVector(matriz, vector) {
    const resultado = [];

    for(let i = 0; i < matriz.length; i++) {
        let suma = 0;
        for(let j = 0; j < matriz[i].length; j++) {
            suma += matriz[i][j] * vector[j][0];
        }
        resultado.push([suma]);
    }

    return resultado;
}

const vectorSolucion = multiplicarMatrizPorVector(matrizInversa, terminosIndependientes);

const x = vectorSolucion[0][0];
const y = vectorSolucion[1][0];

console.log(x);
console.log(y);

