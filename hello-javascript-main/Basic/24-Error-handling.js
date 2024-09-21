// Excepiòn

// Produce una excepciòn
let myObjets
//console.log(myObjets.email)

// Captura de errores 

// try-catch

try {
    console.log(myObjets.email)
    console.log("Finaliza la ejecucion")
    

} catch {
    // Bloque de error
    console.log("Finaliza la ejecucio despues del errores")

}

// Captura del error

try {
    console.log(myObjets.email)
} catch (error) {
    // Bloque de error
    console.log("Finaliza la ejecucio despues del errores",error.message)

}

// finally   // Tener un codigo que se ejecuta siempre

try {
    console.log(myObjets.email)
} catch {
    // Bloque de error
    console.log("Finaliza la ejecucio despues del errores")

} finally{
    console.log("Este codigo se ejecuta siempre")
}


// Lanzamiento de errores

// throw
// throw new Error("Se ha producido un error");


function sumIntegers(a,b) {
// if (typeof a=== "number") {
// console log ("Es un nùmero")
//} 
    if (typeof a !== "number" || typeof b !== "number"){
        throw new TypeError("Esta operacion sólo suma números");
    }

    if (!Number.isInteger(a) || !Number.isInteger (b)){
    throw new Error("Esta operacion solo suma numeros enteros")
    }
    if (a==0 || b == 0) {
        throw new SumZeroIntegersError("Se esta intentando sumar 0", a , b)
        

    }
    return a + b
}

try  {
        console.log  (sumIntegers(5, 10))
    //console.log  (sumIntegers(5.5, 10))
    console.log  (sumIntegers("5", 10))
    //console.log  (sumIntegers(5, "10"))
    //console.log  (sumIntegers("5", "10"))
} catch (error) {
    console.log("Se ha producido un error:",error.message)
}

// Capturar varios tipos de errores

try  {
    
console.log  (sumIntegers(5.5, 10))
//console.log  (sumIntegers("5", 10))
} catch (error) {
    if (error instanceof TypeError){
        console.log("Se ha producido un error de tipo:",error.message)

    } else if (error instanceof Error) {
        console.log("Se ha producido un error:",error.message)
    }

}
// Crear excepciones personaizadas

class SumZeroIntegersError extends Error {
    constructor (message, a,b) {
        super(message)
        this.a= a
        this.b= b
    }
    printNumbers(){
        console.log(this.a,"+",this.b)
    }
}

try {
    console.log (sumIntegers(0,10))
} catch (error) {
    console.log("Se ha producido un error:",error.message)
    error.printNumbers()
} 
