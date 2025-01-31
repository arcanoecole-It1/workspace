let buttons = document.querySelectorAll(".btn")
let calcul = document.querySelector(".ecran");
buttons.forEach((button) => {
    console.log(button.textContent)
    button.addEventListener("click" , () => {
        if(calcul.textContent === '0') {
            calcul.textContent = button.textContent
        } else {
            calcul.textContent += button.textContent 
            let valeur = calcul.textContent
        }
    })
})

let del = document.querySelector(".remove");
del.addEventListener("click", () => {
    if (calcul.textContent === calcul.textContent)
        calcul.textContent = calcul.textContent.slice(0, -1);
})
