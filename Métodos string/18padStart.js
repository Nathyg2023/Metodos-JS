/*Método .padStart():

Este método me ayuda a rellenar una cadena desde el principio o en algunas oportunidades rellena una cadena con otra cadena (varias veces) hasta que alcanza una longitud determinada.*/


const str1 = '5';

console.log(str1.padStart(3, '0'));

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);

let text = "5";
let padded1 = text.padEnd(4,"0");
console.log(padded1)

let text2 = "5";
let padded2 = text2.padEnd(5,"x");
console.log(padded2)


