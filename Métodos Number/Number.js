//Permite representar y manipular valores numéricos, contiene constantes y métodos para trabajar con números.
//Cualquier dato de otro tipo, puede ser convertido a números usando la función Number(), y si el valor no puede ser convertido en números, devuelve NaN

const itIsNumber = (num)=>{
    return Number(num)
}

console.log(itIsNumber("string"))
console.log(itIsNumber("30"))
console.log(itIsNumber(30))
console.log(itIsNumber([30]))