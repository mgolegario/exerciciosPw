var resultado = 0;

function calculaC() {
    //(°F − 32) ÷ 1, 8
    document.getElementById('convertido').innerHTML = "";
    var temp = parseFloat(document.getElementById('inputTemp').value);
    resultado = (temp - 32) / 1.8;
    document.getElementById('convertido').innerHTML += "A conversão para graus Celsius seria " + resultado.toFixed(2) + '.';
}
function calculaF() {
    // °C × 1, 8 + 32
    document.getElementById('convertido').innerHTML = "";
    var temp = parseFloat(document.getElementById('inputTemp').value);
    resultado = temp * 1.8 + 32;
    document.getElementById('convertido').innerHTML += "A conversão para graus Fahrenheit seria " + resultado.toFixed(2) + '.';
}



