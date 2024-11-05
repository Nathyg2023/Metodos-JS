/*Método .flatMap():

Este método asigna todos los elementos de la matriz y crea una nueva matriz plana, crea una nueva matriz llamando a una función para cada elemento de la matriz, no ejecuta la función para elementos vacíos.
Sintaxis: array.flatMap(function(currentValue, index, arr), thisValue)*/

const arr1 = [1, 2, 1];

const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 3));

console.log(result);


const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);

console.log(newArr)
