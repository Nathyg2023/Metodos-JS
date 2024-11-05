/*Método Objeto.getOwnPropertyDescriptors():

Este método  permite obtener un objeto que contiene todas las descripciones de propiedades de un objeto. Esto incluye información detallada sobre todas las propiedades enumerables y no enumerables, así como sus configuraciones y características individuales*/

const object1 = {
  property1: 42,
};

const descriptors1 = Object.getOwnPropertyDescriptors(object1);

console.log(descriptors1.property1.writable);
console.log(descriptors1.property1.value);
console.log(descriptors1.property1.enumerable);
console.log(descriptors1.property1.configurable);



