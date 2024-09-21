// Map

// Declaracion

let myMap = new Map()

console.log(myMap)

// Inicialización

myMap = new Map([

    //clave / Valor
    ["name", "Javier"],
    ["email", "osvaldoarrua.p@hotmail.com"],
    ["age", 33]
])

console.log(myMap)

//Metodos y propiedades

// set *Agrega elementos y actualiza elementos-- 
//si la clave no existe añade un nuevo valor y si existe lo actualiza

myMap.set("alias", "Ovi")
myMap.set("name", "Osvaldo")

console.log(myMap)

//get *Recupera el valor

console.log(myMap.get("name"))

// has *Comprobar si existe un clave

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

//delete

myMap.delete("email")

console.log(myMap)

//keys *Retorna el listado con solo las claves

console.log(myMap.keys())
//value *Retorna el listado con solo las claves

console.log(myMap.values())

//entreis *Retorna todo el listado

console.log(myMap.entries())

//size * Retorna el tamaño de map
console.log(myMap.size)


// Clear *Borrar todo el map

myMap.clear()

console.log(myMap)




