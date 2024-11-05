/*Método .substring():

Este método extrae caracteres, entre dos índices (posiciones), de una cadena y devuelve la subcadena, extrae caracteres de principio a fin (exclusivo), no cambia la cadena original. Si el inicio es mayor que el final, los argumentos se intercambian: (4, 1) = (1, 4). Los valores iniciales o finales inferiores a 0 se tratan como 0.*/

const anyString = 'Mozilla';

console.log(anyString.substring(0, 1));
console.log(anyString.substring(1, 0));

console.log(anyString.substring(0, 6));

console.log(anyString.substring(4));
console.log(anyString.substring(4, 7));
console.log(anyString.substring(7, 4));

console.log(anyString.substring(0, 7));
console.log(anyString.substring(0, 10));
