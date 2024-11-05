//Redondea hacia abajo y devuelve el número entero más grande menor o igual al número que recibo

const number = (num) => {
    return Math.floor(num)
}

console.log(number(5.95))
console.log(number(5.05))
console.log(number(64))
console.log(number(7.004))
console.log(number(-7.004))



