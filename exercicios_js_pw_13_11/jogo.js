var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

var snakeX = 5 * blockSize;
var snakeY = 5 * blockSize;

var velocityX = 0;
var velocityY = 0;

var snakeBody = [];

var foodX;
var foodY;

var gameOver = false;
var gameVel = 65;


var intervalo;
var score = 0;
$('h4').append('Pontuação: ' + score)


$('#restart').on('click', restart)

function restart() {

    window.location.reload();

}

$('#mudaVel').on('click', changeVel);

function changeVel() {

    clearInterval(intervalo);


    if (gameVel == 95) {
        gameVel = 65;

        $('h3').empty();
        $('h3').append("Velocidade: Rápida")

    }
    else if (gameVel == 65) {
        gameVel = 95;

        $('h3').empty();
        $('h3').append("Velocidade: Lenta")

    }

    intervalo = setInterval(update, gameVel);

}

window.onload = function () {

    board = document.getElementById('board')

    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");

    placeFood();
    document.addEventListener("keyup", changeDirection);
    changeVel();
}


function gameOverf() {
    $('body').css({ 'background-color': 'rgb(199, 2, 2)' })
    alert('GAME OVER')
}



function update() {



    if (gameOver) {
        return;
    }


    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        score++;
        $('h4').empty();
        $('h4').append('Pontuação: ' + score)
        placeFood();

    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];

    }

    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];

    }

    context.fillStyle = "lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize)
    }

    if (snakeX < 0 || snakeX > (cols - 1) * blockSize || snakeY < 0 || snakeY > (rows - 1) * blockSize) {
        gameOver = true;
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
        }

    }
    if (gameOver) {
        gameOverf();

    }

}


function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }

}



function placeFood() {

    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;

}

