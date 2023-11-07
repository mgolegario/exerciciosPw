form = document.getElementById('form');

form.addEventListener('submit', function (e) {

    event.preventDefault();

    var altura = document.getElementById('altura').value;
    const radioButtons = document.querySelectorAll('input[name="sexo"]');

    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            var sexo = radioButton.value;
            break;
        }

    }
    var textoResultado = document.getElementById('output');

    if (sexo == 'masculino') {
        let resultado = (72.7 * altura) - 58;
        textoResultado.innerHTML = "O seu peso ideal é " + resultado.toFixed(1) + "kg";
    } else {
        let resultado = (62.1 * altura) - 44.7;
        textoResultado.innerHTML = "O seu peso ideal é " + resultado.toFixed(1) + "kg";
    }


})

function limpa(formulario, texto) {

    formulario.reset();
    texto.innerHTML = "";

}