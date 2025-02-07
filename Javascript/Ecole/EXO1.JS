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