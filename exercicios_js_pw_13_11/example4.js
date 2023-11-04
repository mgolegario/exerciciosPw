var textoGasKm = document.getElementById('textoGasKm');
var qualTextoGasKm = 0;
var valorComb = 0;
var kmsAndados = 0;
var qualInputGasKm = 0;

function processaGasKm() {


    var inputGasKm = document.getElementById('inputGasKm').value;

    switch (qualInputGasKm) {

        case 0: valorComb = inputGasKm; qualTextoGasKm++; break;
        case 1: kmsAndados = inputGasKm; break;

    }

    switch (qualTextoGasKm) {
        case 0: textoGasKm.innerHTML = "Insira o valor da Gasolina"; break;
        case 1: textoGasKm.innerHTML = "Insira a quilometragem andada"; break;

    }

    qualInputGasKm++;

    if (qualInputGasKm == 2) { calculaGasKm(); };

}

function calculaGasKm() {

    let valorFinal = (kmsAndados / 8) * valorComb;
    document.getElementById('resultadoGasKm').innerHTML = "Sabendo que o veículo percorre 8km/l o gasto dessa viagem foi de R$" + valorFinal.toFixed(2) + ".";

}