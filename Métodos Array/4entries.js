/*Método .entries():

Este método devuelve un objeto Array Iterator con pares clave/valor para cada índice de la matriz*/

const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
console.log(iterator1.next().value);
console.log(iterator1.next().value);
console.log(iterator1.next().value);

var a = ["a", "b", "c"];
var iterator = a.entries();

for (let e of iterator) {
  console.log(e);
}