// Strings

//Concatenacion de cadenas

let myName ="Osvaldo"
let greeting = "Hola," + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

//Acceso a Caracteres

console.log(greeting[0])

//Métodos comunes 

console.log(greeting.toUpperCase())
console.log(greeting.toLocaleLowerCase())
console.log(greeting.indexOf("Osvaldo"))
console.log(greeting.includes("Osvaldo"))
console.log(greeting.slice(0,10))
console.log(greeting.replace("Osvaldo","Javier"))

//Templete literals (plantillas literales)

let message = `Hola este es mi 
curso JavaScript`
console.log(message)

let email = "osvaldoarrua.p@hotmail.com"

console.log(`Hola, ${myName}! Tu email es ${email}`)