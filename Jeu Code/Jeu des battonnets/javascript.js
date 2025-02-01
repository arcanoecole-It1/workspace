let batonnet = document.querySelectorAll(".allumette");
let button = document.querySelector(".mon-btn");
let choix = 0;
button.addEventListener("click",function() {
   console.log(choix)
   let input = document.getElementById("nombre").value;
   if (input > 3){
      alert("Entrer un chiffre en 1 et 3")
   } else {
      for(let tour=0;tour < input;tour++) {
         batonnet[0].remove();
         batonnet = document.querySelectorAll(".allumette");
      }
   }
   if (choix === 0){
      alert("Tour du joueur 1")
      choix = 1
   }else{
      alert ("Tour du joueur 2")
      choix = 0
   }
})