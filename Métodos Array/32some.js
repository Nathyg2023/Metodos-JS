/*Método .some():

Este método comprueba si al menos un elemento de la matriz pasa la prueba implementada por la función proporcionada, regresa true(y se detiene) si la función regresa true para uno de los elementos de la matriz, regresa false si la función regresa false para todos los elementos de la matriz, no ejecuta la función para elementos de matriz vacíos*/

const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;

console.log(array.some(even));















