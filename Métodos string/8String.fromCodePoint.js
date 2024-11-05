/*Método  .fromCodePoint()

Este método es estático y devuelve una cadena creada a partir de la secuencia especificada de puntos de código.*/

const codePoint = (x, b) => {
    return String.fromCharCode(x, b)
}

console.log(codePoint(65, 90))
console.log(codePoint(9731, 9733, 9842, 0x2f804))



  