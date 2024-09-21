// loops o bucles

// for

for(let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`) // interpolando el indice
}

const numbers = ["a","b","c","d","e"]

for(let i = 0; i < numbers.length; i++) {
    console.log(`elementos : ${numbers[i]}`)
}

// while
let i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

// Bucle infinito
// while(true){
//}

// do while -- Se ejecuta por lo menos 1 vez 
i = 0
do {
    console.log(`Hola ${i}`)
    i++

} while(i<5)

// for of
mySet = new Set(["Osvaldo","Javier","Arrua","32"])

myMap = new Map([

    //clave / Valor
    ["name", "Javier"],
    ["email", "osvaldoarrua.p@hotmail.com"],
    ["age", 33]
])

myString = "¡Hola, JavaScript! "

for (let valor of myMap){
    console.log(valor)
}

for (let valor of mySet){
    console.log(valor)
}

for (let valor of myString){
    console.log(valor)
}

// Buenas praticas

// Break y continue

for(let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    }else if (i == 6) {
        break
    }
    console.log(`Hola ${i}`) // interpolando el indice
}
