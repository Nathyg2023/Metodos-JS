/*Método Object.prototype.valueOf():

Este método me permite obtener el valor primitivo subyacente de un objeto (string, number, boolean, null y undefined)*/

function MyNumberType(n) {
  this.number = n;
}

MyNumberType.prototype.valueOf = function () {
  return this.number;
};

const object1 = new MyNumberType(4);

console.log(object1 + 3);
// Expected output: 7*/
















































































