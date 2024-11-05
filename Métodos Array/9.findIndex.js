/*Método .findIndex:

Este método ejecuta una función para cada elemento de la matriz, devuelve el índice (posición) del primer elemento que pasa una prueba, devuelve -1 si no se encuentra ninguna coincidencia. Este método no ejecuta la función para elementos de matriz vacíos, no cambia la matriz original.
Sintaxis: findIndex(callbackFn, thisArg)*/

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber1 = (element) => element > 13;
const isLargeNumber2 = (element) => element > 135;

console.log(array1.findIndex(isLargeNumber1));
console.log(array1.findIndex(isLargeNumber2));



