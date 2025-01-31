let btnG = document.getElementById("gras")
btnG.addEventListener("click",function() {
    let text = document.getElementById("text")
    text.classList.add("gras")
})
let btnI = document.getElementById("italique")
btnI.addEventListener("click",function(){
    let text = document.getElementById("text")
    text.classList.add("ital")
})

let colorRed = document.getElementById("red")
colorRed.addEventListener("click",function(){
    let text = document.getElementById("text")
    text.classList.add("color3")
})