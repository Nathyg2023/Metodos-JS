/*Método .charAt(): 

Este método me devuelve el carácter del índice dado ya que representa la posición dentro de la cadena y si el índice no es válido me devuelve una cadena vacía, por esto NO ADMITE VALORES NEGATIVOS, su índice comienza en 0 */

const string = (a) => {
    return a.charAt(5)
  }

  console.log(string("rosado"))
  console.log(string("patilla, melon, fresa"))
  console.log(string("azul"))

