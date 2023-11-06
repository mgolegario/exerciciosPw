function exibeSoma() {
    var valorInserido = parseInt(document.getElementById('inputEx1').value);
    var valorEx1 = document.getElementById('output');
    var somaEx1 = 0;
    valorEx1.innerHTML="Os números pares até "+ valorInserido+ " são: ";
    for (let i = 1; i <= valorInserido; i++) {
        if (i%2==0) {
            if (i != valorInserido ){
        valorEx1.innerHTML += i + ', ';
            }else{
                valorEx1.innerHTML += i + '. ';
            }
        somaEx1 = somaEx1 + i;
        
    }
    }

    valorEx1.innerHTML += '<br>A soma desses valores é ' + somaEx1 + '.';

}

function limpa(formulario, texto) {

    formulario.reset();
    texto.innerHTML = "";

}