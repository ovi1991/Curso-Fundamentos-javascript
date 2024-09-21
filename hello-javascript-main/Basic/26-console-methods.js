// Console

// log

console.log("Hola, JavaScript!")

// error

console.error("Este es un mensaje de error,")
console.error("Error al conectarse a la base de datos:",new Error("Conexión fallida"))

// warn

console.warn("Este es un mensaje de advertencia.")

// info

console.info ("Este es un mensaje de informacion adicional.")

// table

let data = [
    ["Ovi",32],
    ["Sara",21]
]

console.table(data)

data = [
    {name:"Ovi", age:32},
    {name:"Sara",age:21}
]

console.table(data)

// group

console.group("Usuario:")
console.log("Nombre: Ovi")
console.log("edad: 32")
console.groupEnd()


//time 

console.time("Tiempo de ejecución 1")

for (let i = 0; i < 10000; i++) {

}

console.time("Tiempo de ejecución 2")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 1")

for (let i = 0; i < 10000; i++) {

}

console.timeEnd("Tiempo de ejecución 2")

// assert

let age = 17
console.assert(age>= 18, " El usuario debe ser mayor de edad")

// count 

console.count("click")
console.count("click")
console.count("click")
console.countReset("click")
console.count("click")

// trace      Seguimiento de pila de ejecucion

function funcA(){
    funcB()

}
function funcB(){
    console.trace("Seguimiento de la ejecucion.")
}

funcA()

// clear 

//console.clear()

