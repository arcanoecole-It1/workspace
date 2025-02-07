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