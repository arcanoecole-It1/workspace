//Exercise 1
let number = 1;
if (number > 0) {
    console.log("Le nombre est positif");
}
//Exercise 2
let age = 13;
if (age >= 18) {
    console.log("Vous etes majeur");
} else {
    console.log("Vous etes mineur");
}
//Exercise 3
let temperature = 20;
if(temperature < 0) {
    console.log("IL gele");
} else if (temperature >= 0 && temperature <= 20) {
    console.log("Il fait frais");
} else if (temperature > 20) {
    console.log("Il fait chaud");
}
//Exercise 4
let note = 4;
switch(note){
    case(1): 
        console.log("Faible");
        break
    case(2):
        console.log("un peu");
        break
    case(3): 
        console.log("Moyen");
        break
    case(4):
        console.log("Bien");
        break
    case(5):
        console.log("Tres bien");
        break
    default:
        console.log("Note inconnue")
}
//Exercise bonus 1
let nb = 3;
if ( nb/2 == 0) {
    console.log("Le nombre est paire");
} else {
    console.log("Le nombre est impaire");
}
//Exercise bonus 2
let year = 2400;
if(year/4 && !year/100 || year/400) {
    console.log("Anner bissextile");
} else {
    console.log("Anner non bissextile");
}
//Exercise bonus 3
let age1 = 23;
if (age1 < 12 && age1 > 65) {
    console.log("Entrer gratuite");
} else {
    console.log("Entrer payante");
}
//Exercise bonus 4
let note1 = 16;
switch(note1){
    case( note1 < 10): 
        console.log("Echec");
        break
    case(note1 >= 10 || note1 <= 14): 
        console.log("Passable");
        break
    case(note1 >= 15 || note1 <= 18): 
        console.log("bien");
        break
    case(note1 >= 18): 
        break
}
//Exercise bonus 5
let password = "Richard123";
if (password.length >= 8 ) {
    console.log("Mot de passe correct")
} else {
    console.log("Mot de passe invalide");
}
//Exercise bonus 6
let number1 = 3
if (number1 < 0) {
    console.log("Nombre negatif");
} else if (number1 = 0) {
    console.log("Nombre egal 0");
} else {
    console.log("Nombre positif");
}
//Exercise bonus 7
let firstname1 = "Richard"
if (firstname1.length >= 5){
    console.log("Long")
} else {
    console.log("Court");
    
}
