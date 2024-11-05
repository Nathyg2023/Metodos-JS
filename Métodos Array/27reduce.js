/*Método .reduce():

Este método ejecuta una función reductora para el elemento de matriz, devuelve un único valor: el resultado acumulado de la función
Sintaxis: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)*/

const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);












