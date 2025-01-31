function display(){
    console.log("Bonjour")
}
display()

function calcul (number1,number2) {
    console.log(number1+number2);
}

calcul(2,5)

function moyenne(nb1,nb2,nb3) {
    let result = (nb1 + nb2 + nb3)/3
    console.log(result)
    if(result >= 10){
        console.log("Admis")
    } else {
        console.log("Recaler");
        
    }
}

moyenne(12,14,9)
//exo4
function premier(entrer) {
    if (entrer > 1){
        for(let i = 2; i<=entrer-1;i++) {
            if(entrer%i == 0){
                console.log('Divisible par ' + i +" Donc n'est pas un nombre premier")
            } else {
                console.log("C'est un nombre premier");
            }
        }
    } else{
        console.log("Entrer un nombre superieur a 1")
    }
}
var entrer = prompt("Entrer le nombre")
premier(entrer)

// ExosBonus 1
function pair(nb){
    if(nb%2 == 0){
        console.log(`Le nombre ${nb} est pair`);
        return true
    } else{
        console.log(`Le nombre ${nb} est impaire`)
        return false
    }
}

pair(3);
//ExosBonus 2
function air(longueur,largeur){
    let aire = longueur * largeur
    console.log(aire)
}

air(3,5)

function convertion(Celsius) {
    let Fahrenheit = Celsius * 59 + 32
    console.log(Fahrenheit)
}

convertion(34)
//ExosBonus 4
function grand(num1,num2,num3) {
    let compteur = 1
    while(compteur>num1){
        if(compteur>num2){
            compteur= num2
        }
    }
}