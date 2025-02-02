function botPlayer() {
boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (box.textContent === '') {
            box.textContent = 'O';
        }
    });
})
}