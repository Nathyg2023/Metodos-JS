/*Método .matchAll():

Lo utilizamos para encontrar todas las coincidencias de una expresión regular en un string y  devuelve un iterador que proporciona información detallada sobre cada coincidencia, incluyendo la cadena coincidente, los grupos de captura y la posición.*/

const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]



