//Devuelve una cadena que representa un objeto Numbersegún la precisión especificada.


const precise = (x) => {
    return x.toPrecision(6);
  }

console.log(precise(0.001500000))
console.log(precise(123.456))