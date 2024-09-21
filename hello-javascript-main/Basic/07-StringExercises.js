// 1. Concatena dos cadenas de texto
let nombre = "Ovi"
let apellido= "Arrua"
let saludos= "Como Estas!! " + nombre + apellido
console.log(saludos)
// 2. Muestra la longitud de una cadena de texto
console.log(saludos.length)
// 3. Muestra el primer y último carácter de un string
console.log(saludos[0])
console.log(saludos[20])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(saludos.toLocaleLowerCase())
console.log(saludos.toLocaleUpperCase())
// 5. Crea una cadena de texto en varias líneas
let saludos2= `hola
como estas`
console.log(saludos2)

// 6. Interpola el valor de una variable en un string
let number= 602508387
console.log(`hola, ${nombre}! tu numero es ${number}`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
let cadena = "hola holA"
    
let nueva = cadena.replace(" ","-")
    
//console.log(nueva)
// 8. Comprueba si una cadena de texto contiene una palabra concreta

// 9. Comprueba si dos strings son iguales
console.log(saludos2==cadena)
// 10. Comprueba si dos strings tienen la misma longitud
console.log(saludos2===cadena)
if (cadena.length==nueva.length){
    console.log(true)
}else{
    console.log(false)
}
console.log(cadena.length)
console.log(nueva.length)