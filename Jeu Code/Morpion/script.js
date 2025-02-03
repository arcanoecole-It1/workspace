let currentPlayer = 'X';
let botPlayer = 'O';
let scorePlayer = 0;
let scoreBot = 0;
var gameBoard = ['', '', '', '', '', '', '', '', ''];
let restart = document.getElementById('btn-restart');
restart.addEventListener('click', () => {
    boxes.forEach(box => {
        box.textContent = '';
        box.classList.remove('colorChoice');
        box.classList.remove('colorChoiceBot');
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        restart.textContent = "Recommencer";
        document.getElementById('comment').textContent = "Tour du joueur X";
    });
});

const boxes = document.querySelectorAll('.box');
function botMove() {
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === '') {
            gameBoard[i] = botPlayer;
            boxes[i].textContent = botPlayer;
            boxes[i].classList.add('colorChoiceBot');
            document.getElementById('comment').textContent = "Tour du joueur X";
            currentPlayer = 'X';
            return;
        }
    }
}

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        if (box.textContent === '') {
            box.textContent = currentPlayer;
            gameBoard[index] = currentPlayer;
            box.classList.add('colorChoice');
            document.getElementById('comment').textContent = "Tour du joueur O";

            if (checkWin()) {
                alert("Joueur X Vainqueur!");
                restart.textContent = "Continuer";
                scorePlayer += 1;
                end(scorePlayer,scoreBot);
                document.getElementById("PlayerX").textContent = scorePlayer;
                return;
            }
            if (checkDraw()) {
                scorePlayer -= 1;
                scoreBot -= 1;
                restart.textContent = "Continuer";
                document.getElementById("PlayerX").textContent = scorePlayer;
                document.getElementById("PlayerO").textContent = scoreBot;
                alert("Manche Null!");
                return;
            }

            currentPlayer = 'O';
            setTimeout(() => {
                botMove();
                if (checkWin()) {
                    alert("Joueur O Vainqueur!");
                    restart.textContent = "Continuer";
                    scoreBot += 1;
                    end(scoreBot,scorePlayer);
                    document.getElementById("PlayerO").textContent = scoreBot;
                    return;
                }
                if (checkDraw()) {
                    scorePlayer -= 1;
                    scoreBot -= 1;
                    restart.textContent = "Continuer";
                    document.getElementById("PlayerX").textContent = scorePlayer;
                    document.getElementById("PlayerO").textContent = scoreBot;
                    alert("Manche Null!");
                    return;
                }
            }, 500);
        }
    });
});