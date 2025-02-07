let buttons = document.querySelectorAll(".button")
let calcul = document.querySelector(".ecran");
buttons.forEach((button) => {
    button.addEventListener("click" , () => {
        if(calcul.textContent === '0') {
            calcul.textContent = button.textContent
        } else {
            calcul.textContent += button.textContent 
            let valeur = calcul.textContent
        }
    })
})

let operation = document.querySelector('.add');
add.addEventListener('click', function(){
    let result = 0;
    parseInt(calcul.textContent) 
})

