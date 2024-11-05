/*0:

Este método devuelve una matriz de cualquier objeto con una propiedad de longitud,  devuelve una matriz de cualquier objeto iterable.

Sintaxis: Array.from(object, mapFunction, thisValue)*/

//Matriz de una cadena:
console.log(Array.from('foo'));
console.log(Array.from([1, 2, 3], (x) => x + x));

const set = new Set(["foo", "bar", "baz", "foo"]);
console.log(Array.from(set));





