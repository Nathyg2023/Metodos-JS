/*Método .flat():

Este método concatena elementos de subarreglo, crea una nueva matriz con todos los elementos de la sub-matriz concatenados recursivamente hasta la profundidad especificada*/

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));




