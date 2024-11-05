/*Método .findLastIndex():

Este método itera la matriz en orden inverso y devuelve el INDICE del primer elemento que satisface la función de prueba proporcionada. Si ningún elemento satisface la función de prueba, se devuelve -1.
Sintaxis: findIndex(callbackFn, thisArg)*/

const array1 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array1.findLastIndex(isLargeNumber));




