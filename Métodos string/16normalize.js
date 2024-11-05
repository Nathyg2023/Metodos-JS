/*Método .normalize():

se utiliza para normalizar un string Unicode, se transforman los caracteres Unicode que tienen representaciones equivalentes en una única forma canónica. Esto es útil cuando se trabaja con texto en diferentes idiomas o cuando se necesita comparar o igualar cadenas que pueden tener variantes de representación.

El método .normalize() toma un argumento opcional que especifica el formulario de normalización que deseas aplicar a la cadena. Los formularios de normalización más comunes son:"NFC" (Normalización de Composición Canónica)..."NFD" (Normalización de Descomposición Canónica)... "NFKC" (Normalización de Compatibilidad de Composición Canónica)... "NFKD" (Normalización de Compatibilidad de Descomposición Canónica)...*/


const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

console.log(`${name1}, ${name2}`);
console.log(name1 === name2);
console.log(name1.length === name2.length);

const name1NFC = name1.normalize('NFC');
const name2NFC = name2.normalize('NFC');

console.log(`${name1NFC}, ${name2NFC}`);
console.log(name1NFC === name2NFC);
console.log(name1NFC.length === name2NFC.length);



