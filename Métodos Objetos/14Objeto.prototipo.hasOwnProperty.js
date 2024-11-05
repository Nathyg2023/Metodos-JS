/*Método Objeto.prototipo.hasOwnProperty():

Este método devuelve un valor booleano que indica si este objeto tiene la propiedad especificada como propiedad propia (en lugar de heredarla)*/

const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
console.log(object1.hasOwnProperty('toString'));
console.log(object1.hasOwnProperty('hasOwnProperty'));

