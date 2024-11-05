/*Método Object.entries():

Este método me permite convertir las propiedades de un objeto en una matriz de pares clave-valor. Cada par se representa como un array de dos elementos: el primero es la clave (nombre de la propiedad) y el segundo es el valor asociado a esa clave en el objeto. Lo puedo utilizar para iterar sobre las propiedades del objeto con un bucle for of, para transformar un objeto en un formato diferente, como un mapa u otro objeto, puedes filtrar o mapear propiedades de un objeto de manera más sencilla, verificación de existencia de propiedades*/

//1.-Iteración de propiedades con bucle for:
const persona1 = {
  nombre: "Juan",
  edad: 30,
  profesion: "Ingeniero"
};

for (const [clave, valor] of Object.entries(persona1)) {
  console.log(`${clave}: ${valor}`);
}

//2.-Transformación de objetos:
const persona2 = {
  nombre: "Juan",
  edad: 30,
  profesion: "Ingeniero"
};

const mapaPersona = new Map(Object.entries(persona2));
console.log(mapaPersona);

//3.-Filtrado y mapeo:
const persona3 = {
  nombre: "Juan",
  edad: 30,
  profesion: "Ingeniero"
};

const propiedadesNumericas = Object.entries(persona3)
  .filter(([clave, valor]) => typeof valor === "number")
  .map(([clave, valor]) => clave);

console.log(propiedadesNumericas);

//4.-Verificación de existencia de propiedades

const persona = {
  nombre: "Juan",
  edad: 30,
  profesion: "Ingeniero"
};

const tieneEdad = Object.entries(persona).some(([clave, valor]) => clave === "edad");

console.log(tieneEdad);