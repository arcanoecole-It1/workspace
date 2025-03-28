function checkWin() {
    // Définir toutes les combinaisons gagnantes possibles (indices des cases).
    const winPatterns = [
      [0, 1, 2], 
      [3, 4, 5],
      [6, 7, 8], 
      [0, 3, 6], 
      [1, 4, 7], 
      [2, 5, 8], 
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    // Parcourir chaque combinaison gagnante.
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;  // Déstructurer le tableau de 3 indices.
  
      // Vérifier si les trois cases de la combinaison ont le même symbole (X ou O) et ne sont pas vides.
      if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
        return true;  // Le joueur a gagné.
      }
    }
}

function checkDraw() {
    return gameBoard.every(box => box !== '');
}

const cases = document.querySelectorAll('.CLick-player');
function show() {
}

function end(scorePlayer,scoreBot) {
  if (scorePlayer == 2 || scoreBot == 2) {
    if (scoreBot > scorePlayer) {
      alert ('End of game Player O Wins the game!');
      restart.textContent = "Recommencer";
      scorePlayer = 0;
      scoreBot = 0;
      restart.addEventListener('click', () => {
        document.getElementById("PlayerX").textContent = scorePlayer;
        document.getElementById("PlayerO").textContent = scoreBot;
      })
    } else {
      alert ('End of game Player X Wins the game!');
      restart.textContent = "Recommencer";
      scorePlayer = 0;
      scoreBot = 0;
      restart.addEventListener('click', () => {
        document.getElementById("PlayerX").textContent = scorePlayer;
        document.getElementById("PlayerO").textContent = scoreBot;
      })
    }
  }
}