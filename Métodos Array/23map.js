/*Método .map():

Este método crea una nueva matriz llamando a una función para cada elemento de la matriz, no ejecuta la función para elementos vacíos, me devuelve una nueva matriz en la que cada elemento es el resultado de la función de devolución de llamada.
Sintaxis:map(callbackFn, thisArg) */

const animals = ['Dodo', 'Tiger', 'Penguin', 'Monkey'];
const array1 = [1, 4, 9, 16];

const map1 = array1.map((x) => x * 2);

console.log(map1);













