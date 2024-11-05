/*Método .localeCompare():

Este método compara dos cadenas en la configuración regional actual y  devuelve el orden de clasificación -1, 1 o 0 (para antes, después o igual)*/

const a = 'réservé'; 
const b = 'RESERVé';

console.log(a.localeCompare(b))
console.log(b.localeCompare(a))
console.log(a.localeCompare(a))

const items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];
items.sort((a, b) => a.localeCompare(b));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']

