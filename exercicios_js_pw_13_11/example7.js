form = document.getElementById('form');

form.addEventListener('submit', function (e) {

    event.preventDefault();

    var textoResultado = document.getElementById('output');
    textoResultado.innerHTML = "";

    var numeros = document.getElementById('inputNums').value.split(',').map(str => str.trim());
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = parseInt(numeros[i]);
    }

    function mostraNums() {
        textoResultado.innerHTML += "Os números inseridos foram: "
        for (let i = 0; i < numeros.length; i++) {
            if (i !== numeros.length - 1) {
                textoResultado.innerHTML += numeros[i] + ", ";
            } else {
                textoResultado.innerHTML += numeros[i] + ".<br>";
            }
        }
    }

    function mostraMaior() {
        var maiorNum = numeros[0];
        for (let i = 0; i < numeros.length; i++) {
            if (maiorNum < numeros[i]) {
                maiorNum = numeros[i];
            }
        }
        textoResultado.innerHTML += "O maior número dentre os inseridos foi " + maiorNum + ".<br>";
    }

    function mostraMenor() {
        var menorNum = numeros[0];
        for (let i = 0; i < numeros.length; i++) {
            if (menorNum > numeros[i]) {
                menorNum = numeros[i];
            }
        }
        textoResultado.innerHTML += "O menor número dentre os inseridos foi " + menorNum + ".<br>";
    }

    var check1 = document.querySelector('#check1').checked;
    var check2 = document.querySelector('#check2').checked;
    var check3 = document.querySelector('#check3').checked;

    if (check1) {
        mostraNums();
    }
    if (check2) {
        mostraMaior();
    }
    if (check3) {
        mostraMenor();
    }

})

function limpa(formulario, texto) {

    formulario.reset();
    texto.innerHTML = "";

}