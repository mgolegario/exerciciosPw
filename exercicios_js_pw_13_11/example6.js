var textoCalcPeso = document.getElementById('textoCalcPeso');
var qualTextoCalcPeso = 0;
var qualInputCalcPeso = 0;
var sexo;
var altura;

/*
Para homens: (72.7*h) - 58

Para mulheres: (62.1*h) - 44.7
*/

function calculaPeso() {
    let inputCalcPeso = document.getElementById('inputCalcPeso').value;

    switch (qualInputCalcPeso) {
        case 0: sexo = inputCalcPeso; qualTextoCalcPeso++; break;
        case 1: altura = inputCalcPeso; break;

    }

    switch (qualTextoCalcPeso) {
        case 0: textoCalcPeso.innerHTML = "Insira o seu sexo (masculino ou feminino)"; break;
        case 1: textoCalcPeso.innerHTML = "Insira a sua altura (em metros)"; break;

    }

    qualInputCalcPeso++;

    if (qualInputCalcPeso == 2) {
        var valorFinal = 0;

        switch (sexo) {

            case 'masculino' || 'Masculino':
                valorFinal = (72.7 * altura) - 58;
                break;

            case 'feminino' || 'Feminino':
                valorFinal = (62.1 * altura) - 44.7;
                break;

        }


        document.getElementById('resultadoCalcPeso').innerHTML = "O seu peso ideal é " + valorFinal.toFixed(2) + "kg."

    }

}