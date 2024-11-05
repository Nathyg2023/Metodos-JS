/*Método .repeat():

Este método recibe un parametro desde 0 al infinito que es el número de veces que se repite la cadena y me devuelve una nueva cadena que contiene el número especificado de copias de la cadena dada.*/

const mood = 'Happy! ';

console.log(`I feel ${mood.repeat(3)}`);
console.log(mood.repeat(2));

"abc".repeat(-1); // RangeError
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
"abc".repeat(1 / 0);






