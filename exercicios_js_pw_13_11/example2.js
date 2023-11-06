var form = document.getElementById('form');

form.addEventListener('submit', function (event) {

    event.preventDefault();

    var valorTemp = document.getElementById('inputTemp').value;

    const radioButtons = document.querySelectorAll('input[name="unidadeMedida"]');

    for (const radioButton of radioButtons) {

        if (radioButton.checked) {

            var unidadeTemp = radioButton.value;
            break;
        }

    }

    var textoResultado = document.getElementById('output');
    if (unidadeTemp == '°C') {
        // °C × 1, 8 + 32
        let resultado = valorTemp * 1.8 + 32;
        textoResultado.innerHTML = "A conversão de " + valorTemp + "°C para graus Fahrenheit seria " + resultado.toFixed(1) + '°F.';
    } else {
        //(°F − 32) ÷ 1, 8
        let resultado = (valorTemp - 32) / 1.8;
        textoResultado.innerHTML = "A conversão de " + valorTemp + "°F para graus Celsius seria " + resultado.toFixed(1) + '°C.';
    }

});

function limpa(formulario, texto) {

    formulario.reset();
    texto.innerHTML = "";

}