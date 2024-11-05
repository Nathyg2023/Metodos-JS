/*Método .charCodeAt(): 

Este método me devuelve de acuerdo al índice que le indique el valor Unicode, su índice comienza en 0*/

const string = (a) => {
    return a.charCodeAt(1)
  }

  console.log(string("rosado"))
  console.log(string("patilla, melon, fresa"))
  console.log(string("azul"))