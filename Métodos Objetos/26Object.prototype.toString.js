/*Método Object.prototype.toString():

Este método devuelve una cadena que representa este objeto. Este método está destinado a ser anulado por objetos derivados para fines específicos de la configuración regional.*/

function Dog(name) {
    this.name = name;
  }
  
  const dog1 = new Dog('Gabby');
  
  Dog.prototype.toString = function dogToString() {
    return `${this.name}`;
  };
  
  console.log(dog1.toString());
  // Expected output: "Gabby"














































































