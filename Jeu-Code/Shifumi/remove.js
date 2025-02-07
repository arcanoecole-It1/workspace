function removePaper() {
    userScissors.classList.remove('active')
    userRock.classList.remove('active')
    botPaper.classList.remove('active-bot')
    botRock.classList.remove('active-bot')
    botScissors.classList.remove('active-bot')
}

function removeRock() {
    userScissors.classList.remove('active')
    userPaper.classList.remove('active')
    botPaper.classList.remove('active-bot')
    botScissors.classList.remove('active-bot')
    botRock.classList.remove('active-bot')
}

function removeScissors() {
    userRock.classList.remove('active')
    userPaper.classList.remove('active')
    botRock.classList.remove('active-bot')
    botScissors.classList.remove('active-bot')
    botPaper.classList.remove('active-bot')
}

function comment() {
    document.getElementById('comment').classList.remove('loser')
    document.getElementById('comment').classList.remove('winner')
    document.getElementById('comment').classList.remove('equal')
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    alert("Scores réinitialisés");
}