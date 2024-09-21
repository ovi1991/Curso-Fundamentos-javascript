// Objets

// Sintaxis

let person = {
    name: "Osvaldo",
    age: 33,
    Alias: "Ovi"
}

// Acceso a propiedades

//Notacion punto
console.log(person.name)

// Notacion de corchetes
console.log(person["name"])

//Modificacion de propiedades

person.name = "Osvaldo Arrua"
console.log(person.name)

person.age = "37"
console.log(person.age)

//Eliminar propiedades

delete person.age

console.log(person)

// Nueva propiedad

person.email = "osvaldoarrua.p@hotmail.com"
person["age"] = 37

console.log(person)

// Metodos (funciones)

let person2 ={
    name: "Osvaldo",
    age: 33,
    Alias: "Ovi",
    walk: function(){
        console.log("La persona camina")
    }
}
person2.walk()

// Anidacion de objets

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
person3.job.work()

// Igualdad de objets



let person4 = {
    name: 'Osvaldo Arrua',
    Alias: 'Ovi',
    email: 'osvaldoarrua.p@hotmail.com',
    age: 37
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name)

// Iteracion

for (let key in person4) {
    console.log(key + ": " + person4[key])
}

// Funciones como objets

function Person(name, age) { //Deberia ser una clase
    this.name = name
    this.age = age

}

let person5 = new Person("brais",37)
console.log(person5)

console.log(typeof person5)
console.log(typeof person4)