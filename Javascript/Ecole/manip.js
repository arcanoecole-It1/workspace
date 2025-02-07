//EXO1
let fruits = ['pomme','ananas','mangue'];
fruits.push('papaye');
fruits.unshift('kiwi')
fruits.pop()
fruits.forEach(fruit => {
    console.log(fruit)
});
//Exos2
let table = [2,5,8,12,19];
console.log("La Position de 8 est " + table.indexOf(8));
table.splice(2,1,15)
table.forEach((nb => {
    console.log(nb)
}))
// Exos3
let value = [1,4,7,10,13,16];
value.forEach((elt => {
    if (elt > 7){
        val = elt * 2
        console.log(val)
    }
}))