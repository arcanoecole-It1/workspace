const buttons = document.querySelectorAll(".button");
const symbols = document.querySelectorAll(".special");
let calcul = document.querySelector(".ecran");
buttons.forEach( btn => {
    btn.addEventListener("click" , () => {
        calcul.textContent += btn.textContent
    })
})

symbols.forEach(symbol => {
    symbol.addEventListener("click", valueInput)
    switch (symbol.textContent) {
        case "+":
            addition();
            break;
    }
})

function valueInput() {
    symbols.forEach(sym => {
        let value = calcul.textContent;
        calcul.textContent = sym.textContent;
        return parseInt(value);
    })

}

function addition() {
    let total = 0;
    let values = valueInput();
    total += values;
    return console.log(total);
}