/*Método .fill():

Este método cambia todos los elementos dentro de un rango de índices en una matriz a un valor estático. Devuelve la matriz modificada.*/

const array1 = [1, 2, 3, 4, 5, 6];

console.log(array1.fill(0, 2, 4));-
console.log(array1.fill(5, 1));
console.log(array1.fill(6));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.fill("Kiwi"));

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1.fill("Kiwi", 2, 4));

