/*Método .search():

Este método compara una cadena con una expresión regular, devuelve el índice (posición) de la primera coincidencia. NOTA: devuelve -1 si no se encuentra ninguna coincidencia y distingue entre mayúsculas y minúsculas.En caso de existir varias ocurrencias, el método search devolverá solamente la primera de ellas.*/

const text = "Mr. Blue has a blue house";

console.log(text.search("Blue"));
console.log(text.search("A"))
console.log(text.search("has"))