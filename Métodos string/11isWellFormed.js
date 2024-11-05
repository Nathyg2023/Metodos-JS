/*Método .isWellFormed():

Se utiliza para determinar si algo está bien formado o estructurado correctamente según alguna especificación o reglas predefinidas
Devuelve un valor booleano que indica si esta cadena contiene sustitutos solitarios, devuelve true si esta cadena no contiene sustitutos solitarios, false de lo contrario.*/

const illFormed = "https://example.com/search?q=\uD800"

try {
    encodeURI(illFormed);
  } catch (e) {
    console.log(e); // URIError: URI malformed
  }
  
  if (illFormed.isWellFormed()) {
    console.log(encodeURI(illFormed));
  } else {
    console.warn("Ill-formed strings encountered."); // Ill-formed strings encountered.
  }


  