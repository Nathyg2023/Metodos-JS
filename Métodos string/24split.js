/*Método .split():

Este método extrae una parte de una cadena, devuelve la parte extraída en una nueva cadena. No cambia la cadena original. Los parámetros de inicio y fin especifican la parte de la cadena que se va a extraer. La primera posición es 0, la segunda es 1, ...Un número negativo selecciona desde el final de la cadena.*/

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[4]);

const chars = str.split('');
console.log(chars[8]);

const strCopy = str.split();
console.log(strCopy);

const arr = "2"

const result = arr.split('')
console.log(result);