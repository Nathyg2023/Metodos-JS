/*Método Objeto.isSealed():

Este método determina si un objeto está sellado*/

const object1 = {
    property1: 42,
  };
  
console.log(Object.isSealed(object1));
  
  
Object.seal(object1);
  
console.log(Object.isSealed(object1));









