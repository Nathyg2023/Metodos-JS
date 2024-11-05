/*Método .concat(): 

Este método lo utilizamos para combinar o concatenar dos cadenas y nos devuelve una nueva cadena, en caso de que los argumentos no sean de tipo cadena, al momento de concatenar se vuelven cadena*/

const string1 = "Hola"
const string2 = "¿Cómo estás?"
const number = '5'

const resultado1 = string1.concat(' ', string2)
const resultado2 = string2.concat(' ', string1)
const resultado3 = number.concat(' ', string1)

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
  