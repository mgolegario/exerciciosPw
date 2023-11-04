function exibeSoma() {
    var valorInserido = parseInt(document.getElementById('inputEx1').value);
    var valorEx1 = document.getElementById('exitEx1');
    var somaEx1 = 0;

    for (let i = 1; i <= valorInserido; i++) {
        valorEx1.innerHTML += i + ', ';
        somaEx1 = somaEx1 + i;
    }
    valorEx1.innerHTML += 'e a soma desses valores é ' + somaEx1 + '.';

}