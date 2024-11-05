/*Método .at():

Con este método accedo a un elemento de matriz haciendo referencia al número de índice*/

const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);

index = -2;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.at(-1))
console.log(fruits.at(1))
console.log(fruits.at(-4))