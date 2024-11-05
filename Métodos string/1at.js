/*Método .at(): 

En este método debo utilizar numeros enteros ya sean negativos o positivos, si uso los negtivos me va a contar de atrás hacia adelante desde el último caracter de la cadena, si utilizo el entero positivo devolverá los del inicio de la cadena y comienza su indice en 0.

NOTA: en caso de solicitarle una posición del indice que no pueda encontrar devolverá "undefined"*/

const string = (a, num) => {
    return a.at(num)
  }

  console.log(string("rosado", -3))
  console.log(string("patilla, melon, fresa", -1))
  console.log(string("patilla, melon, fresa", 10))
  console.log(string("azul", 1))