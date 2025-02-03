//Exos1
let books = {
    title : "Book",
    author: "Author",
    year : "Year",
}
console.log(books)
//Exos2
let movie = {
    title : "Movie",
    year : "Year",
    author: "Author",
}
movie.year = '2011'
movie.gender = 'Female'
for (const key in movie) {
    console.log(`${key}: ${movie[key]}`)
}
//Exos3
let calculator = {
    number1 : 1,
    number2 : 2,
    addition: function() {
        let add = calculator.number1 + calculator.number2
        console.log(add);
    }
}
calculator.addition()
//Exos4
let car = {
    brand:'bmw',
    model: 'AK-47',
    year: '202&',
    displayInfo: function() {
        console.log(`Cette voiture est une ${car.brand} model ${car.model} de l'an ${car.year}`);
    }
}
car.displayInfo();
// Exos5
let students = {
    name: "Student",
    age: 21,
    grades : [1,2,3,4],
    averageGrades : () => {
        students.grades.forEach(grade =>{
            let somme = 0
            somme += grade
            console.log(somme)
        })
        let moyenne = somme / students.grades.length
        console.log(moyenne)
    }
}
students.averageGrades()