/*Método Arrays.fromAsync():

Crea una nueva instancia Array.fromAsync() de copia superficial a partir de un objeto asíncrono iterable , iterable o similar a una matriz*/

const asyncIterable = (async function* () {
    for (let i = 0; i < 5; i++) {
      await new Promise((resolve) => setTimeout(resolve, 10 * i));
      yield i;
    }
  })();
  
  Array.fromAsync(asyncIterable).then((array) => console.log(array));
  // [0, 1, 2, 3, 4]




