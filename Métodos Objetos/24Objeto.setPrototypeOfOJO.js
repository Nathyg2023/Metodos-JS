/*Método .setPrototypeOf():

Este método lo utilizo para cambiar el prototipo de un objeto existente.
Prototipo: determina qué propiedades y métodos hereda el objeto de otro objeto

Sintaxis: Object.setPrototypeOf(objeto, nuevoPrototipo)
- objeto: El objeto al cual se le cambiará el prototipo.
- nuevoPrototipo: El objeto que se convertirá en el nuevo prototipo del objeto dado.*/

const obj = {};
const parent = { foo: 'bar' };

console.log(obj.foo);
// Expected output: undefined

Object.setPrototypeOf(obj, parent);

console.log(obj.foo);
// Expected output: "bar"













































































