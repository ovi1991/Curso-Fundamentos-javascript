// 1. Crea una variable para cada operación aritmética
a=15
b=10
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
let numa = 32
let numd=33
let nume=33
console.log(numa>numd)
console.log(a>c)
console.log(c>b)
console.log(d>=b)
console.log(d==e)
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a>d)
console.log(a<c)
console.log(c<b)
console.log(d<=b)
console.log(d==c)


// 5. Utiliza el operador lógico and
console.log (a<d && d==e)
// 6. Utiliza el operador lógico or
console.log (a<d || d>e)
// 7. Combina ambos operadores lógicos
console.log ((a<d || d==e) && (a<d&&c<d))
// 8. Añade alguna negación
console.log (!(a>d && b >e))
// 9. Utiliza el operador ternario
const itIsSunny = false
itIsSunny? console.log("Esta soleado"): console.log("No esta soleado")

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log((5*10 < 10+10 && 2*5 == 10 )|| c<d)