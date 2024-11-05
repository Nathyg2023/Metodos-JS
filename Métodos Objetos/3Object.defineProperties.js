/*Método Object.defineProperties():

Este método define nuevas propiedades o modifica las existentes directamente en el objeto, devolviendo el objeto

Sintexis: Object.defineProperties(obj, propiedades)*/

const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});

console.log(object1.property1);


