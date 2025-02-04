let currentPlayer = 'X';
let botPlayer = 'O';
let scorePlayer = 0;
let scoreBot = 0;
var gameBoard = ['', '', '', '', '', '', '', '', '']; // Tableau pour suivre l'état du jeu.
let restart = document.getElementById('btn-restart');
restart.addEventListener('click', () => {
    console.log("ca marche");
    boxes.forEach(box => {
        box.textContent = '';
        box.classList.remove('colorChoice');
        box.classList.remove('colorChoiceBot');
        gameBoard = ['', '', '', '', '', '', '', '', ''];
    });
});
const boxes = document.querySelectorAll('.box');
function botMove() {
    // TODO: Ici, le bot choisit la première case vide disponible (à améliorer).
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === '') {
            gameBoard[i] = botPlayer;
            boxes[i].textContent = botPlayer;
            boxes[i].classList.add('colorChoiceBot')
            document.getElementById('comment').textContent = "Tour du joueur X"
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
            box.classList.add('colorChoice')
            document.getElementById('comment').textContent = "Tour du joueur O"
            currentPlayer = 'O';
            if (checkWin()) {
                alert("Joueur X Vainqueur!");
                scorePlayer += 1;
                document.getElementById("PlayerX").textContent = scorePlayer;
                document.getElementById('comment').textContent = "Tour"
                return; 
            }
            if (checkDraw()) {
                document.getElementById('comment').textContent = "Tour"
                scorePlayer -= 1;
                scoreBot -= 1;
                document.getElementById("PlayerX").textContent = scorePlayer;
                document.getElementById("Player0").textContent = scoreBot;
                alert("Manche Null!");
                return;
            }
            botMove();
            if (checkWin()) {
                document.getElementById('comment').textContent = "Tour"
                scoreBot += 1;
                document.getElementById("PlayerO").textContent = scoreBot;
                alert("Joueur O Vainqueur!");
                return; 
            }
            if (checkDraw()) {
                document.getElementById('comment').textContent = "Tour"
                scorePlayer -= 1;
                scoreBot -= 1;
                document.getElementById("PlayerX").textContent = scorePlayer;
                document.getElementById("Player0").textContent = scoreBot;
                alert("Manche Null!");
                return;
            }
        }
    });
});
