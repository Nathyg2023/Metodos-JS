//Devuelve 1 ó -1, indicando el signo del número pasado como argumento.

const number = (num) => {
    return Math.sign(num)
}

console.log(number(3))
console.log(number(-3))
console.log(number(0))
console.log(number("-3"))
