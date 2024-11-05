/*Método Object.fromEntries():

Este método transforma una lista de pares clave-valor en un objeto.*/

const entries = new Map([['foo', 'bar'],['baz', 42],]);

const obj = Object.fromEntries(entries);

console.log(obj);



const prueba = ([["nombre" , "nathy"], ["edad", 42],])

const ojo = Object.fromEntries(prueba)

console.log(ojo)
