/*Método Objeto.getPrototypeOf():

Este método devuelve el prototipo (es decir, el valor de la propiedad interna [[Prototype]] ) del objeto especificado*/

const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);

const person = {
    name: 'John',
    age: 30
  };
  
const prototypeOfPerson = Object.getPrototypeOf(person);
  
console.log(prototypeOfPerson);

