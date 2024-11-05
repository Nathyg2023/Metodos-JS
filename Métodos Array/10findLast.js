/*Método .findLast():

Este método ejecuta una función para cada elemento de la matriz, devuelve el VALOR del primer elemento que pasa una prueba PERO EN ORDEN INVERSO, devuelve -1 si no se encuentra ninguna coincidencia. Si ningún elemento satisface la función de prueba, undefinedse devuelve.
Sintaxis: findIndex(callbackFn, thisArg)*/

const array1 = [5, 12, 50, 130, 44];

const found = array1.findLast((element) => element > 45);

console.log(found);




