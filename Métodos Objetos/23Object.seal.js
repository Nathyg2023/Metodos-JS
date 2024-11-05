/*Método Object.seal():

Este método sella un objeto, evita extensiones y hace que las propiedades existentes no sean configurables, no se pueden agregar nuevas propiedades, las propiedades existentes no se pueden eliminar, su enumerabilidad y configurabilidad no se pueden cambiar y su prototipo no se puede reasignar, devuelve el mismo objeto que se pasó*/

const object1 = {
  property1: 42,
};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);

delete object1.property1;
console.log(object1.property1);









