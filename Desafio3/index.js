//Função Desafio 003

  function encontrarNumerosSolitarios(array) {
    return array.filter(function(valor, indice, arr) {
        return arr.indexOf(valor) === indice && arr.lastIndexOf(valor) === indice;
    });
}

let numeros = [12, 17, 15, 19, 22, 17, 19, 12];
console.log(encontrarNumerosSolitarios(numeros));

// Saida Console: [15, 22]
