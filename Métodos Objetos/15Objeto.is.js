/*Método Objeto.is():

Este método determina si dos valores son iguales*/

console.log(Object.is('1', 1));
console.log(Object.is(NaN, NaN));
console.log(Object.is(-0, 0));

const obj = {};
console.log(Object.is(obj, {}));




