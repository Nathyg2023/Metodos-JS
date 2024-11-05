/*Método Object.assings():

Este método me permite unir dos o más objetos en uno.
SIntaxis: Object.assign(target, ...sources)
target: objeto de destino(es el que se va a modificar)
sources: son los objetos fuentes. Son los objetos que se van a unir al objeto de destino.
NOTA: Si dos o más objetos tienen propiedades con el mismo nombre, la propiedad del último objeto fuente sobrescribe a la del objeto de destino.
Crear objetos nuevos a partir de objetos existentes, ya sea para extenderlos, clonarlos o modificarlos*/

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
console.log(returnedTarget === target);
console.log(returnedTarget)