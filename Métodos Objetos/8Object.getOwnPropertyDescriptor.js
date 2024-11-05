/*Método Object.getOwnPropertyDescriptor():

Este método me permite obtener las configuraciones y características de una propiedad específica de un objeto, es decir, si la propiedad es configurable, enumerable y/o modificable (writable), así como el valor actual de la propiedad

Sintaxis: Object.getOwnPropertyDescriptor(obj, prop)
objeto: El objeto del cual deseas obtener la descripción de la propiedad.
propiedad: El nombre de la propiedad de la cual deseas obtener la descripción.
Este método devuelve un objeto con las siguientes propiedades:
value: El valor actual de la propiedad.
writable: Un booleano que indica si la propiedad es modificable (writable).
enumerable: Un booleano que indica si la propiedad es enumerable.
configurable: Un booleano que indica si la propiedad es configurable.*/

const persona = {
  nombre: "Juan",
  edad: 30
};

const descripcionNombre = Object.getOwnPropertyDescriptor(persona, "nombre");
console.log(descripcionNombre);


