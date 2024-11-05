/*Método Objeto.hasOwn():

Este método regresa true si el objeto especificado tiene la propiedad indicada como propiedad propia . Si la propiedad se hereda o no existe, el método devuelve false*/

const object1 = {
  prop: 'exists',
  edad: 20,
};

console.log(Object.hasOwn(object1, 'prop'));
console.log(Object.hasOwn(object1, 'edad'));
console.log(Object.hasOwn(object1, 'toString'));
console.log(Object.hasOwn(object1, 'undeclaredPropertyValue'));

