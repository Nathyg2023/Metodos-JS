//Devuelve el número entero mayor o igual más próximo a el número dado.

const number = (num) => {
    return Math.ceil(num)
}

console.log(number(0.95))
console.log(number(64))
console.log(number(7.004))
console.log(number(-7.004))

