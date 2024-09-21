//Set 

//Declaracion
let mySet = new Set()
//let mySet2 = {}
//Inicializacion

mySet = new Set(["Osvaldo","Javier","Arrua","32"])


console.log(mySet)

//Metodos comunes

//add y delete Agregar y eliminar elemento

mySet.add("osvaldoarrua.p@hotmail.com")
console.log (mySet)

mySet.delete("32")

console.log(mySet)
console.log(mySet.delete("Osvaldo"))// Elimina el elemento y te confirma con un boolen

// has
//Para verificar si es existe o no el elemento

console.log(mySet.has("Arrua"))
console.log(mySet.has("Osvaldo"))

// size Tamaño

console.log(mySet.size)
console.log(mySet)

//convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

//convertir un array a set

mySet = new Set(myArray)
console.log(mySet)


