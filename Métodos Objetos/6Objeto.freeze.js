/*Método Objeto.freeze():

Este método impide la modificación de propiedades y valores de un objeto, y evita que se agreguen propiedades a un objeto o que se eliminen de él.*/

const obj = {
  prop: 42,
};

Object.freeze(obj);

console.log(obj.prop);


