/*Método Objeto.isFrozen():

Este método determina si un objeto está congelado*/

const object1 = {
    property1: 42,
  };
  
  console.log(Object.isFrozen(object1));
  
  Object.freeze(object1);
  
  console.log(Object.isFrozen(object1));






