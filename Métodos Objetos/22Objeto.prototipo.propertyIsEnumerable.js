/*Método Objeto.prototipo.propertyIsEnumerable():

Este método devuelve un booleano que indica si la propiedad especificada es propiedad propia enumerable de este objeto*/

const object1 = {};
const array1 = [];
object1.property1 = 42;
array1[0] = 42;

console.log(object1.propertyIsEnumerable('property1'));
console.log(array1.propertyIsEnumerable(0));
console.log(array1.propertyIsEnumerable('length'));










