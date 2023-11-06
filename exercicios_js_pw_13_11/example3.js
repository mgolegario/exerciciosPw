var form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    var firstProd = {
        nome: document.getElementById('firstProdName').value,
        valor: document.getElementById('firstProdValor').value

    };

    var firstProdQuant = document.getElementById('firstProdQuant').value;
    var secProd = {
        nome: document.getElementById('secProdName').value,
        valor: document.getElementById('secProdValor').value

    };
    var secProdQuant = document.getElementById('secProdQuant').value;
    var thirdProd = {
        nome: document.getElementById('thirdProdName').value,
        valor: document.getElementById('thirdProdValor').value
    };
    var thirdProdQuant = document.getElementById('thirdProdQuant').value;

    var firstProdVenda = firstProd.valor * firstProdQuant;
    var secProdVenda = secProd.valor * secProdQuant;
    var thirdProdVenda = thirdProd.valor * thirdProdQuant;
    var valorTotal = firstProdVenda + secProdVenda + thirdProdVenda;

    var divResultado = document.getElementById('somaValores')

    divResultado.innerHTML = "O " + firstProd.nome+ " vendeu R$" + firstProdVenda +
        ".<br>" + "O " + secProd.nome+ " vendeu R$" + secProdVenda + ".<br>" +
        "O " + thirdProd.nome+ " vendeu R$" + thirdProdVenda + ".<br>" +
        "O total das vendas foi R$" + valorTotal + ".";

});