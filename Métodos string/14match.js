/*Método .match():

Este método compara una cadena con una expresión regular, devuelve una matriz con las coincidencias y devuelve nulo si no se encuentra ninguna coincidencia.*/

const text = "The rain in SPAIN stays mainly in the plain"; 

//Usando cadena:
console.log(text.match("ain"))

//Una búsqueda global de "ain":
console.log(text.match(/ain/g))

//Una búsqueda global que no distingue entre mayúsculas y minúsculas:
console.log(text.match(/ain/gi))

//Una búsqueda de "ain" usando una expresión regular:
console.log(text.match(/ain/))

console.log(text.match(/rol/))



