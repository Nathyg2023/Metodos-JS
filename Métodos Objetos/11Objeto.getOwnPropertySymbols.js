/*Método Objeto.getOwnPropertySymbols():

Este método me devuelve una matriz de todas las propiedades de los símbolos que se encuentran directamente en un objeto determinado*/

const object1 = {};
const a = Symbol('a');
const b = Symbol.for('b');
const c= Symbol('c')

object1[a] = 'localSymbol';
object1[b] = 'globalSymbol';
object1[c] = 'globalSymbol';

const objectSymbols = Object.getOwnPropertySymbols(object1);

console.log(objectSymbols.length);
console.log(objectSymbols);
console.log(objectSymbols[0])



