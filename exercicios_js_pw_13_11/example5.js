var form = document.getElementById('form')

form.addEventListener('submit', function(e){

    event.preventDefault();

    var compPiso = document.getElementById('compPiso').value;
    var largPiso = document.getElementById('largPiso').value;

    var area = largPiso * compPiso;
    var valorFinal =  area * 36;
    
    var textoResultado = document.getElementById('output');
    
    textoResultado.innerHTML = "O valor para o assentamento de " + area.toFixed(1) +"m²" + " é R$" + valorFinal.toFixed(1) + ".";


})



function limpa(formulario, texto) {

    formulario.reset();
    texto.innerHTML = "";

}
