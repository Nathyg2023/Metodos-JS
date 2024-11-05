/*Método .codePointAt(): 

Este método es casi igual al charCodeAt, devuelve el valor Unicode, pero este admite caracteres chinos o japoneses, en este caso el charCodeAt no lo mostraría pero fue creado con el objetivo de obtener representaciones Unicode de caracteres que usan dos unidades de 16 bits en lugar de una sola*/

const string = (a) => {
    return a.codePointAt(3)
  }

  console.log(string("rosado"))
  console.log(string("patilla, melon, fresa"))
  console.log(string("azul"))