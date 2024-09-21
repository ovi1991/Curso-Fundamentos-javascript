// array
// Declaracion

let myArray = [1,2,3,4]
let myArray2 = new Array()

myArray2 = new Array(3)
myArray2[0] = "Osvaldo"
myArray2[1] = "Arrua"
myArray2[2] = "ovidev"

console.log(myArray2)

myArray = []
myArray[0] = "Osvaldo"
myArray[1] = "Arrua"
myArray[2] = "ovidev"

console.log(myArray)

//Metodos comunes

myArray = []

// push y pop

myArray.push("Osvaldo")
myArray.push("Arrua")
myArray.push("Maidana")
myArray.push("32")

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

myArray.shift() // Elimina el primer elemento
console.log(myArray)

myArray.unshift("osvaldo") //Agregar 1 o mas elementos
console.log(myArray)

// length

console.log(myArray.length)

//clear formas de borrar el array

//myArray = []
//myArray.length = 0 
//console.log(myArray)

// slice Una copia de un elemento
myArray = ["Osvaldo","arrua","Maidana",32]

let myNewArray = myArray.slice(1, 5)

console.log(myArray)
console.log(myNewArray)

//splice elimina contenido del array 
myArray.splice(1, 2)
console.log(myArray)

myArray = ["Osvaldo","arrua","Maidana",32]
myArray.splice(1,2,"nueva entrada")
console.log(myArray)