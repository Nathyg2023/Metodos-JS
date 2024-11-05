/*Método Objeto.prototipo.isPrototypeOf():

Este método comprueba si este objeto existe en la cadena de prototipos de otro objeto*/

function Foo() {}
function Bar() {}

Bar.prototype = Object.create(Foo.prototype);

const bar = new Bar();

console.log(Foo.prototype.isPrototypeOf(bar));
console.log(Bar.prototype.isPrototypeOf(bar));








