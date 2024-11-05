/*Método Object.defineProperty()):

Este método estático define una nueva propiedad directamente en un objeto o modifica una propiedad existente en un objeto y devuelve el objeto*/

const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false,
});

console.log(object1.property1);
