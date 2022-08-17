var weidht
//tipo da variavel acima
console.log(typeof weidht)

var name = "Mike"
var age = 15
var stars = 8.5
var isSubscribed = true

let studant = {
    name: "Romero",
    age: 25,
    stars: 4.5,
    isSubscribed: true,
    weidht: 80,
}
console.log(typeof studant)
console.log(studant.name + "de idade " + studant.age + "pesa " + studant.weidht + "kg.")

let studants = []

studants = [studant]
console.log (studants)

console.log (studants[0])

let studant1 = {
    name: "Mikalateia",
    age: 24,
    stars: 4.5,
    isSubscribed: true,
    weidht: 55,
}
studants[1] = studant1
console.log (studants)