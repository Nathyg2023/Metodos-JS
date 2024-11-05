//Devuelve el valor de un número redondeado al entero más cercano

const number = (num) => {
    return Math.round(num)
}

console.log(number(0.9))
console.log(number(5.95))
console.log(number(5.05))
console.log(number(-5.5))
console.log(number(5.5))