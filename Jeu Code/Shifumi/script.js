
var playerScore = 0;
var computerScore = 0;
var botPaper = document.getElementById('bot-feuille');
var botScissors = document.getElementById('bot-ciseau');
var botRock = document.getElementById('bot-pierre');
function afficherInput() {
    var saisie = window.prompt("Entrez votre Username :");
    if (saisie !== null) {
      document.getElementById("resultat").textContent = saisie;
    }
  }
function gameEnd(playerScore, computerScore) {
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            alert("Vous avez gagné!")
        } else {
            alert("Vous avez perdu!")
        }
        playerScore = 0;
        computerScore = 0;
        document.getElementById("score").textContent = playerScore;
        document.getElementById("score-Bot").textContent = computerScore;
    }
}
window.addEventListener("load", afficherInput());
let userPaper = document.getElementById('feuille');
userPaper.addEventListener('click',() => {
    removePaper();
    comment();
    userPaper.classList.add('active');
    let botChoice = [botPaper,botRock,botScissors]
    let shuffleChoice = botChoice[Math.floor(Math.random() * botChoice.length)];
    switch (shuffleChoice.id) {
        case "bot-feuille":
            document.getElementById('comment').textContent = "Egalité";
            document.getElementById('comment').classList.add('equal')
            shuffleChoice.classList.add('active-bot');
            break;
        case "bot-pierre":
            document.getElementById('comment').textContent = "Vous avez gagné"
            document.getElementById('comment').classList.add('winner')
            shuffleChoice.classList.add('active-bot')
            playerScore += 1;
            document.getElementById("score").textContent = playerScore;
            gameEnd(playerScore, computerScore);
            break;
        case "bot-ciseau":
            document.getElementById('comment').textContent = "Vous avez perdu";
            document.getElementById('comment').classList.add('loser')
            shuffleChoice.classList.add('active-bot')
            computerScore += 1;
            document.getElementById("score-Bot").textContent = computerScore;
            gameEnd(playerScore, computerScore);
            break;
        default:
            alert("Il y a une erreur dans le code");
            break;
    }
});
let userRock = document.getElementById('pierre');
userRock.addEventListener('click',() => {
    removeRock();
    comment();
    userRock.classList.add('active')
    let botChoice = [botPaper,botRock,botScissors]
    let shuffleChoice = botChoice[Math.floor(Math.random() * botChoice.length)];
    switch (shuffleChoice.id) {
        case "bot-feuille":
            document.getElementById('comment').textContent = "Vous avez perdu";
            document.getElementById('comment').classList.add('loser')
            computerScore += 1;
            document.getElementById("score-Bot").textContent = computerScore;
            shuffleChoice.classList.add('active-bot')
            gameEnd(playerScore, computerScore);
            break;
        case "bot-pierre":
            shuffleChoice.classList.add('active-bot')
            document.getElementById('comment').classList.add('equal')
            document.getElementById('comment').textContent = "Egalité";
            break;
        case "bot-ciseau":
            document.getElementById('comment').textContent = "Vous avez gagné"
            document.getElementById('comment').classList.add('winner')
            shuffleChoice.classList.add('active-bot')
            playerScore += 1;
            document.getElementById("score").textContent = playerScore;
            gameEnd(playerScore, computerScore);
            break;
        default:
            alert("Il y a une erreur dans le code");
            break;
    }
})
let userScissors = document.getElementById('ciseau');
userScissors.addEventListener('click',() => {
    removeScissors();
    comment();
    userScissors.classList.add('active')
    let botChoice = [botPaper,botRock,botScissors]
    let shuffleChoice = botChoice[Math.floor(Math.random() * botChoice.length)];
    switch (shuffleChoice.id) {
        case "bot-feuille":
            document.getElementById('comment').textContent = "Vous avez gagné"
            document.getElementById('comment').classList.add('winner')
            shuffleChoice.classList.add('active-bot')
            playerScore += 1;
            document.getElementById("score").textContent = playerScore;
            gameEnd(playerScore, computerScore);
            break;
        case "bot-pierre":
            document.getElementById('comment').textContent = "Vous avez perdu";
            document.getElementById('comment').classList.add('loser')
            shuffleChoice.classList.add('active-bot')
            computerScore += 1;
            document.getElementById("score-Bot").textContent = computerScore;
            gameEnd(playerScore, computerScore);
            break;
        case "bot-ciseau":
            shuffleChoice.classList.add('active-bot')
            document.getElementById('comment').classList.add('equal')
            document.getElementById('comment').textContent = "Egalité";
            break;
        default:
            alert("Il y a une erreur dans le code");
            break;      
    }
})

let restart = document.getElementById('reset');
restart.addEventListener('click',() => {
    reset();
    document.getElementById("score").textContent = playerScore;
    document.getElementById("score-Bot").textContent = computerScore;
    document.getElementById('comment').textContent = "Action";
    comment();
    removePaper();
    removeRock();
    removeScissors();
}); 