export function hola (){
    console.log("Mi primer mensaje enviado por modulos")
}
// ejercicio 1: contar caracteres en una cadena de texto
export function cuentaCaracter (cadena){
let a = cadena.length
console.log(a)
}
//ejercicio 2: recortar caracteres en una cadena de texto
export function recortataCaracter (cadena1,num){
    let nuevaCadena = ""
    for(let i=0; i<num; i++)
    {
        nuevaCadena += cadena1.charAt(i)
        
    }
    console.log(nuevaCadena)
    }
//ejercicio 3: convertir una cadena de string en un array donde cada espacio separa los elementos
export function convertArray (cadena2){
    let nuevaCadena = " "
    const array1 = []
    for(let i=0; i<cadena2.length; i++)
    {
        if(cadena2.charAt(i)!== " ") {
            nuevaCadena += cadena2.charAt(i)
            if(i == cadena2.length-1) {
                array1.push(nuevaCadena)
            }
        }
        else{
                array1.push(nuevaCadena)
                nuevaCadena = " "
        }
        console.log(nuevaCadena)
    }
    console.log(array1)
    }
//ejercicio 4: Repetir una cadena tantas veces como se pida 
export function repetirCadena (cadena3,num1){
    let cadena = " "
for(let i=0; i<num1; i++){
    cadena += `${cadena3} `
}
console.log(cadena)
    }