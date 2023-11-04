
var faseFormulario = 0;
var qualProd = 0;
var nomeProds = [];
var valorProds = [];
var quantProds = [];
var textoProd = document.getElementById('textoProd');
var infoProd = "o nome";


function registraProd() {



    if (qualProd < 3) {
        var conteudoProd = document.getElementById('conteudoProd').value;


        switch (faseFormulario) {
            case 0: nomeProds.push(conteudoProd); infoProd = "o valor"; break;


            case 1: valorProds.push(conteudoProd); infoProd = "a quantidade"; break;

            case 2:
                quantProds.push(conteudoProd);
                faseFormulario = -1;
                infoProd = "o nome";
                qualProd++;
                break;

        }


        faseFormulario++;
    }

    if (qualProd == 3) { somaProds(); }


    switch (qualProd) {

        case 0: textoProd.innerHTML = "Insira " + infoProd + " do primeiro produto"; break;
        case 1: textoProd.innerHTML = "Insira " + infoProd + " do segundo produto"; break;
        case 2: textoProd.innerHTML = "Insira " + infoProd + " do terceiro produto"; break;

    }


}

function somaProds() {

    let valorTotal = (valorProds[0] * quantProds[0]) + (valorProds[1] * quantProds[1]) + (valorProds[2] * quantProds[2]);

    document.getElementById('somaValores').innerHTML = "O valor total das vendas dos produtos:<br>- " + nomeProds[0] + "<br>- " + nomeProds[1] + "<br>- " + nomeProds[2] +
        "<br> É igual a R$" + valorTotal + ".";

}


