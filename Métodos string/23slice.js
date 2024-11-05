/*Método .slice():

Este método extrae una parte de una cadena, devuelve la parte extraída en una nueva cadena. No cambia la cadena original. Los parámetros de inicio y fin especifican la parte de la cadena que se va a extraer. La primera posición es 0, la segunda es 1, ...Un número negativo selecciona desde el final de la cadena.*/

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
console.log(str.slice(4, 19));
console.log(str.slice(-4));
console.log(str.slice(-9, -5));
