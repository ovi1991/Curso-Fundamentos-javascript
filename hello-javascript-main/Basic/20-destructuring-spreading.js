

myArray = [1,2,3,4]

let person = {
    name: "Osvaldo",
    age: 33,
    Alias: "Ovi"
}

myArray.push(5)
console.log(myArray)

let myvalue = myArray[3]
console.log(myvalue)

let myname = person.name
console.log(myname)

// Desestructuración

// Sintaxis Array

let [myvalue0, myvalue1,myvalue2,myvalue3,myvalue4,myvalue5 ]= myArray

console.log(myvalue0)
console.log(myvalue1)
console.log(myvalue2)
console.log(myvalue3)
console.log(myvalue4)
console.log(myvalue5)

// Sintaxis de arrays con valores predeterminados

let [myvalue6, myvalue7,myvalue8,myvalue9,myvalue10,myvalue11 =0 ]= myArray

console.log(myvalue6)
console.log(myvalue7)
console.log(myvalue8)
console.log(myvalue9)
console.log(myvalue10)
console.log(myvalue11)

//Ignorar elementos array

let [myvalue12, ,,myvalue15,myvalue16,myvalue17] = myArray

console.log(myvalue12)
console.log(myvalue15)
console.log(myvalue16)
console.log(myvalue17)

// Sitanxis objets
console.log(person)

let {name, age, Alias } = person
console.log(name)
console.log(age)
console.log(Alias)

// Sintaxis de objets con valores predeterminadosç
let {name2, age2, Alias2, email ="osvaldoarrua.p@hotmail.com" } = person
console.log(name2) // No existe
console.log(age2)  // No existe
console.log(Alias2) // No existe
console.log(email)

// Sintaxis objets con nuevos nombres de variables

let {name: name3, age:age3, Alias:alias3 } = person
console.log(name3)
console.log(age3)
console.log(alias3)

// desestructurar objets anidados

let person3 ={
    name: "Osvaldo",
    age: 33,
    Alias: "Ovi",
    walk: function(){
        console.log("La persona camina")
    },
    job: {
        name: "Programador",
        exp: 1,
        work: function (){
            console.log(`La persona de ${this.exp} de experiencia trabaja`)
        }
    }
}

let {name: name4, job: {name: jobname}}= person3
console.log(name4)
console.log(jobname)

// Propagación (...)

let myArray2 =[...myArray,6,7]

console.log(myArray2)

// Copia de Arrays

let myArray3 = [...myArray] //Copia
console.log(myArray3)

// Conbinación de arrays

let myArray4 = [...myArray,...myArray2,...myArray3]

console.log(myArray4)

// Sintaxis Objets

person6 = {...person,email:"osvaldoarrua.p@hotmail.com"}

console.log(person6)

//copia de objets

person7 ={...person}

console.log(person7)