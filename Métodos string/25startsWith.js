/*Método .startsWith():

Este método me devuelve true si una cadena comienza con una cadena especificada, de lo contrario vuelve false y distingue entre mayúsculas y minúsculas.*/

const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
console.log(str1.startsWith('Sat', 3));
console.log(str1.startsWith('day', 5));

const str = "To be, or not to be, that is the question.";

console.log(str.startsWith("To be"));
console.log(str.startsWith("not to be"));
console.log(str.startsWith("not to be", 10));