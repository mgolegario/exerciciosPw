var textoPiso = document.getElementById('textoPiso');
var qualTextoPiso = 0;
var qualInputPiso = 0;
var compComodo = 0;
var largComodo = 0;


function calculaPrecoPiso() {
    let inputPiso = document.getElementById('inputPiso').value;

    switch (qualInputPiso) {
        case 0: compComodo = inputPiso; qualTextoPiso++; break;
        case 1: largComodo = inputPiso; break;
    }

    switch (qualTextoPiso) {
        case 0: textoPiso.innerHTML = "Insira o comprimento do cômodo (em metros)"; break;
        case 1: textoPiso.innerHTML = "Insira a largura do cômodo (em metros)"; break;
    }

    qualInputPiso++;

    if (qualInputPiso == 2) {
        let valorFinal = (largComodo * compComodo) * 36; 
        document.getElementById('resultadoPiso').innerHTML = "O valor para o assentamento é R$" + valorFinal + ".";

    }


}
