var form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    var valorGas = document.getElementById('valorGas').value;
    var kmsAndados = document.getElementById('kmsAndados').value;

    var valorFinal = (kmsAndados / 8) * valorGas;

    let divResultado = document.getElementById('resultadoGasKm');
    divResultado.innerHTML = "O gasto total com a viagem é de R$" + valorFinal;

});