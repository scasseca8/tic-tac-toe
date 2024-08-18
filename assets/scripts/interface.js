document.addEventListener('DOMContentLoaded', () => {


    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        alert("O Jogo acabou, O Jogador" + playerTime + "e o Vencedor");

    };
    updateSquares();
}