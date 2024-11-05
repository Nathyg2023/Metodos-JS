//Devuelve la raiz cuadrada de un número

const calcHypotenuse = (a, b) => {
    return Math.sqrt(a * a + b * b);
  }
  
console.log(calcHypotenuse(3, 4));
console.log(calcHypotenuse(5, 12));
console.log(calcHypotenuse(0, 0));

const prueba = (num) => {
    return Math.sqrt(num)
}

console.log(prueba(2))