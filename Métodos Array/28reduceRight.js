/*Método .reduceRight:

Este método ejecuta una función reductora para cada elemento de la matriz, funciona de derecha a izquierda, devuelve un único valor: el resultado acumulado de la función, no ejecuta la función para elementos vacíos

Sintaxis: reduceRight(callbackFn, initialValue)*/

const array1 = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];
  
  const result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
  
  console.log(result);














