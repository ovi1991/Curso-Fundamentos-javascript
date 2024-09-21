// Funciones 

//Simple
function myFunc(){
    console.log("hola, función!")
}

for (let i = 0 ;i<5;i++){
    myFunc()
}

// Con Parametros

function myFuncWithParams(name){
    console.log(`!hola, ${name}!`)

}
myFuncWithParams("Ovi")

// Funciones anonimas 

const myFunc2 = function(name) {
    console.log(`!hola, ${name}!`)

}
myFunc2("osvaldo Arrua")

// Arrow functions

const myfunc3 = (name) => {
    console.log(`!hola, ${name}!`)
}
myfunc3("Osvaldo Arrua")

//Parámetros

function sum(a,b) {
    console.log(a+b)
}
sum(5,10)

// Valores por defecto

function defaultsum(a =4,b=4) {
    console.log(a+b)
}
defaultsum()

// Retorno de valores
function mult(a,b) {
    return a*b
}
let result =mult(5,10)
console.log(result)
// Funciones anidadas

function extern(){
    console.log("Funcion externa")
    function intern() {
        console.log("función interna")
        
    }
}

extern()

// Funciones de ordren superior

function applyFunc(func,param){
    func(param)
}
applyFunc(myfunc3,"Osvaldo Arrua")

// forEach

myArray = [1,2,3,4]

mySet = new Set(["Osvaldo","Javier","Arrua","32"])
myMap = new Map([

    //clave / Valor
    ["name", "Javier"],
    ["email", "osvaldoarrua.p@hotmail.com"],
    ["age", 33]
])

myArray.forEach((value)=> console.log(value))
mySet.forEach((value)=> console.log(value))
myMap.forEach((value)=> console.log(value))