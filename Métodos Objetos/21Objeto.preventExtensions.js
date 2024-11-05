/*Método Objeto.preventExtensions():

Este método se utiliza para evitar que se añadan nuevas propiedades a un objeto, una vez que un objeto ha sido "prevenido de extensiones", no se pueden agregar más propiedades a ese objeto. Sin embargo, las propiedades existentes aún pueden ser modificadas o eliminadas*/

const object1 = {};

Object.preventExtensions(object1);

try {
  Object.defineProperty(object1, 'property1', {
    value: 42,
  });
} catch (e) {
  console.log(e);
}

const person = {
  name: 'John',
  age: 30
};

Object.preventExtensions(person);

person.city = 'New York'; // Esta propiedad no se agregará

console.log(person);










