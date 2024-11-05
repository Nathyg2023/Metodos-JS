/*Método .every():

Este método ejecuta una función para cada elemento de la matriz, devuelve true si la función devuelve verdadero para todos los elementos y false si la función devuelve falso para un elemento, no ejecuta la función para elementos vacíos, no cambia la matriz original.*/

const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));




