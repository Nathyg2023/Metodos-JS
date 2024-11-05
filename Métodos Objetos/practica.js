const prueba = {
    nombre: "nathy",
    edad: 34,
    ciudad: "Santiago",
}

//Desestructuración:
const {ciudad, nombre, edad} = prueba
console.log(ciudad, nombre, edad)

//Agregar una nueva propiedad:
//1:
prueba.apellido = "Gonzalez"
console.log(prueba)
//2: Spread operator(copia, expande)
const result = {...prueba, estatura:1.65}
console.log(result)

//Cambio de valor a una propiedad:
prueba.nombre = "Maria"
console.log(prueba)

//Eliminar una propiedad:
delete prueba.edad
console.log(prueba)

//Recorrer las propiedades de un objeto y que me devuelva los valores de las propiedades:
for(property in prueba){
    console.log(property)
}

for(property in prueba){
    console.log(prueba[property])
}

//Rest: encapsula
const prueba2 = (nombre, ...rest) => {
    console.log(rest)
}

console.log(prueba2("Nathy", 1.65, 34, "Santiago"))

//Verificar si existe una propiedad dentro de un objeto:

console.log(prueba.hasOwnProperty("ciudad")) 
console.log("color" in prueba)
console.log("nombre" in prueba)