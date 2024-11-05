/*Método .filter:

crea una copia superficial de una parte de una matriz dada, filtrada solo a los elementos de la matriz dada que pasan la prueba implementada por la función proporcionada.

SINTAXIS: filter(callbackFn, thisArg)
filter(callbackFn, thisArg)*/

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);




