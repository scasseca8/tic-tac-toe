document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    });
});

let board = ['','','','','','','','',''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            alert("O jogo acabou! O jogador " + symbols[playerTime] + " é o vencedor");
        }, 10);
    }
    updateSquares();
}

function handleMove(position) {
    if (gameOver) {
        return;
    }

    if (board[position] == '') {
        board[position] = symbols[playerTime];
        gameOver = isWin();

        if (!gameOver) {
            playerTime = (playerTime === 0) ? 1 : 0;
        }
    }

    return gameOver;
}

function isWin() {
    let winStates = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] && 
            board[pos1] == board[pos3] && 
            board[pos1] != '') {
            return true;
        }
    }
    return false;
}

function updateSquares() {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        square.innerHTML = symbol ? `<div class='${symbol}'></div>` : '';
    });
}

function restart() {
  
    board = ['','','','','','','','',''];
    playerTime = 0;
    gameOver = false;

    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.innerHTML = '';
    });

    console.log("O jogo foi reiniciado!");
}
