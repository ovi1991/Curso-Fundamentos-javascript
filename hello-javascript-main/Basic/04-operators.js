// Operadores

// Operadores Aritméticos

let a = 5
let b = 10
console.log (5 + 10) // Suma
console.log (5 - 10) // Resta
console.log (5 * 10) // Multiplicación
console.log (5 / 10) // División

console.log (5 % 10) // Módulo
console.log (5 ** 10) // Exponente

a++  // Incremento
console.log (a)

b-- // Decremento
console.log (b)

// Operadores de asignación

let myVariable = 2
console.log (myVariable)
myVariable += 2
console.log (myVariable)

myVariable += 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

//Operadores de Comparación

console.log (a >b)
console.log (a <b)
console.log (a >=b)
console.log (a <=b)
console.log (a ==b) // Igualdad por valor
console.log (a == 6 ) // Igualdad por Valor
console.log (a == a) // Igualdad por valor
console.log (a === a) // Igualdad por identidad (por tipo y valor)
console.log (a === 6) 
console.log (a === "6")
console.log (a != 6) 
console.log (a !== "6")
console.log (0== false)
console.log (1== false)
console.log (2== false)
console.log (0 == "")
console.log (0 == " ")
console.log (0 == "Hola")
console.log (0 === "")
console.log (undefined == null)
console.log (undefined === null)

// Truthy values (Valores verdaderos)
// Todos los numeroas positivos y negativos menos el 0
// Todas las cadenas de texto menos las vacias
// El boolean True

// Falsy values

// 0
// 0n
// null
// Undefined
// NAN
// El boolean False
// Cadenas de texto vacias

// Operadores lógicos

// and && 
console.log (5>10 && 15 >20)
console.log (5<10 && 15 <20)
console.log (5<10 && 15 >20)

// or (||)

console.log (5>10 || 15 >20)
console.log (5<10 || 15 <20)
console.log (5<10 || 15 >20)

//Not (!)

console.log (!(5>10 && 15 >20))
console.log (!(5>10 || 15 >20))

//Operadores ternarios

const isRaining = false

isRaining ? console.log("Está lloviendo"): console.log(" No Está lloviendo")





