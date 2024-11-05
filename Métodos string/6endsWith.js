/*Método  .endsWith() : 

Este método me ayuda a saber si una cadena termina por el carácter o por la subcadena que le pases como parámetro al método y me devuelve un booleano en caso de ser cierto o false si corresponde*/

const string = (a) => {
    return a.endsWith("años")
}


console.log(string("Hola Nathy, cuántos años tienes"))
console.log(string("Hola"))
console.log(string("Tengo 35 años"))
console.log(string("años"))
  