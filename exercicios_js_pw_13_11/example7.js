var textoNum = document.getElementById('textoNum');
var nums = [];

function armazenaNums() {
    let inputNums = parseInt(document.getElementById('inputNums').value);

    nums.push(inputNums)
}

function mostraNums() {
    textoNum.innerHTML += "<br> Os números inseridos foram: "

    for (var i = 0; i < nums.length; i++) {
        if (i != nums.length - 1) {
            textoNum.innerHTML += nums[i] + "-";
        } else {
            textoNum.innerHTML += nums[i] + ".";
        }

    }

}

function maiorNum() {

    let maiorNum = nums[1];
    for (var i = 0; i < nums.length; i++)

        if (maiorNum < nums[i]) { maiorNum = nums[i]; };

    textoNum.innerHTML += "<br> O maior número inserido foi: " + maiorNum + ".";
}

function menorNum() {

    let menorNum = nums[1];

    for (var i = 0; i < nums.length; i++)

        if (menorNum > nums[i]) { menorNum = nums[i]; };

    textoNum.innerHTML += "<br> O menor número inserido foi: " + menorNum + ".";
}