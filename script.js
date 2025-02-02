let currentPlayer = 'X';
let botPlayer = 'O';
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (box.textContent == '') {
            box.textContent = currentPlayer;
        }
        botPlayer();
    });
});
