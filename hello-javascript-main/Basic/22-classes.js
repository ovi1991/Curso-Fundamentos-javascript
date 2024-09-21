// Clases

class Person {

    constructor(name,age,alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

//Sintaxis
let person = new Person ("Osvaldo", 37, "Ovi")
let person2 = new Person ("Osvaldo", 37, "Ovi")

console.log(person)
console.log(person2)

console.log(typeof person)

// Valores por defecto


class DefaultPerson {

    constructor(name = "Sin nombre",age = 0,alias= "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }
}
let person3 = new DefaultPerson ("osvaldo",32)

console.log(person3)

// Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])

// Modificar Valores

person3.alias = "ovi"

console.log(person.alias)

// Funciones en clases

class PersonwithMethod {

    constructor(name,age,alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
    walk() {
        console.log ("La persona Camina.")
    }
}

let person4 = new PersonwithMethod ("Osvaldo", 37 , "Ovi")
person4.walk()

// Propiedades privadas 

class PrivatePerson {
    #bank

    constructor(name,age,alias,bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank

    }
    pay(){
        this.#bank
    }
}
let person5 = new PrivatePerson ("Osvaldo", 37 , "Ovi","IBAN123456")

console.log(person5.bank)

// Getters y Setters

class GetPerson {

    #name
    #age
    #alias
    #bank1

    constructor(name,age,alias) {
        this.#name = name
        this.#age = age
        this.#alias = alias
    }
    get name() {
        return this.#name
    }

}

person6  = new GetPerson("Osvaldo",37,"Ovi")

console.log(person6)
console.log(person6.name)

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name,age,alias,bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }
    get name() { // Acceder a Valor
        return this.#name
    }
    set bank(newBack) {
        this.#bank =  newBack
    }

}

person7  = new GetSetPerson ("Osvaldo",37,"Ovi","IBAN123456")


console.log(person7)
console.log(person7.name)

person7.bank = "newIBAN123456"
console.log(person7.bank)

// Herencia

class Animal {

    constructor(name){
        this.name = name
    }

    sound() {
        console.log("Emite un sonido genèrico")     // Reescribir 
    }
}

class Dog extends Animal {

    sound() {
        console.log("Guau!!")
    }

    run() {
        console.log("El perro corre")
    }
}

class Fish extends Animal {

    constructor (name, size) {
        super(name)
        this.size = size
    }

    swin() {
        console.log("El pez nada")
    }
}

let myDog = new Dog("OviDog")
myDog.run()
myDog.sound()

let myFish = new Fish("OviFish", 10)
myFish.swin()
myFish.sound()

// Mètodos estàticos 


class MathOperations {
    static sum(a,b) {
        return a + b
    }

}

console.log(MathOperations.sum(5,10))