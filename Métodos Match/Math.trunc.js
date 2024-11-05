//Devuelve la parte entera de un número eliminando los decimales

const number = (num) => {
    return Math.trunc(num)
}

console.log(number(1.8))
console.log(number(0.12))
console.log(number(1.2))