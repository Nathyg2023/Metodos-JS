/*Método Object.create():

Me sirve para crear un nuevo objeto, utilizando un objeto existente como prototipo, heredando propiedades y métodos del otro objeto.

Sintaxis: const nuevoObjeto = Object.create(prototipo);*/

const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // Inherited properties can be overwritten
  me.printIntroduction();

  const personaPrototipo = {
    saludar: function() {
      console.log(`Hola, soy ${this.nombre}`);
    }
  };
  
  const nuevaPersona = Object.create(personaPrototipo);
  nuevaPersona.nombre = "Juan";
  nuevaPersona.saludar();
//--------------------------------------------------------------------------------------------------
  const prueba = {
    nombre: "Nathy",
    email: "nathyyanieris2013@gmail.com",
    edad: 34,
  }

  const datosPrueba = Object.create(prueba)

  console.log(`Mi correo es ${datosPrueba.email} y mi edad ${datosPrueba.edad}}`)