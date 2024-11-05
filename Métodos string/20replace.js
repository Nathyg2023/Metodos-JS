/*Método .replace():

Este método me ayuda a buscar en una cadena un valor o una expresión regular y me devuelve una nueva cadena con los valores reemplazados, no cambia la cadena original.

NOTA:Si reemplaza un valor, solo se reemplazará la primera instancia. Para reemplazar todas las instancias, use una expresión regular con el conjunto de modificadores g*/

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));


const regex = "Mr Blue has a blue house and a blue car";
console.log(regex.replace(/blue/gi, "red"));

// Replace con expresión regular:(No distingue entre mayúscula y minúscula)
const str = "Twas the night before Xmas...";
const newstr = str.replace(/xmas/i, "Christmas");
console.log(newstr);
//El reemplazo global solo se puede hacer con una expresión regular
const re = /apples/gi;
const str1 = "Apples are round, and apples are juicy.";
const newstr1 = str1.replace(re, "oranges");
console.log(newstr1); 

//Cambiar palabras en una cadena:
const re2 = /(\w+)\s(\w+)/;
const str2 = "Maria Cruz";
const newstr2 = str2.replace(re2, "$2, $1");
console.log(newstr2);





